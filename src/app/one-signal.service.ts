import { Injectable, NgZone } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { AlertController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

// Declare OneSignal as any to avoid TypeScript import errors
// OneSignal cordova plugin is only available at runtime on native devices
declare var OneSignal: any;
// OneSignal Web SDK (loaded via CDN in index.html)
declare var OneSignalDeferred: any;

// Notification types for routing
export type NotificationType = 
  | 'payment_success' 
  | 'payment_failed' 
  | 'ride_confirmed' 
  | 'driver_arrived' 
  | 'ride_started' 
  | 'ride_completed' 
  | 'driver_assigned';

// Notification data interface
export interface NotificationData {
  notificationType?: NotificationType;
  rideId?: string;
  paymentId?: string;
  [key: string]: any;
}

// Backend API interfaces
export interface SendNotificationRequest {
  playerIds: string[];
  title: string;
  message: string;
  data?: any;
}

export interface SendByUserIdRequest {
  externalUserIds: string[];
  title: string;
  message: string;
  data?: any;
}

export interface RideNotificationRequest {
  playerIds?: string[];
  externalUserIds?: string[];
  notificationType: NotificationType;
  rideDetails: any;
}

export interface BroadcastNotificationRequest {
  title: string;
  message: string;
  data?: any;
}

@Injectable({
  providedIn: 'root',
})
export class OnesignalService {
  public playerID: string | null = null;
  public externalUserId: string | null = null;
  private isNative: boolean;
  private isInitialized = false;
  
  // Observable for notification clicks
  private notificationClickSubject = new Subject<NotificationData>();
  public notificationClick$ = this.notificationClickSubject.asObservable();
  
  // Observable for permission status
  private permissionStatusSubject = new BehaviorSubject<boolean>(false);
  public permissionStatus$ = this.permissionStatusSubject.asObservable();

  // Backend API base URL
  private readonly backendUrl = environment.pushNotificationServerUrl || '[YOUR_SERVER_URL]';
  
  // Enable/disable debug popups (set to true to see success/error alerts)
  public showDebugAlerts = true;
  
  constructor(
    private alertCtrl: AlertController, 
    private toastCtrl: ToastController,
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.isNative = Capacitor.isNativePlatform();
  }

  /**
   * Initialize OneSignal for both mobile (native) and web platforms
   */
  async OneSignalInit(): Promise<void> {
    if (this.isInitialized) {
      console.log('OneSignal: Already initialized');
      return;
    }

    try {
      if (this.isNative) {
        await this.initializeNative();
      } else {
        await this.initializeWeb();
      }
      this.isInitialized = true;
    } catch (e) {
      console.error('OneSignal initialization error:', e);
    }
  }

  /**
   * Initialize OneSignal for native platforms (iOS/Android)
   */
  private async initializeNative(): Promise<void> {
    try {
      // Uncomment to set OneSignal device logging to VERBOSE
      // OneSignal.Debug.setLogLevel(6);

      // Initialize OneSignal with App ID
      OneSignal.initialize(environment.onesignal.appId);

      // Get player ID (subscription ID)
      const subscription = await OneSignal.User.pushSubscription.getIdAsync();
      this.playerID = subscription;
      console.log('OneSignal Native Player ID:', this.playerID);

      // Get external ID if set
      this.externalUserId = await OneSignal.User.getExternalId();
      console.log('OneSignal External User ID:', this.externalUserId);

      // Set up notification click listener with routing
      OneSignal.Notifications.addEventListener('click', (event: any) => {
        this.handleNotificationClick(event);
      });

      // Set up permission change listener
      OneSignal.Notifications.addEventListener('permissionChange', (permission: boolean) => {
        this.permissionStatusSubject.next(permission);
        console.log('OneSignal permission changed:', permission);
      });

      // Check current permission status
      const hasPermission = await OneSignal.Notifications.getPermissionAsync();
      this.permissionStatusSubject.next(hasPermission);

      console.log('OneSignal Native initialized successfully');
    } catch (e) {
      console.error('OneSignal Native initialization error:', e);
      throw e;
    }
  }

  /**
   * Initialize OneSignal for web platform
   */
  private async initializeWeb(): Promise<void> {
    try {
      // Check if OneSignal Web SDK is available
      if (typeof OneSignalDeferred === 'undefined') {
        console.warn('OneSignal Web SDK not loaded. Make sure to include the script in index.html');
        return;
      }

      OneSignalDeferred.push(async (OneSignalSDK: any) => {
        await OneSignalSDK.init({
          appId: environment.onesignal.appId,
          allowLocalhostAsSecureOrigin: true, // For development
          notifyButton: {
            enable: true, // Show the notification bell
          },
          serviceWorkerParam: { scope: '/' },
          serviceWorkerPath: '/OneSignalSDKWorker.js',
        });

        // Get player ID (subscription ID)
        const subscription = await OneSignalSDK.User.PushSubscription.id;
        this.playerID = subscription || null;
        console.log('OneSignal Web Player ID:', this.playerID);

        // Set up notification click listener
        OneSignalSDK.Notifications.addEventListener('click', (event: any) => {
          this.handleNotificationClick(event);
        });

        // Set up permission change listener
        OneSignalSDK.Notifications.addEventListener('permissionChange', (permission: boolean) => {
          this.ngZone.run(() => {
            this.permissionStatusSubject.next(permission);
          });
        });

        // Check current permission status
        const permission = await OneSignalSDK.Notifications.permission;
        this.permissionStatusSubject.next(permission);

        console.log('OneSignal Web initialized successfully');
      });
    } catch (e) {
      console.error('OneSignal Web initialization error:', e);
      throw e;
    }
  }

  /**
   * Handle notification click events and route based on notification type
   */
  private handleNotificationClick(event: any): void {
    console.log('Notification clicked:', event);
    
    const notificationData: NotificationData = event?.notification?.additionalData || 
                                                event?.result?.notification?.additionalData || 
                                                event?.data || 
                                                {};
    
    this.ngZone.run(() => {
      // Emit the notification data for subscribers
      this.notificationClickSubject.next(notificationData);
      
      // Route based on notification type
      this.routeByNotificationType(notificationData);
    });
  }

  /**
   * Route to appropriate page based on notification type
   */
  private routeByNotificationType(data: NotificationData): void {
    const notificationType = data.notificationType;
    
    switch (notificationType) {
      case 'payment_success':
      case 'payment_failed':
        // Navigate to payment page with payment details
        this.router.navigate(['/payment'], { 
          queryParams: { 
            paymentId: data.paymentId,
            status: notificationType === 'payment_success' ? 'success' : 'failed'
          }
        });
        break;
        
      case 'ride_confirmed':
      case 'driver_assigned':
      case 'driver_arrived':
      case 'ride_started':
        // Navigate to home page with ride details (active ride view)
        this.router.navigate(['/home'], { 
          queryParams: { 
            rideId: data.rideId,
            status: notificationType
          }
        });
        break;
        
      case 'ride_completed':
        // Navigate to rating page or trip summary
        if (data.rideId) {
          this.router.navigate(['/rating'], { 
            queryParams: { rideId: data.rideId }
          });
        } else {
          this.router.navigate(['/history']);
        }
        break;
        
      default:
        // Default to home page
        console.log('Unknown notification type, navigating to home');
        this.router.navigate(['/home']);
        break;
    }
  }

  /**
   * Request notification permission
   */
  async requestPermission(): Promise<boolean> {
    try {
      if (this.isNative) {
        return await this.requestNativePermission();
      } else {
        return await this.requestWebPermission();
      }
    } catch (e) {
      console.error('Error requesting permission:', e);
      return false;
    }
  }

  private async requestNativePermission(): Promise<boolean> {
    try {
      const canRequest = await OneSignal.Notifications.canRequestPermission();
      if (canRequest) {
        const accepted = await OneSignal.Notifications.requestPermission(true);
        console.log('User accepted notifications:', accepted);
        return accepted;
      } else {
        console.log('Cannot request permission');
        return false;
      }
    } catch (e) {
      console.error('Native permission request error:', e);
      throw e;
    }
  }

  private async requestWebPermission(): Promise<boolean> {
    return new Promise((resolve) => {
      if (typeof OneSignalDeferred === 'undefined') {
        resolve(false);
        return;
      }
      
      OneSignalDeferred.push(async (OneSignalSDK: any) => {
        try {
          await OneSignalSDK.Notifications.requestPermission();
          const permission = await OneSignalSDK.Notifications.permission;
          resolve(permission);
        } catch (e) {
          console.error('Web permission request error:', e);
          resolve(false);
        }
      });
    });
  }

  // iOS-specific permission handling
  async OneSignalIOSPermission(): Promise<void> {
    if (!this.isNative) return;
    
    try {
      if (Capacitor.getPlatform() === 'ios') {
        const ios_permission = await OneSignal.Notifications.permissionNative();
        // OSNotificationPermission.Authorized = 2
        if (ios_permission !== 2) {
          this.OneSignalPermission();
        } else {
          this.requestPermission();
        }
      } else {
        // For Android
        this.OneSignalPermission();
      }
    } catch (e) {
      console.log(e);
    }
  }

  // Call this function when your app starts
  async OneSignalPermission(msg: string = ''): Promise<void> {
    if (!this.isNative) {
      // For web, directly request permission
      await this.requestWebPermission();
      return;
    }
    
    try {
      const hasPermission = await OneSignal.Notifications.getPermissionAsync();
      console.log('hasPermission:', hasPermission);
      if (!hasPermission) {
        // Show prompt
        this.showAlert(msg);
      }
    } catch (e) {
      throw e;
    }
  }

  showAlert(msg: string): void {
    this.alertCtrl
      .create({
        header: `Allow Push Notifications${msg}`,
        message:
          'Please allow us to send you notifications to get latest offers and order updates...',
        buttons: [
          {
            text: "Don't Allow",
            role: 'cancel',
            handler: () => {
              console.log('Confirm Cancel');
              this.OneSignalPermission(" (It's mandatory)");
            },
          },
          {
            text: 'Allow',
            handler: () => {
              this.requestPermission();
            },
          },
        ],
      })
      .then((alertEl) => alertEl.present());
  }

  /**
   * Set external user ID for logged-in user
   * Call this after user logs in
   */
  async setExternalUserId(userId: string): Promise<void> {
    if (!userId) {
      console.warn('Cannot set empty external user ID');
      return;
    }

    try {
      if (this.isNative) {
        await OneSignal.login(userId);
        this.externalUserId = userId;
        console.log('OneSignal external user ID set (native):', userId);
      } else {
        if (typeof OneSignalDeferred !== 'undefined') {
          OneSignalDeferred.push(async (OneSignalSDK: any) => {
            await OneSignalSDK.login(userId);
            this.externalUserId = userId;
            console.log('OneSignal external user ID set (web):', userId);
          });
        }
      }
    } catch (e) {
      console.error('Error setting external user ID:', e);
    }
  }

  /**
   * Remove external user ID on logout
   * Call this when user logs out
   */
  async removeExternalUserId(): Promise<void> {
    try {
      if (this.isNative) {
        await OneSignal.logout();
        this.externalUserId = null;
        console.log('OneSignal external user ID removed (native)');
      } else {
        if (typeof OneSignalDeferred !== 'undefined') {
          OneSignalDeferred.push(async (OneSignalSDK: any) => {
            await OneSignalSDK.logout();
            this.externalUserId = null;
            console.log('OneSignal external user ID removed (web)');
          });
        }
      }
    } catch (e) {
      console.error('Error removing external user ID:', e);
    }
  }

  /**
   * Get current player ID (subscription ID)
   */
  async getPlayerId(): Promise<string | null> {
    if (this.playerID) return this.playerID;

    try {
      if (this.isNative) {
        const subscription = await OneSignal.User.pushSubscription.getIdAsync();
        this.playerID = subscription;
      } else if (typeof OneSignalDeferred !== 'undefined') {
        return new Promise((resolve) => {
          OneSignalDeferred.push(async (OneSignalSDK: any) => {
            const id = await OneSignalSDK.User.PushSubscription.id;
            this.playerID = id || null;
            resolve(this.playerID);
          });
        });
      }
      return this.playerID;
    } catch (e) {
      console.error('Error getting player ID:', e);
      return null;
    }
  }

  // ==========================================
  // Backend API Methods
  // ==========================================

  private getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
  }

  /**
   * Test method to verify alerts are working on all platforms
   * Call this from any component to test: this.oneSignalService.testPushNotificationAlerts()
   */
  async testPushNotificationAlerts(): Promise<void> {
    console.log('🧪 Testing push notification alerts...');
    
    // Request browser notification permission first (for web)
    if (!this.isNative) {
      await this.requestBrowserNotificationPermission();
    }
    
    // Test success notification
    await this.showSuccessToast('Test Success Alert', {
      platform: this.isNative ? 'Native (iOS/Android)' : 'Web',
      timestamp: new Date().toISOString(),
      message: 'This is a test success notification'
    });
    
    // After 2 seconds, test error notification
    setTimeout(async () => {
      await this.showErrorToast('Test Error Alert', {
        status: 500,
        statusText: 'Test Error',
        message: 'This is a test error notification',
        details: 'If you can see this, error alerts are working!'
      });
    }, 2000);
  }

  /**
   * Request browser notification permission
   */
  private async requestBrowserNotificationPermission(): Promise<boolean> {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      console.log('Browser notifications not supported');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }

    return false;
  }

  /**
   * Show a browser notification (Chrome/Firefox/Safari)
   */
  private showBrowserNotification(title: string, body: string, type: 'success' | 'error'): void {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      console.log('Browser notifications not supported');
      return;
    }

    if (Notification.permission === 'granted') {
      const icon = type === 'success' 
        ? 'https://cdn-icons-png.flaticon.com/512/190/190411.png'  // Green checkmark
        : 'https://cdn-icons-png.flaticon.com/512/753/753345.png'; // Red X
      
      const notification = new Notification(title, {
        body: body,
        icon: icon,
        badge: icon,
        tag: `push-notification-${Date.now()}`,
        requireInteraction: true, // Keep notification until user interacts
        silent: false
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      // Auto close after 10 seconds
      setTimeout(() => notification.close(), 10000);
    } else {
      console.log('Browser notification permission not granted');
    }
  }

  /**
   * Show success toast notification
   */
  private async showSuccessToast(message: string, details?: any): Promise<void> {
    console.log('✅ Push Notification Success:', message, details);
    
    if (this.showDebugAlerts) {
      // Show browser notification on web
      if (!this.isNative) {
        this.showBrowserNotification(
          '✅ Push Notification Success',
          message,
          'success'
        );
      }

      // Also show Ionic toast for in-app visibility
      this.ngZone.run(async () => {
        try {
          const toast = await this.toastCtrl.create({
            message: `✅ ${message}`,
            duration: 5000,
            position: 'top',
            color: 'success',
            buttons: [
              {
                text: 'Details',
                handler: () => {
                  this.showDetailedAlert('Push Notification Success', message, details);
                }
              },
              {
                text: 'OK',
                role: 'cancel'
              }
            ]
          });
          await toast.present();
        } catch (e) {
          console.error('Error showing success toast:', e);
          // Fallback to browser alert
          alert(`✅ ${message}\n\nDetails: ${JSON.stringify(details, null, 2)}`);
        }
      });
    }
  }

  /**
   * Show error toast notification
   */
  private async showErrorToast(message: string, error: any): Promise<void> {
    const errorDetails = this.formatErrorDetails(error);
    console.error('❌ Push Notification Error:', message, errorDetails);
    
    if (this.showDebugAlerts) {
      // Show browser notification on web
      if (!this.isNative) {
        const errorSummary = typeof errorDetails === 'object' 
          ? (errorDetails.message || errorDetails.statusText || JSON.stringify(errorDetails).substring(0, 100))
          : String(errorDetails).substring(0, 100);
        
        this.showBrowserNotification(
          '❌ Push Notification Error',
          `${message}: ${errorSummary}`,
          'error'
        );
      }

      // Also show Ionic toast for in-app visibility
      this.ngZone.run(async () => {
        try {
          const toast = await this.toastCtrl.create({
            message: `❌ ${message}`,
            duration: 8000,
            position: 'top',
            color: 'danger',
            buttons: [
              {
                text: 'View Error',
                handler: () => {
                  this.showDetailedAlert('Push Notification Error', message, errorDetails);
                }
              },
              {
                text: 'OK',
                role: 'cancel'
              }
            ]
          });
          await toast.present();
        } catch (e) {
          console.error('Error showing error toast:', e);
          // Fallback to browser alert
          alert(`❌ ${message}\n\nError: ${JSON.stringify(errorDetails, null, 2)}`);
        }
      });
    }
  }

  /**
   * Show detailed alert with full error/success information
   */
  private async showDetailedAlert(header: string, message: string, details: any): Promise<void> {
    const detailsString = typeof details === 'string' 
      ? details 
      : JSON.stringify(details, null, 2);
    
    // Wrap in NgZone to ensure UI updates work on web
    this.ngZone.run(async () => {
      try {
        const alert = await this.alertCtrl.create({
          header: header,
          subHeader: message,
          message: `<pre style="white-space: pre-wrap; word-wrap: break-word; font-size: 12px; max-height: 300px; overflow-y: auto;">${detailsString}</pre>`,
          buttons: [
            {
              text: 'Copy to Console',
              handler: () => {
                console.log('=== PUSH NOTIFICATION DETAILS ===');
                console.log('Header:', header);
                console.log('Message:', message);
                console.log('Details:', details);
                console.log('=================================');
              }
            },
            {
              text: 'OK',
              role: 'cancel'
            }
          ],
          cssClass: 'push-notification-alert'
        });
        await alert.present();
      } catch (e) {
        console.error('Error showing detailed alert:', e);
        // Fallback to browser alert
        alert(`${header}\n${message}\n\n${detailsString}`);
      }
    });
  }

  /**
   * Format error details for display
   */
  private formatErrorDetails(error: any): any {
    if (error instanceof HttpErrorResponse) {
      return {
        status: error.status,
        statusText: error.statusText,
        url: error.url,
        message: error.message,
        error: error.error,
        headers: error.headers?.keys()?.reduce((acc: any, key: string) => {
          acc[key] = error.headers.get(key);
          return acc;
        }, {})
      };
    }
    
    if (error instanceof Error) {
      return {
        name: error.name,
        message: error.message,
        stack: error.stack
      };
    }
    
    return error;
  }

  /**
   * Send notification to specific player IDs via backend
   * POST /push/send
   */
  sendToPlayerIds(request: SendNotificationRequest): Observable<any> {
    console.log('📤 Sending notification to player IDs:', request);
    
    return this.http.post<any>(
      `${this.backendUrl}/push/send`,
      request,
      { headers: this.getHeaders() }
    ).pipe(
      tap((response) => {
        this.showSuccessToast('Notification sent to player IDs', {
          request: request,
          response: response
        });
      }),
      catchError((error) => {
        this.showErrorToast('Failed to send notification to player IDs', error);
        return of({ success: false, error: this.formatErrorDetails(error) });
      })
    );
  }

  /**
   * Send notification by external user IDs via backend
   * POST /push/send-by-user-id
   */
  sendByUserIds(request: SendByUserIdRequest): Observable<any> {
    console.log('📤 Sending notification by user IDs:', request);
    
    return this.http.post<any>(
      `${this.backendUrl}/push/send-by-user-id`,
      request,
      { headers: this.getHeaders() }
    ).pipe(
      tap((response) => {
        this.showSuccessToast('Notification sent by user IDs', {
          request: request,
          response: response
        });
      }),
      catchError((error) => {
        this.showErrorToast('Failed to send notification by user IDs', error);
        return of({ success: false, error: this.formatErrorDetails(error) });
      })
    );
  }

  /**
   * Send ride notification via backend
   * POST /push/ride-notification
   */
  sendRideNotification(request: RideNotificationRequest): Observable<any> {
    console.log('📤 Sending ride notification:', request);
    
    return this.http.post<any>(
      `${this.backendUrl}/push/ride-notification`,
      request,
      { headers: this.getHeaders() }
    ).pipe(
      tap((response) => {
        this.showSuccessToast(`Ride notification sent (${request.notificationType})`, {
          request: request,
          response: response
        });
      }),
      catchError((error) => {
        this.showErrorToast(`Failed to send ride notification (${request.notificationType})`, error);
        return of({ success: false, error: this.formatErrorDetails(error) });
      })
    );
  }

  /**
   * Broadcast notification to all users via backend
   * POST /push/send-to-all
   */
  sendToAll(request: BroadcastNotificationRequest): Observable<any> {
    console.log('📤 Broadcasting notification to all:', request);
    
    return this.http.post<any>(
      `${this.backendUrl}/push/send-to-all`,
      request,
      { headers: this.getHeaders() }
    ).pipe(
      tap((response) => {
        this.showSuccessToast('Notification broadcast to all users', {
          request: request,
          response: response
        });
      }),
      catchError((error) => {
        this.showErrorToast('Failed to broadcast notification', error);
        return of({ success: false, error: this.formatErrorDetails(error) });
      })
    );
  }

  // ==========================================
  // Legacy direct OneSignal API method (kept for backward compatibility)
  // ==========================================

  sendNotification(msg: string, title: string, data: any = null, external_id?: any): Observable<any> {
    console.log('📤 Sending notification via OneSignal API:', { title, msg, data, external_id });
    
    let body: any = {
      app_id: environment.onesignal.appId,
      name: 'notification',
      target_channel: "push",
      headings: { en: title },
      contents: { en: msg },
      android_channel_id: environment.onesignal.android_channel_id,
      small_icon: 'mipmap/ic_notification',
      large_icon: 'mipmap/ic_notification_large',
      ios_sound: 'sound.wav',
      data: data,
    };

    if (external_id) {
      // Specific device or devices
      body = {
        ...body,
        include_aliases: {
          external_id: Array.isArray(external_id) ? external_id : [external_id]
        },
      };
    } else {
      body = {
        ...body,
        included_segments: ['Active Subscriptions', 'Total Subscriptions'],
      };
    }

    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Basic ${environment.onesignal.restApiKey}`);
      
    return this.http.post<any>(
      'https://onesignal.com/api/v1/notifications',
      body,
      { headers: headers }
    ).pipe(
      tap((response) => {
        this.showSuccessToast('Notification sent via OneSignal API', {
          title: title,
          message: msg,
          external_id: external_id,
          response: response
        });
      }),
      catchError((error) => {
        this.showErrorToast('Failed to send notification via OneSignal API', error);
        return of({ success: false, error: this.formatErrorDetails(error) });
      })
    );
  }

  // ==========================================
  // Utility Methods
  // ==========================================

  /**
   * Enable or disable debug alert popups
   */
  setDebugAlerts(enabled: boolean): void {
    this.showDebugAlerts = enabled;
    console.log(`Push notification debug alerts ${enabled ? 'enabled' : 'disabled'}`);
  }

  /**
   * Check if OneSignal is initialized
   */
  isOneSignalInitialized(): boolean {
    return this.isInitialized;
  }

  /**
   * Check if running on native platform
   */
  isNativePlatform(): boolean {
    return this.isNative;
  }

  /**
   * Get current permission status
   */
  async getPermissionStatus(): Promise<boolean> {
    try {
      if (this.isNative) {
        return await OneSignal.Notifications.getPermissionAsync();
      } else if (typeof OneSignalDeferred !== 'undefined') {
        return new Promise((resolve) => {
          OneSignalDeferred.push(async (OneSignalSDK: any) => {
            const permission = await OneSignalSDK.Notifications.permission;
            resolve(permission);
          });
        });
      }
      return false;
    } catch (e) {
      console.error('Error getting permission status:', e);
      return false;
    }
  }
}