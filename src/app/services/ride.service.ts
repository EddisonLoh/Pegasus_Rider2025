import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LatLng } from '../interfaces/route-graph';

export interface WeightConfig {
  distance?: number;
  time?: number;
  traffic?: number;
}

export interface RouteResponse {
  polyline: string;
  distance: number;
  duration: number;
  instructions?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class RideService {
  private routeApiUrl = 'https://asia-southeast1-dijkstra-routing-demo-se-f3d91.cloudfunctions.net/computeRoute';

  constructor(private http: HttpClient) {}

  getRoute(
    start: LatLng,
    end: LatLng,
    weightConfig?: WeightConfig,
    timeout?: number
  ): Observable<RouteResponse> {
    const body: any = {
      start,
      end,
      ...(weightConfig && { weightConfig }),
      ...(timeout && { timeout })
    };

    return this.http.post<RouteResponse>(this.routeApiUrl, body).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Route API error:', error);
    return throwError(() => error);
  }
}
