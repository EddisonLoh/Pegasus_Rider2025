"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 41474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 64629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
class ProfilePageRoutingModule {
}
ProfilePageRoutingModule.ɵfac = function ProfilePageRoutingModule_Factory(t) { return new (t || ProfilePageRoutingModule)(); };
ProfilePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProfilePageRoutingModule });
ProfilePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfilePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 41474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 64629);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);








class ProfilePageModule {
}
ProfilePageModule.ɵfac = function ProfilePageModule_Factory(t) { return new (t || ProfilePageModule)(); };
ProfilePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfilePageModule });
ProfilePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfilePageModule, { declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ }),

/***/ 64629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/avatar.service */ 25083);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);














function ProfilePage_div_12_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 24);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r3.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

function ProfilePage_div_12_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "SELECT_AVATAR"));
  }
}

function ProfilePage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 14)(2, "ion-avatar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePage_div_12_Template_ion_avatar_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.presentImageSourceActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfilePage_div_12_img_3_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfilePage_div_12_ng_template_4_Template, 4, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 17)(7, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-icon", 20)(13, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-label", 23)(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.user.photoURL)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.profileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.user.phoneNumber || "No phone number", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.user.email || "No email", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 6, "RECEIPT_EMAIL_NOTE"));
  }
}

function ProfilePage_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "LOADING_PROFILE"));
  }
}

class ProfilePage {
  constructor(avatarService, authService, router, loadingController, alertController, auth, actionSheetController, fb, translate) {
    var _this = this;

    this.avatarService = avatarService;
    this.authService = authService;
    this.router = router;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.auth = auth;
    this.actionSheetController = actionSheetController;
    this.fb = fb;
    this.translate = translate;
    this.CountryJson = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.CountryJson;
    this.auth.onAuthStateChanged( /*#__PURE__*/function () {
      var _ref = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
        if (user) {
          _this.user = user;

          _this.profileForm.patchValue({
            displayName: user.displayName || ''
          });

          _this.avatarService.profile = user; // Ensure the profile is set
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  ngOnInit() {
    console.log('ProfilePage initialized');
    this.profileForm = this.fb.group({
      displayName: ['']
    });
    this.profileForm.get('displayName').valueChanges.subscribe(value => {
      this.saveProfile();
    });
  }

  ngOnDestroy() {
    console.log('ProfilePage destroyed'); // Clean up any subscriptions or listeners if necessary
  }

  logout() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.authService.logout();

      _this2.router.navigateByUrl('/', {
        replaceUrl: true
      });
    })();
  }

  goBack() {
    // Use the router to navigate back
    this.router.navigate(['/home']); // Replace '/previous-page' with your desired route
  }

  presentImageSourceActionSheet() {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this3.actionSheetController.create({
        header: yield _this3.translate.get('SELECT_IMAGE_SOURCE').toPromise(),
        buttons: [{
          text: yield _this3.translate.get('CAMERA').toPromise(),
          icon: 'camera',
          handler: () => {
            _this3.changeImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Camera);
          }
        }, {
          text: yield _this3.translate.get('GALLERY').toPromise(),
          icon: 'images',
          handler: () => {
            _this3.changeImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Photos);
          }
        }, {
          text: yield _this3.translate.get('FILE').toPromise(),
          icon: 'document',
          handler: () => {
            _this3.selectFile();
          }
        }, {
          text: yield _this3.translate.get('CANCEL').toPromise(),
          icon: 'close',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }

  changeImage(source) {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Base64,
          source: source
        });

        if (image) {
          const loading = yield _this4.loadingController.create();
          yield loading.present();

          if (!_this4.avatarService.profile?.uid) {
            loading.dismiss();
            const alert = yield _this4.alertController.create({
              header: yield _this4.translate.get('UPLOAD_FAILED').toPromise(),
              message: yield _this4.translate.get('PROFILE_MISSING').toPromise(),
              buttons: ['OK']
            });
            yield alert.present();
            return;
          }

          const result = yield _this4.avatarService.uploadImage(image, _this4.avatarService.profile.uid);
          loading.dismiss();

          if (!result) {
            const alert = yield _this4.alertController.create({
              header: yield _this4.translate.get('UPLOAD_FAILED').toPromise(),
              message: yield _this4.translate.get('UPLOAD_ERROR').toPromise(),
              buttons: ['OK']
            });
            yield alert.present();
          } else {
            const alert = yield _this4.alertController.create({
              header: yield _this4.translate.get('UPLOAD_SUCCESS').toPromise(),
              message: yield _this4.translate.get('AVATAR_UPDATED').toPromise(),
              buttons: ['OK']
            });
            yield alert.present(); // Update the user profile

            if (_this4.auth.currentUser) {
              const result = yield _this4.avatarService.uploadImage(image, _this4.avatarService.profile.uid);
              yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.updateProfile)(_this4.user, {
                photoURL: result
              });
              _this4.user = _this4.auth.currentUser; // Refresh the user object
            }
          }
        }
      } catch (error) {
        const alert = yield _this4.alertController.create({
          header: yield _this4.translate.get('UPLOAD_FAILED').toPromise(),
          message: `${yield _this4.translate.get('UPLOAD_ERROR').toPromise()}: ${error.message}`,
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  selectFile() {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';

      input.onchange = /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
          const file = event.target.files[0];

          if (file) {
            const reader = new FileReader();

            reader.onload = /*#__PURE__*/function () {
              var _ref3 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
                const image = {
                  base64String: e.target.result.split(',')[1]
                };
                const loading = yield _this5.loadingController.create();
                yield loading.present();

                if (!_this5.avatarService.profile?.uid) {
                  loading.dismiss();
                  const alert = yield _this5.alertController.create({
                    header: yield _this5.translate.get('UPLOAD_FAILED').toPromise(),
                    message: yield _this5.translate.get('PROFILE_MISSING').toPromise(),
                    buttons: ['OK']
                  });
                  yield alert.present();
                  return;
                }

                const result = yield _this5.avatarService.uploadImage(image, _this5.avatarService.profile.uid);
                loading.dismiss();

                if (!result) {
                  const alert = yield _this5.alertController.create({
                    header: yield _this5.translate.get('UPLOAD_FAILED').toPromise(),
                    message: yield _this5.translate.get('UPLOAD_ERROR').toPromise(),
                    buttons: ['OK']
                  });
                  yield alert.present();
                } else {
                  const alert = yield _this5.alertController.create({
                    header: yield _this5.translate.get('UPLOAD_SUCCESS').toPromise(),
                    message: yield _this5.translate.get('AVATAR_UPDATED').toPromise(),
                    buttons: ['OK']
                  });
                  yield alert.present(); // Update the user profile

                  if (_this5.auth.currentUser) {
                    yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.updateProfile)(_this5.user, {
                      photoURL: result
                    });
                    _this5.user = _this5.auth.currentUser; // Refresh the user object
                  }
                }
              });

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }();

            reader.readAsDataURL(file);
          }
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }();

      input.click();
    })();
  }

  saveProfile() {
    var _this6 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.user) {
        try {
          yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.updateProfile)(_this6.user, {
            displayName: _this6.profileForm.get('displayName').value
          }); // Optional success message
          // const alert = await this.alertController.create({
          //   header: await this.translate.get('PROFILE_UPDATED').toPromise(),
          //   message: await this.translate.get('PROFILE_UPDATE_SUCCESS').toPromise(),
          //   buttons: ['OK'],
          // });
          // await alert.present();
        } catch (error) {// Optional error message
          // const alert = await this.alertController.create({
          //   header: await this.translate.get('UPDATE_FAILED').toPromise(),
          //   message: await this.translate.get('PROFILE_UPDATE_ERROR').toPromise(),
          //   buttons: ['OK'],
          // });
          // await alert.present();
        }
      }
    })();
  }

  getFlag(lang) {
    let isoCode = 'US';
    if (lang === 'ms') isoCode = 'MY';
    if (lang === 'ar') isoCode = 'SA';
    const country = this.CountryJson.find(c => c.isoCode === isoCode);
    return country ? country.flag : '';
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }

}

ProfilePage.ɵfac = function ProfilePage_Factory(t) {
  return new (t || ProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_3__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService));
};

ProfilePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProfilePage,
  selectors: [["app-profile"]],
  decls: 25,
  vars: 5,
  consts: [[1, "ion-no-border"], ["slot", "start"], ["color", "primary", 3, "click"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "log-out"], [1, "ion-padding"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "language-fab"], ["size", "medium", "color", "light"], ["name", "language-outline"], ["side", "top"], ["color", "light", "size", "small", 3, "click"], [1, "preview"], [3, "src", 4, "ngIf", "ngIfElse"], ["placeholder_avatar", ""], [3, "formGroup"], [1, "ion-margin"], ["name", "call", "color", "primary", "slot", "start"], ["name", "person", "color", "primary", "slot", "start"], ["formControlName", "displayName", "placeholder", "Name"], ["name", "mail", "color", "primary", "slot", "start"], ["color", "primary", 1, "ion-text-center", "ion-padding-top"], [3, "src"], [1, "fallback"]],
  template: function ProfilePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePage_Template_ion_button_click_3_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 3)(6, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePage_Template_ion_button_click_6_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ProfilePage_div_12_Template, 22, 8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ProfilePage_ng_template_13_Template, 4, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-fab", 9)(16, "ion-fab-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-fab-list", 12)(19, "ion-fab-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePage_Template_ion_fab_button_click_19_listener() {
        return ctx.changeLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "EN");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-fab-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfilePage_Template_ion_fab_button_click_22_listener() {
        return ctx.changeLanguage("ms");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "MS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 3, "MY_PROFILE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["ion-avatar[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\nion-menu-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\nion-item[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVFO0VBQ0UsK0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFHRTtFQUNFO0lBQ0UsMkJBQUE7RUFBSjtFQUVFO0lBQ0UseUJBQUE7RUFBSjtBQUNGOztBQUdFO0VBQ0ksbUVBQUE7QUFETjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFESiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgaGVpZ2h0OiAxMjhweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmV2aWV3IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWxsYmFjayB7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBpb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcblxyXG4gIEBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZS10b3Age1xyXG4gICAgICBhbmltYXRpb246IHNsaWRlLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVte1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcclxuICB9XHJcblxyXG5cclxuICBcclxuICAiXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map