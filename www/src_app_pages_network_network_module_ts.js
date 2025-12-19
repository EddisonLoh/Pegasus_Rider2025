"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_network_network_module_ts"],{

/***/ 27671:
/*!*********************************************************!*\
  !*** ./src/app/pages/network/network-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPageRoutingModule": () => (/* binding */ NetworkPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network.page */ 70508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _network_page__WEBPACK_IMPORTED_MODULE_0__.NetworkPage
    }
];
class NetworkPageRoutingModule {
}
NetworkPageRoutingModule.ɵfac = function NetworkPageRoutingModule_Factory(t) { return new (t || NetworkPageRoutingModule)(); };
NetworkPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NetworkPageRoutingModule });
NetworkPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NetworkPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 17846:
/*!*************************************************!*\
  !*** ./src/app/pages/network/network.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPageModule": () => (/* binding */ NetworkPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _network_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-routing.module */ 27671);
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network.page */ 70508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);








class NetworkPageModule {
}
NetworkPageModule.ɵfac = function NetworkPageModule_Factory(t) { return new (t || NetworkPageModule)(); };
NetworkPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NetworkPageModule });
NetworkPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _network_routing_module__WEBPACK_IMPORTED_MODULE_0__.NetworkPageRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NetworkPageModule, { declarations: [_network_page__WEBPACK_IMPORTED_MODULE_1__.NetworkPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _network_routing_module__WEBPACK_IMPORTED_MODULE_0__.NetworkPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ }),

/***/ 70508:
/*!***********************************************!*\
  !*** ./src/app/pages/network/network.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPage": () => (/* binding */ NetworkPage)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/network */ 54984);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 58385);









function NetworkPage_ion_label_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "NETWORK.TRY_AGAIN"));
  }
}

function NetworkPage_ion_progress_bar_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-progress-bar", 13);
  }
}

class NetworkPage {
  constructor(router, translate) {
    this.router = router;
    this.translate = translate;
    this.networkStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(true);
  }

  ngOnInit() {}

  CheckNetwork() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.monitorNetwork();
    })();
  }

  monitorNetwork() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.approve = true;
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.getStatus();
      _this2.isConnected = status.connected;

      _this2.networkStatus$.next(_this2.isConnected);

      console.log("Monitor Network Called..");
      _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.addListener('networkStatusChange', /*#__PURE__*/function () {
        var _ref = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (status) {
          console.log("Monitoring Network........");
          _this2.isConnected = status.connected;

          _this2.networkStatus$.next(_this2.isConnected);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      _this2.networkStatus$.subscribe(isConnected => {
        if (isConnected) {
          _this2.approve = false;

          _this2.router.navigate(['home']);
        } else {
          _this2.approve = false;
        }
      });
    })();
  }

  changeLanguage(lang) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

}

NetworkPage.ɵfac = function NetworkPage_Factory(t) {
  return new (t || NetworkPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
};

NetworkPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NetworkPage,
  selectors: [["app-network"]],
  decls: 24,
  vars: 5,
  consts: [[1, "ion-no-border"], ["slot", "start"], [1, "ion-padding"], ["src", "../assets/imgs/No connection-pana.svg"], ["color", "primary", 1, "ion-text-center"], ["size", "large", "shape", "round", "type", "submit", "color", "primary", "expand", "block", 3, "click"], [4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "language-fab"], ["size", "medium", "color", "light"], ["name", "language-outline"], ["side", "top"], ["color", "light", "size", "small", 3, "click"], ["color", "light", "type", "indeterminate"]],
  template: function NetworkPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-buttons", 1)(3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-list-header", 2)(7, "ion-label", 4)(8, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NetworkPage_Template_ion_button_click_11_listener() {
        return ctx.CheckNetwork();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NetworkPage_ion_label_12_Template, 3, 3, "ion-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NetworkPage_ion_progress_bar_13_Template, 1, 0, "ion-progress-bar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-fab", 8)(15, "ion-fab-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-fab-list", 11)(18, "ion-fab-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NetworkPage_Template_ion_fab_button_click_18_listener() {
        return ctx.changeLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "EN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-fab-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NetworkPage_Template_ion_fab_button_click_21_listener() {
        return ctx.changeLanguage("ms");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "MS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 3, "NETWORK.ERROR_MESSAGE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.approve);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.approve);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXR3b3JrLnBhZ2Uuc2NzcyJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_network_network_module_ts.js.map