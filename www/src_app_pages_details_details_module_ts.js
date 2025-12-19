"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details_module_ts"],{

/***/ 16244:
/*!*********************************************************!*\
  !*** ./src/app/pages/details/details-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 75362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
class DetailsPageRoutingModule {
}
DetailsPageRoutingModule.ɵfac = function DetailsPageRoutingModule_Factory(t) { return new (t || DetailsPageRoutingModule)(); };
DetailsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DetailsPageRoutingModule });
DetailsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DetailsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 30557:
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 16244);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 75362);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/app */ 89674);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);













class DetailsPageModule {
}
DetailsPageModule.ɵfac = function DetailsPageModule_Factory(t) { return new (t || DetailsPageModule)(); };
DetailsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DetailsPageModule });
DetailsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_7__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_7__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
        (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)()),
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DetailsPageModule, { declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_7__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AuthModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule] }); })();


/***/ }),

/***/ 75362:
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 16818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/overlay.service */ 75596);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/avatar.service */ 25083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var src_app_services_image_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/image-upload.service */ 8397);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);

















function DetailsPage_ion_note_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "FIRST_NAME_REQUIRED"));
  }
}

function DetailsPage_ion_note_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "FIRST_NAME_MIN_LENGTH"));
  }
}

function DetailsPage_ion_note_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "FIRST_NAME_MAX_LENGTH"));
  }
}

function DetailsPage_ion_note_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-note", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DetailsPage_ion_note_13_span_1_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DetailsPage_ion_note_13_span_2_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DetailsPage_ion_note_13_span_3_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.form.get("fullname")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.form.get("fullname")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.form.get("fullname")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["maxlength"]);
  }
}

function DetailsPage_ion_note_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "LAST_NAME_REQUIRED"));
  }
}

function DetailsPage_ion_note_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "LAST_NAME_MIN_LENGTH"));
  }
}

function DetailsPage_ion_note_17_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "LAST_NAME_MAX_LENGTH"));
  }
}

function DetailsPage_ion_note_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-note", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DetailsPage_ion_note_17_span_1_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DetailsPage_ion_note_17_span_2_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DetailsPage_ion_note_17_span_3_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.form.get("lastname")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.form.get("lastname")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.form.get("lastname")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["maxlength"]);
  }
}

function DetailsPage_ion_note_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EMAIL_INVALID"));
  }
}

function DetailsPage_ion_note_21_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EMAIL_MAX_LENGTH"));
  }
}

function DetailsPage_ion_note_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-note", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DetailsPage_ion_note_21_span_1_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DetailsPage_ion_note_21_span_2_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.form.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.form.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["maxlength"]);
  }
}

function DetailsPage_ion_label_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "CONTINUE"));
  }
}

function DetailsPage_ion_icon_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-icon", 24);
  }
}

function DetailsPage_ion_progress_bar_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-progress-bar", 25);
  }
}

class DetailsPage {
  constructor(overlay, authy, authService, avatar, router, actionSheetController, alertController, imageUploadService, // Inject the service
  loadingController, platform, translate // Add TranslateService
  ) {
    this.overlay = overlay;
    this.authy = authy;
    this.authService = authService;
    this.avatar = avatar;
    this.router = router;
    this.actionSheetController = actionSheetController;
    this.alertController = alertController;
    this.imageUploadService = imageUploadService;
    this.loadingController = loadingController;
    this.platform = platform;
    this.translate = translate; // Ensure the user is authenticated

    this.authy.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        this.avatar.profile = user; // Ensure the profile is set

        this.form.patchValue({
          fullname: user.displayName?.split(' ')[0] || '',
          lastname: user.displayName?.split(' ')[1] || '',
          email: user.email || ''
        });
      }
    });
  }

  ngOnInit() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      }),
      lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      })
    });
  }

  changeImage(source) {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
          source: source
        });

        if (image) {
          const loading = yield _this.loadingController.create();
          yield loading.present();

          if (!_this.avatar.profile?.uid) {
            loading.dismiss();
            const alert = yield _this.alertController.create({
              header: 'Upload failed',
              message: 'Profile UID is missing.',
              buttons: ['OK']
            });
            yield alert.present();
            return;
          }

          try {
            const result = yield _this.avatar.uploadImage(image, _this.avatar.profile.uid);
            loading.dismiss();

            if (!result) {
              const alert = yield _this.alertController.create({
                header: 'Upload failed',
                message: 'There was a problem uploading your avatar.',
                buttons: ['OK']
              });
              yield alert.present();
            } else {
              _this.imageUrl = result; // Ensure imageUrl is updated

              const alert = yield _this.alertController.create({
                header: 'Upload Successful',
                message: 'Your avatar has been successfully uploaded.',
                buttons: ['OK']
              });
              yield alert.present();
            }
          } catch (uploadError) {
            loading.dismiss();

            if (uploadError.message.includes('Photo URL is required and must be less than 1000 characters')) {
              const alert = yield _this.alertController.create({
                header: 'Upload failed',
                message: 'The image is too big. Please try another image with a smaller size.',
                buttons: ['OK']
              });
              yield alert.present();
            } else {
              const alert = yield _this.alertController.create({
                header: 'Upload failed',
                message: `There was a problem uploading your avatar: ${uploadError.message}`,
                buttons: ['OK']
              });
              yield alert.present();
            }
          }
        }
      } catch (error) {
        const alert = yield _this.alertController.create({
          header: yield _this.translate.get('ERROR').toPromise(),
          message: `${yield _this.translate.get('UPLOAD_ERROR').toPromise()}: ${error.message}`,
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  initializeBackButtonCustomHandler() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  handleBackButton() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.showExitConfirmation();
      } catch (error) {
        console.error('Error handling back button:', error);
      }
    })();
  }

  showExitConfirmation() {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: yield _this3.translate.get('EXIT_APP').toPromise(),
        message: yield _this3.translate.get('EXIT_CONFIRM').toPromise(),
        buttons: [{
          text: yield _this3.translate.get('CANCEL').toPromise(),
          role: 'cancel'
        }, {
          text: yield _this3.translate.get('EXIT').toPromise(),
          handler: () => {
            navigator['app'].exitApp();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentImageSourceActionSheet() {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this4.actionSheetController.create({
        header: yield _this4.translate.get('SELECT_IMAGE_SOURCE').toPromise(),
        buttons: [{
          text: yield _this4.translate.get('CAMERA').toPromise(),
          icon: 'camera',
          handler: () => {
            _this4.changeImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera);
          }
        }, {
          text: yield _this4.translate.get('GALLERY').toPromise(),
          icon: 'images',
          handler: () => {
            _this4.changeImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos);
          }
        }, {
          text: yield _this4.translate.get('FILE').toPromise(),
          icon: 'document',
          handler: () => {
            _this4.selectFile();
          }
        }, {
          text: yield _this4.translate.get('CANCEL').toPromise(),
          icon: 'close',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }

  selectFile() {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';

      input.onchange = /*#__PURE__*/function () {
        var _ref = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
          const file = event.target.files[0];

          if (file) {
            const reader = new FileReader();

            reader.onload = /*#__PURE__*/function () {
              var _ref2 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
                const image = {
                  base64String: e.target.result.split(',')[1]
                };
                const result = yield _this5.avatar.uploadImage(image, _this5.avatar.profile.uid);

                if (!result) {
                  const alert = yield _this5.alertController.create({
                    header: 'Upload failed',
                    message: 'There was a problem uploading your avatar.',
                    buttons: ['OK']
                  });
                  yield alert.present();
                } else {
                  _this5.imageUrl = result; // Ensure imageUrl is updated
                  // const alert = await this.alertController.create({
                  //   header: 'Upload Successful',
                  //   message: 'Your avatar has been successfully uploaded.',
                  //   buttons: ['OK'],
                  // });
                  // await alert.present();
                }
              });

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }();

            reader.readAsDataURL(file);
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

      input.click();
    })();
  }

  reauthenticateWithPhoneNumber() {
    var _this6 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          try {
            const user = _this6.authy.currentUser;
            if (!user) throw new Error('User not authenticated');
            console.log('Creating reCAPTCHA container');
            const recaptchaContainerId = 'recaptcha-container';
            let recaptchaContainer = document.getElementById(recaptchaContainerId);

            if (!recaptchaContainer) {
              recaptchaContainer = document.createElement('div');
              recaptchaContainer.id = recaptchaContainerId;
              document.body.appendChild(recaptchaContainer);
            } else {
              recaptchaContainer.innerHTML = ''; // Clear any existing content
            }

            console.log('Initializing reCAPTCHA verifier');
            const recaptchaVerifier = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.RecaptchaVerifier(recaptchaContainerId, {}, _this6.authy);
            const phoneNumber = user.phoneNumber;

            if (!phoneNumber) {
              throw new Error('User phone number is missing');
            }

            let verificationResult;

            try {
              console.log('Attempting to sign in with phone number');
              verificationResult = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.signInWithPhoneNumber)(_this6.authy, phoneNumber, recaptchaVerifier);
              console.log('Verification result:', verificationResult);
            } catch (error) {
              console.error('Error during signInWithPhoneNumber', error);
              let errorMessage = yield _this6.translate.get('SIGN_IN_ERROR').toPromise(); // Handle specific error codes

              if (error.code === 'auth/invalid-phone-number') {
                errorMessage = yield _this6.translate.get('MOBILE_INVALID').toPromise();
              } else if (error.code === 'auth/network-request-failed') {
                errorMessage = yield _this6.translate.get('NETWORK_ERROR').toPromise();
              } else if (error.code === 'auth/too-many-requests') {
                errorMessage = yield _this6.translate.get('PLEASE_WAIT').toPromise();
              }

              _this6.overlay.showAlert(yield _this6.translate.get('ERROR').toPromise(), errorMessage);

              reject(error);
              return;
            }

            if (!verificationResult.verificationId) {
              throw new Error('Verification ID is missing in the verification result');
            }

            const storedOTP = localStorage.getItem('defaultOTP');
            const userVerificationCode = storedOTP;
            console.log("This is number: " + userVerificationCode);
            console.log('Prompting user for verification code');
            const alert = yield _this6.alertController.create({
              header: 'Verification',
              inputs: [{
                name: 'verificationCode',
                type: 'text',
                placeholder: 'Enter verification code',
                value: userVerificationCode // Set default value if isRandom is true

              }],
              buttons: [{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Verification cancelled');
                  reject(new Error('Verification cancelled'));
                }
              }, {
                text: 'Verify',
                handler: function () {
                  var _ref4 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                    const verificationCode = data.verificationCode;

                    if (!verificationCode) {
                      reject(new Error('Verification code is required'));
                      return;
                    }

                    try {
                      console.log('Attempting to verify phone number with verification code');
                      const phoneCredential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.PhoneAuthProvider.credential(verificationResult.verificationId, verificationCode);
                      yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.reauthenticateWithCredential)(user, phoneCredential);
                      localStorage.removeItem('defaultOTP');
                      yield _this6.updateProfile();
                      console.log('User re-authenticated with phone number');
                      resolve();
                    } catch (error) {
                      console.error('Error verifying phone number', error);
                      reject(error);
                    }
                  });

                  return function handler(_x5) {
                    return _ref4.apply(this, arguments);
                  };
                }()
              }]
            });
            yield alert.present();
          } catch (error) {
            console.error('Error during phone re-authentication', error);

            _this6.overlay.showAlert('Error', error.message || 'An error occurred during phone re-authentication');

            reject(error);
          }
        });

        return function (_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  } // Try to re-authenticate the user using available methods.
  // Returns true if re-authentication succeeded, false otherwise.


  reauthenticateUser() {
    var _this7 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = _this7.authy.currentUser;
        if (!user) return false; // Prefer phone-based re-authentication if phoneNumber exists

        if (user.phoneNumber) {
          try {
            yield _this7.reauthenticateWithPhoneNumber();
            return true;
          } catch (e) {
            console.error('Phone re-authentication failed', e); // continue to password fallback
          }
        } // If user has an email, prompt for password to re-authenticate


        if (user.email) {
          return yield new Promise( /*#__PURE__*/function () {
            var _ref5 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
              const alert = yield _this7.alertController.create({
                header: 'Re-authenticate',
                inputs: [{
                  name: 'password',
                  type: 'password',
                  placeholder: 'Enter your password'
                }],
                buttons: [{
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => resolve(false)
                }, {
                  text: 'Verify',
                  handler: function () {
                    var _ref6 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                      try {
                        const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.EmailAuthProvider.credential(user.email, data.password);
                        yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.reauthenticateWithCredential)(user, credential);
                        resolve(true);
                      } catch (err) {
                        console.error('Password re-authentication failed', err);

                        _this7.overlay.showAlert(yield _this7.translate.get('ERROR').toPromise(), err.message || (yield _this7.translate.get('GENERIC_ERROR').toPromise()));

                        resolve(false);
                      }
                    });

                    return function handler(_x7) {
                      return _ref6.apply(this, arguments);
                    };
                  }()
                }]
              });
              yield alert.present();
            });

            return function (_x6) {
              return _ref5.apply(this, arguments);
            };
          }());
        }

        return false;
      } catch (e) {
        console.error('reauthenticateUser error', e);
        return false;
      }
    })();
  }

  updateProfile() {
    var _this8 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this8.form.valid) {
          _this8.form.markAllAsTouched();

          return;
        }

        _this8.approve2 = true;
        const user = _this8.authy.currentUser;

        if (user) {
          console.log('User authenticated', user); // First update display name and photo

          console.log('Updating profile...');
          yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.updateProfile)(user, {
            displayName: `${_this8.form.value.fullname} ${_this8.form.value.lastname}`,
            photoURL: _this8.imageUrl
          }); // Check if email is provided before attempting to update it

          if (_this8.form.value.email && user.email !== _this8.form.value.email) {
            // Show confirmation dialog for email change
            const alert = yield _this8.alertController.create({
              header: yield _this8.translate.get('EMAIL_CHANGE').toPromise(),
              message: yield _this8.translate.get('EMAIL_CHANGE_VERIFY').toPromise(),
              buttons: [{
                text: yield _this8.translate.get('CANCEL').toPromise(),
                role: 'cancel'
              }, {
                text: yield _this8.translate.get('CONTINUE').toPromise(),
                handler: function () {
                  var _ref7 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                    try {
                      yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.updateEmail)(user, _this8.form.value.email); // Send verification email

                      yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.sendEmailVerification)(user); // Show success message

                      yield _this8.alertController.create({
                        header: yield _this8.translate.get('EMAIL_VERIFICATION_SENT').toPromise(),
                        message: yield _this8.translate.get('CHECK_EMAIL').toPromise(),
                        buttons: ['OK']
                      }).then(alert => alert.present());
                    } catch (error) {
                      if (error && error.code === 'auth/requires-recent-login') {
                        const reauthOk = yield _this8.reauthenticateUser();

                        if (reauthOk) {
                          try {
                            const freshUser = _this8.authy.currentUser;

                            if (freshUser) {
                              yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.updateEmail)(freshUser, _this8.form.value.email);
                              yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.sendEmailVerification)(freshUser);
                              yield _this8.alertController.create({
                                header: yield _this8.translate.get('EMAIL_VERIFICATION_SENT').toPromise(),
                                message: yield _this8.translate.get('CHECK_EMAIL').toPromise(),
                                buttons: ['OK']
                              }).then(a => a.present());
                            }
                          } catch (err2) {
                            console.error('Failed to update email after reauthentication', err2);

                            _this8.overlay.showAlert(yield _this8.translate.get('ERROR').toPromise(), err2.message || (yield _this8.translate.get('GENERIC_ERROR').toPromise()));

                            return;
                          }
                        } else {
                          // Re-authentication failed or was cancelled by the user.
                          _this8.overlay.showAlert(yield _this8.translate.get('ERROR').toPromise(), yield _this8.translate.get('PLEASE_WAIT').toPromise());

                          return;
                        }
                      } else {
                        _this8.overlay.showAlert(yield _this8.translate.get('ERROR').toPromise(), error?.message || (yield _this8.translate.get('GENERIC_ERROR').toPromise()));

                        return;
                      }
                    } // Only create/update avatar and navigate after email handling completes


                    try {
                      yield _this8.avatar.createUser(`${_this8.form.value.fullname} ${_this8.form.value.lastname}`, _this8.form.value.email, _this8.imageUrl, user.phoneNumber, user.uid);
                      _this8.approve2 = false;

                      _this8.router.navigateByUrl('home');

                      console.log('Profile updated');
                    } catch (createErr) {
                      console.error('Error creating/updating avatar after email change', createErr);

                      _this8.overlay.showAlert(yield _this8.translate.get('ERROR').toPromise(), createErr?.message || (yield _this8.translate.get('GENERIC_ERROR').toPromise()));

                      _this8.approve2 = false;
                    }
                  });

                  return function handler() {
                    return _ref7.apply(this, arguments);
                  };
                }()
              }]
            });
            yield alert.present(); // Stop further execution here; avatar.createUser will be handled in the alert handler.

            return;
          } // No email change required — proceed to create/update avatar and navigate


          yield _this8.avatar.createUser(`${_this8.form.value.fullname} ${_this8.form.value.lastname}`, _this8.form.value.email, _this8.imageUrl, user.phoneNumber, user.uid);
          _this8.approve2 = false;

          _this8.router.navigateByUrl('home');

          console.log('Profile updated');
        }
      } catch (e) {
        console.error('An error occurred during profile update', e);
        _this8.approve2 = false;

        if (e.code === 'auth/email-already-in-use') {
          _this8.overlay.showAlert(yield _this8.translate.get('ERROR').toPromise(), yield _this8.translate.get('EMAIL_IN_USE').toPromise());
        } else if (e.code === 'auth/requires-recent-login') {
          _this8.reauthenticateWithPhoneNumber();
        } else {
          _this8.overlay.showAlert(yield _this8.translate.get('ERROR').toPromise(), e.message || (yield _this8.translate.get('GENERIC_ERROR').toPromise()));
        }
      }
    })();
  }

  signInWithGoogle() {
    var _this9 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();
        const result = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.signInWithPopup)(_this9.authy, provider);
        const user = result.user;

        if (user) {
          _this9.imageUrl = user.photoURL || ''; // Update imageUrl with photoURL from Google

          _this9.form.patchValue({
            fullname: user.displayName?.split(' ')[0] || '',
            lastname: user.displayName?.split(' ')[1] || '',
            email: user.email || ''
          });

          console.log("User signed in with Google", user);
          console.log("Email:", user.email);
          console.log("Display Name:", user.displayName);
          console.log("Photo URL:", user.photoURL); // Call updateProfile to update user details in Firebase

          yield _this9.updateProfile();
        }
      } catch (error) {
        console.error("Error during Google sign-in", error);

        _this9.overlay.showAlert('Sign-in failed', 'There was a problem signing in with Google.');
      }
    })();
  }

  changeLanguage(lang) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

}

DetailsPage.ɵfac = function DetailsPage_Factory(t) {
  return new (t || DetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_5__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_image_upload_service__WEBPACK_IMPORTED_MODULE_6__.ImageUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService));
};

DetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: DetailsPage,
  selectors: [["app-details"]],
  decls: 39,
  vars: 27,
  consts: [[1, "ion-no-border", "ion-padding", 3, "translucent"], [1, "ion-padding-top"], ["color", "primary", 1, "ion-text-center"], [1, "ion-margin-horizontal"], [3, "formGroup"], [1, "ion-margin-vertical"], [1, "ion-margin"], ["formControlName", "fullname", "type", "text", "minlength", "1", "maxlength", "200", 3, "placeholder"], ["color", "danger", "class", "ion-margin-horizontal ion-padding-start", 4, "ngIf"], ["formControlName", "lastname", "type", "text", "minlength", "1", "maxlength", "200", 3, "placeholder"], ["formControlName", "email", "type", "email", "minlength", "1", "maxlength", "200", 3, "placeholder"], ["id", "recaptcha-container"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 3, "disabled", "click"], [4, "ngIf"], ["color", "light", "slot", "end", "name", "arrow-forward", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], [1, "ion-no-border"], ["lines", "none", 1, "ion-no-padding"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "language-fab"], ["size", "medium", "color", "light"], ["name", "language-outline"], ["side", "top"], ["color", "light", "size", "small", 3, "click"], ["color", "danger", 1, "ion-margin-horizontal", "ion-padding-start"], ["color", "light", "slot", "end", "name", "arrow-forward"], ["color", "light", "type", "indeterminate"]],
  template: function DetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-list")(2, "ion-list-header", 1)(3, "ion-label", 2)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-item-group", 3)(8, "form", 4)(9, "div", 5)(10, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, DetailsPage_ion_note_13_Template, 4, 3, "ion-note", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, DetailsPage_ion_note_17_Template, 4, 3, "ion-note", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "ion-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, DetailsPage_ion_note_21_Template, 3, 2, "ion-note", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailsPage_Template_ion_button_click_23_listener() {
        return ctx.updateProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, DetailsPage_ion_label_24_Template, 3, 3, "ion-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, DetailsPage_ion_icon_25_Template, 1, 0, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, DetailsPage_ion_progress_bar_26_Template, 1, 0, "ion-progress-bar", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "ion-content", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "ion-list", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "ion-fab", 18)(30, "ion-fab-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "ion-icon", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "ion-fab-list", 21)(33, "ion-fab-button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailsPage_Template_ion_fab_button_click_33_listener() {
        return ctx.changeLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "EN");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ion-fab-button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DetailsPage_Template_ion_fab_button_click_36_listener() {
        return ctx.changeLanguage("ms");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "MS");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      let tmp_3_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_11_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 19, "PERSONAL_INFO"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ion-invalid", ((tmp_3_0 = ctx.form.get("fullname")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("fullname")) == null ? null : tmp_3_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 21, "FIRST_NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.form.get("fullname")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.form.get("fullname")) == null ? null : tmp_5_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ion-invalid", ((tmp_6_0 = ctx.form.get("lastname")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.form.get("lastname")) == null ? null : tmp_6_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 23, "LAST_NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.form.get("lastname")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.form.get("lastname")) == null ? null : tmp_8_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ion-invalid", ((tmp_9_0 = ctx.form.get("email")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.form.get("email")) == null ? null : tmp_9_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 25, "EMAIL_PLACEHOLDER"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.form.get("email")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.form.get("email")) == null ? null : tmp_11_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.form.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: ["ion-avatar[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\nion-menu-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\nion-item[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVFO0VBQ0UsK0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFHRTtFQUNFO0lBQ0UsMkJBQUE7RUFBSjtFQUVFO0lBQ0UseUJBQUE7RUFBSjtBQUNGOztBQUdFO0VBQ0ksbUVBQUE7QUFETjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFESiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgaGVpZ2h0OiAxMjhweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmV2aWV3IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWxsYmFjayB7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBpb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcblxyXG4gIEBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZS10b3Age1xyXG4gICAgICBhbmltYXRpb246IHNsaWRlLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVte1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcclxuICB9XHJcblxyXG5cclxuICBcclxuICAiXX0= */"]
});

/***/ }),

/***/ 8397:
/*!**************************************************!*\
  !*** ./src/app/services/image-upload.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUploadService": () => (/* binding */ ImageUploadService)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ 42111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class ImageUploadService {
  constructor(storage) {
    this.storage = storage;
  }

  uploadImage(image) {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const path = `images/${new Date().getTime()}.jpg`;
      const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(_this.storage, path);
      const uploadResult = yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__.uploadString)(storageRef, image.base64String, 'base64');
      return (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(uploadResult.ref);
    })();
  }

}

ImageUploadService.ɵfac = function ImageUploadService_Factory(t) {
  return new (t || ImageUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__.Storage));
};

ImageUploadService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ImageUploadService,
  factory: ImageUploadService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details_module_ts.js.map