(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 40671:
/*!************************************************!*\
  !*** ./src/app/add-card/add-card.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCardComponent": () => (/* binding */ AddCardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/payment.service */ 51863);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/avatar.service */ 25083);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);









const _c0 = ["cardElement"];
class AddCardComponent {
  constructor(fb, alertController, loadingController, paymentService, avatarService, modalController, navController) {
    this.fb = fb;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.paymentService = paymentService;
    this.avatarService = avatarService;
    this.modalController = modalController;
    this.navController = navController;
    this.isCardComplete = false;
    this.cardInitialized = false;
    this.paymentForm = this.fb.group({
      provider: ['stripe', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      cardId: [''],
      authCode: ['']
    });
  }

  ngOnInit() {// Initialize the form or any other needed data
  }

  ngAfterViewInit() {
    this.initializeStripeCard();
  }

  initializeStripeCard() {
    if (this.cardElement && this.cardElement.nativeElement) {
      this.stripe = Stripe('pk_test_51SShK5PRgzt7CIyewdombVyUyoBjYRQGrw8uBfWOF58l49mTcKZzWoeeyeBrjcsLT8NzCDKKjbwZQfDnNnpFzoxn00ivj0cGEe');
      this.elements = this.stripe.elements();

      if (!this.card) {
        this.card = this.elements.create('card');
        this.card.mount(this.cardElement.nativeElement);
        this.card.on('change', event => {
          this.isCardComplete = event.complete;
        });
      }

      this.cardInitialized = true;
    }
  }

  processPayment() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.paymentForm.valid) {
        const formValues = _this.paymentForm.value;
        formValues.email = _this.avatarService.user.email; // Use email from avatarService

        _this.showLoading();

        try {
          const cardData = yield _this.processStripePayment(formValues);
          yield _this.modalController.dismiss({
            success: true,
            cardData
          });
        } catch (error) {
          const errorMessage = error.message || (error.error ? error.error.error : 'An unexpected error occurred.');
          yield _this.showAlert('Error', errorMessage);
        } finally {
          _this.hideLoading();
        }
      } else {
        _this.showAlert('Form Error', 'Please fill out all required fields.');
      }
    })();
  }

  processStripePayment(formValues) {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Starting processStripePayment with formValues:', formValues);

      try {
        const setupIntentResponse = yield _this2.paymentService.createSetupIntent(formValues.email).toPromise();
        console.log('Setup Intent raw response:', setupIntentResponse);
        const resp = setupIntentResponse;
        const clientSecret = resp && (resp.client_secret || resp.clientSecret || resp.clientSecretValue || resp.secret);
        console.log('Resolved clientSecret:', clientSecret);

        if (!clientSecret) {
          throw new Error('No client_secret returned from server for SetupIntent.');
        }

        if (String(clientSecret).startsWith('seti_') && !String(clientSecret).includes('_secret_')) {
          throw new Error('Invalid client_secret returned from server (looks like an ID). Ensure server returns the full client_secret.');
        }

        const {
          setupIntent,
          error
        } = yield _this2.stripe.confirmCardSetup(clientSecret, {
          payment_method: {
            card: _this2.card,
            billing_details: {
              email: formValues.email
            }
          }
        });

        if (error) {
          console.error('Stripe confirmCardSetup returned error object:', error);
          throw new Error(error.message);
        }

        console.log('Card setup confirmed:', setupIntent);
        const paymentMethodId = setupIntent.payment_method; // Fetch the payment method details from your server (which will call Stripe)

        const paymentMethod = yield _this2.paymentService.retrievePaymentMethod(paymentMethodId).toPromise();
        console.log('Payment method retrieved:', paymentMethod);
        const cardDetails = paymentMethod.card;
        const last4 = cardDetails.last4;
        const brand = cardDetails.brand; // Get card brand (visa, mastercard, etc.)

        console.log('Checking if card exists with email:', formValues.email, ' and last4:', last4);
        const cardExists = yield _this2.avatarService.checkCardExistsStripe(formValues.email, last4);

        if (cardExists) {
          throw new Error('This card is already saved to your account.');
        } // Save card to Firestore using the correct method


        const cardData = {
          cardId: paymentMethodId,
          email: formValues.email,
          last4: last4,
          brand: brand || 'unknown'
        };
        yield _this2.avatarService.saveCard(cardData);
        console.log('Card saved to Firestore:', cardData); // Also save to backend if needed

        yield _this2.paymentService.savePaymentMethod(formValues.email, paymentMethodId).toPromise();
        return cardData;
      } catch (error) {
        console.error('Error in processStripePayment:', error);
        throw error;
      }
    })();
  }

  showLoading() {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loading = yield _this3.loadingController.create({
        message: 'Processing payment...'
      });
      yield _this3.loading.present();
    })();
  }

  hideLoading() {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.loading) {
        yield _this4.loading.dismiss();
      }
    })();
  }

  showAlert(header, message) {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  closeModal() {
    this.modalController.dismiss();
  }

}

AddCardComponent.ɵfac = function AddCardComponent_Factory(t) {
  return new (t || AddCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_1__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController));
};

AddCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AddCardComponent,
  selectors: [["app-add-card"]],
  viewQuery: function AddCardComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.cardElement = _t.first);
    }
  },
  decls: 25,
  vars: 12,
  consts: [[1, "ion-no-border", 3, "translucent"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close-outline", "color", "primary"], [1, "ion-padding"], [1, "add-card-section"], [1, "section-header"], ["name", "card", "color", "primary"], [1, "card-form-container"], [3, "formGroup", "ngSubmit"], [1, "stripe-container"], [1, "stripe-element"], ["cardElement", ""], ["id", "card-errors", "role", "alert", 1, "card-errors"], ["color", "primary", "shape", "round", "expand", "block", "size", "large", "type", "submit", 1, "add-card-btn", 3, "disabled"], ["slot", "start", "name", "add-circle-outline"]],
  template: function AddCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddCardComponent_Template_ion_button_click_3_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-content", 4)(9, "div", 5)(10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "form", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AddCardComponent_Template_form_ngSubmit_16_listener() {
        return ctx.processPayment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "div", 11, 12)(20, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "ion-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 6, "PAYMENT.ADD_NEW_CARD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 8, "PAYMENT.ADD_NEW_CARD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.paymentForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.paymentForm.valid || !ctx.isCardComplete);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 10, "PAYMENT.ADD_CARD"), " ");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth-guard */ 83200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const redirectUnauthorizedToLogin = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectUnauthorizedTo)(['login']);
const redirectLoggedInToHome = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectLoggedInTo)(['home']);
const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then((m) => m.LoginPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectLoggedInToHome),
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomePageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin),
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 88558)).then((m) => m.ProfilePageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin),
    },
    {
        path: 'history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_history_history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/history/history.module */ 10608)).then((m) => m.HistoryPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin),
    },
    {
        path: 'details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js"), __webpack_require__.e("src_app_pages_details_details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/details/details.module */ 30557)).then((m) => m.DetailsPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin),
    },
    {
        path: 'payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment_payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/payment.module */ 64923)).then((m) => m.PaymentPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'support',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/support/support.module */ 82602)).then((m) => m.SupportPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 18114)).then((m) => m.AboutPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'promotion',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_promotion_promotion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/promotion/promotion.module */ 62145)).then((m) => m.PromotionPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'rating',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rating_rating_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rating/rating.module */ 34176)).then((m) => m.RatingPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'network',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_network_network_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/network/network.module */ 17846)).then((m) => m.NetworkPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'paymentcallback',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paymentcallback_paymentcallback_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paymentcallback/paymentcallback.module */ 70848)).then(m => m.PaymentcallbackPageModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/status-bar */ 19326);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/avatar.service */ 25083);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _one_signal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./one-signal.service */ 8126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);















function AppComponent_ion_menu_2_ion_avatar_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.user.photoURL);
  }
}

function AppComponent_ion_menu_2_ion_avatar_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AppComponent_ion_menu_2_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item")(1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-skeleton-text", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-label", 7)(4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-skeleton-text", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-skeleton-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("animated", true);
  }
}

function AppComponent_ion_menu_2_ion_menu_toggle_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-menu-toggle", 14)(1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_ion_menu_2_ion_menu_toggle_14_Template_ion_item_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const p_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.gotoPage(p_r5.url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ios", p_r5.icon)("md", p_r5.icon)("color", p_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, p_r5.title));
  }
}

function AppComponent_ion_menu_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-menu", 3)(1, "ion-content")(2, "ion-list", 4)(3, "ion-menu-toggle")(4, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_ion_menu_2_Template_ion_item_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.gotoProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AppComponent_ion_menu_2_ion_avatar_5_Template, 2, 1, "ion-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AppComponent_ion_menu_2_ion_avatar_6_Template, 2, 0, "ion-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-label", 7)(8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AppComponent_ion_menu_2_ion_item_12_Template, 8, 3, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AppComponent_ion_menu_2_ion_menu_toggle_14_Template, 6, 6, "ion-menu-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.user.photoURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.user.photoURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.user.displayName || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.user.phoneNumber || "987654687976");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.appPages);
  }
}

class AppComponent {
  constructor(platform, ngZone, avatar, auth, nav, router, translate, oneSignalService) {
    this.platform = platform;
    this.ngZone = ngZone;
    this.avatar = avatar;
    this.auth = auth;
    this.nav = nav;
    this.router = router;
    this.translate = translate;
    this.oneSignalService = oneSignalService;
    this.loading = true;
    this.appPages = [{
      title: 'MENU.HISTORY',
      url: '/history',
      icon: 'time',
      color: 'primary'
    }, {
      title: 'MENU.PAYMENT',
      url: '/payment',
      icon: 'card',
      color: 'primary'
    }, {
      title: 'MENU.PROMOTION',
      url: '/promotion',
      icon: 'gift',
      color: 'primary'
    }, {
      title: 'MENU.SUPPORT',
      url: '/support',
      icon: 'chatbubbles',
      color: 'primary'
    }, {
      title: 'MENU.ABOUT',
      url: '/about',
      icon: 'information-circle',
      color: 'primary'
    }]; // Set default language immediately (synchronously) to prevent placeholder display

    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.currentLanguage = 'en';
    this.initializeApp();
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
        console.log('Navigation ended:', event);
      }
    });
  }

  initializeApp() {
    // Load user's saved language preference (if different from default)
    this.initializeTranslation();
    this.initialize();
    this.initializeOneSignal();
  }
  /**
   * Initialize OneSignal push notifications for web, iOS, and Android
   */


  initializeOneSignal() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Initialize OneSignal (works for both web and native)
        yield _this.oneSignalService.OneSignalInit(); // Request permission after initialization

        yield _this.oneSignalService.requestPermission(); // Subscribe to notification clicks for custom handling

        _this.oneSignalService.notificationClick$.subscribe(data => {
          console.log('Notification clicked in app component:', data); // Custom handling can be added here if needed
          // The service already handles routing based on notification type
        });

        console.log('OneSignal initialized successfully');
      } catch (error) {
        console.error('Error initializing OneSignal:', error);
      }
    })();
  }

  initialize() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.platform.ready().then( /*#__PURE__*/function () {
        var _ref = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (readySource) {
          _this2.source = readySource;

          _this2.auth.onAuthStateChanged( /*#__PURE__*/function () {
            var _ref2 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
              _this2.user = user;
              console.log('Auth state changed:', user);

              if (user) {
                // User is signed in
                console.log('User is signed in:', user); // Set OneSignal external user ID for targeted notifications

                yield _this2.oneSignalService.setExternalUserId(user.uid);
              } else {
                // User is signed out
                console.log('User is signed out'); // Remove OneSignal external user ID on logout

                yield _this2.oneSignalService.removeExternalUserId();
              }

              if (readySource != 'dom') {
                yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setBackgroundColor({
                  color: '#3880ff'
                });
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setStyle({
                  style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.Style.Light
                });
              }

              yield _this2.LoadSplash();
              _this2.loading = false;
            });

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  LoadSplash() {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__.SplashScreen.show();
      if (_this3.source != 'dom') yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }

  gotoProfile() {
    this.nav.navigateForward('profile');
  }

  gotoPage(p) {
    this.nav.navigateForward(p);
  }

  initializeTranslation() {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          value
        } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
          key: 'user-lang'
        });

        if (value && value !== _this4.currentLanguage) {
          _this4.translate.use(value);

          _this4.currentLanguage = value;
        }
      } catch (error) {
        console.error('Error loading language preference:', error); // Default language already set in constructor
      }
    })();
  }

  changeLanguage(lang) {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.currentLanguage = lang;

      _this5.translate.use(lang);

      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
        key: 'user-lang',
        value: lang
      });
    })();
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_one_signal_service__WEBPACK_IMPORTED_MODULE_5__.OnesignalService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 1,
  consts: [["contentId", "main-content"], ["contentId", "main-content", "type", "overlay", 4, "ngIf"], ["id", "main-content"], ["contentId", "main-content", "type", "overlay"], ["id", "inbox-list", "lines", "none"], [3, "click"], [4, "ngIf"], [1, "ion-margin"], ["auto-hide", "false", 4, "ngFor", "ngForOf"], [3, "src"], ["src", "../assets/icon/favicon.png"], [3, "animated"], [2, "width", "100px", 3, "animated"], [2, "width", "80px", 3, "animated"], ["auto-hide", "false"], ["lines", "none", "detail", "false", "routerLinkActive", "selected", 1, "allItems", 3, "click"], ["slot", "start", 3, "ios", "md", "color"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-app")(1, "ion-split-pane", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AppComponent_ion_menu_2_Template, 15, 6, "ion-menu", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-router-outlet", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.user);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  min-height: 70px;\n  margin-bottom: 16px;\n}\n\n.allItems[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 19px;\n}\n\n.allItems[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 90px;\n  color: #757575;\n  min-height: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #616e7e;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-note[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJFQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsMkRBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDQyxlQUFBO0VBQ0EsZUFBQTtBQUNIOztBQUFHO0VBQ0MsZUFBQTtBQUVKOztBQUVFO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLRTtFQUNFLHNEQUFBO0FBRko7O0FBS0U7RUFDRSwrQkFBQTtBQUZKOztBQUtFO0VBQ0UsY0FBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFLRTtFQUNFLHNCQUFBO0FBRko7O0FBS0U7RUFDRSxtQkFBQTtBQUZKOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0U7RUFDRSwrQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0FBRko7O0FBS0U7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtFO0VBQ0Usa0JBQUE7QUFGSjs7QUFLRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FBSEo7O0FBTUU7RUFDRSxpQ0FBQTtBQUhKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcblxyXG4gIC5hbGxJdGVtc3tcclxuICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICBmb250LXNpemU6IDE5cHg7XHJcbiAgIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzYxNmU3ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM3Mzg0OWE7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbm90ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgXHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9Il19 */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/app */ 89674);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ 16818);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/storage */ 42111);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./otp/otp.component */ 3096);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-otp-input */ 79306);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 47614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country-search-modal/country-search-modal.component */ 9568);
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-card/add-card.component */ 40671);
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ 75860);
/* harmony import */ var _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enroute-chat/enroute-chat.component */ 45635);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ 58319);
/* harmony import */ var _trip_summary_trip_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trip-summary/trip-summary.component */ 94948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);































// AoT requires an exported function for factories
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy }, firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider, firebase_auth__WEBPACK_IMPORTED_MODULE_3__.FacebookAuthProvider, _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_5__.Client], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_16__.NgOtpInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicModule.forRoot(),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
        (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.getAuth)()),
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__.getFirestore)()),
        (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__.getStorage)()),
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient]
            }
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _otp_otp_component__WEBPACK_IMPORTED_MODULE_4__.OtpComponent, _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_6__.CountrySearchModalComponent, _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_7__.AddCardComponent, _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__.AutocompleteComponent, _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_9__.EnrouteChatComponent, _trip_summary_trip_summary_component__WEBPACK_IMPORTED_MODULE_10__.TripSummaryComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_16__.NgOtpInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.AuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__.FirestoreModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__.StorageModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule] }); })();


/***/ }),

/***/ 75860:
/*!********************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteComponent": () => (/* binding */ AutocompleteComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/status-bar */ 19326);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/avatar.service */ 25083);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 47614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);











function AutocompleteComponent_div_15_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 16)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-skeleton-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-skeleton-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-thumbnail", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-skeleton-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("animated", true);
  }
}

function AutocompleteComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AutocompleteComponent_div_15_ion_item_1_Template, 8, 3, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.skeletOns);
  }
}

function AutocompleteComponent_ion_item_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AutocompleteComponent_ion_item_16_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.chooseItem(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label", 16)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.city);
  }
}

function AutocompleteComponent_ion_item_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AutocompleteComponent_ion_item_17_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.chooseItem2(item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label", 16)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r9.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r9.city);
  }
}

function AutocompleteComponent_ion_item_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

class AutocompleteComponent {
  constructor(modalCtrl, http, avatar, viewCtrl, client) {
    this.modalCtrl = modalCtrl;
    this.http = http;
    this.avatar = avatar;
    this.viewCtrl = viewCtrl;
    this.client = client;
    this.service = new google.maps.places.AutocompleteService();
    this.skeleton = true;
    this.countryCode = 'NG';
    this.editedPickupLocation = null;
    this.autocompleteItems = [];
    this.autocompleteItems2 = [];
  }

  ngOnInit() {
    this.http.get("https://ipinfo.io").subscribe(res => {
      console.log('res ', res);
      this.countryCode = res.country || 'NG';
    });
    this.skeletOns = [{}, {}, {}, {}];
    this.autocomplete = {
      query2: this.locationAddress,
      query: ""
    };
    console.log(this.locationAddress);
  }

  closeModal() {
    let data = {
      home: true
    };
    this.modalCtrl.dismiss(data);
  }

  closeSearch() {}

  Show() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.setOverlaysWebView({
        overlay: false
      });
      _this.hideImage = true;
    })();
  }

  Hide() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.setOverlaysWebView({
        overlay: true
      });
      _this2.hideImage = false;
    })();
  }

  updateSearch2() {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.autocomplete.query2 == "") {
        _this3.autocompleteItems2 = [];
        return;
      }

      console.log(_this3.autocomplete.query2, _this3.LatLng);
      var place = new google.maps.LatLng(_this3.LatLng.lat, _this3.LatLng.lng);
      _this3.skeleton = false;

      _this3.service.getPlacePredictions({
        input: _this3.autocomplete.query2,
        location: place,
        strictbounds: true,
        radius: "2000",
        zoom: 15,
        types: ["geocode"],
        componentRestrictions: {
          country: [_this3.countryCode]
        }
      }, (predictions, status) => {
        _this3.autocompleteItems2 = [];
        console.log(predictions, status);
        _this3.skeleton = true;
        if (predictions != null) predictions.forEach(prediction => {
          _this3.autocompleteItems2.push({
            whole: prediction,
            full: prediction.description,
            place: prediction.structured_formatting.main_text,
            city: prediction.structured_formatting.secondary_text,
            searching: true
          });
        });
      });
    })();
  }

  updateSearch() {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.autocomplete.query == "") {
        _this4.autocompleteItems = [];
        return;
      }

      console.log(_this4.autocomplete.query, _this4.LatLng);
      var place = new google.maps.LatLng(_this4.LatLng.lat, _this4.LatLng.lng);
      _this4.skeleton = false;

      _this4.service.getPlacePredictions({
        input: _this4.autocomplete.query,
        location: place,
        strictbounds: true,
        radius: "2000",
        zoom: 15,
        types: ["geocode"],
        componentRestrictions: {
          country: [_this4.countryCode]
        }
      }, (predictions, status) => {
        _this4.autocompleteItems = [];
        console.log(predictions, status);
        _this4.skeleton = true;
        if (predictions != null) predictions.forEach(prediction => {
          _this4.autocompleteItems.push({
            whole: prediction,
            full: prediction.description,
            place: prediction.structured_formatting.main_text,
            city: prediction.structured_formatting.secondary_text,
            searching: true
          });
        });
      });
    })();
  }

  chooseItem(item) {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Include edited pickup location if user changed it
      if (_this5.editedPickupLocation) {
        item.editedPickup = _this5.editedPickupLocation;
      }

      yield _this5.viewCtrl.dismiss(item);
      console.log(item);
    })();
  }

  chooseOnMap() {
    var _this6 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = {
        pinOnMap: true
      };
      yield _this6.viewCtrl.dismiss(data);
    })();
  }

  chooseItem2(item) {
    var _this7 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.autocomplete.query2 = item.full;
      _this7.autocompleteItems2 = []; // Clear pickup suggestions

      try {
        const results = yield _this7.client.geocode({
          params: {
            address: item.full,
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey
          },
          timeout: 5000 // milliseconds

        });
        console.log(results);

        if (results.data && results.data.results && results.data.results.length > 0) {
          const position = results.data.results[0].geometry.location;
          _this7.editedPickupLocation = {
            location: item.full,
            lat: position.lat,
            lng: position.lng,
            edited: true
          };
          console.log('Edited pickup location:', _this7.editedPickupLocation);
        }
      } catch (error) {
        console.error('Error geocoding pickup location:', error);
      }
    })();
  }

}

AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
  return new (t || AutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_3__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_4__.Client));
};

AutocompleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AutocompleteComponent,
  selectors: [["app-autocomplete"]],
  inputs: {
    LatLng: "LatLng",
    locationAddress: "locationAddress"
  },
  decls: 23,
  vars: 6,
  consts: [["slot", "start"], ["color", "primary", 3, "click"], ["slot", "icon-only", "name", "close"], ["lines", "none"], ["color", "success", "name", "locate-sharp"], ["animated", "true", "placeholder", "Enter Pick Up Location", "showCancelButton", "never", 1, "search", 3, "ngModel", "ngModelChange", "ionInput", "ionFocus", "ionBlur", "ionCancel"], ["color", "primary", "name", "pin-sharp"], ["animated", "true", "placeholder", "Enter Destination", "showCancelButton", "never", 1, "search2", 3, "ngModel", "ngModelChange", "ionInput", "ionFocus", "ionBlur", "ionCancel"], [1, "ion-no-padding"], [4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], ["style", "margin:0 auto;", 4, "ngIf"], [1, "ion-padding"], ["size", "large", "shape", "round", "color", "primary", "expand", "block", 3, "click"], ["slot", "icon-only", "name", "pin"], [4, "ngFor", "ngForOf"], [1, "ion-margin"], [2, "width", "80px", 3, "animated"], [2, "width", "130px", 3, "animated"], [2, "width", "30px", "height", "50px", 3, "animated"], [3, "click"], ["name", "pin", "slot", "start"], [2, "margin", "0 auto"], ["src", "../../assets/imgs/trip.svg"]],
  template: function AutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(3, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AutocompleteComponent_Template_ion_button_click_3_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Enter Destination ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-item", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-searchbar", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_ion_searchbar_ngModelChange_9_listener($event) {
        return ctx.autocomplete.query2 = $event;
      })("ionInput", function AutocompleteComponent_Template_ion_searchbar_ionInput_9_listener() {
        return ctx.updateSearch2();
      })("ionFocus", function AutocompleteComponent_Template_ion_searchbar_ionFocus_9_listener() {
        return ctx.Show();
      })("ionBlur", function AutocompleteComponent_Template_ion_searchbar_ionBlur_9_listener() {
        return ctx.Hide();
      })("ionCancel", function AutocompleteComponent_Template_ion_searchbar_ionCancel_9_listener() {
        return ctx.closeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-item", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-searchbar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_ion_searchbar_ngModelChange_12_listener($event) {
        return ctx.autocomplete.query = $event;
      })("ionInput", function AutocompleteComponent_Template_ion_searchbar_ionInput_12_listener() {
        return ctx.updateSearch();
      })("ionFocus", function AutocompleteComponent_Template_ion_searchbar_ionFocus_12_listener() {
        return ctx.Show();
      })("ionBlur", function AutocompleteComponent_Template_ion_searchbar_ionBlur_12_listener() {
        return ctx.Hide();
      })("ionCancel", function AutocompleteComponent_Template_ion_searchbar_ionCancel_12_listener() {
        return ctx.closeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-content", 8)(14, "ion-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AutocompleteComponent_div_15_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AutocompleteComponent_ion_item_16_Template, 7, 2, "ion-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AutocompleteComponent_ion_item_17_Template, 7, 2, "ion-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AutocompleteComponent_ion_item_18_Template, 2, 0, "ion-item", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-footer", 12)(20, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AutocompleteComponent_Template_ion_button_click_20_listener() {
        return ctx.chooseOnMap();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Choose on map ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.autocomplete.query2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.autocomplete.query);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.skeleton);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.autocompleteItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.autocompleteItems2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hideImage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor],
  styles: [".search[_ngcontent-%COMP%] {\n  --box-shadow:none;\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n  --icon-color: rgba(106, 186, 106, 0);\n  --border-radius: 30px;\n}\n\n.search2[_ngcontent-%COMP%] {\n  --box-shadow:none;\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n  --icon-color: rgba(106, 186, 106, 0);\n  --border-radius: 30px;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(0, 98, 255, 0.259);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNDLG9DQUFBO0VBQ0EscUJBQUE7QUFDTDs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNDLG9DQUFBO0VBQ0EscUJBQUE7QUFDTDs7QUFJRTtFQUNFLHFDQUFBO0FBREoiLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaHtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsgXHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICAgLS1pY29uLWNvbG9yOiByZ2JhKDEwNiwgMTg2LCAxMDYsIDApO1xyXG4gICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gye1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOyBcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAtLWljb24tY29sb3I6IHJnYmEoMTA2LCAxODYsIDEwNiwgMCk7XHJcbiAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgLy8gYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDk4LCAyNTUsIDAuMjU5KTtcclxuICB9XHJcbiAgIl19 */"]
});

/***/ }),

/***/ 9568:
/*!************************************************************************!*\
  !*** ./src/app/country-search-modal/country-search-modal.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountrySearchModalComponent": () => (/* binding */ CountrySearchModalComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function CountrySearchModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CountrySearchModalComponent_div_10_Template_ion_item_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const country_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selectCountry(country_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", country_r1.flag, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", country_r1.name + " flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r1.name);
} }
//llZ1NBxrJnSEkUZG
class CountrySearchModalComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CountryJson;
        this.filteredCountries = [];
    }
    ngOnInit() {
        this.filteredCountries = this.CountryJson;
    }
    filterCountries(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.filteredCountries = this.CountryJson.filter(country => country.name.toLowerCase().includes(searchTerm) ||
            country.dialCode.includes(searchTerm));
    }
    selectCountry(country) {
        this.modalCtrl.dismiss(country);
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
}
CountrySearchModalComponent.ɵfac = function CountrySearchModalComponent_Factory(t) { return new (t || CountrySearchModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController)); };
CountrySearchModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CountrySearchModalComponent, selectors: [["app-country-search-modal"]], decls: 11, vars: 1, consts: [["slot", "end"], [3, "click"], ["placeholder", "Search country", 3, "ionInput"], ["class", "country-item", 4, "ngFor", "ngForOf"], [1, "country-item"], ["slot", "start"], [3, "src", "alt"]], template: function CountrySearchModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 0)(5, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CountrySearchModalComponent_Template_ion_button_click_5_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-searchbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInput", function CountrySearchModalComponent_Template_ion_searchbar_ionInput_7_listener($event) { return ctx.filterCountries($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content")(9, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CountrySearchModalComponent_div_10_Template, 6, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredCountries);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary); \n}\nion-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  --color: var(--ion-color-primary);\n}\nion-searchbar[_ngcontent-%COMP%] {\n  --background: white;\n  --color: var(--ion-color-primary);\n  --placeholder-color: #8b9dc3;\n}\nion-item[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n.country-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.country-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  font-size: 1.5rem;\n  color: var(--ion-color-primary); \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cnktc2VhcmNoLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFBO0FBQ0k7RUFDRSxvQ0FBQSxFQUFBLHdCQUFBO0FBQ047QUFFSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUNOO0FBRUk7RUFDRSwrQkFBQTtFQUNBLGlDQUFBO0FBQ047QUFFSTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtBQUNOO0FBRUk7RUFDRSxnQkFBQTtBQUNOO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBLEVBQUEsa0NBQUE7QUFDTiIsImZpbGUiOiJjb3VudHJ5LXNlYXJjaC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvdW50cnktc2VhcmNoLW1vZGFsLmNvbXBvbmVudC5zY3NzICovXHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgLyogVXNpbmcgYSBzb2xpZCBjb2xvciAqL1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4YjlkYzM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY291bnRyeS1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5jb3VudHJ5LWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAvKiBJY29uIGNvbG9yIHRvIG1hdGNoIHRoZSB0aGVtZSAqL1xyXG4gICAgfVxyXG4gIFxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 45635:
/*!********************************************************!*\
  !*** ./src/app/enroute-chat/enroute-chat.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnrouteChatComponent": () => (/* binding */ EnrouteChatComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/status-bar */ 19326);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/avatar.service */ 25083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);










const _c0 = function (a0, a1) {
  return {
    "my-message": a0,
    "other-message": a1
  };
};

function EnrouteChatComponent_ion_grid_8_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 17)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("offset", message_r5.myMsg ? 3 : 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c0, message_r5.myMsg, !message_r5.myMsg));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r5.fromName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r5.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 5, message_r5.createdAt == null ? null : message_r5.createdAt.toMillis(), "short"));
  }
}

function EnrouteChatComponent_ion_grid_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EnrouteChatComponent_ion_grid_8_ion_row_1_Template, 11, 11, "ion-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r0.messages));
  }
}

function EnrouteChatComponent_div_9_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 20)(1, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-skeleton-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animated", true);
  }
}

function EnrouteChatComponent_div_9_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 20)(1, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-skeleton-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animated", true);
  }
}

function EnrouteChatComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EnrouteChatComponent_div_9_ion_item_1_Template, 3, 1, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EnrouteChatComponent_div_9_ion_item_2_Template, 3, 1, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.skeletOns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.skeletOns);
  }
}

function EnrouteChatComponent_ion_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 23);
  }
}

function EnrouteChatComponent_ion_list_header_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-list-header", 24)(1, "ion-label", 25)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "We Respond Immediately");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Tell Us How We can Help You.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}

class EnrouteChatComponent {
  constructor(chatService, router, modalCtrl) {
    this.chatService = chatService;
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.newMsg = '';
    this.loading = true;
  }

  ionViewDidEnter() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.skeletOns = [{}, {}, {}, {}];
      _this.hideSkeleton = true;
      _this.messages = _this.chatService.getChatMessage(_this.chatData.userId);

      _this.messages.subscribe(d => {
        _this.loading = false;

        if (d.length == 0) {
          _this.hasNoData = true;
          _this.hideSkeleton = false;
        } else {
          _this.hideSkeleton = false;
          _this.hasNoData = false;

          _this.content.scrollToBottom();
        }
      });
    })();
  }

  Show() {
    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.setOverlaysWebView({
        overlay: false
      });
    })();
  }

  Hide() {
    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }

  ngOnInit() {
    // Use the passed data if needed
    console.log(this.chatData);
  }

  sendMessage() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.chatService.addChatEnRouteMessage(_this2.newMsg, _this2.chatData.userId);
      _this2.newMsg = '';

      _this2.content.scrollToBottom();

      _this2.chatService.updatChatMessageInfo(_this2.chatData.userId);
    })();
  }

  closeChat() {
    this.modalCtrl.dismiss();
  }

}

EnrouteChatComponent.ɵfac = function EnrouteChatComponent_Factory(t) {
  return new (t || EnrouteChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController));
};

EnrouteChatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: EnrouteChatComponent,
  selectors: [["app-enroute-chat"]],
  viewQuery: function EnrouteChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    chatData: "chatData"
  },
  decls: 21,
  vars: 6,
  consts: [[1, "ion-no-border"], ["slot", "start"], ["color", "primary", 3, "click"], ["name", "close", "slot", "icon-only"], [1, "ion-padding"], [4, "ngIf"], ["lines", "none", 1, "ion-no-padding"], ["src", "../../../assets/imgs/chat.svg", 4, "ngIf"], ["style", "margin-top: 10%", 4, "ngIf"], ["color", "light"], [1, "ion-align-items-center"], ["size", "10"], ["autoGrow", "true", "placeholder", "Start Typing..", "rows", "1", "maxLength", "500", 1, "message-input", 3, "ngModel", "ionFocus", "ionBlur", "ngModelChange"], ["size", "2"], ["expand", "block", "fill", "clear", "color", "primary", 1, "msg-btn", 3, "disabled", "click"], ["name", "send", "slot", "icon-only"], [4, "ngFor", "ngForOf"], ["size", "9", 1, "message", 3, "offset", "ngClass"], [1, "time", "ion-text-right"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], [2, "width", "250px", "height", "400px", 3, "animated"], [2, "width", "250px", "height", "400px", "left", "100px", 3, "animated"], ["src", "../../../assets/imgs/chat.svg"], [2, "margin-top", "10%"], ["color", "primary", 1, "ion-text-center"]],
  template: function EnrouteChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EnrouteChatComponent_Template_ion_button_click_3_listener() {
        return ctx.closeChat();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Chat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, EnrouteChatComponent_ion_grid_8_Template, 3, 3, "ion-grid", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EnrouteChatComponent_div_9_Template, 3, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-list", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EnrouteChatComponent_ion_img_11_Template, 1, 0, "ion-img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EnrouteChatComponent_ion_list_header_12_Template, 6, 0, "ion-list-header", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-footer")(14, "ion-toolbar", 9)(15, "ion-row", 10)(16, "ion-col", 11)(17, "ion-textarea", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionFocus", function EnrouteChatComponent_Template_ion_textarea_ionFocus_17_listener() {
        return ctx.Show();
      })("ionBlur", function EnrouteChatComponent_Template_ion_textarea_ionBlur_17_listener() {
        return ctx.Hide();
      })("ngModelChange", function EnrouteChatComponent_Template_ion_textarea_ngModelChange_17_listener($event) {
        return ctx.newMsg = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-col", 13)(19, "ion-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EnrouteChatComponent_Template_ion_button_click_19_listener() {
        return ctx.sendMessage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "ion-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideSkeleton);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hideSkeleton);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasNoData);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasNoData);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.newMsg === "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnJvdXRlLWNoYXQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 8126:
/*!***************************************!*\
  !*** ./src/app/one-signal.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnesignalService": () => (/* binding */ OnesignalService)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);











class OnesignalService {
  constructor(alertCtrl, toastCtrl, http, router, ngZone) {
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.http = http;
    this.router = router;
    this.ngZone = ngZone;
    this.playerID = null;
    this.externalUserId = null;
    this.isInitialized = false; // Observable for notification clicks

    this.notificationClickSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.notificationClick$ = this.notificationClickSubject.asObservable(); // Observable for permission status

    this.permissionStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.permissionStatus$ = this.permissionStatusSubject.asObservable(); // Backend API base URL

    this.backendUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.pushNotificationServerUrl || '[YOUR_SERVER_URL]'; // Enable/disable debug popups (set to true to see success/error alerts)

    this.showDebugAlerts = true;
    this.isNative = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform();
  }
  /**
   * Initialize OneSignal for both mobile (native) and web platforms
   */


  OneSignalInit() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.isInitialized) {
        console.log('OneSignal: Already initialized');
        return;
      }

      try {
        if (_this.isNative) {
          yield _this.initializeNative();
        } else {
          yield _this.initializeWeb();
        }

        _this.isInitialized = true;
      } catch (e) {
        console.error('OneSignal initialization error:', e);
      }
    })();
  }
  /**
   * Initialize OneSignal for native platforms (iOS/Android)
   */


  initializeNative() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Uncomment to set OneSignal device logging to VERBOSE
        // OneSignal.Debug.setLogLevel(6);
        // Initialize OneSignal with App ID
        OneSignal.initialize(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.onesignal.appId); // Get player ID (subscription ID)

        const subscription = yield OneSignal.User.pushSubscription.getIdAsync();
        _this2.playerID = subscription;
        console.log('OneSignal Native Player ID:', _this2.playerID); // Get external ID if set

        _this2.externalUserId = yield OneSignal.User.getExternalId();
        console.log('OneSignal External User ID:', _this2.externalUserId); // Set up notification click listener with routing

        OneSignal.Notifications.addEventListener('click', event => {
          _this2.handleNotificationClick(event);
        }); // Set up permission change listener

        OneSignal.Notifications.addEventListener('permissionChange', permission => {
          _this2.permissionStatusSubject.next(permission);

          console.log('OneSignal permission changed:', permission);
        }); // Check current permission status

        const hasPermission = yield OneSignal.Notifications.getPermissionAsync();

        _this2.permissionStatusSubject.next(hasPermission);

        console.log('OneSignal Native initialized successfully');
      } catch (e) {
        console.error('OneSignal Native initialization error:', e);
        throw e;
      }
    })();
  }
  /**
   * Initialize OneSignal for web platform
   */


  initializeWeb() {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if OneSignal Web SDK is available
        if (typeof OneSignalDeferred === 'undefined') {
          console.warn('OneSignal Web SDK not loaded. Make sure to include the script in index.html');
          return;
        }

        OneSignalDeferred.push( /*#__PURE__*/function () {
          var _ref = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (OneSignalSDK) {
            yield OneSignalSDK.init({
              appId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.onesignal.appId,
              allowLocalhostAsSecureOrigin: true,
              notifyButton: {
                enable: true // Show the notification bell

              },
              serviceWorkerParam: {
                scope: '/'
              },
              serviceWorkerPath: '/OneSignalSDKWorker.js'
            }); // Get player ID (subscription ID)

            const subscription = yield OneSignalSDK.User.PushSubscription.id;
            _this3.playerID = subscription || null;
            console.log('OneSignal Web Player ID:', _this3.playerID); // Set up notification click listener

            OneSignalSDK.Notifications.addEventListener('click', event => {
              _this3.handleNotificationClick(event);
            }); // Set up permission change listener

            OneSignalSDK.Notifications.addEventListener('permissionChange', permission => {
              _this3.ngZone.run(() => {
                _this3.permissionStatusSubject.next(permission);
              });
            }); // Check current permission status

            const permission = yield OneSignalSDK.Notifications.permission;

            _this3.permissionStatusSubject.next(permission);

            console.log('OneSignal Web initialized successfully');
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (e) {
        console.error('OneSignal Web initialization error:', e);
        throw e;
      }
    })();
  }
  /**
   * Handle notification click events and route based on notification type
   */


  handleNotificationClick(event) {
    console.log('Notification clicked:', event);
    const notificationData = event?.notification?.additionalData || event?.result?.notification?.additionalData || event?.data || {};
    this.ngZone.run(() => {
      // Emit the notification data for subscribers
      this.notificationClickSubject.next(notificationData); // Route based on notification type

      this.routeByNotificationType(notificationData);
    });
  }
  /**
   * Route to appropriate page based on notification type
   */


  routeByNotificationType(data) {
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
            queryParams: {
              rideId: data.rideId
            }
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


  requestPermission() {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this4.isNative) {
          return yield _this4.requestNativePermission();
        } else {
          return yield _this4.requestWebPermission();
        }
      } catch (e) {
        console.error('Error requesting permission:', e);
        return false;
      }
    })();
  }

  requestNativePermission() {
    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const canRequest = yield OneSignal.Notifications.canRequestPermission();

        if (canRequest) {
          const accepted = yield OneSignal.Notifications.requestPermission(true);
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
    })();
  }

  requestWebPermission() {
    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        if (typeof OneSignalDeferred === 'undefined') {
          resolve(false);
          return;
        }

        OneSignalDeferred.push( /*#__PURE__*/function () {
          var _ref2 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (OneSignalSDK) {
            try {
              yield OneSignalSDK.Notifications.requestPermission();
              const permission = yield OneSignalSDK.Notifications.permission;
              resolve(permission);
            } catch (e) {
              console.error('Web permission request error:', e);
              resolve(false);
            }
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
    })();
  } // iOS-specific permission handling


  OneSignalIOSPermission() {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.isNative) return;

      try {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'ios') {
          const ios_permission = yield OneSignal.Notifications.permissionNative(); // OSNotificationPermission.Authorized = 2

          if (ios_permission !== 2) {
            _this5.OneSignalPermission();
          } else {
            _this5.requestPermission();
          }
        } else {
          // For Android
          _this5.OneSignalPermission();
        }
      } catch (e) {
        console.log(e);
      }
    })();
  } // Call this function when your app starts


  OneSignalPermission() {
    var _this6 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (msg = '') {
      if (!_this6.isNative) {
        // For web, directly request permission
        yield _this6.requestWebPermission();
        return;
      }

      try {
        const hasPermission = yield OneSignal.Notifications.getPermissionAsync();
        console.log('hasPermission:', hasPermission);

        if (!hasPermission) {
          // Show prompt
          _this6.showAlert(msg);
        }
      } catch (e) {
        throw e;
      }
    }).apply(this, arguments);
  }

  showAlert(msg) {
    this.alertCtrl.create({
      header: `Allow Push Notifications${msg}`,
      message: 'Please allow us to send you notifications to get latest offers and order updates...',
      buttons: [{
        text: "Don't Allow",
        role: 'cancel',
        handler: () => {
          console.log('Confirm Cancel');
          this.OneSignalPermission(" (It's mandatory)");
        }
      }, {
        text: 'Allow',
        handler: () => {
          this.requestPermission();
        }
      }]
    }).then(alertEl => alertEl.present());
  }
  /**
   * Set external user ID for logged-in user
   * Call this after user logs in
   */


  setExternalUserId(userId) {
    var _this7 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!userId) {
        console.warn('Cannot set empty external user ID');
        return;
      }

      try {
        if (_this7.isNative) {
          yield OneSignal.login(userId);
          _this7.externalUserId = userId;
          console.log('OneSignal external user ID set (native):', userId);
        } else {
          if (typeof OneSignalDeferred !== 'undefined') {
            OneSignalDeferred.push( /*#__PURE__*/function () {
              var _ref3 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (OneSignalSDK) {
                yield OneSignalSDK.login(userId);
                _this7.externalUserId = userId;
                console.log('OneSignal external user ID set (web):', userId);
              });

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }());
          }
        }
      } catch (e) {
        console.error('Error setting external user ID:', e);
      }
    })();
  }
  /**
   * Remove external user ID on logout
   * Call this when user logs out
   */


  removeExternalUserId() {
    var _this8 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this8.isNative) {
          yield OneSignal.logout();
          _this8.externalUserId = null;
          console.log('OneSignal external user ID removed (native)');
        } else {
          if (typeof OneSignalDeferred !== 'undefined') {
            OneSignalDeferred.push( /*#__PURE__*/function () {
              var _ref4 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (OneSignalSDK) {
                yield OneSignalSDK.logout();
                _this8.externalUserId = null;
                console.log('OneSignal external user ID removed (web)');
              });

              return function (_x4) {
                return _ref4.apply(this, arguments);
              };
            }());
          }
        }
      } catch (e) {
        console.error('Error removing external user ID:', e);
      }
    })();
  }
  /**
   * Get current player ID (subscription ID)
   */


  getPlayerId() {
    var _this9 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this9.playerID) return _this9.playerID;

      try {
        if (_this9.isNative) {
          const subscription = yield OneSignal.User.pushSubscription.getIdAsync();
          _this9.playerID = subscription;
        } else if (typeof OneSignalDeferred !== 'undefined') {
          return new Promise(resolve => {
            OneSignalDeferred.push( /*#__PURE__*/function () {
              var _ref5 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (OneSignalSDK) {
                const id = yield OneSignalSDK.User.PushSubscription.id;
                _this9.playerID = id || null;
                resolve(_this9.playerID);
              });

              return function (_x5) {
                return _ref5.apply(this, arguments);
              };
            }());
          });
        }

        return _this9.playerID;
      } catch (e) {
        console.error('Error getting player ID:', e);
        return null;
      }
    })();
  } // ==========================================
  // Backend API Methods
  // ==========================================


  getHeaders() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
  }
  /**
   * Test method to verify alerts are working on all platforms
   * Call this from any component to test: this.oneSignalService.testPushNotificationAlerts()
   */


  testPushNotificationAlerts() {
    var _this0 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🧪 Testing push notification alerts...'); // Request browser notification permission first (for web)

      if (!_this0.isNative) {
        yield _this0.requestBrowserNotificationPermission();
      } // Test success notification


      yield _this0.showSuccessToast('Test Success Alert', {
        platform: _this0.isNative ? 'Native (iOS/Android)' : 'Web',
        timestamp: new Date().toISOString(),
        message: 'This is a test success notification'
      }); // After 2 seconds, test error notification

      setTimeout( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this0.showErrorToast('Test Error Alert', {
          status: 500,
          statusText: 'Test Error',
          message: 'This is a test error notification',
          details: 'If you can see this, error alerts are working!'
        });
      }), 2000);
    })();
  }
  /**
   * Request browser notification permission
   */


  requestBrowserNotificationPermission() {
    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof window === 'undefined' || !('Notification' in window)) {
        console.log('Browser notifications not supported');
        return false;
      }

      if (Notification.permission === 'granted') {
        return true;
      }

      if (Notification.permission !== 'denied') {
        const permission = yield Notification.requestPermission();
        return permission === 'granted';
      }

      return false;
    })();
  }
  /**
   * Show a browser notification (Chrome/Firefox/Safari)
   */


  showBrowserNotification(title, body, type) {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      console.log('Browser notifications not supported');
      return;
    }

    if (Notification.permission === 'granted') {
      const icon = type === 'success' ? 'https://cdn-icons-png.flaticon.com/512/190/190411.png' // Green checkmark
      : 'https://cdn-icons-png.flaticon.com/512/753/753345.png'; // Red X

      const notification = new Notification(title, {
        body: body,
        icon: icon,
        badge: icon,
        tag: `push-notification-${Date.now()}`,
        requireInteraction: true,
        silent: false
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      }; // Auto close after 10 seconds


      setTimeout(() => notification.close(), 10000);
    } else {
      console.log('Browser notification permission not granted');
    }
  }
  /**
   * Show success toast notification
   */


  showSuccessToast(message, details) {
    var _this1 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('✅ Push Notification Success:', message, details);

      if (_this1.showDebugAlerts) {
        // Show browser notification on web
        if (!_this1.isNative) {
          _this1.showBrowserNotification('✅ Push Notification Success', message, 'success');
        } // Also show Ionic toast for in-app visibility


        _this1.ngZone.run( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            const toast = yield _this1.toastCtrl.create({
              message: `✅ ${message}`,
              duration: 5000,
              position: 'top',
              color: 'success',
              buttons: [{
                text: 'Details',
                handler: () => {
                  _this1.showDetailedAlert('Push Notification Success', message, details);
                }
              }, {
                text: 'OK',
                role: 'cancel'
              }]
            });
            yield toast.present();
          } catch (e) {
            console.error('Error showing success toast:', e); // Fallback to browser alert

            alert(`✅ ${message}\n\nDetails: ${JSON.stringify(details, null, 2)}`);
          }
        }));
      }
    })();
  }
  /**
   * Show error toast notification
   */


  showErrorToast(message, error) {
    var _this10 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const errorDetails = _this10.formatErrorDetails(error);

      console.error('❌ Push Notification Error:', message, errorDetails);

      if (_this10.showDebugAlerts) {
        // Show browser notification on web
        if (!_this10.isNative) {
          const errorSummary = typeof errorDetails === 'object' ? errorDetails.message || errorDetails.statusText || JSON.stringify(errorDetails).substring(0, 100) : String(errorDetails).substring(0, 100);

          _this10.showBrowserNotification('❌ Push Notification Error', `${message}: ${errorSummary}`, 'error');
        } // Also show Ionic toast for in-app visibility


        _this10.ngZone.run( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            const toast = yield _this10.toastCtrl.create({
              message: `❌ ${message}`,
              duration: 8000,
              position: 'top',
              color: 'danger',
              buttons: [{
                text: 'View Error',
                handler: () => {
                  _this10.showDetailedAlert('Push Notification Error', message, errorDetails);
                }
              }, {
                text: 'OK',
                role: 'cancel'
              }]
            });
            yield toast.present();
          } catch (e) {
            console.error('Error showing error toast:', e); // Fallback to browser alert

            alert(`❌ ${message}\n\nError: ${JSON.stringify(errorDetails, null, 2)}`);
          }
        }));
      }
    })();
  }
  /**
   * Show detailed alert with full error/success information
   */


  showDetailedAlert(header, message, details) {
    var _this11 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const detailsString = typeof details === 'string' ? details : JSON.stringify(details, null, 2); // Wrap in NgZone to ensure UI updates work on web

      _this11.ngZone.run( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          const alert = yield _this11.alertCtrl.create({
            header: header,
            subHeader: message,
            message: `<pre style="white-space: pre-wrap; word-wrap: break-word; font-size: 12px; max-height: 300px; overflow-y: auto;">${detailsString}</pre>`,
            buttons: [{
              text: 'Copy to Console',
              handler: () => {
                console.log('=== PUSH NOTIFICATION DETAILS ===');
                console.log('Header:', header);
                console.log('Message:', message);
                console.log('Details:', details);
                console.log('=================================');
              }
            }, {
              text: 'OK',
              role: 'cancel'
            }],
            cssClass: 'push-notification-alert'
          });
          yield alert.present();
        } catch (e) {
          console.error('Error showing detailed alert:', e); // Fallback to browser alert

          alert(`${header}\n${message}\n\n${detailsString}`);
        }
      }));
    })();
  }
  /**
   * Format error details for display
   */


  formatErrorDetails(error) {
    if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
      return {
        status: error.status,
        statusText: error.statusText,
        url: error.url,
        message: error.message,
        error: error.error,
        headers: error.headers?.keys()?.reduce((acc, key) => {
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


  sendToPlayerIds(request) {
    console.log('📤 Sending notification to player IDs:', request);
    return this.http.post(`${this.backendUrl}/push/send`, request, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(response => {
      this.showSuccessToast('Notification sent to player IDs', {
        request: request,
        response: response
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      this.showErrorToast('Failed to send notification to player IDs', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
        success: false,
        error: this.formatErrorDetails(error)
      });
    }));
  }
  /**
   * Send notification by external user IDs via backend
   * POST /push/send-by-user-id
   */


  sendByUserIds(request) {
    console.log('📤 Sending notification by user IDs:', request);
    return this.http.post(`${this.backendUrl}/push/send-by-user-id`, request, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(response => {
      this.showSuccessToast('Notification sent by user IDs', {
        request: request,
        response: response
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      this.showErrorToast('Failed to send notification by user IDs', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
        success: false,
        error: this.formatErrorDetails(error)
      });
    }));
  }
  /**
   * Send ride notification via backend
   * POST /push/ride-notification
   */


  sendRideNotification(request) {
    console.log('📤 Sending ride notification:', request);
    return this.http.post(`${this.backendUrl}/push/ride-notification`, request, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(response => {
      this.showSuccessToast(`Ride notification sent (${request.notificationType})`, {
        request: request,
        response: response
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      this.showErrorToast(`Failed to send ride notification (${request.notificationType})`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
        success: false,
        error: this.formatErrorDetails(error)
      });
    }));
  }
  /**
   * Broadcast notification to all users via backend
   * POST /push/send-to-all
   */


  sendToAll(request) {
    console.log('📤 Broadcasting notification to all:', request);
    return this.http.post(`${this.backendUrl}/push/send-to-all`, request, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(response => {
      this.showSuccessToast('Notification broadcast to all users', {
        request: request,
        response: response
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      this.showErrorToast('Failed to broadcast notification', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
        success: false,
        error: this.formatErrorDetails(error)
      });
    }));
  } // ==========================================
  // Legacy direct OneSignal API method (kept for backward compatibility)
  // ==========================================


  sendNotification(msg, title, data = null, external_id) {
    console.log('📤 Sending notification via OneSignal API:', {
      title,
      msg,
      data,
      external_id
    });
    let body = {
      app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.onesignal.appId,
      name: 'notification',
      target_channel: "push",
      headings: {
        en: title
      },
      contents: {
        en: msg
      },
      android_channel_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.onesignal.android_channel_id,
      small_icon: 'mipmap/ic_notification',
      large_icon: 'mipmap/ic_notification_large',
      ios_sound: 'sound.wav',
      data: data
    };

    if (external_id) {
      // Specific device or devices
      body = { ...body,
        include_aliases: {
          external_id: Array.isArray(external_id) ? external_id : [external_id]
        }
      };
    } else {
      body = { ...body,
        included_segments: ['Active Subscriptions', 'Total Subscriptions']
      };
    }

    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders().set('accept', 'application/json').set('Content-Type', 'application/json').set('Authorization', `Basic ${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.onesignal.restApiKey}`);
    return this.http.post('https://onesignal.com/api/v1/notifications', body, {
      headers: headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(response => {
      this.showSuccessToast('Notification sent via OneSignal API', {
        title: title,
        message: msg,
        external_id: external_id,
        response: response
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      this.showErrorToast('Failed to send notification via OneSignal API', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
        success: false,
        error: this.formatErrorDetails(error)
      });
    }));
  } // ==========================================
  // Utility Methods
  // ==========================================

  /**
   * Enable or disable debug alert popups
   */


  setDebugAlerts(enabled) {
    this.showDebugAlerts = enabled;
    console.log(`Push notification debug alerts ${enabled ? 'enabled' : 'disabled'}`);
  }
  /**
   * Check if OneSignal is initialized
   */


  isOneSignalInitialized() {
    return this.isInitialized;
  }
  /**
   * Check if running on native platform
   */


  isNativePlatform() {
    return this.isNative;
  }
  /**
   * Get current permission status
   */


  getPermissionStatus() {
    var _this12 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this12.isNative) {
          return yield OneSignal.Notifications.getPermissionAsync();
        } else if (typeof OneSignalDeferred !== 'undefined') {
          return new Promise(resolve => {
            OneSignalDeferred.push( /*#__PURE__*/function () {
              var _ref0 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (OneSignalSDK) {
                const permission = yield OneSignalSDK.Notifications.permission;
                resolve(permission);
              });

              return function (_x6) {
                return _ref0.apply(this, arguments);
              };
            }());
          });
        }

        return false;
      } catch (e) {
        console.error('Error getting permission status:', e);
        return false;
      }
    })();
  }

}

OnesignalService.ɵfac = function OnesignalService_Factory(t) {
  return new (t || OnesignalService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

OnesignalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: OnesignalService,
  factory: OnesignalService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3096:
/*!**************************************!*\
  !*** ./src/app/otp/otp.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpComponent": () => (/* binding */ OtpComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 16818);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/overlay.service */ 75596);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/avatar.service */ 25083);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-otp-input */ 79306);













const _c0 = ["otpInput"];

function OtpComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "CONTINUE"));
  }
}

function OtpComponent_ion_progress_bar_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-progress-bar", 17);
  }
}

const _c1 = function () {
  return {
    "width": "40px",
    "height": "40px",
    "font-size": "20px",
    "font-weight": "600",
    "background-color": "#ffffff",
    "color": "#333333",
    "border": "1px solid #cccccc",
    "border-radius": "8px"
  };
};

const _c2 = function (a1) {
  return {
    length: 6,
    inputStyles: a1
  };
};

class OtpComponent {
  constructor(modalCtrl, overlay, toastCtrl, auth, router, avatar, cdr, // Inject ChangeDetectorRef
  translate, fireAuth) {
    this.modalCtrl = modalCtrl;
    this.overlay = overlay;
    this.toastCtrl = toastCtrl;
    this.auth = auth;
    this.router = router;
    this.avatar = avatar;
    this.cdr = cdr;
    this.translate = translate;
    this.fireAuth = fireAuth;
    this.isLoading = false;
    this.config = {
      length: 6,
      allowNumbersOnly: true
    };
  }

  ngOnInit() {
    console.log(this.phone);
    this.overlay.hideLoader(); // Hide all loaders when OTP page is called

    this.startCountdown(60); // Start a 60-second countdown
  }

  ngAfterViewInit() {
    // Set the OTP input value after the view is initialized
    if (this.defaultOtp) {
      this.setOtp(this.defaultOtp);
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }

  ngOnDestroy() {
    clearInterval(this.countdownInterval); // Clear the interval when the component is destroyed
  }

  onOtpChange(event) {
    this.otp = event;
    console.log(this.otp);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  resend() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.overlay.showLoader(yield _this.translate.get('RESENDING_OTP').toPromise());

        const response = yield _this.auth.signInWithPhoneNumber(_this.countryCode + _this.phone);
        console.log(response);
        _this.confirmationResult = response; // Update the confirmation result

        _this.overlay.hideLoader();

        _this.showToast(yield _this.translate.get('OTP_RESENT').toPromise());

        _this.startCountdown(60); // Restart the countdown when resending the OTP

      } catch (e) {
        console.error('Resend OTP error:', e);

        _this.overlay.hideLoader();

        let errorMessage = yield _this.translate.get('RESEND_FAILED').toPromise(); // Handle specific error codes

        if (e.code === 'auth/too-many-requests') {
          errorMessage = yield _this.translate.get('PLEASE_WAIT').toPromise();
        } else if (e.code === 'auth/network-request-failed') {
          errorMessage = yield _this.translate.get('NETWORK_ERROR').toPromise();
        }

        _this.showToast(errorMessage);
      }
    })();
  }

  verifyOtp() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.approve2 = true;

        _this2.overlay.showLoader('');

        let response;

        if (_this2.confirmationResult && _this2.confirmationResult.verificationId) {
          // Create credential using the verification ID and OTP code
          const credential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.PhoneAuthProvider.credential(_this2.confirmationResult.verificationId, _this2.otp); // Sign in with the credential

          response = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.signInWithCredential)(_this2.fireAuth, credential);
        } else {
          // Fallback for test mode or if verificationId is missing
          response = yield _this2.confirmationResult.confirm(_this2.otp);
        } // Wait briefly to ensure Firebase Auth state is updated


        yield new Promise(resolve => setTimeout(resolve, 1000));
        _this2.approve2 = false;

        _this2.overlay.hideLoader();

        _this2.modalCtrl.dismiss({
          user: response.user
        });
      } catch (e) {
        console.error('OTP verification error:', e);

        _this2.clearOtpInput();

        _this2.overlay.hideLoader();

        _this2.approve2 = false;
        let errorMessage = yield _this2.translate.get('INVALID_OTP').toPromise(); // Handle specific error codes

        if (e.code === 'auth/invalid-verification-code') {
          errorMessage = yield _this2.translate.get('INVALID_OTP').toPromise();
        } else if (e.code === 'auth/code-expired') {
          errorMessage = yield _this2.translate.get('RESEND_OTP').toPromise();
        } else if (e.code === 'auth/network-request-failed') {
          errorMessage = yield _this2.translate.get('NETWORK_ERROR').toPromise();
        } else if (e.code === 'auth/too-many-requests') {
          errorMessage = yield _this2.translate.get('PLEASE_WAIT').toPromise();
        }

        _this2.showToast(errorMessage);
      } finally {
        // Ensure loader is always hidden, even if there's an unexpected error
        _this2.overlay.hideLoader();

        _this2.approve2 = false;
      }
    })();
  }

  showToast(message) {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastCtrl.create({
        message: message,
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    })();
  }

  startCountdown(seconds) {
    this.countdown = seconds;
    clearInterval(this.countdownInterval); // Clear any existing intervals

    this.countdownInterval = setInterval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        clearInterval(this.countdownInterval);
      }
    }, 1000);
  }

  clearOtpInput() {
    this.otpInput.setValue(''); // Clear the value of ng-otp-input

    this.otp = ''; // Clear the OTP variable in the component
  }

  setOtp(otp) {
    this.otp = otp;
    this.otpInput.setValue(otp); // Set the value in the ng-otp-input component
  }

}

OtpComponent.ɵfac = function OtpComponent_Factory(t) {
  return new (t || OtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_1__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_3__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.Auth));
};

OtpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: OtpComponent,
  selectors: [["app-otp"]],
  viewQuery: function OtpComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.otpInput = _t.first);
    }
  },
  inputs: {
    phone: "phone",
    countryCode: "countryCode",
    defaultOtp: "defaultOtp",
    confirmationResult: "confirmationResult"
  },
  decls: 32,
  vars: 22,
  consts: [[1, "ion-no-border", 3, "translucent"], ["slot", "start"], ["color", "primary", 3, "click"], ["slot", "icon-only", "name", "close"], [1, "ion-no-border"], ["lines", "none", 1, "ion-padding"], ["align", "center"], ["lines", "none", 1, "ion-margin"], ["align", "center", 1, "ion-padding-top", "ion-padding-bottom"], [3, "config", "onInputChange"], ["otpInput", ""], [1, "countdown"], ["shape", "round", "fill", "outline", "size", "large", "expand", "block", "color", "primary", "slot", "start", 3, "disabled", "click"], ["shape", "round", "size", "large", "expand", "block", "slot", "end", "color", "primary", 3, "disabled", "click"], [4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], ["color", "light", "slot", "end", "name", "arrow-forward"], ["color", "light", "type", "indeterminate"]],
  template: function OtpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OtpComponent_Template_ion_button_click_3_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-content", 4)(9, "ion-list", 5)(10, "ion-list-header")(11, "ion-label", 6)(12, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-item", 7)(16, "ion-label")(17, "div", 8)(18, "ng-otp-input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onInputChange", function OtpComponent_Template_ng_otp_input_onInputChange_18_listener($event) {
        return ctx.onOtpChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-item", 7)(21, "ion-label")(22, "div", 8)(23, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OtpComponent_Template_ion_button_click_26_listener() {
        return ctx.resend();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OtpComponent_Template_ion_button_click_29_listener() {
        return ctx.verifyOtp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, OtpComponent_ng_container_30_Template, 5, 3, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, OtpComponent_ion_progress_bar_31_Template, 1, 0, "ion-progress-bar", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 11, "VERIFY_OTP"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 13, "ENTER_VERIFICATION"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](19, _c1)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.countdown, " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 15, "SECONDS_REMAINING"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.countdown > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 17, "RESEND_OTP"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.otp || ctx.otp.length !== 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_otp_input__WEBPACK_IMPORTED_MODULE_11__.NgOtpInputComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\nion-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\nion-list-header[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\nion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\nion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n  margin-top: 8px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n  .otp-input {\n  width: 40px !important;\n  height: 40px !important;\n  font-size: 20px !important;\n  font-weight: 600 !important;\n  background-color: #ffffff !important;\n  color: #333333 !important;\n  border: 1px solid #cccccc !important;\n  border-radius: 8px !important;\n  margin: 0 4px;\n}\n\n@media (max-width: 360px) {\n    .otp-input {\n    width: 35px !important;\n    height: 35px !important;\n    font-size: 18px !important;\n    margin: 0 2px;\n  }\n}\n\n  .otp-input:focus {\n  border-color: var(--ion-color-primary) !important;\n  box-shadow: 0 0 0 2px rgba(var(--ion-color-primary-rgb), 0.2) !important;\n}\n\n.countdown[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  transition: color 0.3s ease;\n}\n\n.countdown.expired[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 48px;\n}\n\nion-button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 0;\n  height: auto;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNJO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNOOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFLRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBRko7O0FBSUk7RUFYRjtJQVlJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7RUFESjtBQUNGOztBQUdJO0VBQ0UsaURBQUE7RUFDQSx3RUFBQTtBQUROOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUhGOztBQUtFO0VBQ0UsOEJBQUE7QUFISjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU1FO0VBQ0UsaUJBQUE7QUFKSjs7QUFRQTtFQUNFLHVCQUFBO0FBTEY7O0FBT0U7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFMSiIsImZpbGUiOiJvdHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAucGhvbmUtbnVtYmVyIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5vdHAtaW5wdXQge1xyXG4gICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICB3aWR0aDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMikgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb3VudGRvd24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG5cclxuICAmLmV4cGlyZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcblxyXG4gIGlvbi1zcGlubmVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 16818);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);






class AuthService {
  constructor(auth) {
    this.auth = auth;
    this.isRecaptchaInitialized = false;
    this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
      this.auth.onAuthStateChanged(subscriber);
    });
  } // Initialize RecaptchaVerifier


  recaptcha() {
    try {
      // Clear existing verifier if it exists
      if (this.appVerifier) {
        this.appVerifier.clear();
        this.appVerifier = null;
        this.isRecaptchaInitialized = false;
      } // Check if the container exists


      const container = document.getElementById('sign-in-button');

      if (!container) {
        console.error('reCAPTCHA container not found');
        return;
      } // Clear the container


      container.innerHTML = '';
      this.appVerifier = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.RecaptchaVerifier('sign-in-button', {
        size: 'invisible',
        callback: response => {
          console.log('reCAPTCHA verified:', response);
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired, reinitializing...');
          this.isRecaptchaInitialized = false;
          this.recaptcha();
        }
      }, this.auth);
      this.appVerifier.render().then(() => {
        this.isRecaptchaInitialized = true;
        console.log('reCAPTCHA initialized successfully');
      }).catch(error => {
        console.error('reCAPTCHA render error:', error);
        this.isRecaptchaInitialized = false;
      });
    } catch (error) {
      console.error('reCAPTCHA initialization error:', error);
      this.isRecaptchaInitialized = false;
    }
  }

  signInWithPhoneNumber(phoneNumber) {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Ensure reCAPTCHA is initialized
        if (!_this.appVerifier || !_this.isRecaptchaInitialized) {
          console.log('🔄 reCAPTCHA not initialized, initializing now...');

          _this.recaptcha(); // Wait for initialization


          yield new Promise(resolve => setTimeout(resolve, 1000));
        }

        if (!_this.appVerifier) {
          const error = new Error('reCAPTCHA not initialized');
          error.code = 'auth/captcha-check-failed';
          console.error('❌ reCAPTCHA initialization failed');
          throw error;
        }

        console.log('📱 Attempting to sign in with phone number:', phoneNumber);
        console.log('🔐 reCAPTCHA initialized:', _this.isRecaptchaInitialized);
        console.log('🌐 Platform:', navigator.userAgent);
        const confirmationResult = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPhoneNumber)(_this.auth, phoneNumber, _this.appVerifier);
        _this.confirmationResult = confirmationResult;
        console.log('✅ Phone authentication successful');
        return confirmationResult;
      } catch (e) {
        // Comprehensive error logging
        console.error('═══════════════════════════════════════');
        console.error('❌ FIREBASE AUTHENTICATION ERROR');
        console.error('═══════════════════════════════════════');
        console.error('📱 Phone Number:', phoneNumber);
        console.error('🔴 Error Code:', e.code || 'NO_CODE');
        console.error('💬 Error Message:', e.message || 'NO_MESSAGE');
        console.error('📋 Full Error Object:', JSON.stringify(e, Object.getOwnPropertyNames(e), 2));
        console.error('🌐 User Agent:', navigator.userAgent);
        console.error('🔐 reCAPTCHA Status:', _this.isRecaptchaInitialized);
        console.error('⏰ Timestamp:', new Date().toISOString()); // Detailed error analysis

        if (e.code === 'auth/invalid-app-credential') {
          console.error('');
          console.error('🔴 CRITICAL: Invalid App Credential Error');
          console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
          console.error('This error means Firebase cannot verify your app.');
          console.error('');
          console.error('✅ SOLUTIONS FOR ANDROID:');
          console.error('1. Add SHA-1 fingerprint to Firebase Console');
          console.error('2. Add SHA-256 fingerprint to Firebase Console');
          console.error('3. Download new google-services.json');
          console.error('4. Replace old google-services.json');
          console.error('5. Rebuild app: ionic capacitor sync android');
          console.error('');
          console.error('📋 TO GET SHA FINGERPRINTS:');
          console.error('cd android && .\\gradlew signingReport');
          console.error('');
          console.error('🔗 Firebase Console:');
          console.error('https://console.firebase.google.com/project/pegasus-2be94/settings/general');
          console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        } else if (e.code === 'auth/quota-exceeded' || e.code === 'auth/too-many-requests') {
          console.error('');
          console.error('⚠️ Quota/Rate Limit Error');
          console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
          console.error('Possible causes:');
          console.error('1. SMS quota exceeded (check Firebase Console)');
          console.error('2. Too many requests from this device');
          console.error('3. Billing not enabled on Firebase project');
          console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        } else if (e.code === 'auth/captcha-check-failed') {
          console.error('');
          console.error('🤖 reCAPTCHA Verification Failed');
          console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
          console.error('Possible causes:');
          console.error('1. reCAPTCHA container not found in DOM');
          console.error('2. Network connectivity issues');
          console.error('3. Invalid Firebase configuration');
          console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        } else if (e.code === 'auth/network-request-failed') {
          console.error('');
          console.error('🌐 Network Request Failed');
          console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
          console.error('Check internet connectivity');
          console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        }

        console.error('═══════════════════════════════════════'); // Reset reCAPTCHA on error

        _this.isRecaptchaInitialized = false;
        throw e;
      }
    })();
  }

  clearRecaptcha() {
    if (this.appVerifier) {
      try {
        this.appVerifier.clear();
      } catch (error) {
        console.error('Error clearing reCAPTCHA:', error);
      }

      this.appVerifier = null;
      this.isRecaptchaInitialized = false;
    }
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  signInWithGoogle() {
    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();
      const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
      return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(auth, provider);
    })();
  }

  linkGoogleAccount(user) {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();

      try {
        const result = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_this2.auth, provider);
        const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.linkWithCredential)(user, credential);
        }
      } catch (error) {
        if (error.code === 'auth/credential-already-in-use') {
          console.error('Error during Google sign-in: ', error);

          if (error.customData && error.customData.email) {
            const existingSignInMethods = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.fetchSignInMethodsForEmail)(_this2.auth, error.customData.email);

            if (existingSignInMethods.includes(firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider.PROVIDER_ID)) {
              yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.unlink)(_this2.auth.currentUser, firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider.PROVIDER_ID);
              const result = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_this2.auth, provider);
              const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider.credentialFromResult(result);

              if (credential) {
                yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.linkWithCredential)(user, credential);
              }
            }
          } else {
            console.error('Missing email in error details: ', error);
          }
        } else {
          throw error;
        }
      }
    })();
  }

  verifyOtp(otp) {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this3.appVerifier) _this3.recaptcha();
        const result = yield _this3.confirmationResult.confirm(otp);
        console.log(result);
        const user = result?.user;
        console.log(user);
      } catch (e) {
        throw e?.message;
      }
    })();
  }

  logout() {
    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(this.auth);
  }

  signInWithEmailAndPassword(email, password) {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userCredential = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_this4.auth, email, password);
        return userCredential;
      } catch (error) {
        throw error;
      }
    })();
  }

}

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth));
};

AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 25083:
/*!********************************************!*\
  !*** ./src/app/services/avatar.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarService": () => (/* binding */ AvatarService)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ 42111);
/* harmony import */ var geofire_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! geofire-common */ 73942);
/* harmony import */ var geofire_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(geofire_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 37556);











class AvatarService {
  constructor(auth, firestore, storage, http, authService) {
    var _this = this;

    this.auth = auth;
    this.firestore = firestore;
    this.storage = storage;
    this.http = http;
    this.authService = authService;
    this.driversSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.drivers$ = this.driversSubject.asObservable();
    this.activeListeners = {};
    this.auth.onAuthStateChanged( /*#__PURE__*/function () {
      var _ref = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
        if (user) {
          _this.user = user;
          _this.driverCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this.firestore, 'Drivers');

          _this.http.get("https://ipapi.co/json/").subscribe({
            next: res => {
              console.log('Country detection response:', res);
              _this.countryCode = res.country_code || 'NG';
            },
            error: error => {
              console.warn('Failed to detect country, using default:', error);
              _this.countryCode = 'NG'; // Default fallback
            }
          }); // Add a small delay for Android to ensure Firebase is fully initialized


          setTimeout( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            try {
              yield _this.loadUserProfile();
            } catch (error) {
              console.error('Failed to load user profile:', error); // Create a minimal offline profile to prevent app from breaking

              _this.profile = {
                Rider_id: _this.user.uid,
                Rider_name: _this.user.displayName || 'Unknown',
                Rider_phone: _this.user.phoneNumber || 'Unknown',
                Rider_email: _this.user.email || 'Unknown',
                Rider_rating: 0,
                createdAt: new Date().toISOString(),
                offline: true
              };
              console.log('Using offline profile due to error:', _this.profile);
            }
          }), 2000); // Increased delay for Android
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  bookRide(data) {
    throw new Error('Method not implemented.');
  }

  checkFirestoreConnectivity() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Checking Firestore connectivity...'); // Try to read a simple document to test connectivity

        const testDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this2.firestore, '_test_', 'connectivity'));
        console.log('Firestore connectivity check completed');
        return true;
      } catch (error) {
        console.warn('Firestore connectivity issue detected:', error); // Don't throw error, just log it and continue

        return false;
      }
    })();
  } // Android-specific wrapper for Firestore operations with better error handling


  executeFirestoreOperation(operation, operationName) {
    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const maxRetries = 3;
      let lastError;

      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          console.log(`${operationName} - Attempt ${attempt}`);
          const result = yield operation();
          console.log(`${operationName} - Success on attempt ${attempt}`);
          return result;
        } catch (error) {
          lastError = error;
          console.warn(`${operationName} - Failed on attempt ${attempt}:`, error); // Don't retry on certain errors

          if (error.code === 'permission-denied' || error.code === 'not-found') {
            throw error;
          } // Wait before retry (exponential backoff)


          if (attempt < maxRetries) {
            const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
            console.log(`Waiting ${delay}ms before retry...`);
            yield new Promise(resolve => setTimeout(resolve, delay));
          }
        }
      }

      throw lastError;
    })();
  }

  loadUserProfile() {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Loading user profile for:', _this3.user.uid);
        const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this3.firestore, 'Riders', _this3.user.uid); // Use the Android-optimized wrapper for Firestore operations

        const profileDoc = yield _this3.executeFirestoreOperation(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef), 'Load User Profile');

        if (profileDoc && profileDoc.exists()) {
          _this3.profile = profileDoc.data();
          console.log('Profile loaded successfully:', _this3.profile);
        } else {
          console.log('Profile does not exist, creating default profile'); // Create a default profile if it doesn't exist

          const defaultProfile = {
            Rider_id: _this3.user.uid,
            Rider_name: _this3.user.displayName || 'Unknown',
            Rider_phone: _this3.user.phoneNumber || 'Unknown',
            Rider_email: _this3.user.email || 'Unknown',
            Rider_rating: 0,
            createdAt: new Date().toISOString()
          }; // Use the wrapper for creating the profile too

          yield _this3.executeFirestoreOperation(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docRef, defaultProfile, {
            merge: true
          }), 'Create Default Profile');
          _this3.profile = defaultProfile;
          console.log('Default profile created:', _this3.profile);
        }
      } catch (error) {
        console.error('Error in loadUserProfile:', error); // Android-specific error handling

        if (error.code === 'unavailable' || error.code === 'deadline-exceeded') {
          // Create offline profile for Android when Firestore is unavailable
          console.log('Creating offline profile due to Firestore unavailability');
          _this3.profile = {
            Rider_id: _this3.user.uid,
            Rider_name: _this3.user.displayName || 'Unknown',
            Rider_phone: _this3.user.phoneNumber || 'Unknown',
            Rider_email: _this3.user.email || 'Unknown',
            Rider_rating: 0,
            createdAt: new Date().toISOString(),
            offline: true
          };
          return; // Don't throw error, continue with offline profile
        } else if (error.code === 'permission-denied') {
          throw new Error('Permission denied. Please ensure you are logged in properly.');
        } else {
          throw new Error(`Failed to load profile: ${error.message}`);
        }
      }
    })();
  }

  getCards() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Riders/${this.auth.currentUser.uid}/Cards`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  getUserType(uid) {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this4.firestore, `Drivers/${uid}`);
      const userDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);

      if (userDoc.exists()) {
        return 'driver';
      }

      return null;
    })();
  }

  checkRiderProfile(uid) {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Checking rider profile for uid:', uid);
        const riderDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this5.firestore, `Riders/${uid}`);
        const riderDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(riderDocRef);

        if (!riderDoc.exists()) {
          console.log('Rider document does not exist for uid:', uid);
          return false;
        }

        const data = riderDoc.data(); // Check if essential profile fields exist (name and email are required for a complete profile)

        const hasRequiredFields = !!(data?.Rider_name && data?.Rider_email);
        console.log('Rider profile check - hasRequiredFields:', hasRequiredFields, 'data:', {
          Rider_name: data?.Rider_name,
          Rider_email: data?.Rider_email,
          Rider_id: data?.Rider_id
        });
        return hasRequiredFields;
      } catch (error) {
        console.error('Error checking rider profile:', error);
        return false;
      }
    })();
  }

  RequestRideWithRiderDetails(requestDetails) {
    var _this6 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // First, validate all input data
      if (!requestDetails || !requestDetails.driverId || !requestDetails.latLng || !requestDetails.dLatLng) {
        console.error('Invalid request details:', requestDetails);
        throw new Error('Invalid request details');
      } // Ensure profile is loaded


      if (!_this6.profile) {
        try {
          yield _this6.loadUserProfile();

          if (!_this6.profile) {
            console.error('Failed to load user profile');
            throw new Error('Profile not initialized');
          }
        } catch (profileError) {
          console.error('Error loading profile:', profileError);
          throw new Error(`Profile initialization failed: ${profileError.message}`);
        }
      }

      try {
        // Check if user is authenticated
        if (!_this6.user || !_this6.user.uid) {
          throw new Error('User not authenticated');
        } // Validate driver exists


        const driverDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this6.firestore, 'Drivers', requestDetails.driverId);
        const driverDocSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(driverDocRef);

        if (!driverDocSnap.exists()) {
          console.error('Driver does not exist:', requestDetails.driverId);
          throw new Error('Driver does not exist');
        }

        const driverData = driverDocSnap.data(); // Use document ID as Driver_id if not present in the data

        if (!driverData.Driver_id) {
          driverData.Driver_id = driverDocSnap.id;
        } // Validate driver data - only check Driver_name since Driver_id is now set from doc ID


        if (!driverData.Driver_name) {
          console.error('Invalid driver data (missing Driver_name):', driverData);
          throw new Error('Invalid driver data');
        } // Create a new request document reference


        const requestRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this6.firestore, 'Request')); // Create the request data object with all required fields

        const loc = {
          Loc_lat: requestDetails.latLng.lat,
          Loc_lng: requestDetails.latLng.lng,
          Rider_id: _this6.user.uid,
          Rider_name: _this6.user.displayName || 'Unknown User',
          Rider_phone: _this6.user.phoneNumber || '',
          Rider_imgUrl: _this6.user.photoURL || '',
          Rider_rating: _this6.profile.Rider_rating || 0,
          Des_lat: requestDetails.dLatLng.lat,
          Des_lng: requestDetails.dLatLng.lng,
          Rider_Location: requestDetails.locationAddress || 'Unknown location',
          Rider_Destination: requestDetails.destinationAddress || 'Unknown destination',
          Rider_email: _this6.user.email || '',
          countDown: 20,
          cancel: false,
          price: requestDetails.price || 0,
          cash: requestDetails.cash || true,
          status: 'pending',
          driverDetails: {
            Driver_id: driverData.Driver_id,
            Driver_name: driverData.Driver_name,
            Driver_phone: driverData.Driver_phone || '',
            Driver_imgUrl: driverData.Driver_imgUrl || '',
            Driver_rating: driverData.Driver_rating || 0,
            Driver_car: driverData.Driver_car || '',
            Driver_cartype: driverData.Driver_cartype || '',
            Driver_plate: driverData.Driver_plate || ''
          },
          requestId: requestRef.id,
          driverId: requestDetails.driverId,
          createdAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
          // Shared ride fields
          sharedRideAccepted: requestDetails.sharedRideAccepted || false,
          isSharedRide: requestDetails.isSharedRide || false,
          sharedRideId: requestDetails.sharedRideId || null,
          originalPrice: requestDetails.originalPrice || requestDetails.price || 0,
          discountedPrice: requestDetails.discountedPrice || requestDetails.price || 0,
          discountPercent: requestDetails.discountPercent || 0
        };
        console.log('Creating ride request with data:', {
          requestId: requestRef.id,
          driverId: requestDetails.driverId,
          riderId: _this6.user.uid,
          sharedRideAccepted: loc.sharedRideAccepted
        }); // Create a batch for atomic operations

        const batch = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.writeBatch)(_this6.firestore);

        try {
          // Update driver document
          batch.update(driverDocRef, {
            onlineState: false,
            currentRequestId: requestRef.id
          }); // Set request document

          batch.set(requestRef, loc); // Add initial message to messages subcollection

          const messagesRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(requestRef, 'messages');
          const initialMessage = {
            msg: 'Ride request initiated',
            from: 'system',
            createdAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
            myMsg: false,
            fromName: 'System'
          }; // Use a unique ID for the message document to avoid conflicts

          const messageDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(messagesRef);
          batch.set(messageDocRef, initialMessage); // Commit all changes as a single atomic operation

          yield batch.commit();
          console.log('Ride request created successfully:', requestRef.id);
          return requestRef.id;
        } catch (batchError) {
          console.error('Error during batch commit:', batchError); // Try to roll back by updating driver status back to online

          try {
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(driverDocRef, {
              onlineState: true,
              currentRequestId: null
            });
          } catch (rollbackError) {
            console.error('Failed to rollback driver status:', rollbackError);
          }

          throw new Error(`Failed to create ride request: ${batchError.message}`);
        }
      } catch (error) {
        console.error(`Error in RequestRideWithRiderDetails:`, error); // Ensure we throw an error with a clear message

        if (error.message) {
          throw error; // Re-throw if it already has a message
        } else {
          throw new Error(`Failed to request ride: ${error}`);
        }
      }
    })();
  }

  RestartRequestSinceReject(ID) {
    var _this7 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this7.firestore, 'Request', ID);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
        cancel: false
      });
    })();
  } //delete the driver that has a request sent to him.


  deleDriverFromRequest(ID) {
    var _this8 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this8.firestore, "Request", ID));
    })();
  }

  cancelRide(ID) {
    var _this9 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this9.firestore, 'Request', ID);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
        status: true
      });
    })();
  } //Push driver info into the request database


  PushDriverToRequest(Driver) {
    var _this0 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          geohash: Driver.geohash,
          Driver_lat: Driver.Driver_lat,
          Driver_lng: Driver.Driver_lng,
          Driver_id: Driver.Driver_id,
          Driver_name: Driver.Driver_name,
          Driver_car: Driver.Driver_car,
          Driver_imgUrl: Driver.Driver_imgUrl,
          Driver_rating: Driver.Driver_rating,
          distance: 0,
          duration: 0,
          seats: Driver.seats,
          start: false,
          stop: Driver.stop,
          intransit: Driver.intransit,
          cancel: Driver.cancel,
          Driver_cartype: Driver.Driver_cartype,
          Driver_plate: Driver.Driver_plate,
          time: '',
          onlineState: Driver.onlineState
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this0.firestore, "Request", Driver.Driver_id), { ...loc
        });
      } catch (e) {
        throw new Error(e);
      }

      console.log('done');
    })();
  }

  getPriceEstimate(distance) {
    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Convert distance from meters to kilometers
        const distanceInKm = distance / 1000; // Basic initial estimate based on distance only

        const ratePerKm = 1.5; // Base rate per kilometer

        let estimatedPrice = distanceInKm * ratePerKm; // Apply minimum fare if applicable

        const minimumFare = 5; // Minimum fare amount

        if (estimatedPrice < minimumFare) {
          estimatedPrice = minimumFare;
        } // Round to 2 decimal places


        return Math.round(estimatedPrice * 100) / 100;
      } catch (error) {
        console.error('Error calculating price estimate:', error);
        throw error;
      }
    })();
  } // Add a new method for final fare calculation


  calculateFinalFare(distance, duration) {
    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Convert duration to minutes if it's in milliseconds or seconds
        let durationInMinutes = duration; // If duration is in milliseconds (common format from timestamps)

        if (duration > 1000) {
          durationInMinutes = Math.round(duration / 60000); // Convert ms to minutes
        } // Rate constants


        const ratePerKm = 1.0; // $1 per kilometer

        const ratePerMinute = 0.1; // $0.1 per minute

        const minimumFare = 5.0; // $5 minimum fare
        // Calculate fare components

        const distanceCharge = distance * ratePerKm;
        const timeCharge = durationInMinutes * ratePerMinute; // Calculate total fare

        let totalFare = distanceCharge + timeCharge; // Apply minimum fare if applicable

        if (distance < 5 || totalFare < minimumFare) {
          totalFare = minimumFare;
        } // Round to 2 decimal places for proper currency display


        return Math.round(totalFare * 100) / 100;
      } catch (error) {
        console.error('Error calculating final fare:', error);
        throw error;
      }
    })();
  }

  getDriverLocation(driverId) {
    return new Promise((resolve, reject) => {
      const driverDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, 'Drivers', driverId);
      (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(driverDocRef, doc => {
        const data = doc.data();

        if (data && data.Driver_lat) {
          const driverLocation = {
            lat: data.Driver_lat,
            lng: data.Driver_lng
          };
          resolve(driverLocation);
        } else {
          resolve(null);
        }
      }, error => {
        reject(error);
      });
    });
  }

  updateLocation(coord) {
    var _this1 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this1.firestore, `Riders/${_this1.auth.currentUser.uid}`); // First, set the document with initial data

        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
          geohash: (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashForLocation)([coord.lat, coord.lng]),
          Loc_lat: coord.lat,
          Loc_lng: coord.lng
        }, {
          merge: true
        }); // Use merge: true to avoid overwriting existing data
        // Then, update the document

        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          geohash: (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashForLocation)([coord.lat, coord.lng]),
          Loc_lat: coord.lat,
          Loc_lng: coord.lng
        });
        return true;
      } catch (e) {
        console.error('Error updating rider location:', e);
        return false;
      }
    })();
  }

  createHistory(Driver, requestId) {
    var _this10 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Get current user ID for the rider
        const riderId = _this10.user?.uid || ''; // Create a clean object with default values for all required fields

        const historyData = {
          driverId: Driver.Driver_id || '',
          riderId: riderId,
          rideId: requestId || '',
          timestamp: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
          geohash: Driver.geohash || '',
          Driver_lat: Driver.Driver_lat || 0,
          Driver_lng: Driver.Driver_lng || 0,
          Loc_lat: Driver.Loc_lat || 0,
          Loc_lng: Driver.Loc_lng || 0,
          Des_lat: Driver.Des_lat || 0,
          Des_lng: Driver.Des_lng || 0,
          Rider_Location: Driver.Rider_Location || '',
          Rider_Destination: Driver.Rider_Destination || '',
          Driver_name: Driver.Driver_name || '',
          Driver_car: Driver.Driver_car || '',
          Driver_imgUrl: Driver.Driver_imgUrl || '',
          Driver_rating: Driver.Driver_rating || 0,
          distance: Driver.distance || 0,
          duration: Driver.duration || 0,
          distanceInKm: Driver.distanceInKm || 0,
          seats: Driver.seats || 0,
          start: true,
          stop: Driver.stop || false,
          intransit: Driver.intransit || false,
          cancel: Driver.cancel || false,
          Driver_cartype: Driver.Driver_cartype || '',
          Driver_plate: Driver.Driver_plate || '',
          price: Driver.price || 0,
          onlineState: Driver.onlineState || false
        }; // Remove any remaining undefined values

        Object.keys(historyData).forEach(key => {
          if (historyData[key] === undefined) {
            historyData[key] = null; // Replace undefined with null (accepted by Firestore)
          }
        });
        console.log('Creating ride history with data:', historyData);
        const historyRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this10.firestore, 'RideHistory'));
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(historyRef, historyData);
        console.log('Ride history created successfully with distance:', historyData.distance);
        return true;
      } catch (error) {
        console.error('Error creating ride history:', error);
        throw error;
      }
    })();
  }

  UpdateCountDown(time, id) {
    var _this11 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this11.firestore, "Request", id);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          countDown: time
        });
        return true;
      } catch (e) {
        // alert(e)
        console.log(e);
        return null;
      }
    })();
  }

  AddKnownPlace(place) {
    var _this12 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this12.auth.currentUser.uid);
      console.log(place.full);

      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this12.firestore, 'Riders', `${_this12.auth.currentUser.uid}/KnownPlaces/${place.full}`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
          place
        });
        return true;
      } catch (e) {
        console.log(e);
        return null;
      }
    })();
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 0.5 - Math.cos(dLat) / 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * (1 - Math.cos(dLon)) / 2;
    return R * 2 * Math.asin(Math.sqrt(a));
  }

  checkDriversWithin(center, radiusInM) {
    var _this13 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log("Center:", center);
        console.log("Radius in meters:", radiusInM);
        const bounds = (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashQueryBounds)(center, radiusInM);
        const promises = bounds.map((b, index) => {
          const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(_this13.driverCollection, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)("geohash"), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.startAt)(b[0]), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.endAt)(b[1]));
          return new Promise((resolve, reject) => {
            const unsubscribe = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(q, snapshot => {
              const drivers = snapshot.docs.map(doc => {
                const data = doc.data(); // IMPORTANT: Include the document ID as Driver_id if not already present

                if (!data.Driver_id) {
                  data.Driver_id = doc.id;
                }

                console.log("Driver data from snapshot:", data);
                return data;
              });
              console.log("Query results for bounds", b, drivers);
              resolve(drivers);
              unsubscribe(); // Unsubscribe once data is fetched

              delete _this13.activeListeners[index];
            }, error => {
              console.error('Error in onSnapshot:', error);
              reject(error);
              unsubscribe(); // Unsubscribe in case of error

              delete _this13.activeListeners[index];
            }); // Store the unsubscribe function to manage listeners

            _this13.activeListeners[index] = unsubscribe;
          });
        });
        const results = yield Promise.all(promises);
        const allDrivers = results.reduce((acc, curr) => acc.concat(curr), []);
        console.log("All drivers from queries:", allDrivers);
        const matchingDrivers = allDrivers.filter(driver => {
          if (!driver || !driver.Driver_lat || !driver.Driver_lng) {
            console.error(`Driver ${driver?.Driver_id || 'unknown'} has missing coordinates:`, driver);
            return false;
          }

          const distanceInKm = _this13.calculateDistance(center[0], center[1], driver.Driver_lat, driver.Driver_lng);

          const distanceInM = distanceInKm * 1000;
          console.log(`Driver ${driver.Driver_id} distance:`, distanceInM);

          if (distanceInM <= radiusInM) {
            driver.duration = distanceInM / (50 / 3.6); // duration in seconds, assuming 50 km/h speed

            return true;
          } else {
            return false;
          }
        });
        console.log("Matching drivers within radius:", matchingDrivers);
        return matchingDrivers;
      } catch (e) {
        console.error('Error in checkDriversWithin:', e);
        throw new Error(e);
      }
    })();
  }

  time_convert(num) {
    var minutes = Math.floor(num / 60);
    return minutes;
  }

  getDriver() {
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(this.driverCollection, {
      idField: 'id'
    });
  }

  update(pokemon) {
    const pokemonDocumentReference = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, `pokemon/${pokemon.Driver_id}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(pokemonDocumentReference, { ...pokemon
    });
  }

  uploadImage(cameraFile, uid) {
    var _this14 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(_this14.storage, `avatars/${uid}`);

      try {
        // Upload the image as a base64 string
        yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__.uploadString)(storageRef, cameraFile.base64String, 'base64'); // Get the download URL for the uploaded image

        const imageUrl = yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(storageRef); // Reference to the user's document in Firestore

        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this14.firestore, `Riders/${uid}`); // Check if the document exists

        const docSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);

        if (docSnapshot.exists()) {
          // If the document exists, update the photoURL field
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
            photoURL: imageUrl
          });
        } else {
          // If the document does not exist, create it with the photoURL field
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
            photoURL: imageUrl
          }, {
            merge: true
          });
        }

        return imageUrl;
      } catch (e) {
        console.error('Error uploading image:', e);
        return null;
      }
    })();
  }

  createUser(name, email, img, phone, uid) {
    var _this15 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          Loc_lat: 0,
          Loc_lng: 0,
          Rider_id: uid,
          Rider_name: name,
          Rider_phone: phone,
          Rider_imgUrl: img,
          Rider_rating: 0,
          Des_lat: 0,
          Des_lng: 0,
          Rider_Location: '',
          Rider_Destination: '',
          Rider_email: email,
          countDown: 0,
          cancel: false,
          price: 0,
          cash: true
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this15.firestore, "Riders", uid), { ...loc
        });
        return true;
      } catch (e) {
        return null;
      }
    })();
  }

  getMessage() {
    //const userDocRef = collection(this.firestore, `Messages/${this.auth.currentUser.uid}/messages`);
    const userId = this.auth.currentUser?.uid;

    if (userId) {
      const messageDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Messages/${userId}/messages`);
      const oderedMessages = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(messageDocRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)('createdAt', 'asc'));
      return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(oderedMessages, {
        idField: 'id'
      });
    } else {
      return null;
    } //return collectionData(userDocRef);

  }

  getChatMessage(requestId) {
    const messagesRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Request/${requestId}/messages`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(messagesRef);
  }

  addChatEnRouteMessage(msg, requestId) {
    var _this16 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const messagesRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this16.firestore, `Request/${requestId}/messages`);
      return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)(messagesRef, {
        msg: msg,
        from: _this16.user.uid,
        createdAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
        myMsg: true,
        fromName: _this16.user.displayName
      });
    })();
  }

  updatChatMessageInfo(requestId) {
    var _this17 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this17.firestore, `Request/${requestId}`), {
        name: _this17.user.displayName,
        id: _this17.user.uid,
        phone: _this17.user.phoneNumber,
        email: _this17.user.email,
        new: true
      });
    })();
  }

  getKnownPlaces() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Riders/${this.auth.currentUser.uid}/KnownPlaces`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  getAllBlogs() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Blogs`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  getDrivers() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Drivers`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  addChatMessage(msg) {
    var _this18 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userId = _this18.auth.currentUser?.uid;
        const userName = _this18.auth.currentUser?.displayName || 'Anonymous';

        if (!userId) {
          throw new Error('User is not authenticated.');
        }

        return yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this18.firestore, `Messages/${userId}/messages`), {
          msg: msg,
          from: userId,
          createdAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
          myMsg: true,
          fromName: userName
        });
      } catch (error) {
        console.error('Error adding chat message:', error);
        throw error;
      }
    })();
  }

  updateMessageInfo() {
    var _this19 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this19.auth.currentUser;

      if (!user) {
        throw new Error('User is not authenticated.');
      }

      return yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this19.firestore, `Messages/${user.uid}`), {
        name: user.displayName || 'Anonymous',
        id: user.uid,
        phone: user.phoneNumber || '',
        email: user.email || '',
        new: true
      });
    })();
  }

  updateDriverOnlineState(ID) {
    var _this20 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this20.firestore, 'Drivers', ID);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          onlineState: true
        });
        return true;
      } catch (e) {
        //alert(e)
        console.log(e);
        return null;
      }
    })();
  }

  checkCardExistsStripe(email, last4) {
    var _this21 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('checkCardExistsStripe called with email:', email, 'and last4:', last4);
      const cardsCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this21.firestore, `Riders/${_this21.user.uid}/cards`);
      console.log('cardsCollectionRef:', cardsCollectionRef);
      const cardQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(cardsCollectionRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.where)('last4', '==', last4));
      const cardDocs = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(cardQuery);
      console.log('Number of card documents found:', cardDocs.size);
      cardDocs.forEach(doc => {
        console.log('Found card:', doc.data());
      });
      return !cardDocs.empty;
    })();
  }

  saveCard(cardDetails) {
    var _this22 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Saving card with details:', cardDetails);
      const cardsCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this22.firestore, `Riders/${_this22.user.uid}/cards`);
      const cardDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(cardsCollectionRef, cardDetails.cardId);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(cardDocRef, cardDetails);
      console.log('Card saved successfully:', cardDetails);
    })();
  }

  checkPaystackAuthCodeExists(authCode) {
    var _this23 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authCodeCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this23.firestore, 'paystackAuthCodes');
      const authCodeQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(authCodeCollectionRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.where)('authCode', '==', authCode));
      const authCodeDocs = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(authCodeQuery);
      return !authCodeDocs.empty;
    })();
  }

  savePaystackAuthCode(authCode) {
    var _this24 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authCodeDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this24.firestore, `paystackAuthCodes/${authCode}`);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(authCodeDocRef, {
        authCode
      });
    })();
  }

  updateFirestoreAfterPayment(paymentResult) {
    var _this25 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paymentDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this25.firestore, `Riders/${_this25.user.uid}/payments/lastpayment`);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(paymentDocRef, {
        paymentResult: paymentResult,
        paymentDate: new Date()
      });
    })();
  }

  getSavedPaymentMethods() {
    var _this26 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paymentMethodsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this26.firestore, `Riders/${_this26.user.uid}/cards`);
      const snapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(paymentMethodsRef);
      const methods = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return methods;
    })();
  }

  deleteSavedPaymentMethod(methodId) {
    var _this27 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paymentMethodDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this27.firestore, `Riders/${_this27.user.uid}/cards/${methodId}`);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)(paymentMethodDocRef);
    })();
  }

  setActiveCard(email, cardId) {
    var _this28 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this28.firestore, `Riders/${email}`);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
        activeCardId: cardId
      }, {
        merge: true
      });
    })();
  }

  getActiveCard(email) {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, `Riders/${email}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.docData)(userDocRef);
  } // Method to add a card for a user


  addCardStripe(email, cardId, last4) {
    var _this29 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this29.firestore, `Riders/${email}`);
      const userDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);
      const userData = userDoc.data();
      let cards = userData?.cards || [];
      cards.push({
        cardId,
        last4
      });
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
        cards
      }, {
        merge: true
      });
    })();
  }

  submitRating(ratingData) {
    var _this30 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const ratingRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this30.firestore, `ratings/${ratingData.requestId}`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(ratingRef, ratingData);
        console.log('Rating submitted successfully');
      } catch (error) {
        console.error('Error submitting rating:', error);
        throw error;
      }
    })();
  }

  getUserProfile() {
    var _this31 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this31.auth.currentUser;
      if (!user) throw new Error('No authenticated user');

      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this31.firestore, 'Riders', user.uid);
        const userDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);

        if (userDoc.exists()) {
          return userDoc.data();
        } else {
          // Create default profile if it doesn't exist (similar to loadUserProfile)
          const defaultProfile = {
            Rider_id: user.uid,
            Rider_name: user.displayName || 'Unknown',
            Rider_phone: user.phoneNumber || '',
            Rider_email: user.email || '',
            Rider_imgUrl: user.photoURL || '',
            Rider_rating: 0,
            Loc_lat: 0,
            Loc_lng: 0,
            Des_lat: 0,
            Des_lng: 0,
            Rider_Location: '',
            Rider_Destination: '',
            countDown: 0,
            cancel: false,
            price: 0,
            cash: true,
            createdAt: new Date().toISOString()
          };
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, defaultProfile);
          return defaultProfile;
        }
      } catch (error) {
        console.error('Error in getUserProfile:', error);
        throw new Error(`Failed to get user profile: ${error.message}`);
      }
    })();
  }

  createUserProfile(profileData) {
    var _this32 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this32.auth.currentUser;
      if (!user) throw new Error('No authenticated user');
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this32.firestore, 'Riders', user.uid);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, profileData, {
        merge: true
      });
      return profileData;
    })();
  } // Save ride history


  saveRideHistory(rideData) {
    var _this33 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userId = _this33.auth.currentUser?.uid;
        if (!userId) throw new Error('No user ID found'); // Ensure all required fields have valid values (not undefined)

        const historyData = {
          tripId: rideData.tripId || '',
          riderId: userId,
          driverId: rideData.driverId || '',
          driverName: rideData.driverName || rideData.Driver_name || 'Unknown Driver',
          driverImage: rideData.driverImage || rideData.Driver_imgUrl || '',
          driverCar: rideData.driverCar || rideData.Driver_car || '',
          driverPlate: rideData.driverPlate || rideData.Driver_plate || '',
          driverRating: rideData.driverRating || rideData.Driver_rating || 0,
          pickup: rideData.pickup || rideData.Rider_Location || 'Unknown pickup',
          destination: rideData.destination || rideData.Rider_Destination || 'Unknown destination',
          Loc_lat: rideData.Loc_lat || 0,
          Loc_lng: rideData.Loc_lng || 0,
          Des_lat: rideData.Des_lat || 0,
          Des_lng: rideData.Des_lng || 0,
          Rider_Location: rideData.Rider_Location || rideData.pickup || 'Unknown pickup',
          Rider_Destination: rideData.Rider_Destination || rideData.destination || 'Unknown destination',
          Driver_name: rideData.Driver_name || rideData.driverName || 'Unknown Driver',
          Driver_car: rideData.Driver_car || rideData.driverCar || '',
          Driver_imgUrl: rideData.Driver_imgUrl || rideData.driverImage || '',
          Driver_plate: rideData.Driver_plate || rideData.driverPlate || '',
          Driver_rating: rideData.Driver_rating || rideData.driverRating || rideData.rating || 0,
          price: typeof rideData.price === 'number' ? rideData.price : parseFloat(rideData.price || '0'),
          distance: typeof rideData.distance === 'number' ? rideData.distance : 0,
          duration: rideData.duration || '',
          rating: rideData.rating || rideData.Driver_rating || rideData.driverRating || 0,
          completed: rideData.completed || true,
          completedAt: rideData.completedAt || new Date(),
          timestamp: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()
        }; // Log the data being saved for debugging

        console.log('Saving ride history with data:', historyData); // 1. Save to users/{userId}/rideHistory

        const userHistoryCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this33.firestore, `users/${userId}/rideHistory`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)(userHistoryCollection, historyData); // 2. Save to RideHistory collection

        const globalHistoryCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this33.firestore, 'RideHistory');
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)(globalHistoryCollection, historyData);
        console.log('Ride history saved successfully');
        return true;
      } catch (error) {
        console.error('Error saving ride history:', error); // Return false instead of throwing to avoid crashing the ride stop process

        return false;
      }
    })();
  } // Get ride history


  getRideHistory() {
    const userId = this.auth.currentUser?.uid;
    if (!userId) return [];
    const historyCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `users/${userId}/rideHistory`);
    const historyQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(historyCollection, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)('timestamp', 'desc'));
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(historyQuery);
  }

}

AvatarService.ɵfac = function AvatarService_Factory(t) {
  return new (t || AvatarService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};

AvatarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: AvatarService,
  factory: AvatarService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 75596:
/*!*********************************************!*\
  !*** ./src/app/services/overlay.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayService": () => (/* binding */ OverlayService)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 58385);



class OverlayService {
  constructor(loadingCtrl, toastCtrl, alertCtrl) {
    this.loadingCtrl = loadingCtrl;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.loader = null;
    this.isLoading = false;
  }

  showLoader(message) {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Always dismiss any existing loader first
      yield _this.hideLoader();
      _this.isLoading = true;
      _this.loader = yield _this.loadingCtrl.create({
        message: message,
        spinner: 'bubbles'
      });
      yield _this.loader.present();
      return _this.loader;
    })();
  }

  hideLoader() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoading = false;

      try {
        if (_this2.loader) {
          yield _this2.loader.dismiss();
          _this2.loader = null;
        } // Force dismiss any lingering loaders


        const topLoader = yield _this2.loadingCtrl.getTop();

        if (topLoader) {
          yield topLoader.dismiss();
        }
      } catch (err) {
        console.log('Error dismissing loader:', err);
      }
    })();
  }

  showToast(_x) {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message, duration = 2000) {
      const toast = yield _this3.toastCtrl.create({
        message: message,
        duration: duration,
        position: 'bottom'
      });
      yield toast.present();
    }).apply(this, arguments);
  }

  showAlert(header, message) {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertCtrl.create({
        header: header,
        message: message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  showConfirmAlert(header, message) {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const alert = yield _this5.alertCtrl.create({
            header,
            message,
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: () => resolve(false)
            }, {
              text: 'Try Again',
              handler: () => resolve(true)
            }]
          });
          yield alert.present();
        });

        return function (_x2) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

}

OverlayService.ɵfac = function OverlayService_Factory(t) {
  return new (t || OverlayService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController));
};

OverlayService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OverlayService,
  factory: OverlayService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 51863:
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentService": () => (/* binding */ PaymentService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class PaymentService {
    constructor(http) {
        this.http = http;
        // Normalize serverUrl by removing any trailing slashes so concatenation
        // like `${this.serverUrl}/setup-intent` won't produce a double slash.
        this.serverUrl = String(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverUrl || '').replace(/\/\/+$|\/+$/g, '');
    }
    createSetupIntent(email) {
        return this.http.post(`${this.serverUrl}/setup-intent`, { email });
    }
    savePaymentMethod(email, paymentMethodId) {
        return this.http.post(`${this.serverUrl}/save-payment-method`, { email, paymentMethodId });
    }
    retrievePaymentMethod(paymentMethodId) {
        return this.http.post(`${this.serverUrl}/retrieve-payment-method`, { paymentMethodId });
    }
    checkCardExistsStripe(email, last4) {
        return this.http.post(`${this.serverUrl}/check-card-exists`, { email, last4 });
    }
    payWithStripe(amount, currency, paymentMethodId, customerId) {
        return this.http.post(`${this.serverUrl}/pay/stripe`, { amount, currency, paymentMethodId, customerId });
    }
    processPaymentWithCardId(email, amount, cardId) {
        return this.http.post('/api/process-payment', { email, amount, cardId });
    }
    // Process payment for ride with payment splitting
    processRidePayment(paymentData) {
        return this.http.post(`${this.serverUrl}/process-ride-payment`, paymentData);
    }
    // Create a payment intent for immediate charge
    createPaymentIntent(paymentData) {
        return this.http.post(`${this.serverUrl}/create-payment-intent`, paymentData);
    }
}
PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PaymentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 70452:
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsService": () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




const DEFAULT_SETTINGS = {
    currency: 'USD',
    currencySymbol: '$'
};
class SettingsService {
    constructor(firestore) {
        this.firestore = firestore;
        this.settingsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(DEFAULT_SETTINGS);
        this.unsubscribe = null;
        // Observable for components to subscribe to
        this.settings$ = this.settingsSubject.asObservable();
        this.initSettingsListener();
    }
    // Current values (synchronous access)
    get currency() {
        return this.settingsSubject.value.currency;
    }
    get currencySymbol() {
        return this.settingsSubject.value.currencySymbol;
    }
    get settings() {
        return this.settingsSubject.value;
    }
    /**
     * Initialize real-time listener for Settings/general document
     */
    initSettingsListener() {
        try {
            const settingsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, 'Settings', 'general');
            this.unsubscribe = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(settingsRef, (docSnapshot) => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    const settings = {
                        currency: data['currency'] || DEFAULT_SETTINGS.currency,
                        currencySymbol: data['currencySymbol'] || DEFAULT_SETTINGS.currencySymbol
                    };
                    console.log('Settings updated:', settings);
                    this.settingsSubject.next(settings);
                }
                else {
                    // Document doesn't exist, use defaults
                    console.log('Settings document not found, using defaults');
                    this.settingsSubject.next(DEFAULT_SETTINGS);
                }
            }, (error) => {
                console.error('Error listening to settings:', error);
                // Keep using current/default values on error
            });
        }
        catch (error) {
            console.error('Error initializing settings listener:', error);
        }
    }
    /**
     * Format a price with the current currency symbol
     * @param price The price value to format
     * @param decimals Number of decimal places (default: 2)
     * @returns Formatted price string with currency symbol
     */
    formatPrice(price, decimals = 2) {
        const numPrice = typeof price === 'string' ? parseFloat(price) : price;
        if (isNaN(numPrice)) {
            return `${this.currencySymbol}0.00`;
        }
        return `${this.currencySymbol}${numPrice.toFixed(decimals)}`;
    }
    /**
     * Format a price range with the current currency symbol
     * @param min Minimum price
     * @param max Maximum price
     * @param decimals Number of decimal places (default: 0)
     * @returns Formatted price range string
     */
    formatPriceRange(min, max, decimals = 0) {
        return `${this.currencySymbol}${min.toFixed(decimals)} - ${this.currencySymbol}${max.toFixed(decimals)}`;
    }
    ngOnDestroy() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore)); };
SettingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 94948:
/*!********************************************************!*\
  !*** ./src/app/trip-summary/trip-summary.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripSummaryComponent": () => (/* binding */ TripSummaryComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/avatar.service */ 25083);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settings.service */ 70452);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);










function TripSummaryComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38)(1, "ion-chip", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Shared Ride");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}

function TripSummaryComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r1.settingsService.currencySymbol, "", ctx_r1.tripData.formattedPrice || ctx_r1.tripData.price || "0.00", " ");
  }
}

function TripSummaryComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41)(1, "span", 42)(2, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r2.settingsService.currencySymbol, "", ctx_r2.tripData.originalPrice || ctx_r2.tripData.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r2.settingsService.currencySymbol, "", ctx_r2.tripData.discountedPrice || ctx_r2.tripData.price, "");
  }
}

function TripSummaryComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" -", ctx_r3.settingsService.currencySymbol, "", (ctx_r3.tripData.originalPrice - ctx_r3.tripData.discountedPrice).toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Saved (", ctx_r3.tripData.discountPercent, "%)");
  }
}

function TripSummaryComponent_ion_icon_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TripSummaryComponent_ion_icon_58_Template_ion_icon_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const i_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.setRating(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("selected", i_r7 <= ctx_r4.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", i_r7 <= ctx_r4.rating ? "star" : "star-outline");
  }
}

function TripSummaryComponent_ion_spinner_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-spinner", 48);
  }
}

function TripSummaryComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

const _c0 = function () {
  return [1, 2, 3, 4, 5];
};

class TripSummaryComponent {
  constructor(modalCtrl, firestore, avatarService, toastController, settingsService) {
    this.modalCtrl = modalCtrl;
    this.firestore = firestore;
    this.avatarService = avatarService;
    this.toastController = toastController;
    this.settingsService = settingsService;
    this.tripData = {};
    this.rating = 0;
    this.comment = '';
    this.isSubmitting = false; // Animation states

    this.animateIn = false;
  }

  ngOnInit() {
    // If rideData is provided, use it, otherwise load from Firestore
    if (this.rideData) {
      this.tripData = this.rideData; // Extract tripId from rideData if not explicitly provided

      if (!this.tripId && this.rideData.tripId) {
        this.tripId = this.rideData.tripId;
      } // Extract driverId from rideData if not explicitly provided


      if (!this.driverId && this.rideData.driverId) {
        this.driverId = this.rideData.driverId;
      } // Format any additional fields as needed


      this.formatTripData();
    } else {
      this.loadTripData();
    } // Trigger animation after a short delay


    setTimeout(() => {
      this.animateIn = true;
    }, 100);
  }

  loadTripData() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.tripId) {
        console.error('No trip ID provided');
        return;
      }

      try {
        const tripDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this.firestore, 'Request', _this.tripId));

        if (tripDoc.exists()) {
          _this.tripData = tripDoc.data(); // Format distance from meters to kilometers

          if (_this.tripData.distance) {
            _this.tripData.distanceInKm = (_this.tripData.distance / 1000).toFixed(1);
          } // Format duration if needed


          if (_this.tripData.duration && typeof _this.tripData.duration === 'number') {
            _this.tripData.durationFormatted = _this.formatDuration(_this.tripData.duration);
          } else {
            _this.tripData.durationFormatted = _this.tripData.duration;
          } // Format price if needed


          if (_this.tripData.price) {
            _this.tripData.formattedPrice = _this.formatPrice(_this.tripData.price);
          }
        } else {
          console.error('Trip not found');
        }
      } catch (error) {
        console.error('Error loading trip data:', error);
      }
    })();
  }

  formatTripData() {
    // Format distance from meters to kilometers
    if (this.tripData.distance) {
      this.tripData.distanceInKm = (this.tripData.distance / 1000).toFixed(1);
    } // Format duration if needed


    if (this.tripData.duration && typeof this.tripData.duration === 'number') {
      this.tripData.durationFormatted = this.formatDuration(this.tripData.duration);
    } else {
      this.tripData.durationFormatted = this.tripData.duration;
    } // Format price if needed


    if (this.tripData.price) {
      this.tripData.formattedPrice = this.formatPrice(this.tripData.price);
    }
  }

  formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      const remainingMinutes = minutes % 60;
      return `${hours}h ${remainingMinutes}m`;
    } else {
      return `${minutes} min`;
    }
  }

  formatPrice(price) {
    return price.toFixed(2);
  }

  setRating(rating) {
    this.rating = rating;
  }

  submitRating() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.rating === 0) {
        const toast = yield _this2.toastController.create({
          message: 'Please select a rating before submitting',
          duration: 2000,
          position: 'bottom',
          color: 'warning'
        });
        yield toast.present();
        return;
      }

      _this2.isSubmitting = true;

      try {
        // Check if tripId exists before attempting to update
        if (!_this2.tripId) {
          console.error('No trip ID available for rating submission');
          throw new Error('Missing trip ID');
        } // Update the trip record with the rating


        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this2.firestore, 'Request', _this2.tripId), {
          riderRating: _this2.rating,
          ratingComment: _this2.comment,
          ratedAt: new Date().toISOString()
        }); // If there's a driver ID, update their average rating

        if (_this2.driverId) {
          yield _this2.updateDriverRating(_this2.driverId, _this2.rating);
        }

        const toast = yield _this2.toastController.create({
          message: 'Thank you for your feedback!',
          duration: 2000,
          position: 'bottom',
          color: 'success'
        });
        yield toast.present(); // Close the modal after a short delay

        setTimeout(() => {
          _this2.dismiss();
        }, 1000);
      } catch (error) {
        console.error('Error submitting rating:', error);
        const toast = yield _this2.toastController.create({
          message: 'Failed to submit rating. Please try again.',
          duration: 2000,
          position: 'bottom',
          color: 'danger'
        });
        yield toast.present();
      } finally {
        _this2.isSubmitting = false;
      }
    })();
  }

  updateDriverRating(driverId, newRating) {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const driverRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this3.firestore, 'Drivers', driverId);
      const driverDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(driverRef);

      if (driverDoc.exists()) {
        const driverData = driverDoc.data();
        const currentRating = driverData.rating || 0;
        const ratingCount = driverData.ratingCount || 0; // Calculate new average rating

        const newAvgRating = (currentRating * ratingCount + newRating) / (ratingCount + 1);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(driverRef, {
          rating: newAvgRating,
          ratingCount: ratingCount + 1
        });
      }
    })();
  }

  dismiss() {
    // Save the final ride data before dismissing
    if (this.tripData && !this.tripData.historySaved) {
      // Mark as saved to prevent duplicate saves
      this.tripData.historySaved = true; // Prepare complete ride data for history

      const finalRideData = {
        tripId: this.tripId || this.tripData.tripId || '',
        riderId: this.avatarService.user?.uid || '',
        driverId: this.driverId || this.tripData.driverId || '',
        driverName: this.tripData.driverName || this.tripData.Driver_name || 'Unknown Driver',
        driverImage: this.tripData.driverImage || this.tripData.Driver_imgUrl || '',
        driverCar: this.tripData.driverCar || this.tripData.Driver_car || '',
        driverPlate: this.tripData.driverPlate || this.tripData.Driver_plate || '',
        driverRating: this.rating || this.tripData.rating || this.tripData.driverRating || this.tripData.Driver_rating || 0,
        pickup: this.tripData.pickup || this.tripData.Rider_Location || 'Unknown pickup',
        destination: this.tripData.destination || this.tripData.Rider_Destination || 'Unknown destination',
        Loc_lat: this.tripData.Loc_lat || 0,
        Loc_lng: this.tripData.Loc_lng || 0,
        Des_lat: this.tripData.Des_lat || 0,
        Des_lng: this.tripData.Des_lng || 0,
        Rider_Location: this.tripData.Rider_Location || this.tripData.pickup || 'Unknown pickup',
        Rider_Destination: this.tripData.Rider_Destination || this.tripData.destination || 'Unknown destination',
        Driver_name: this.tripData.Driver_name || this.tripData.driverName || 'Unknown Driver',
        Driver_car: this.tripData.Driver_car || this.tripData.driverCar || '',
        Driver_imgUrl: this.tripData.Driver_imgUrl || this.tripData.driverImage || '',
        Driver_plate: this.tripData.Driver_plate || this.tripData.driverPlate || '',
        Driver_rating: this.rating || this.tripData.Driver_rating || this.tripData.driverRating || 0,
        price: this.tripData.price || 0,
        distance: this.tripData.distance || 0,
        duration: this.tripData.duration || '',
        rating: this.rating || this.tripData.rating || 0,
        ratingComment: this.comment || '',
        completed: true,
        completedAt: this.tripData.completedAt || new Date(),
        timestamp: new Date()
      };
      console.log("Pinpointed ride data to saved distance:", finalRideData.distance); // Save to history (don't await to avoid blocking dismiss)

      this.avatarService.saveRideHistory(finalRideData).catch(err => {
        console.error('Error saving ride history on dismiss:', err);
      });
    }

    this.modalCtrl.dismiss({
      rated: this.rating > 0,
      rating: this.rating
    });
  }

}

TripSummaryComponent.ɵfac = function TripSummaryComponent_Factory(t) {
  return new (t || TripSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_1__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
};

TripSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TripSummaryComponent,
  selectors: [["app-trip-summary"]],
  inputs: {
    tripId: "tripId",
    driverId: "driverId",
    rideData: "rideData"
  },
  decls: 64,
  vars: 16,
  consts: [[1, "ion-no-border"], ["color", "light"], [1, "ion-text-center"], ["slot", "end"], [3, "click"], ["name", "close-outline"], [1, "ion-padding"], [1, "summary-container"], [1, "trip-card"], [1, "trip-details"], [1, "route-visualization"], [1, "route-dot", "start"], [1, "route-line"], [1, "route-dot", "end"], [1, "locations"], [1, "location-item"], [1, "location-label"], [1, "location-value"], ["class", "shared-ride-label", 4, "ngIf"], [1, "trip-stats"], [1, "stat-item"], ["name", "cash-outline"], ["class", "stat-value", 4, "ngIf"], ["class", "shared-ride-price", 4, "ngIf"], [1, "stat-label"], ["class", "stat-item savings-stat", 4, "ngIf"], ["name", "speedometer-outline"], [1, "stat-value"], ["name", "time-outline"], [1, "rating-card"], [1, "rating-container"], [1, "stars"], [3, "name", "selected", "click", 4, "ngFor", "ngForOf"], [1, "comment-box"], ["placeholder", "Add a comment (optional)", "rows", "3", "maxlength", "200", 3, "ngModel", "ngModelChange"], ["expand", "block", 1, "submit-button", 3, "disabled", "click"], ["name", "dots", 4, "ngIf"], [4, "ngIf"], [1, "shared-ride-label"], ["color", "success"], ["name", "people"], [1, "shared-ride-price"], [1, "original-price"], [1, "final-price"], [1, "stat-item", "savings-stat"], ["name", "pricetag-outline", "color", "success"], [1, "stat-value", "savings-value"], [3, "name", "click"], ["name", "dots"]],
  template: function TripSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Trip Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-buttons", 3)(5, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TripSummaryComponent_Template_ion_button_click_5_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 6)(8, "div", 7)(9, "ion-card", 8)(10, "ion-card-header")(11, "ion-card-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Trip Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-card-content")(14, "div", 9)(15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 11)(17, "div", 12)(18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15)(26, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, TripSummaryComponent_div_30_Template, 5, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 19)(32, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "ion-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, TripSummaryComponent_div_34_Template, 2, 2, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, TripSummaryComponent_div_35_Template, 6, 4, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, TripSummaryComponent_div_38_Template, 6, 3, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "ion-icon", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Distance");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "ion-icon", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "ion-card", 29)(52, "ion-card-header")(53, "ion-card-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Rate Your Trip");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "ion-card-content")(56, "div", 30)(57, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, TripSummaryComponent_ion_icon_58_Template, 1, 3, "ion-icon", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ion-item", 33)(60, "ion-textarea", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TripSummaryComponent_Template_ion_textarea_ngModelChange_60_listener($event) {
        return ctx.comment = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "ion-button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TripSummaryComponent_Template_ion_button_click_61_listener() {
        return ctx.submitRating();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, TripSummaryComponent_ion_spinner_62_Template, 1, 0, "ion-spinner", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, TripSummaryComponent_span_63_Template, 2, 0, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("animate-in", ctx.animateIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tripData.locationAddress || "Pickup location");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tripData.destinationAddress || "Drop-off location");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tripData.isSharedRide);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.tripData.isSharedRide);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tripData.isSharedRide);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tripData.isSharedRide);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tripData.distance || 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tripData.durationFormatted || "0 min");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.comment);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isSubmitting);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isSubmitting);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor],
  styles: ["[_nghost-%COMP%] {\n  --card-border-radius: 16px;\n  --animation-duration: 0.4s;\n}\n\n.summary-container[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity var(--animation-duration) ease-out, transform var(--animation-duration) ease-out;\n}\n\n.summary-container.animate-in[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n\nion-card[_ngcontent-%COMP%] {\n  border-radius: var(--card-border-radius);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n\nion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\nion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.trip-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.route-visualization[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  width: 80%;\n  padding: 10px 0;\n}\n\n.route-visualization[_ngcontent-%COMP%]   .route-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n\n.route-visualization[_ngcontent-%COMP%]   .route-dot.start[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary);\n}\n\n.route-visualization[_ngcontent-%COMP%]   .route-dot.end[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-danger);\n}\n\n.route-visualization[_ngcontent-%COMP%]   .route-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: linear-gradient(to right, var(--ion-color-primary), var(--ion-color-danger));\n  margin: 0 8px;\n}\n\n.locations[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.locations[_ngcontent-%COMP%]   .location-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.locations[_ngcontent-%COMP%]   .location-item[_ngcontent-%COMP%]   .location-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-medium);\n  margin-bottom: 4px;\n}\n\n.locations[_ngcontent-%COMP%]   .location-item[_ngcontent-%COMP%]   .location-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.trip-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.trip-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  padding: 10px;\n}\n\n.trip-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--ion-color-primary);\n  margin-bottom: 8px;\n}\n\n.trip-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.trip-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-medium);\n}\n\n.rating-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.rating-container[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.rating-container[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #ccc;\n  cursor: pointer;\n  transition: color 0.2s, transform 0.2s;\n}\n\n.rating-container[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   ion-icon.selected[_ngcontent-%COMP%] {\n  color: #ffb400;\n}\n\n.rating-container[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.rating-container[_ngcontent-%COMP%]   .comment-box[_ngcontent-%COMP%] {\n  width: 100%;\n  --background: #f8f8f8;\n  --border-radius: 12px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\n.rating-container[_ngcontent-%COMP%]   .comment-box[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n\n.rating-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  --border-radius: 12px;\n  height: 48px;\n  font-weight: 500;\n  width: 100%;\n}\n\n.rating-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.shared-ride-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 12px 0;\n}\n\n.shared-ride-label[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  --background: var(--ion-color-success);\n  --color: white;\n  font-weight: 600;\n  padding: 8px 16px;\n}\n\n.shared-ride-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.shared-ride-price[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: var(--ion-color-medium);\n  margin-bottom: 2px;\n}\n\n.shared-ride-price[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.shared-ride-price[_ngcontent-%COMP%]   .final-price[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 700;\n  color: var(--ion-color-success);\n}\n\n.savings-stat[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-success) !important;\n}\n\n.savings-stat[_ngcontent-%COMP%]   .savings-value[_ngcontent-%COMP%] {\n  color: var(--ion-color-success) !important;\n  font-weight: 700;\n}\n\n@media (min-width: 768px) {\n  .summary-container[_ngcontent-%COMP%] {\n    max-width: 600px;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaXAtc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG9HQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFHQTtFQUNFLHdDQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVFO0VBQ0UsbUJBQUE7QUFBSjs7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlJO0VBQ0UsMENBQUE7QUFGTjs7QUFLSTtFQUNFLHlDQUFBO0FBSE47O0FBT0U7RUFDRSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHdGQUFBO0VBQ0EsYUFBQTtBQUxKOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQU5GOztBQVFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBTko7O0FBUUk7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFOTjs7QUFTSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFQTjs7QUFZQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBV0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0FBVEo7O0FBV0k7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFUTjs7QUFZSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVZOOztBQWFJO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtBQVhOOztBQWdCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWJGOztBQWVFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUFiSjs7QUFlSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBYk47O0FBZU07RUFDRSxjQUFBO0FBYlI7O0FBZ0JNO0VBQ0UscUJBQUE7QUFkUjs7QUFtQkU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFqQko7O0FBbUJJO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQWpCTjs7QUFxQkU7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQW5CSjs7QUFxQkk7RUFDRSxpQkFBQTtBQW5CTjs7QUF5QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBdEJGOztBQXdCRTtFQUNFLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF0Qko7O0FBMkJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUF4QkY7O0FBMEJFO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBeEJKOztBQTBCSTtFQUNFLDZCQUFBO0FBeEJOOztBQTRCRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQTFCSjs7QUFnQ0U7RUFDRSwwQ0FBQTtBQTdCSjs7QUFnQ0U7RUFDRSwwQ0FBQTtFQUNBLGdCQUFBO0FBOUJKOztBQW1DQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0VBaENGO0FBQ0YiLCJmaWxlIjoidHJpcC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tY2FyZC1ib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIC0tYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uc3VtbWFyeS1jb250YWluZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSBlYXNlLW91dCwgdHJhbnNmb3JtIHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgJi5hbmltYXRlLWluIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1ib3JkZXItcmFkaXVzKTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIFxyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgXHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRyaXAtZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLnJvdXRlLXZpc3VhbGl6YXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBcclxuICAucm91dGUtZG90IHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgXHJcbiAgICAmLnN0YXJ0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmVuZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucm91dGUtbGluZSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgdmFyKC0taW9uLWNvbG9yLWRhbmdlcikpO1xyXG4gICAgbWFyZ2luOiAwIDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2NhdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEycHg7XHJcbiAgXHJcbiAgLmxvY2F0aW9uLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxuICAgIC5sb2NhdGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvY2F0aW9uLXZhbHVlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50cmlwLXN0YXRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIFxyXG4gIC5zdGF0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0YXQtdmFsdWUge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3RhdC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmF0aW5nLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIFxyXG4gIC5zdGFycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBjb2xvcjogI2NjYztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcclxuICAgICAgXHJcbiAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZiNDAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNvbW1lbnQtYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgIFxyXG4gICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgaW9uLXNwaW5uZXIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFNoYXJlZCBSaWRlIExhYmVsXHJcbi5zaGFyZWQtcmlkZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDEycHggMDtcclxuICBcclxuICBpb24tY2hpcCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gU2hhcmVkIFJpZGUgUHJpY2UgRGlzcGxheVxyXG4uc2hhcmVkLXJpZGUtcHJpY2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gIC5vcmlnaW5hbC1wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIFxyXG4gICAgZGVsIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5maW5hbC1wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTYXZpbmdzIHN0YXRcclxuLnNhdmluZ3Mtc3RhdCB7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuc2F2aW5ncy12YWx1ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBhZGp1c3RtZW50c1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuc3VtbWFyeS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyA5ShOlRI8493ovNQ4e--utZawgmjc3x0g',
        authDomain: 'pegasus-2be94.firebaseapp.com',
        projectId: 'pegasus-2be94',
        storageBucket: 'pegasus-2be94.firebasestorage.app',
        messagingSenderId: '459110381543',
        appId: '1:459110381543:android:ba2071e2cea27c5cdfaf42'
    },
    apiKey: 'AIzaSyCTYjoPhLcshZVuEdr-amopUuVMy8lyEmA',
    onesignal: {
        appId: 'ba7d77ed-1525-416c-9ac5-7b5d36e68740',
        restApiKey: 'YTM3ODgyMzQtNjg1ZC00YTQwLWJmNjItNTA4M2VkMmY3MDdl',
        android_channel_id: ''
    },
    serverUrl: "https://payment-service-pi.vercel.app/",
    pushNotificationServerUrl: "https://payment-service-pi.vercel.app/",
    CountryJson: [
        {
            "name": "Afghanistan",
            "dialCode": "+93",
            "isoCode": "AF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/af.svg"
        },
        {
            "name": "Aland Islands",
            "dialCode": "+358",
            "isoCode": "AX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ax.svg"
        },
        {
            "name": "Albania",
            "dialCode": "+355",
            "isoCode": "AL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/al.svg"
        },
        {
            "name": "Algeria",
            "dialCode": "+213",
            "isoCode": "DZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dz.svg"
        },
        {
            "name": "American Samoa",
            "dialCode": "+1684",
            "isoCode": "AS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/as.svg"
        },
        {
            "name": "Andorra",
            "dialCode": "+376",
            "isoCode": "AD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ad.svg"
        },
        {
            "name": "Angola",
            "dialCode": "+244",
            "isoCode": "AO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ao.svg"
        },
        {
            "name": "Anguilla",
            "dialCode": "+1264",
            "isoCode": "AI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ai.svg"
        },
        {
            "name": "Antarctica",
            "dialCode": "+672",
            "isoCode": "AQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/aq.svg"
        },
        {
            "name": "Antigua and Barbuda",
            "dialCode": "+1268",
            "isoCode": "AG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ag.svg"
        },
        {
            "name": "Argentina",
            "dialCode": "+54",
            "isoCode": "AR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ar.svg"
        },
        {
            "name": "Armenia",
            "dialCode": "+374",
            "isoCode": "AM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/am.svg"
        },
        {
            "name": "Aruba",
            "dialCode": "+297",
            "isoCode": "AW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/aw.svg"
        },
        {
            "name": "Ascension Island",
            "dialCode": "+247",
            "isoCode": "AC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ac.svg"
        },
        {
            "name": "Australia",
            "dialCode": "+61",
            "isoCode": "AU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/au.svg"
        },
        {
            "name": "Austria",
            "dialCode": "+43",
            "isoCode": "AT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/at.svg"
        },
        {
            "name": "Azerbaijan",
            "dialCode": "+994",
            "isoCode": "AZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/az.svg"
        },
        {
            "name": "Bahamas",
            "dialCode": "+1242",
            "isoCode": "BS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bs.svg"
        },
        {
            "name": "Bahrain",
            "dialCode": "+973",
            "isoCode": "BH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bh.svg"
        },
        {
            "name": "Bangladesh",
            "dialCode": "+880",
            "isoCode": "BD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bd.svg"
        },
        {
            "name": "Barbados",
            "dialCode": "+1246",
            "isoCode": "BB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bb.svg"
        },
        {
            "name": "Belarus",
            "dialCode": "+375",
            "isoCode": "BY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/by.svg"
        },
        {
            "name": "Belgium",
            "dialCode": "+32",
            "isoCode": "BE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/be.svg"
        },
        {
            "name": "Belize",
            "dialCode": "+501",
            "isoCode": "BZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bz.svg"
        },
        {
            "name": "Benin",
            "dialCode": "+229",
            "isoCode": "BJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bj.svg"
        },
        {
            "name": "Bermuda",
            "dialCode": "+1441",
            "isoCode": "BM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bm.svg"
        },
        {
            "name": "Bhutan",
            "dialCode": "+975",
            "isoCode": "BT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bt.svg"
        },
        {
            "name": "Bolivia",
            "dialCode": "+591",
            "isoCode": "BO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bo.svg"
        },
        {
            "name": "Bosnia and Herzegovina",
            "dialCode": "+387",
            "isoCode": "BA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ba.svg"
        },
        {
            "name": "Botswana",
            "dialCode": "+267",
            "isoCode": "BW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bw.svg"
        },
        {
            "name": "Brazil",
            "dialCode": "+55",
            "isoCode": "BR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg"
        },
        {
            "name": "British Indian Ocean Territory",
            "dialCode": "+246",
            "isoCode": "IO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/io.svg"
        },
        {
            "name": "Brunei Darussalam",
            "dialCode": "+673",
            "isoCode": "BN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bn.svg"
        },
        {
            "name": "Bulgaria",
            "dialCode": "+359",
            "isoCode": "BG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bg.svg"
        },
        {
            "name": "Burkina Faso",
            "dialCode": "+226",
            "isoCode": "BF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bf.svg"
        },
        {
            "name": "Burundi",
            "dialCode": "+257",
            "isoCode": "BI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bi.svg"
        },
        {
            "name": "Cambodia",
            "dialCode": "+855",
            "isoCode": "KH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kh.svg"
        },
        {
            "name": "Cameroon",
            "dialCode": "+237",
            "isoCode": "CM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cm.svg"
        },
        {
            "name": "Canada",
            "dialCode": "+1",
            "isoCode": "CA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ca.svg"
        },
        {
            "name": "Cape Verde",
            "dialCode": "+238",
            "isoCode": "CV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cv.svg"
        },
        {
            "name": "Cayman Islands",
            "dialCode": "+1345",
            "isoCode": "KY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ky.svg"
        },
        {
            "name": "Central African Republic",
            "dialCode": "+236",
            "isoCode": "CF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cf.svg"
        },
        {
            "name": "Chad",
            "dialCode": "+235",
            "isoCode": "TD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/td.svg"
        },
        {
            "name": "Chile",
            "dialCode": "+56",
            "isoCode": "CL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cl.svg"
        },
        {
            "name": "China",
            "dialCode": "+86",
            "isoCode": "CN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cn.svg"
        },
        {
            "name": "Christmas Island",
            "dialCode": "+61",
            "isoCode": "CX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cx.svg"
        },
        {
            "name": "Cocos (Keeling) Islands",
            "dialCode": "+61",
            "isoCode": "CC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cc.svg"
        },
        {
            "name": "Colombia",
            "dialCode": "+57",
            "isoCode": "CO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/co.svg"
        },
        {
            "name": "Comoros",
            "dialCode": "+269",
            "isoCode": "KM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/km.svg"
        },
        {
            "name": "Congo",
            "dialCode": "+242",
            "isoCode": "CG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cg.svg"
        },
        {
            "name": "Cook Islands",
            "dialCode": "+682",
            "isoCode": "CK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ck.svg"
        },
        {
            "name": "Costa Rica",
            "dialCode": "+506",
            "isoCode": "CR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cr.svg"
        },
        {
            "name": "Croatia",
            "dialCode": "+385",
            "isoCode": "HR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hr.svg"
        },
        {
            "name": "Cuba",
            "dialCode": "+53",
            "isoCode": "CU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cu.svg"
        },
        {
            "name": "Cyprus",
            "dialCode": "+357",
            "isoCode": "CY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cy.svg"
        },
        {
            "name": "Czech Republic",
            "dialCode": "+420",
            "isoCode": "CZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cz.svg"
        },
        {
            "name": "Democratic Republic of the Congo",
            "dialCode": "+243",
            "isoCode": "CD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cd.svg"
        },
        {
            "name": "Denmark",
            "dialCode": "+45",
            "isoCode": "DK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dk.svg"
        },
        {
            "name": "Djibouti",
            "dialCode": "+253",
            "isoCode": "DJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dj.svg"
        },
        {
            "name": "Dominica",
            "dialCode": "+1767",
            "isoCode": "DM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dm.svg"
        },
        {
            "name": "Dominican Republic",
            "dialCode": "+1849",
            "isoCode": "DO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/do.svg"
        },
        {
            "name": "Ecuador",
            "dialCode": "+593",
            "isoCode": "EC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ec.svg"
        },
        {
            "name": "Egypt",
            "dialCode": "+20",
            "isoCode": "EG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/eg.svg"
        },
        {
            "name": "El Salvador",
            "dialCode": "+503",
            "isoCode": "SV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sv.svg"
        },
        {
            "name": "Equatorial Guinea",
            "dialCode": "+240",
            "isoCode": "GQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gq.svg"
        },
        {
            "name": "Eritrea",
            "dialCode": "+291",
            "isoCode": "ER",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/er.svg"
        },
        {
            "name": "Estonia",
            "dialCode": "+372",
            "isoCode": "EE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ee.svg"
        },
        {
            "name": "Eswatini",
            "dialCode": "+268",
            "isoCode": "SZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sz.svg"
        },
        {
            "name": "Ethiopia",
            "dialCode": "+251",
            "isoCode": "ET",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/et.svg"
        },
        {
            "name": "Falkland Islands (Malvinas)",
            "dialCode": "+500",
            "isoCode": "FK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fk.svg"
        },
        {
            "name": "Faroe Islands",
            "dialCode": "+298",
            "isoCode": "FO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fo.svg"
        },
        {
            "name": "Fiji",
            "dialCode": "+679",
            "isoCode": "FJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fj.svg"
        },
        {
            "name": "Finland",
            "dialCode": "+358",
            "isoCode": "FI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fi.svg"
        },
        {
            "name": "France",
            "dialCode": "+33",
            "isoCode": "FR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fr.svg"
        },
        {
            "name": "French Guiana",
            "dialCode": "+594",
            "isoCode": "GF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gf.svg"
        },
        {
            "name": "French Polynesia",
            "dialCode": "+689",
            "isoCode": "PF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pf.svg"
        },
        {
            "name": "Gabon",
            "dialCode": "+241",
            "isoCode": "GA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ga.svg"
        },
        {
            "name": "Gambia",
            "dialCode": "+220",
            "isoCode": "GM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gm.svg"
        },
        {
            "name": "Georgia",
            "dialCode": "+995",
            "isoCode": "GE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ge.svg"
        },
        {
            "name": "Germany",
            "dialCode": "+49",
            "isoCode": "DE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/de.svg"
        },
        {
            "name": "Ghana",
            "dialCode": "+233",
            "isoCode": "GH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gh.svg"
        },
        {
            "name": "Gibraltar",
            "dialCode": "+350",
            "isoCode": "GI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gi.svg"
        },
        {
            "name": "Greece",
            "dialCode": "+30",
            "isoCode": "GR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gr.svg"
        },
        {
            "name": "Greenland",
            "dialCode": "+299",
            "isoCode": "GL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gl.svg"
        },
        {
            "name": "Grenada",
            "dialCode": "+1473",
            "isoCode": "GD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gd.svg"
        },
        {
            "name": "Guadeloupe",
            "dialCode": "+590",
            "isoCode": "GP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gp.svg"
        },
        {
            "name": "Guam",
            "dialCode": "+1671",
            "isoCode": "GU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gu.svg"
        },
        {
            "name": "Guatemala",
            "dialCode": "+502",
            "isoCode": "GT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gt.svg"
        },
        {
            "name": "Guernsey",
            "dialCode": "+44-1481",
            "isoCode": "GG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gg.svg"
        },
        {
            "name": "Guinea",
            "dialCode": "+224",
            "isoCode": "GN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gn.svg"
        },
        {
            "name": "Guinea-Bissau",
            "dialCode": "+245",
            "isoCode": "GW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gw.svg"
        },
        {
            "name": "Guyana",
            "dialCode": "+592",
            "isoCode": "GY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gy.svg"
        },
        {
            "name": "Haiti",
            "dialCode": "+509",
            "isoCode": "HT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ht.svg"
        },
        {
            "name": "Holy See (Vatican City State)",
            "dialCode": "+379",
            "isoCode": "VA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/va.svg"
        },
        {
            "name": "Honduras",
            "dialCode": "+504",
            "isoCode": "HN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hn.svg"
        },
        {
            "name": "Hong Kong",
            "dialCode": "+852",
            "isoCode": "HK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hk.svg"
        },
        {
            "name": "Hungary",
            "dialCode": "+36",
            "isoCode": "HU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hu.svg"
        },
        {
            "name": "Iceland",
            "dialCode": "+354",
            "isoCode": "IS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/is.svg"
        },
        {
            "name": "India",
            "dialCode": "+91",
            "isoCode": "IN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/in.svg"
        },
        {
            "name": "Indonesia",
            "dialCode": "+62",
            "isoCode": "ID",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/id.svg"
        },
        {
            "name": "Iran",
            "dialCode": "+98",
            "isoCode": "IR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ir.svg"
        },
        {
            "name": "Iraq",
            "dialCode": "+964",
            "isoCode": "IQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/iq.svg"
        },
        {
            "name": "Ireland",
            "dialCode": "+353",
            "isoCode": "IE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ie.svg"
        },
        {
            "name": "Isle of Man",
            "dialCode": "+44-1624",
            "isoCode": "IM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/im.svg"
        },
        {
            "name": "Occupied Palestine",
            "dialCode": "+970",
            "isoCode": "PS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ps.svg"
        },
        {
            "name": "Italy",
            "dialCode": "+39",
            "isoCode": "IT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/it.svg"
        },
        {
            "name": "Ivory Coast / Cote d'Ivoire",
            "dialCode": "+225",
            "isoCode": "CI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ci.svg"
        },
        {
            "name": "Jamaica",
            "dialCode": "+1876",
            "isoCode": "JM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jm.svg"
        },
        {
            "name": "Japan",
            "dialCode": "+81",
            "isoCode": "JP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jp.svg"
        },
        {
            "name": "Jersey",
            "dialCode": "+44-1534",
            "isoCode": "JE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/je.svg"
        },
        {
            "name": "Jordan",
            "dialCode": "+962",
            "isoCode": "JO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jo.svg"
        },
        {
            "name": "Kazakhstan",
            "dialCode": "+77",
            "isoCode": "KZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kz.svg"
        },
        {
            "name": "Kenya",
            "dialCode": "+254",
            "isoCode": "KE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ke.svg"
        },
        {
            "name": "Kiribati",
            "dialCode": "+686",
            "isoCode": "KI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ki.svg"
        },
        {
            "name": "Korea, Democratic People's Republic of Korea",
            "dialCode": "+850",
            "isoCode": "KP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kp.svg"
        },
        {
            "name": "Korea, Republic of South Korea",
            "dialCode": "+82",
            "isoCode": "KR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kr.svg"
        },
        {
            "name": "Kosovo",
            "dialCode": "+383",
            "isoCode": "XK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/xk.svg"
        },
        {
            "name": "Kuwait",
            "dialCode": "+965",
            "isoCode": "KW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kw.svg"
        },
        {
            "name": "Kyrgyzstan",
            "dialCode": "+996",
            "isoCode": "KG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kg.svg"
        },
        {
            "name": "Laos",
            "dialCode": "+856",
            "isoCode": "LA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/la.svg"
        },
        {
            "name": "Latvia",
            "dialCode": "+371",
            "isoCode": "LV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lv.svg"
        },
        {
            "name": "Lebanon",
            "dialCode": "+961",
            "isoCode": "LB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lb.svg"
        },
        {
            "name": "Lesotho",
            "dialCode": "+266",
            "isoCode": "LS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ls.svg"
        },
        {
            "name": "Liberia",
            "dialCode": "+231",
            "isoCode": "LR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lr.svg"
        },
        {
            "name": "Libya",
            "dialCode": "+218",
            "isoCode": "LY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ly.svg"
        },
        {
            "name": "Liechtenstein",
            "dialCode": "+423",
            "isoCode": "LI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/li.svg"
        },
        {
            "name": "Lithuania",
            "dialCode": "+370",
            "isoCode": "LT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lt.svg"
        },
        {
            "name": "Luxembourg",
            "dialCode": "+352",
            "isoCode": "LU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lu.svg"
        },
        {
            "name": "Macau",
            "dialCode": "+853",
            "isoCode": "MO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mo.svg"
        },
        {
            "name": "Madagascar",
            "dialCode": "+261",
            "isoCode": "MG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mg.svg"
        },
        {
            "name": "Malawi",
            "dialCode": "+265",
            "isoCode": "MW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mw.svg"
        },
        {
            "name": "Malaysia",
            "dialCode": "+60",
            "isoCode": "MY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/my.svg"
        },
        {
            "name": "Maldives",
            "dialCode": "+960",
            "isoCode": "MV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mv.svg"
        },
        {
            "name": "Mali",
            "dialCode": "+223",
            "isoCode": "ML",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ml.svg"
        },
        {
            "name": "Malta",
            "dialCode": "+356",
            "isoCode": "MT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mt.svg"
        },
        {
            "name": "Marshall Islands",
            "dialCode": "+692",
            "isoCode": "MH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mh.svg"
        },
        {
            "name": "Martinique",
            "dialCode": "+596",
            "isoCode": "MQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mq.svg"
        },
        {
            "name": "Mauritania",
            "dialCode": "+222",
            "isoCode": "MR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mr.svg"
        },
        {
            "name": "Mauritius",
            "dialCode": "+230",
            "isoCode": "MU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mu.svg"
        },
        {
            "name": "Mayotte",
            "dialCode": "+262",
            "isoCode": "YT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/yt.svg"
        },
        {
            "name": "Mexico",
            "dialCode": "+52",
            "isoCode": "MX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mx.svg"
        },
        {
            "name": "Micronesia, Federated States of Micronesia",
            "dialCode": "+691",
            "isoCode": "FM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fm.svg"
        },
        {
            "name": "Moldova",
            "dialCode": "+373",
            "isoCode": "MD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/md.svg"
        },
        {
            "name": "Monaco",
            "dialCode": "+377",
            "isoCode": "MC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mc.svg"
        },
        {
            "name": "Mongolia",
            "dialCode": "+976",
            "isoCode": "MN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mn.svg"
        },
        {
            "name": "Montenegro",
            "dialCode": "+382",
            "isoCode": "ME",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/me.svg"
        },
        {
            "name": "Montserrat",
            "dialCode": "+1664",
            "isoCode": "MS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ms.svg"
        },
        {
            "name": "Morocco",
            "dialCode": "+212",
            "isoCode": "MA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ma.svg"
        },
        {
            "name": "Mozambique",
            "dialCode": "+258",
            "isoCode": "MZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mz.svg"
        },
        {
            "name": "Myanmar",
            "dialCode": "+95",
            "isoCode": "MM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mm.svg"
        },
        {
            "name": "Namibia",
            "dialCode": "+264",
            "isoCode": "NA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/na.svg"
        },
        {
            "name": "Nauru",
            "dialCode": "+674",
            "isoCode": "NR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nr.svg"
        },
        {
            "name": "Nepal",
            "dialCode": "+977",
            "isoCode": "NP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/np.svg"
        },
        {
            "name": "Netherlands",
            "dialCode": "+31",
            "isoCode": "NL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nl.svg"
        },
        {
            "name": "Netherlands Antilles",
            "dialCode": "+599",
            "isoCode": "AN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/an.svg"
        },
        {
            "name": "New Caledonia",
            "dialCode": "+687",
            "isoCode": "NC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nc.svg"
        },
        {
            "name": "New Zealand",
            "dialCode": "+64",
            "isoCode": "NZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nz.svg"
        },
        {
            "name": "Nicaragua",
            "dialCode": "+505",
            "isoCode": "NI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ni.svg"
        },
        {
            "name": "Niger",
            "dialCode": "+227",
            "isoCode": "NE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ne.svg"
        },
        {
            "name": "Nigeria",
            "dialCode": "+234",
            "isoCode": "NG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ng.svg"
        },
        {
            "name": "Niue",
            "dialCode": "+683",
            "isoCode": "NU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nu.svg"
        },
        {
            "name": "Norfolk Island",
            "dialCode": "+672",
            "isoCode": "NF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nf.svg"
        },
        {
            "name": "North Macedonia",
            "dialCode": "+389",
            "isoCode": "MK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mk.svg"
        },
        {
            "name": "Northern Mariana Islands",
            "dialCode": "+1670",
            "isoCode": "MP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mp.svg"
        },
        {
            "name": "Norway",
            "dialCode": "+47",
            "isoCode": "NO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/no.svg"
        },
        {
            "name": "Oman",
            "dialCode": "+968",
            "isoCode": "OM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/om.svg"
        },
        {
            "name": "Pakistan",
            "dialCode": "+92",
            "isoCode": "PK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pk.svg"
        },
        {
            "name": "Palau",
            "dialCode": "+680",
            "isoCode": "PW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pw.svg"
        },
        {
            "name": "Palestine",
            "dialCode": "+970",
            "isoCode": "PS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ps.svg"
        },
        {
            "name": "Panama",
            "dialCode": "+507",
            "isoCode": "PA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pa.svg"
        },
        {
            "name": "Papua New Guinea",
            "dialCode": "+675",
            "isoCode": "PG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pg.svg"
        },
        {
            "name": "Paraguay",
            "dialCode": "+595",
            "isoCode": "PY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/py.svg"
        },
        {
            "name": "Peru",
            "dialCode": "+51",
            "isoCode": "PE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pe.svg"
        },
        {
            "name": "Philippines",
            "dialCode": "+63",
            "isoCode": "PH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ph.svg"
        },
        {
            "name": "Pitcairn",
            "dialCode": "+872",
            "isoCode": "PN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pn.svg"
        },
        {
            "name": "Poland",
            "dialCode": "+48",
            "isoCode": "PL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pl.svg"
        },
        {
            "name": "Portugal",
            "dialCode": "+351",
            "isoCode": "PT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pt.svg"
        },
        {
            "name": "Puerto Rico",
            "dialCode": "+1939",
            "isoCode": "PR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pr.svg"
        },
        {
            "name": "Qatar",
            "dialCode": "+974",
            "isoCode": "QA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/qa.svg"
        },
        {
            "name": "Reunion",
            "dialCode": "+262",
            "isoCode": "RE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/re.svg"
        },
        {
            "name": "Romania",
            "dialCode": "+40",
            "isoCode": "RO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ro.svg"
        },
        {
            "name": "Russia",
            "dialCode": "+7",
            "isoCode": "RU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ru.svg"
        },
        {
            "name": "Rwanda",
            "dialCode": "+250",
            "isoCode": "RW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/rw.svg"
        },
        {
            "name": "Saint Barthelemy",
            "dialCode": "+590",
            "isoCode": "BL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bl.svg"
        },
        {
            "name": "Saint Helena, Ascension and Tristan Da Cunha",
            "dialCode": "+290",
            "isoCode": "SH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sh.svg"
        },
        {
            "name": "Saint Kitts and Nevis",
            "dialCode": "+1869",
            "isoCode": "KN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kn.svg"
        },
        {
            "name": "Saint Lucia",
            "dialCode": "+1758",
            "isoCode": "LC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lc.svg"
        },
        {
            "name": "Saint Martin",
            "dialCode": "+590",
            "isoCode": "MF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mf.svg"
        },
        {
            "name": "Saint Pierre and Miquelon",
            "dialCode": "+508",
            "isoCode": "PM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pm.svg"
        },
        {
            "name": "Saint Vincent and the Grenadines",
            "dialCode": "+1784",
            "isoCode": "VC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vc.svg"
        },
        {
            "name": "Samoa",
            "dialCode": "+685",
            "isoCode": "WS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ws.svg"
        },
        {
            "name": "San Marino",
            "dialCode": "+378",
            "isoCode": "SM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sm.svg"
        },
        {
            "name": "Sao Tome and Principe",
            "dialCode": "+239",
            "isoCode": "ST",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/st.svg"
        },
        {
            "name": "Saudi Arabia",
            "dialCode": "+966",
            "isoCode": "SA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sa.svg"
        },
        {
            "name": "Senegal",
            "dialCode": "+221",
            "isoCode": "SN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sn.svg"
        },
        {
            "name": "Serbia",
            "dialCode": "+381",
            "isoCode": "RS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/rs.svg"
        },
        {
            "name": "Seychelles",
            "dialCode": "+248",
            "isoCode": "SC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sc.svg"
        },
        {
            "name": "Sierra Leone",
            "dialCode": "+232",
            "isoCode": "SL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sl.svg"
        },
        {
            "name": "Singapore",
            "dialCode": "+65",
            "isoCode": "SG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sg.svg"
        },
        {
            "name": "Sint Maarten",
            "dialCode": "+1721",
            "isoCode": "SX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sx.svg"
        },
        {
            "name": "Slovakia",
            "dialCode": "+421",
            "isoCode": "SK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sk.svg"
        },
        {
            "name": "Slovenia",
            "dialCode": "+386",
            "isoCode": "SI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/si.svg"
        },
        {
            "name": "Solomon Islands",
            "dialCode": "+677",
            "isoCode": "SB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sb.svg"
        },
        {
            "name": "Somalia",
            "dialCode": "+252",
            "isoCode": "SO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/so.svg"
        },
        {
            "name": "South Africa",
            "dialCode": "+27",
            "isoCode": "ZA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/za.svg"
        },
        {
            "name": "South Georgia and the South Sandwich Islands",
            "dialCode": "+500",
            "isoCode": "GS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gs.svg"
        },
        {
            "name": "South Sudan",
            "dialCode": "+211",
            "isoCode": "SS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ss.svg"
        },
        {
            "name": "Spain",
            "dialCode": "+34",
            "isoCode": "ES",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/es.svg"
        },
        {
            "name": "Sri Lanka",
            "dialCode": "+94",
            "isoCode": "LK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lk.svg"
        },
        {
            "name": "Sudan",
            "dialCode": "+249",
            "isoCode": "SD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sd.svg"
        },
        {
            "name": "Suriname",
            "dialCode": "+597",
            "isoCode": "SR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sr.svg"
        },
        {
            "name": "Svalbard and Jan Mayen",
            "dialCode": "+47",
            "isoCode": "SJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sj.svg"
        },
        {
            "name": "Sweden",
            "dialCode": "+46",
            "isoCode": "SE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/se.svg"
        },
        {
            "name": "Switzerland",
            "dialCode": "+41",
            "isoCode": "CH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ch.svg"
        },
        {
            "name": "Syrian Arab Republic",
            "dialCode": "+963",
            "isoCode": "SY",
            "flag": "https://jumpshare.com/s/uU39FZDb3x1Wg7HDMhEZ"
        },
        {
            "name": "Taiwan",
            "dialCode": "+886",
            "isoCode": "TW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tw.svg"
        },
        {
            "name": "Tajikistan",
            "dialCode": "+992",
            "isoCode": "TJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tj.svg"
        },
        {
            "name": "Tanzania, United Republic of Tanzania",
            "dialCode": "+255",
            "isoCode": "TZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tz.svg"
        },
        {
            "name": "Thailand",
            "dialCode": "+66",
            "isoCode": "TH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/th.svg"
        },
        {
            "name": "Timor-Leste",
            "dialCode": "+670",
            "isoCode": "TL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tl.svg"
        },
        {
            "name": "Togo",
            "dialCode": "+228",
            "isoCode": "TG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tg.svg"
        },
        {
            "name": "Tokelau",
            "dialCode": "+690",
            "isoCode": "TK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tk.svg"
        },
        {
            "name": "Tonga",
            "dialCode": "+676",
            "isoCode": "TO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/to.svg"
        },
        {
            "name": "Trinidad and Tobago",
            "dialCode": "+1868",
            "isoCode": "TT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tt.svg"
        },
        {
            "name": "Tunisia",
            "dialCode": "+216",
            "isoCode": "TN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tn.svg"
        },
        {
            "name": "Turkey",
            "dialCode": "+90",
            "isoCode": "TR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tr.svg"
        },
        {
            "name": "Turkmenistan",
            "dialCode": "+993",
            "isoCode": "TM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tm.svg"
        },
        {
            "name": "Turks and Caicos Islands",
            "dialCode": "+1649",
            "isoCode": "TC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tc.svg"
        },
        {
            "name": "Tuvalu",
            "dialCode": "+688",
            "isoCode": "TV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tv.svg"
        },
        {
            "name": "Uganda",
            "dialCode": "+256",
            "isoCode": "UG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ug.svg"
        },
        {
            "name": "Ukraine",
            "dialCode": "+380",
            "isoCode": "UA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ua.svg"
        },
        {
            "name": "United Arab Emirates",
            "dialCode": "+971",
            "isoCode": "AE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ae.svg"
        },
        {
            "name": "United Kingdom",
            "dialCode": "+44",
            "isoCode": "GB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gb.svg"
        },
        {
            "name": "United States",
            "dialCode": "+1",
            "isoCode": "US",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/us.svg"
        },
        {
            "name": "United States Minor Outlying Islands",
            "dialCode": "+246",
            "isoCode": "UMI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/umi.svg"
        },
        {
            "name": "Uruguay",
            "dialCode": "+598",
            "isoCode": "UY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/uy.svg"
        },
        {
            "name": "Uzbekistan",
            "dialCode": "+998",
            "isoCode": "UZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/uz.svg"
        },
        {
            "name": "Vanuatu",
            "dialCode": "+678",
            "isoCode": "VU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vu.svg"
        },
        {
            "name": "Venezuela, Bolivarian Republic of Venezuela",
            "dialCode": "+58",
            "isoCode": "VE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ve.svg"
        },
        {
            "name": "Vietnam",
            "dialCode": "+84",
            "isoCode": "VN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vn.svg"
        },
        {
            "name": "Virgin Islands, British",
            "dialCode": "+1284",
            "isoCode": "VG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vg.svg"
        },
        {
            "name": "Virgin Islands, U.S.",
            "dialCode": "+1340",
            "isoCode": "VI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vi.svg"
        },
        {
            "name": "Wallis and Futuna",
            "dialCode": "+681",
            "isoCode": "WF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/wf.svg"
        },
        {
            "name": "Yemen",
            "dialCode": "+967",
            "isoCode": "YE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ye.svg"
        },
        {
            "name": "Zambia",
            "dialCode": "+260",
            "isoCode": "ZM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/zm.svg"
        },
        {
            "name": "Zimbabwe",
            "dialCode": "+263",
            "isoCode": "ZW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/zw.svg"
        }
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/element/bundle */ 5732);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
// Register Swiper Web Components globally for Ionic 7 slides replacement
(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_2__.register)();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-bb424ba8_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-bb424ba8_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"default-node_modules_ionic_core_dist_esm_form-controller-21dd62b1_js-node_modules_ionic_core_-a176d1",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"default-node_modules_ionic_core_dist_esm_form-controller-21dd62b1_js-node_modules_ionic_core_-a176d1",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 44916:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 44916;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map