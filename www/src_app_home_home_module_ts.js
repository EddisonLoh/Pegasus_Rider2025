"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _shared_ride_prompt_shared_ride_prompt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-ride-prompt/shared-ride-prompt.component */ 64692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);









class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _shared_ride_prompt_shared_ride_prompt_component__WEBPACK_IMPORTED_MODULE_2__.SharedRidePromptComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] }); })();


/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autocomplete/autocomplete.component */ 75860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 28653);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enroute-chat/enroute-chat.component */ 45635);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/network */ 54984);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/app */ 93253);
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-card/add-card.component */ 40671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _trip_summary_trip_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../trip-summary/trip-summary.component */ 94948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/network.service */ 62982);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/map.service */ 89947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/avatar.service */ 25083);
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/geocode.service */ 68793);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/overlay.service */ 75596);
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/payment.service */ 51863);
/* harmony import */ var _services_shared_ride_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/shared-ride.service */ 59103);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/settings.service */ 70452);
/* harmony import */ var _services_dijkstra_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/dijkstra.service */ 6354);
/* harmony import */ var _services_nearby_rider_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/nearby-rider.service */ 7418);
/* harmony import */ var _one_signal_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../one-signal.service */ 8126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_ride_prompt_shared_ride_prompt_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared-ride-prompt/shared-ride-prompt.component */ 64692);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ 38699);

/// <reference types="google.maps" />
/// <reference types="google.maps" />

































const _c0 = ["map"];
const _c1 = ["topBar"];
const _c2 = ["bottomBar"];
const _c3 = ["mapElement"];

function HomePage_ion_toolbar_1_ion_label_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-label", 24)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r20.duration);
  }
}

function HomePage_ion_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-toolbar", 16)(1, "ion-buttons", 17)(2, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_ion_toolbar_1_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r21.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "ion-buttons", 20)(8, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](9, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](10, HomePage_ion_toolbar_1_ion_label_10_Template, 3, 1, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](6, 2, "CANCEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r0.duration);
  }
}

function HomePage_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_ion_item_2_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r23.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.destinationAddress);
  }
}

function HomePage_ion_fab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-fab", 27)(1, "ion-fab-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-menu-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-fab", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_ion_fab_4_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r25.GotoSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "ion-fab-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-fab", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_ion_fab_5_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r27.testPushNotifications());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "ion-fab-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-fab", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_ion_fab_6_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r29.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "ion-fab-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_toolbar_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-toolbar", 36)(1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 2, "DRIVER_ARRIVES"), " ", ctx_r6.duration, "");
  }
}

function HomePage_ion_toolbar_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-toolbar", 36)(1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 2, "ARRIVAL_IN"), " ", ctx_r7.duration, "");
  }
}

function HomePage_ion_fab_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-fab", 37)(1, "ion-fab-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_ion_fab_12_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r31.resetLocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-fab", 40)(1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}

function HomePage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 42)(1, "ion-item-group", 43)(2, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_18_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r33.showAutocompleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r12.locationAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r12.locationAddress ? _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](6, 2, "WHERE_TO") : _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](7, 4, "WAITING_ADDRESS"));
  }
}

function HomePage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 42)(1, "ion-item-group", 43)(2, "ion-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_19_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r35.getDistanceAndDirections());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r13.destinationAddress);
  }
}

function HomePage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 42)(1, "ion-list-header")(2, "ion-item", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "ion-item-group", 43)(5, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_20_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r37.ReturnHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](9, 1, "NO_DRIVERS"));
  }
}

function HomePage_div_21_div_2_h2_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", ctx_r47.settingsService.currencySymbol, "", ctx_r47.price, "");
  }
}

function HomePage_div_21_div_2_h2_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h2", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate4"](" ", ctx_r48.settingsService.currencySymbol, "", ctx_r48.getDiscountedPriceRange().min.toFixed(0), " - ", ctx_r48.settingsService.currencySymbol, "", ctx_r48.getDiscountedPriceRange().max.toFixed(0), " ");
  }
}

function HomePage_div_21_div_2_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "p", 80)(1, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", ctx_r49.settingsService.currencySymbol, "", ctx_r49.price, "");
  }
}

function HomePage_div_21_div_2_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "p", 80)(1, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", ctx_r50.settingsService.currencySymbol, "", ctx_r50.price * 2, "");
  }
}

function HomePage_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 69)(1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_21_div_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r51.ShowDriverInfoPop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "ion-img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "div", 71)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](7, "ion-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "p", 73)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](10, "ion-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](13, "ion-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](16, HomePage_div_21_div_2_h2_16_Template, 2, 2, "h2", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](17, HomePage_div_21_div_2_h2_17_Template, 2, 4, "h2", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](18, HomePage_div_21_div_2_p_18_Template, 3, 2, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](19, HomePage_div_21_div_2_p_19_Template, 3, 2, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", ctx_r39.carname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r39.D_duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r39.driver_number_of_seats, " seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r39.sharedRideEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r39.sharedRideEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r39.sharedRideEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r39.sharedRideEnabled);
  }
}

function HomePage_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 81)(1, "div", 82)(2, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "ion-skeleton-text", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "div", 71)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "ion-skeleton-text", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "ion-skeleton-text", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "div", 76)(10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](11, "ion-skeleton-text", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](13, "ion-skeleton-text", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("animated", true);
  }
}

function HomePage_div_21_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate5"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 5, "SHARED_RIDE.POTENTIAL_SAVINGS"), ": ", ctx_r53.settingsService.currencySymbol, "", ctx_r53.getPotentialSavings().min.toFixed(2), " - ", ctx_r53.settingsService.currencySymbol, "", ctx_r53.getPotentialSavings().max.toFixed(2), "");
  }
}

function HomePage_div_21_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-spinner", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 1, "SHARED_RIDE.CALCULATING_ROUTE"));
  }
}

function HomePage_div_21_div_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_21_div_4_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r56.viewSharedRides());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "ion-button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", ctx_r55.nearbyRidersCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 3, "SHARED_RIDE.RIDERS_NEARBY"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](7, 5, "SHARED_RIDE.VIEW_MATCHES"), " ");
  }
}

function HomePage_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 86)(1, "ion-item", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "ion-label")(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "ion-toggle", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ionChange", function HomePage_div_21_div_4_Template_ion_toggle_ionChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r58.onSharedRideToggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, HomePage_div_21_div_4_div_11_Template, 5, 7, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](12, HomePage_div_21_div_4_div_12_Template, 5, 3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](13, HomePage_div_21_div_4_div_13_Template, 9, 7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](6, 6, "SHARED_RIDE.TOGGLE_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](9, 8, "SHARED_RIDE.TOGGLE_DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("checked", ctx_r41.sharedRideEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r41.sharedRideEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r41.isCalculatingRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r41.sharedRideEnabled && ctx_r41.nearbyRidersCount > 0 && !ctx_r41.isCalculatingRoute);
  }
}

function HomePage_div_21_ion_select_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-select-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const card_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", card_r60.cardId);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 3, card_r60.brand), " \u2022\u2022\u2022\u2022 ", card_r60.last4, " ");
  }
}

function HomePage_div_21_ion_note_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-note", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 1, "PAYMENT.CASH_HINT"), " ");
  }
}

function HomePage_div_21_ion_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "ion-icon", 104);
  }
}

function HomePage_div_21_ion_progress_bar_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "ion-progress-bar", 105);
  }
}

function HomePage_div_21_ion_label_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 1, "BOOK_RIDE"));
  }
}

function HomePage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 42)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, HomePage_div_21_div_2_Template, 20, 7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, HomePage_div_21_div_3_Template, 14, 5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, HomePage_div_21_div_4_Template, 14, 10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 56)(6, "ion-item", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](7, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "ion-select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ionChange", function HomePage_div_21_Template_ion_select_ionChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r61.chooseCard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "ion-select-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](15, HomePage_div_21_ion_select_option_15_Template, 3, 5, "ion-select-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "ion-select-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](19, HomePage_div_21_ion_note_19_Template, 4, 3, "ion-note", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "div", 64)(21, "ion-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_21_Template_ion_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r63.StartRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, HomePage_div_21_ion_icon_22_Template, 1, 0, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, HomePage_div_21_ion_progress_bar_23_Template, 1, 0, "ion-progress-bar", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](24, HomePage_div_21_ion_label_24_Template, 3, 3, "ion-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r15.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r15.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r15.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](10, 12, "PAYMENT.PAYMENT_METHOD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r15.selectedCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](14, 14, "CASH"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r15.savedPaymentMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](18, 16, "PAYMENT.ADD_NEW_CARD_OPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r15.savedPaymentMethods || ctx_r15.savedPaymentMethods.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r15.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r15.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r15.price);
  }
}

function HomePage_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 42)(1, "ion-list-header")(2, "ion-item")(3, "ion-avatar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "ion-img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "ion-label")(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "ion-item-group", 43)(12, "ion-button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_22_Template_ion_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r64.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](13, "ion-icon", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](17, "ion-progress-bar", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", ctx_r16.currentDriver.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r16.currentDriver.Driver_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](10, 5, "DRIVER_ARRIVES"), " ", ctx_r16.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](16, 7, "CANCEL"));
  }
}

function HomePage_div_23_ion_label_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-icon", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 1, "CASH"), "");
  }
}

function HomePage_div_23_ion_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 1, "CARD"), "");
  }
}

function HomePage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 42)(1, "div", 110)(2, "ion-item", 111)(3, "ion-label")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 112)(9, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](10, "ion-img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](12, "ion-icon", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "ion-item", 111)(16, "ion-label")(17, "ion-text", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](21, "ion-item", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, HomePage_div_23_ion_label_22_Template, 5, 3, "ion-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, HomePage_div_23_ion_label_23_Template, 5, 3, "ion-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "div", 115)(25, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "ion-accordion-group", 116)(28, "ion-accordion", 117)(29, "ion-item", 118)(30, "ion-label")(31, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "div", 119)(35, "ion-button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_23_Template_ion_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r68.CallDriver());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](36, "ion-icon", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](37, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](40, "ion-button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_23_Template_ion_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r69);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r70.EnterChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](41, "ion-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](42, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](45, "ion-button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_23_Template_ion_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r69);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r71.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](46, "ion-icon", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](47, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", ctx_r17.driverInfo.Driver_car, ".", ctx_r17.driverInfo.Driver_cartype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r17.driverInfo.Driver_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", ctx_r17.driverInfo.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r17.driverInfo.Driver_rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r17.driverInfo.Driver_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r17.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r17.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", ctx_r17.settingsService.currencySymbol, "", ctx_r17.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](33, 14, "MORE_OPTIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](39, 16, "CONTACT_DRIVER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](44, 18, "CHAT_DRIVER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](49, 20, "CANCEL_RIDE"));
  }
}

function HomePage_div_24_ion_label_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-icon", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 1, "CASH"), "");
  }
}

function HomePage_div_24_ion_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 1, "CARD"), "");
  }
}

function HomePage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 42)(1, "div", 110)(2, "ion-item", 111)(3, "ion-label")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 112)(9, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](10, "ion-img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](12, "ion-icon", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "ion-item", 111)(16, "ion-label")(17, "ion-text", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](21, "ion-item", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, HomePage_div_24_ion_label_22_Template, 5, 3, "ion-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, HomePage_div_24_ion_label_23_Template, 5, 3, "ion-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "div", 115)(25, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "ion-accordion-group", 116)(28, "ion-accordion", 117)(29, "ion-item", 118)(30, "ion-label")(31, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "div", 119)(35, "ion-button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_24_Template_ion_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r75);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r74.CallDriver());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](36, "ion-icon", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](37, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](40, "ion-button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function HomePage_div_24_Template_ion_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r75);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r76.EnterChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](41, "ion-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](42, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", ctx_r18.driverInfo.Driver_car, ".", ctx_r18.driverInfo.Driver_cartype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r18.driverInfo.Driver_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", ctx_r18.driverInfo.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r18.driverInfo.Driver_rating || 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r18.driverInfo.Driver_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r18.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r18.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", ctx_r18.settingsService.currencySymbol, "", ctx_r18.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](33, 13, "MORE_OPTIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](39, 15, "CONTACT_DRIVER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](44, 17, "CHAT_DRIVER"));
  }
}

function HomePage_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "app-shared-ride-prompt", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("accept", function HomePage_ng_template_26_Template_app_shared_ride_prompt_accept_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r78);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r77.acceptSharedRideOpportunity($event));
    })("dismiss", function HomePage_ng_template_26_Template_app_shared_ride_prompt_dismiss_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r78);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r79.dismissSharedRidePrompt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("opportunities", ctx_r19.availableSharedRides)("userLocation", ctx_r19.LatLng)("userDestination", ctx_r19.D_LatLng);
  }
}

class HomePage {
  constructor(auth, authService, router, route, networkService, map, nav, platform, firestore, database, ngZone, geocode, overlay, modalCtrl, alert, payME, toastController, actionSheetController, sharedRideService, settingsService, dijkstraService, nearbyRiderService, oneSignalService) {
    this.auth = auth;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.networkService = networkService;
    this.map = map;
    this.nav = nav;
    this.platform = platform;
    this.firestore = firestore;
    this.database = database;
    this.ngZone = ngZone;
    this.geocode = geocode;
    this.overlay = overlay;
    this.modalCtrl = modalCtrl;
    this.alert = alert;
    this.payME = payME;
    this.toastController = toastController;
    this.actionSheetController = actionSheetController;
    this.sharedRideService = sharedRideService;
    this.settingsService = settingsService;
    this.dijkstraService = dijkstraService;
    this.nearbyRiderService = nearbyRiderService;
    this.oneSignalService = oneSignalService;
    this.profile = null;
    this.presets = [];
    this.address = 'Unknown';
    this.cash = false;
    this.state = [];
    this.showResetLocationButton = false;
    this.destinationAddress = 'Drag To Pick Destination';
    this.locationAddress = null;
    this.price = 0;
    this.drivers_Requested = []; // Initialize as empty array

    this.current_Request_Number = 0; // Start at 0 instead of -1

    this.countdownActive = false;
    this.duration = null;
    this._carmarkers = [];
    this.networkStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_23__.BehaviorSubject(true);
    this.driverLocation = null;
    this.stopPolling = false;
    this.paymentProcessed = false;
    this.processingPaymentForRide = null; // Track which ride payment is being processed for

    this.RIDE_STATE_KEY = 'activeRideState';
    this.isLoadingDriver = false; // Shared ride properties

    this.sharedRideEnabled = false; // Toggle state for "Share & Save"

    this.sharedRideData = null; // Current shared ride data

    this.coPassengers = []; // Co-passengers in shared ride

    this.isSharedRide = false; // Is current ride a shared ride

    this.originalPrice = 0; // Original price before discount

    this.discountedPrice = 0; // Price after shared ride discount

    this.discountPercent = 0; // Discount percentage

    this.pickupQueuePosition = 0; // Position in pickup queue

    this.passengersBeforeMe = 0; // How many passengers picked up before me

    this.sharedRideSubscription = null;
    this.sharedRideNotificationSubscription = null; // Dijkstra route matching properties

    this.computedPath = null;
    this.nearbyMatches = [];
    this.sharedRideOpportunityId = null;
    this.availableSharedRides = [];
    this.showSharedRidePrompt = false;
    this.selectedSharedRide = null;
    this.nearbyOpportunitiesSubscription = null;
    this.isCalculatingRoute = false;
    this.nearbyRidersCount = 0; // Add these stage constants at the class level

    this.STAGES = {
      BOOKING: 'booking',
      CONFIRM: 'confirm',
      TRACKING: 'tracking',
      SEARCHING: 'searching',
      DRIVING: 'driving',
      NO_DRIVER: 'noDriver',
      MAP_PIN: 'mapPin',
      NO_DRIVERS: 'noDrivers'
    }; // Add this to your class properties

    this.lastHandledState = null; // Add this property to the class

    this.isRideStopProcessed = false; // Update interval for route tracking (in milliseconds)

    this.UPDATE_INTERVAL = 5000; // Update every 5 seconds

    this.initializeApp();
  }

  ngOnDestroy() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.unsubscribe) {
        _this.unsubscribe();
      } // window.removeEventListener('resize', this.setMapHeight.bind(this));


      _this.clearSubscriptions();

      yield _this.clearPrevMarkers();
      yield _this.clearAllPolylines(); // Clean up nearby rider subscriptions

      if (_this.nearbyOpportunitiesSubscription) {
        _this.nearbyOpportunitiesSubscription.unsubscribe();
      }

      _this.nearbyRiderService.unsubscribeFromOpportunities();
    })();
  }

  ionViewWillEnter() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Refresh payment methods every time the view is entered
      yield _this2.fetchSavedPaymentMethods(); // Check for shared ride deep link

      _this2.checkSharedRideDeepLink();
    })();
  }
  /**
   * Check for shared ride opportunity from deep link/notification
   */


  checkSharedRideDeepLink() {
    var _this3 = this;

    this.route.queryParams.subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        if (params['sharedOpportunityId'] && params['showSharedPrompt'] === 'true') {
          console.log('Handling shared ride deep link:', params['sharedOpportunityId']);
          yield _this3.handleSharedRideDeepLink(params['sharedOpportunityId']); // Clear the query params

          _this3.router.navigate([], {
            relativeTo: _this3.route,
            queryParams: {},
            replaceUrl: true
          });
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  ngAfterViewInit() {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // First check location permissions
        const hasPermission = yield _this4.checkAndRequestLocationPermissions();

        if (!hasPermission) {
          return;
        } // Initialize profile first


        yield _this4.initializeProfile(); // Then proceed with other initializations

        yield _this4.initializeApp();
        yield _this4.initializeNetworkMonitoring();
        yield _this4.fetchSavedPaymentMethods(); // load user preset places (localStorage-backed)

        yield _this4.loadPresets(); // Initialize geolocation and map BEFORE entering booking stage

        yield _this4.initializeGeolocation();
        yield _this4.initializeMap(); // Start polling position AFTER map is initialized to prevent race conditions

        _this4.startPollingPosition(); // Now it's safe to enter booking stage (map is initialized)


        _this4.EnterBookingStage(); // Set up real-time listener for ride state


        _this4.initializeRideStateListener();
      } catch (e) {
        console.log('Error in ngAfterViewInit:', e); //this.overlay.hideLoader();
        //this.overlay.showAlert('Error', 'An error occurred during initialization. Please try again.');
      }
    })();
  } // Preset places management (localStorage)


  loadPresets() {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const raw = localStorage.getItem('presetPlaces');

        if (raw) {
          _this5.presets = JSON.parse(raw);
        } else {
          // default presets
          _this5.presets = [{
            name: 'Queensbay Mall, Penang',
            address: 'Queensbay Mall, Bayan Lepas, Penang',
            lat: 5.2939,
            lng: 100.2719
          }, {
            name: 'George Town Ferry Terminal',
            address: 'Weld Quay, George Town, Penang',
            lat: 5.4141,
            lng: 100.3294
          }];
          localStorage.setItem('presetPlaces', JSON.stringify(_this5.presets));
        }
      } catch (e) {
        console.error('Failed to load presets', e);
        _this5.presets = [];
      }
    })();
  }

  savePresets() {
    var _this6 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        localStorage.setItem('presetPlaces', JSON.stringify(_this6.presets));
      } catch (e) {
        console.error('Failed to save presets', e);
      }
    })();
  } // Add current destination as preset


  addCurrentAsPreset() {
    var _this7 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this7.destinationAddress || !_this7.D_LatLng || !_this7.D_LatLng.lat) {
          const alert = yield _this7.alert.create({
            header: 'Add preset',
            message: 'Please choose a destination on the map first (pin or search).',
            buttons: ['OK']
          });
          yield alert.present();
          return;
        }

        const name = _this7.destinationAddress || 'New Place';

        _this7.presets.unshift({
          name,
          address: name,
          lat: _this7.D_LatLng.lat,
          lng: _this7.D_LatLng.lng
        }); // keep only latest 10


        if (_this7.presets.length > 10) _this7.presets.length = 10;
        yield _this7.savePresets();
      } catch (e) {
        console.error('Error adding preset', e);
      }
    })();
  } // Delete preset by index


  deletePreset(i) {
    var _this8 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.presets.splice(i, 1);

      yield _this8.savePresets();
    })();
  } // Select a preset: set destination and trigger directions


  selectPreset(preset) {
    var _this9 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this9.destinationAddress = preset.name || preset.address || '';

        if (preset.lat && preset.lng) {
          _this9.D_LatLng = {
            lat: preset.lat,
            lng: preset.lng
          }; // trigger distance/directions calculation

          yield _this9.getDistanceAndDirections();
        } else {
          // fallback: if no coords, open autocomplete modal with address prefilled
          // set data for modal then open it
          yield _this9.showAutocompleteModal();
        }
      } catch (e) {
        console.error('Failed to select preset', e);
      }
    })();
  } // Add this new method


  initializeProfile() {
    var _this0 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Show loader while initializing profile
        // await this.overlay.showLoader('Loading profile...');
        // Wait for auth state to be ready
        const user = yield new Promise(resolve => {
          const unsubscribe = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__.onAuthStateChanged)(_this0.auth, user => {
            unsubscribe();
            resolve(user);
          });
        });

        if (!user) {
          throw new Error('User not authenticated');
        } // Get profile data


        _this0.profile = yield _this0.database.getUserProfile();

        if (!_this0.profile) {
          console.log('Creating new profile...'); // If profile doesn't exist, create it with default values

          _this0.profile = {
            userId: user.uid,
            email: user.email,
            createdAt: new Date().toISOString() // Add any other default profile fields you need

          };
          yield _this0.database.createUserProfile(_this0.profile);
        }

        console.log('Profile initialized:', _this0.profile);

        _this0.overlay.hideLoader();
      } catch (error) {
        console.error('Error initializing profile:', error);

        _this0.overlay.hideLoader();

        yield _this0.overlay.showAlert('Profile Error', 'Unable to initialize user profile. Please try again or contact support.');
        throw error;
      }
    })();
  } // Add this method to check profile before any ride-related action


  ensureProfileInitialized() {
    var _this1 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this1.profile) {
        try {
          yield _this1.initializeProfile();
          return true;
        } catch (error) {
          console.error('Error ensuring profile is initialized:', error);
          return false;
        }
      }

      return true;
    })();
  }

  initializeRideStateListener() {
    var _this10 = this;

    console.log('Initializing ride state listener'); // Reset lastHandledState on initialization to ensure proper state restoration

    this.lastHandledState = null;
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__.onAuthStateChanged)(this.auth, user => {
      if (!user) return; // Listen to the Request collection for active rides for this user

      const requestsQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.collection)(this.firestore, 'Request'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.where)('Rider_id', '==', user.uid), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.where)('status', 'in', ['pending', 'confirmed', 'started']));
      this.unsubscribe = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.onSnapshot)(requestsQuery, /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (snapshot) {
          try {
            // If no active rides found, go to booking stage
            if (snapshot.empty) {
              console.log('No active rides found');

              _this10.setStage(_this10.STAGES.BOOKING);

              return;
            } // Get the most recent active ride


            const activeRides = snapshot.docs;
            const currentRide = activeRides[0];
            const rideData = currentRide.data();
            _this10.requestID = currentRide.id; // Restore price information

            _this10.price = rideData.price || 0;
            console.log('Restored ride price:', _this10.price);
            console.log('Current ride status:', rideData.status); // IMPORTANT: On app initialization, always restore ride state regardless of lastHandledState

            const isAppInitialization = !_this10.lastHandledState; // Only skip if we've already handled this state AND it's not initial app load

            if (_this10.lastHandledState === rideData.status && !isAppInitialization) {
              console.log('State already properly handled:', rideData.status);
              return;
            } // Store location data for later use


            if (rideData.Loc_lat && rideData.Loc_lng) {
              _this10.LatLng = {
                lat: rideData.Loc_lat,
                lng: rideData.Loc_lng
              };
            }

            if (rideData.Des_lat && rideData.Des_lng) {
              _this10.D_LatLng = {
                lat: rideData.Des_lat,
                lng: rideData.Des_lng
              };
            } // Store addresses


            _this10.locationAddress = rideData.Rider_Location || 'Unknown location';
            _this10.destinationAddress = rideData.Rider_Destination || 'Unknown destination';
            console.log('Restoring ride state:', rideData.status); // Handle different ride states

            switch (rideData.status) {
              case 'pending':
                yield _this10.handlePendingState();
                break;

              case 'confirmed':
                console.log('Handling confirmed state on restore...');
                yield _this10.handleRideConfirmation(rideData);
                break;

              case 'started':
                yield _this10.handleRideStart(currentRide);
                break;

              case 'cancelled':
                yield _this10.handleRideCancellation(rideData);
                break;

              default:
                console.log('Unknown ride status:', rideData.status);

                _this10.setStage(_this10.STAGES.BOOKING);

            } // Only update lastHandledState AFTER successful handling


            _this10.lastHandledState = rideData.status;
          } catch (error) {
            console.error('Error handling ride state:', error);

            if (error.code === 'permission-denied' || error.code === 'not-found') {
              _this10.overlay.showAlert('Error', 'Failed to restore ride state. Please try again.');

              _this10.setStage(_this10.STAGES.BOOKING);
            }
          }
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), error => {
        console.error('Error in ride state listener:', error);
        this.setStage(this.STAGES.BOOKING);
      });
    });
  }

  handleRemovedRide() {
    console.log('Ride was removed');
    this.clearRideData();
    this.setStage(this.STAGES.BOOKING);
  }

  clearRideData() {
    this.requestID = null;
    this.driverInfo = null;
    this.rideHasStarted = false;
    this.lastHandledState = null;
    this.paymentProcessed = false; // Reset payment flag

    this.processingPaymentForRide = null; // Reset processing flag
    // Clear any other ride-specific data
  }

  checkAndRequestLocationPermissions() {
    var _this11 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if running on web platform
        if (_this11.platform.is('capacitor')) {
          const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();

          if (permissionStatus.location === 'granted') {
            _this11.overlay.hideLoader();

            return true;
          }

          const alert = yield _this11.alert.create({
            header: 'Location Permission Required',
            message: 'This app needs access to your location to function properly.',
            buttons: [{
              text: 'Enable Location',
              handler: function () {
                var _ref3 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  const newStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();

                  _this11.overlay.hideLoader();

                  if (newStatus.location !== 'granted') {
                    yield _this11.showLocationRequiredAlert();
                    return false;
                  }

                  return true;
                });

                return function handler() {
                  return _ref3.apply(this, arguments);
                };
              }()
            }],
            backdropDismiss: false
          });
          yield alert.present();
          const {
            role
          } = yield alert.onDidDismiss();

          if (role === 'backdrop') {
            _this11.overlay.hideLoader();

            yield _this11.showLocationRequiredAlert();
            return false;
          }
        } else {
          // Web platform - use browser's geolocation API
          if ('geolocation' in navigator) {
            return new Promise(resolve => {
              navigator.permissions.query({
                name: 'geolocation'
              }).then(result => {
                if (result.state === 'granted') {
                  _this11.overlay.hideLoader();

                  resolve(true);
                } else {
                  _this11.overlay.hideLoader();

                  resolve(_this11.showWebLocationPrompt());
                }
              });
            });
          } else {
            _this11.overlay.hideLoader();

            yield _this11.overlay.showAlert('Error', 'Geolocation is not supported in this browser.');
            return false;
          }
        }

        return true;
      } catch (error) {
        console.error('Error checking/requesting location permissions:', error);

        _this11.overlay.hideLoader();

        throw error;
      }
    })();
  }

  showWebLocationPrompt() {
    var _this12 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this12.alert.create({
        header: 'Location Access',
        message: 'This app needs your location. Please allow location access when prompted by your browser.',
        buttons: [{
          text: 'OK',
          handler: () => {
            return new Promise(resolve => {
              navigator.geolocation.getCurrentPosition(() => resolve(true), () => {
                _this12.showLocationRequiredAlert();

                resolve(false);
              });
            });
          }
        }]
      });
      yield alert.present();
      return true;
    })();
  }

  showLocationRequiredAlert() {
    var _this13 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alert.create({
        header: 'Location Required',
        message: 'Location permission is required to use this app. Please enable location services in your device settings.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  fetchSavedPaymentMethods() {
    var _this14 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this14.savedPaymentMethods = yield _this14.database.getSavedPaymentMethods();
        console.log('Saved Payment Methods:', _this14.savedPaymentMethods); // Set default payment method to cash if no cards are saved

        if (_this14.savedPaymentMethods.length === 0) {
          _this14.selectedCard = 'cash';
          _this14.cash = true;
        } else {
          _this14.selectedCard = _this14.savedPaymentMethods[0].cardId;
          _this14.cash = false;
        }
      } catch (error) {
        console.error('Error fetching saved payment methods:', error);
      }
    })();
  }

  chooseCard(event) {
    const selectedValue = event.detail.value; // Handle the \"Add Card\" option

    if (selectedValue === 'add_card') {
      this.openAddCardModal(); // Reset to previous selection if user cancels or if no cards after modal

      if (!this.selectedCard || this.selectedCard === 'add_card') {
        this.selectedCard = this.savedPaymentMethods.length > 0 ? this.savedPaymentMethods[0].cardId : 'cash';
        this.cash = this.selectedCard === 'cash';
      }

      return;
    }

    this.selectedCard = selectedValue;
    this.cash = this.selectedCard === 'cash';

    if (!this.cash) {// this.processPayment(this.authService.user.email, this.defaultAmount, this.selectedCard);
    }
  } // async processPayment(email: string, amount: number, cardId: any) {
  //   //this.overlay.showLoader('Processing payment...');
  //   try {
  //     const paymentResult = await this.payME.processPaymentWithCardId(email, amount, cardId).toPromise();
  //     console.log('Payment successful:', paymentResult);
  //     await this.overlay.showAlert('Success', 'Payment successful!');
  //   } catch (error) {
  //     console.error('Error during payment:', error);
  //     const errorMessage = error.error ? error.error.error : 'An unexpected error occurred.';
  //     await this.showPaymentErrorModal(errorMessage);
  //   } finally {
  //     //this.overlay.hideLoader();
  //   }
  // }


  processRidePayment(rideData) {
    var _this15 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if payment was already processed for this ride
        if (_this15.paymentProcessed) {
          console.log('Payment already processed for this ride, skipping...');
          return;
        } // Check if payment was already processed in the database


        const rideRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.doc)(_this15.firestore, 'Request', _this15.requestID);
        const rideDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.getDoc)(rideRef);
        const existingData = rideDoc.data();

        if (existingData?.paymentProcessed) {
          console.log('Payment already processed in database, skipping...');
          _this15.paymentProcessed = true;
          return;
        }

        console.log('Processing ride payment...'); // Validate price before processing

        if (!_this15.price || typeof _this15.price !== 'number' || _this15.price <= 0) {
          console.error('Invalid price for payment:', _this15.price);
          throw new Error('Invalid price amount');
        } // Calculate split: 80% to driver, 20% to company


        const totalAmount = Math.round(_this15.price * 100); // Convert to cents
        // Stripe requires minimum 50 cents

        if (totalAmount < 50) {
          console.error('Amount too small for Stripe:', totalAmount);
          throw new Error(`Payment amount is too small (minimum ${_this15.settingsService.currencySymbol}0.50)`);
        }

        const driverAmount = Math.round(totalAmount * 0.80);
        const companyAmount = totalAmount - driverAmount;
        console.log('Payment amounts - Total:', totalAmount, 'cents, Driver:', driverAmount, 'cents, Company:', companyAmount, 'cents'); // Validate required fields

        if (!_this15.selectedCard || _this15.selectedCard === 'cash') {
          console.error('Invalid payment method:', _this15.selectedCard);
          throw new Error('No valid payment method selected');
        }

        if (!_this15.database.user?.email) {
          console.error('User email not found');
          throw new Error('User email is required for payment');
        }

        if (!_this15.requestID) {
          console.error('Request ID not found');
          throw new Error('Ride ID is required for payment');
        }

        const paymentData = {
          email: _this15.database.user.email,
          amount: totalAmount,
          currency: _this15.settingsService.currency.toLowerCase(),
          paymentMethodId: _this15.selectedCard,
          driverId: rideData.driverDetails?.Driver_id || _this15.driverInfo?.Driver_id || '',
          rideId: _this15.requestID,
          driverAmount: driverAmount,
          companyAmount: companyAmount,
          description: `Ride from ${_this15.locationAddress || 'pickup'} to ${_this15.destinationAddress || 'destination'}`
        };
        console.log('Payment data:', JSON.stringify(paymentData, null, 2)); // Show loading indicator using overlay service
        //this.overlay.showLoader('Processing payment...');
        // Process the payment

        const paymentResult = yield _this15.payME.processRidePayment(paymentData).toPromise(); //this.overlay.hideLoader();

        if (paymentResult.success) {
          console.log('Payment processed successfully:', paymentResult); // Mark payment as processed FIRST

          _this15.paymentProcessed = true; // Update ride document with payment information

          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.doc)(_this15.firestore, 'Request', _this15.requestID), {
            paymentProcessed: true,
            paymentIntentId: paymentResult.paymentIntentId,
            paymentAmount: totalAmount,
            paymentTimestamp: new Date(),
            driverAmount: driverAmount,
            companyAmount: companyAmount
          }); // Show success toast

          const toast = yield _this15.toastController.create({
            message: 'Payment processed successfully',
            duration: 2000,
            position: 'bottom',
            color: 'success'
          });
          yield toast.present();
        } else {
          throw new Error(paymentResult.error || 'Payment failed');
        }
      } catch (error) {
        console.error('Error processing ride payment:', error);

        _this15.overlay.hideLoader(); // Extract meaningful error message


        let errorMessage = 'Payment could not be processed.';

        if (error?.error?.error) {
          errorMessage = error.error.error;
        } else if (error?.message) {
          errorMessage = error.message;
        } else if (typeof error === 'string') {
          errorMessage = error;
        }

        console.error('Payment error details:', errorMessage); // Show error to user but don't cancel the ride

        const alert = yield _this15.alert.create({
          header: 'Payment Error',
          message: `${errorMessage}\n\nYou can pay cash to the driver instead.`,
          buttons: [{
            text: 'Pay Cash',
            handler: function () {
              var _ref4 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                // Switch to cash payment
                _this15.cash = true;
                _this15.paymentProcessed = true; // Mark as processed to prevent retry

                if (_this15.requestID) {
                  yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.doc)(_this15.firestore, 'Request', _this15.requestID), {
                    cash: true,
                    paymentMethod: 'cash',
                    paymentProcessed: true
                  });
                }
              });

              return function handler() {
                return _ref4.apply(this, arguments);
              };
            }()
          }, {
            text: 'Retry Payment',
            handler: function () {
              var _ref5 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                // Reset the flag before retrying
                _this15.paymentProcessed = false;
                yield _this15.processRidePayment(rideData);
              });

              return function handler() {
                return _ref5.apply(this, arguments);
              };
            }()
          }]
        });
        yield alert.present();
      }
    })();
  }

  showPaymentErrorModal(errorMessage) {
    var _this16 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this16.alert.create({
        header: 'Payment Error',
        message: errorMessage,
        buttons: [{
          text: 'Add New Card',
          handler: function () {
            var _ref6 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield _this16.openAddCardModal();
            });

            return function handler() {
              return _ref6.apply(this, arguments);
            };
          }()
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      });
      yield alert.present();
    })();
  }

  openAddCardModal() {
    var _this17 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this17.modalCtrl.create({
        component: _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_6__.AddCardComponent
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();

      if (data && data.success) {
        // Refresh payment methods after adding a card
        yield _this17.fetchSavedPaymentMethods(); // Select the newly added card if available

        if (_this17.savedPaymentMethods.length > 0) {
          _this17.selectedCard = _this17.savedPaymentMethods[_this17.savedPaymentMethods.length - 1].cardId;
          _this17.cash = false;
        }
      }
    })();
  }

  updateMapPadding(bottomPadding) {
    var _this18 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this18.map && _this18.map.newMap) {
        yield _this18.map.newMap.setPadding({
          top: 0,
          left: 0,
          right: 0,
          bottom: bottomPadding
        });
      }
    })();
  }

  setMapHeight() {
    this.updateMapPadding(0);
  }

  setMapHeightCreateAndAddMarkers() {
    this.updateMapPadding(40);
  }

  setMapHeightHandleDrivertoRider() {
    this.updateMapPadding(20);
  }

  setMapHeightHandleDrivertoDestination() {
    this.updateMapPadding(0);
  }

  ResetMapHeight() {
    this.updateMapPadding(0);
  }

  initializeNetworkMonitoring() {
    var _this19 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.getStatus();
      _this19.isConnected = status.connected;

      _this19.networkStatus$.next(_this19.isConnected);

      console.log('Network monitoring initialized. Initial status:', _this19.isConnected);
      _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.addListener('networkStatusChange', status => {
        console.log('Network status changed:', status);
        _this19.isConnected = status.connected;

        _this19.networkStatus$.next(_this19.isConnected);
      });

      _this19.networkStatus$.subscribe(isConnected => {
        if (isConnected) {
          _this19.router.navigate(['home']);
        } else {
          _this19.router.navigate(['network']);
        }
      });
    })();
  }

  initializeApp() {
    var _this20 = this;

    this.platform.ready().then( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this20.initializeRideStateListener();
      } catch (error) {
        console.error('Error initializing app:', error);

        _this20.setStage(_this20.STAGES.BOOKING);
      }
    }));
  }

  initializeGeolocation() {
    var _this21 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let coordinates;

        if (_this21.platform.is('capacitor')) {
          coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition({
            timeout: 10000
          });
        } else {
          // Web fallback
          coordinates = yield new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
              resolve({
                coords: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  accuracy: position.coords.accuracy,
                  altitude: position.coords.altitude,
                  altitudeAccuracy: position.coords.altitudeAccuracy,
                  heading: position.coords.heading,
                  speed: position.coords.speed
                },
                timestamp: position.timestamp
              });
            }, error => reject(error), {
              timeout: 10000
            });
          });
        }

        _this21.coordinates = coordinates;
        _this21.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };
        yield _this21.database.updateLocation(_this21.LatLng);
        console.log('Geolocation initialized:', _this21.LatLng); // Note: startPollingPosition is called after map initialization in ngAfterViewInit
      } catch (error) {
        console.error('Error initializing geolocation:', error);

        _this21.overlay.hideLoader();

        yield _this21.overlay.showAlert('Location Error', 'Unable to get your location. Please check your device settings and try again.');
      }
    })();
  }

  startPermissionPolling() {
    var _this22 = this;

    this.permissionCheckInterval = setInterval( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();

      if (permissionStatus.location === 'granted') {
        _this22.overlay.hideLoader();

        clearInterval(_this22.permissionCheckInterval); // Try to get the current position again if permissions are granted

        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        _this22.coordinates = coordinates;
        _this22.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };
        console.log('Geolocation initialized:', _this22.LatLng); // Start polling the user's position

        _this22.startPollingPosition();
      }
    }), 1000); // Check every second
  }

  startPollingPosition() {
    var _this23 = this;

    let lastLatLng = {
      lat: null,
      lng: null
    };
    let lastAddress = null;
    this.pollingInterval = setInterval( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let position;

        if (_this23.platform.is('capacitor')) {
          position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        } else {
          // Web fallback
          position = yield new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        }

        const newLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        yield _this23.database.updateLocation(newLatLng);

        if (_this23.hasSignificantLocationChange(lastLatLng, newLatLng, 50)) {
          // Check if moved at least 50 meters
          lastLatLng = newLatLng;
          const address = yield _this23.map.getAddress(newLatLng.lat, newLatLng.lng);

          if (address && address.results && address.results.length > 1) {
            const components = address.results[1].address_components;

            if (components.length >= 2) {
              _this23.locationAddress = components[0].long_name + ' ' + components[1].long_name;
              _this23.actualLocation = address.results[0].formatted_address;

              if (_this23.locationAddress !== lastAddress) {
                console.log('Updated Location Address:', _this23.locationAddress);
                lastAddress = _this23.locationAddress;
              }
            }
          } else {
            console.log('Unable to update location address');
          }
        }

        if (_this23.networkService.isConnected() && !_this23.stopPolling) {
          // Don't fetch drivers if we're in a stage where drivers are already selected
          // This prevents overwriting the drivers_Requested array during booking flow
          if (_this23.confirmStage || _this23.searchingStage || _this23.trackingStage || _this23.drivingToDestinationStage) {
            console.log('Skipping driver fetch - already in booking/tracking stage');
          } else {
            const center = [newLatLng.lat, newLatLng.lng];
            const radiusInM = 8000; // Example radius in meters
            // Only fetch drivers if map is initialized to prevent race condition

            if (_this23.mapy && _this23.map && _this23.map.newMap) {
              yield _this23.fetchAndDisplayDrivers(center, radiusInM);
            } else {
              console.log('Map not yet initialized, skipping driver fetch');
            }
          }
        } else {
          console.log('No network connection.', _this23.stopPolling);
        }
      } catch (err) {
        console.error('Error getting position:', err); // Reduce error alerts by not showing specific errors repeatedly
      }
    }), 3000); // Poll every 3 seconds for more responsive location updates
  }

  hasSignificantLocationChange(oldLatLng, newLatLng, minDistance) {
    if (!oldLatLng.lat || !oldLatLng.lng) return true;
    const R = 6371e3; // Earth radius in meters

    const φ1 = oldLatLng.lat * Math.PI / 180;
    const φ2 = newLatLng.lat * Math.PI / 180;
    const Δφ = (newLatLng.lat - oldLatLng.lat) * Math.PI / 180;
    const Δλ = (newLatLng.lng - oldLatLng.lng) * Math.PI / 180;
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in meters

    return distance >= minDistance;
  }

  stopPollingPosition() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
      console.log('Stopped polling position.');
    } else {
      console.log('No polling to stop.');
    }
  }

  initializeMap() {
    var _this24 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Ensure coordinates are available before creating map
        if (!_this24.coordinates || !_this24.coordinates.coords) {
          yield _this24.overlay.showAlert('Coordinates not available, using default location', '');
          console.warn('Coordinates not available, using default location'); // Use default coordinates (Kuala Lumpur, Malaysia)

          _this24.coordinates = {
            coords: {
              latitude: 3.1390,
              longitude: 101.6869,
              accuracy: 0,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              speed: null
            },
            timestamp: Date.now()
          };
        }

        yield _this24.map.createMap(_this24.mapRef.nativeElement, _this24.coordinates);
        _this24.mapy = true;
        _this24.actualLocation = _this24.map.actualLocation; // console.log('Map initialized:', this.actualLocation, this.locationAddress);
      } catch (error) {
        _this24.overlay.showAlert('Error initializing map:', error);

        throw new Error('Map initialization failed');
      }
    })();
  }

  initializeDatabaseSubscriptions() {
    this.database.getKnownPlaces().subscribe(d => {
      console.log('Received data:', d);
      this.places = d.slice(0, 3);
    });
  }

  initializeBackButtonCustomHandler() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Back button pressed');
    });
    _capacitor_app__WEBPACK_IMPORTED_MODULE_5__.App.addListener('backButton', ({
      canGoBack
    }) => {
      if (!canGoBack) {
        // Show a confirmation dialog before exiting the app
        if (confirm('Are you sure you want to exit the app?')) {
          _capacitor_app__WEBPACK_IMPORTED_MODULE_5__.App.exitApp();
        }
      } else {
        console.log("back clicked"); // Use Ionic's NavController to navigate back
        // Replace 'NavController' with your specific navigation method
        // this.navCtrl.pop();

        window.history.back();
      }
    }); // App.addListener('appStateChange', (state) => {
    //   if (!state.isActive) {
    //     this.stopPollingPosition();
    //   } else {
    //     this.startPollingPosition();
    //   }
    // });
  }

  setupMapListeners() {
    var _this25 = this;

    this.map.newMap.setOnCameraIdleListener( /*#__PURE__*/function () {
      var _ref0 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (g) {
        _this25.ngZone.run( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this25.showResetLocationButton = true;

          if (_this25.mapPinStage) {
            const addressResponse = yield _this25.geocode.getAddress(g.latitude, g.longitude).toPromise();

            _this25.processAddressResponse(addressResponse);
          }
        }));
      });

      return function (_x3) {
        return _ref0.apply(this, arguments);
      };
    }());
  }

  logout() {
    var _this26 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this26.authService.logout();
    })();
  }

  fetchAndDisplayDrivers(center, radiusInM) {
    var _this27 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const drivers = yield _this27.database.checkDriversWithin(center, radiusInM);
        console.log('Fetched drivers:', drivers);
        yield _this27.handleDrivers(drivers);

        if (_this27.drivers_Requested.length > 0) {
          _this27.current_Request_Number = 0; // Set to the first available driver

          _this27.NoDrivers = false; // Only update markers if map is initialized

          if (_this27.map && _this27.map.newMap && _this27.mapy) {
            yield _this27.UpdateCarMarker(_this27.drivers_Requested);
          }
        } else {
          // Keep current_Request_Number at 0 (not -1) - we'll check array length instead
          _this27.NoDrivers = true; // Only update markers if map is initialized

          if (_this27.map && _this27.map.newMap && _this27.mapy) {
            yield _this27.UpdateCarMarker([]); // Clear all markers if no drivers are requested
          }
        }
      } catch (error) {
        console.error('Error fetching drivers:', error); // Don't reset driver data on errors - preserve any valid drivers we already have
        // The error might just be a map issue, not a driver fetch issue

        console.log('Preserving existing driver data. drivers_Requested length:', _this27.drivers_Requested?.length); // Try to update markers only if map is initialized

        if (_this27.map && _this27.map.newMap && _this27.mapy) {
          yield _this27.UpdateCarMarker([]).catch(e => console.warn('Could not clear markers:', e));
        }
      }
    })();
  }

  handleDrivers(drivers) {
    var _this28 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // TRACE: Log when and from where drivers_Requested is being reset
      console.log('handleDrivers called - RESETTING drivers_Requested. Stack trace:');
      console.trace('handleDrivers called from:');
      _this28.drivers_Requested = [];
      _this28.closeDrivers = null;
      console.log('Handling drivers:', drivers);

      if (drivers.length === 0) {
        _this28.NoDrivers = true;
        console.log('No drivers found.');
        return;
      }

      drivers.forEach(driver => {
        if (driver) {
          console.log('Processing driver:', driver); // Duration is in milliseconds - allow drivers within 60 minutes (3600000ms)

          if (driver.duration <= 3600000 && driver.onlineState) {
            _this28.drivers_Requested.push(driver);

            _this28.updateDriverInfo(driver);
          }

          if (!_this28.closeDrivers || driver.duration < _this28.closeDrivers.duration) {
            _this28.closeDrivers = driver;
          }
        } else {
          console.error('Driver is null or undefined:', driver);
        }
      });

      if (_this28.drivers_Requested.length === 0) {
        _this28.NoDrivers = true;
        _this28.current_Request_Number = 0; // Keep at 0, not -1

        console.log('No valid drivers after filtering. NoDrivers:', _this28.NoDrivers);
      } else {
        _this28.NoDrivers = false; // Always ensure current_Request_Number is within valid range

        _this28.current_Request_Number = Math.max(0, Math.min(_this28.current_Request_Number, _this28.drivers_Requested.length - 1));
        console.log('Valid drivers found. current_Request_Number:', _this28.current_Request_Number, 'Total:', _this28.drivers_Requested.length);
      }

      console.log('Final requested drivers list:', _this28.drivers_Requested);
    })();
  } // Unsubscribe from all active listeners (for cleanup)


  cleanupListeners() {
    Object.values(this.database.activeListeners).forEach(unsubscribe => unsubscribe());
    this.database.activeListeners = {};
  }

  updateDriverInfo(driver) {
    console.log(this.drivers_Requested);
    this.carname = driver.Driver_car;
    this.driverImage = driver.Driver_imgUrl, this.driver_duration_apart = Math.ceil(driver.duration / 60000);
    this.driver_ID = driver.Driver_id;
    this.driver_number_of_seats = driver.seats;
    this.DriverLatLng = {
      lat: driver.Driver_lat,
      lng: driver.Driver_lng
    };
  }

  StartRide() {
    var _this29 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('=== StartRide called ===');
      console.log('StartRide - drivers_Requested BEFORE anything:', _this29.drivers_Requested?.length, _this29.drivers_Requested);
      console.log('StartRide - current_Request_Number:', _this29.current_Request_Number);
      console.log('StartRide - stopPolling:', _this29.stopPolling);

      if (_this29.isLoadingDriver) {
        console.log('Ride request already in progress...');
        return;
      }

      _this29.isLoadingDriver = true;

      _this29.overlay.showLoader('Preparing your ride...');

      try {
        // Group operations that can be done concurrently
        yield Promise.all([_this29.clearPrevMarkers(), _this29.clearAllPolylines()]);

        _this29.map.newMap.enableTouch();

        yield _this29.BookRide();
      } catch (error) {
        console.error('Error starting ride:', error);
        yield _this29.overlay.showAlert('Starting Ride Error', error.message || 'Failed to start ride');
      } finally {
        // Ensure we always hide the loader and reset the loading state
        _this29.isLoadingDriver = false;

        _this29.overlay.hideLoader();
      }
    })();
  }

  clearMarkers() {
    var _this30 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Check if map is initialized
      if (!_this30.map || !_this30.map.newMap) {
        console.warn('Map not initialized when clearing markers');
        return;
      }

      try {
        if (_this30.marker1 !== null && _this30.marker1 !== undefined) {
          yield _this30.map.newMap.removeMarker(_this30.marker1).catch(e => console.error('Error removing marker1:', e));
          _this30.marker1 = null;
        }

        if (_this30.marker2 !== null && _this30.marker2 !== undefined) {
          yield _this30.map.newMap.removeMarker(_this30.marker2).catch(e => console.error('Error removing marker2:', e));
          _this30.marker2 = null;
        }

        if (_this30._carmarkers && Array.isArray(_this30._carmarkers)) {
          for (const {
            marker
          } of _this30._carmarkers) {
            if (marker !== null && marker !== undefined) {
              yield _this30.map.newMap.removeMarker(marker).catch(e => console.error('Error removing car marker:', e));
            }
          }

          _this30._carmarkers = [];
        }
      } catch (error) {
        console.error('Error in clearMarkers:', error);
      }
    })();
  }

  BookRide() {
    var _this31 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!(yield _this31.ensureProfileInitialized())) {
          throw new Error('Profile not initialized');
        } // Debug logging to trace the issue


        console.log('BookRide called - current_Request_Number:', _this31.current_Request_Number);
        console.log('BookRide called - drivers_Requested:', _this31.drivers_Requested);
        console.log('BookRide called - drivers_Requested length:', _this31.drivers_Requested?.length); // If no valid driver, try to refresh driver list first

        if (!_this31.hasValidDriver()) {
          console.log('No valid driver found, attempting to refresh driver list...'); // Try to fetch drivers again if we have a valid location

          if (_this31.LatLng?.lat && _this31.LatLng?.lng) {
            const center = [_this31.LatLng.lat, _this31.LatLng.lng];
            const radiusInM = 8000; // Fetch drivers directly without map dependency

            const drivers = yield _this31.database.checkDriversWithin(center, radiusInM);
            console.log('Refreshed drivers:', drivers);
            yield _this31.handleDrivers(drivers);
            console.log('After refresh - drivers_Requested:', _this31.drivers_Requested?.length);
            console.log('After refresh - current_Request_Number:', _this31.current_Request_Number);
          } // Check again after refresh


          if (!_this31.hasValidDriver()) {
            _this31.showNoDriversAlert();

            return;
          }
        }

        const driver = _this31.drivers_Requested[_this31.current_Request_Number];
        console.log('Selected driver:', driver);
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.doc)(_this31.firestore, `Drivers`, driver.Driver_id);
        const docSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.getDoc)(userDocRef);

        if (!docSnapshot.exists()) {
          throw new Error('Driver document not found');
        }

        const data = docSnapshot.data();

        if (!data?.onlineState) {
          yield _this31.handleNoAvailableDriver();
          return;
        }

        _this31.driverInfo = data;
        yield _this31.requestRideWithDriverDetails(driver, userDocRef);

        _this31.updateDriverInfo(driver);
      } catch (error) {
        console.error('Error in BookRide:', error);

        _this31.overlay.showAlert('Error', 'Unable to book ride. Please try again.');
      }
    })();
  }

  hasValidDriver() {
    // Debug: Show full driver object structure
    console.log('=== hasValidDriver DEBUG ===');
    console.log('Full drivers_Requested array:', JSON.stringify(this.drivers_Requested, null, 2));

    if (this.drivers_Requested?.length > 0 && this.current_Request_Number >= 0) {
      const currentDriver = this.drivers_Requested[this.current_Request_Number];
      console.log('Current driver object:', currentDriver);
      console.log('Current driver keys:', currentDriver ? Object.keys(currentDriver) : 'N/A');
    }

    const isValid = this.drivers_Requested?.length > 0 && this.current_Request_Number >= 0 && this.current_Request_Number < this.drivers_Requested.length && this.drivers_Requested[this.current_Request_Number]?.Driver_id != null;
    console.log('hasValidDriver check:', {
      driversLength: this.drivers_Requested?.length,
      currentRequestNum: this.current_Request_Number,
      hasDriverId: this.drivers_Requested?.[this.current_Request_Number]?.Driver_id,
      isValid
    });
    return isValid;
  }

  requestRideWithDriverDetails(driver, userDocRef) {
    var _this32 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!(yield _this32.ensureProfileInitialized())) {
          throw new Error('Profile not initialized');
        } // Store original price before any discounts


        _this32.originalPrice = _this32.price;
        const requestDetails = {
          latLng: _this32.LatLng,
          destinationAddress: _this32.destinationAddress,
          locationAddress: _this32.locationAddress,
          dLatLng: _this32.D_LatLng,
          driverId: driver.Driver_id,
          price: _this32.price,
          cash: _this32.cash,
          // Shared ride fields
          sharedRideAccepted: _this32.sharedRideEnabled,
          isSharedRide: false,
          sharedRideId: null,
          originalPrice: _this32.price,
          discountedPrice: _this32.price,
          discountPercent: 0
        };
        _this32.requestID = yield _this32.database.RequestRideWithRiderDetails(requestDetails);

        if (_this32.requestID) {
          _this32.currentDriver = driver; // Set up listener before handling pending state

          const rideRequestDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.doc)(_this32.firestore, `Request`, _this32.requestID);
          const unsub = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.onSnapshot)(rideRequestDocRef, /*#__PURE__*/function () {
            var _ref10 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
              if (doc.exists()) {
                yield _this32.handleRideUpdates(doc);
              } else {
                console.error('Ride request document does not exist.');
              }
            });

            return function (_x4) {
              return _ref10.apply(this, arguments);
            };
          }());
          _this32.unsubscribe = unsub; // Now handle the pending state

          yield _this32.handlePendingState();
        } else {
          throw new Error('Failed to generate requestID');
        }
      } catch (error) {
        console.error('Error in requestRideWithDriverDetails:', error);

        _this32.overlay.showAlert('Error', 'Unable to request ride. Please try again.');
      }
    })();
  }

  showNoDriversAlert() {
    console.error('No valid driver available to book a ride.');
    this.overlay.showAlert('No Drivers ', 'No available drivers found. Please try again later.');
  }

  handleNoAvailableDriver() {
    var _this33 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Driver is not available, moving to next.');
      _this33.current_Request_Number++;

      if (_this33.hasValidDriver()) {
        yield _this33.BookRide();
      } else {
        _this33.showNoDriversAlert();
      }
    })();
  } // Make sure to clear the subscription when it's no longer needed


  clearSubscriptions() {
    console.log('Clearing all subscriptions'); // Clear routeUpdateSubscription first as it's the main culprit

    if (this.routeUpdateSubscription) {
      this.routeUpdateSubscription.unsubscribe();
      this.routeUpdateSubscription = null;
    } // Clear other subscriptions


    if (this.numCalls) {
      this.numCalls.unsubscribe();
      this.numCalls = null;
    }

    if (this.countDown) {
      this.countDown.unsubscribe();
      this.countDown = null;
    }

    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    } // Stop any polling interval


    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    } // Reset any animation state


    this.animatedMarker = null;
  }

  handleRideUpdates(doc) {
    var _this34 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = doc.data();
      if (!data) return;

      try {
        switch (data.status) {
          case 'confirmed':
            yield _this34.handleRideConfirmation(doc);
            break;

          case 'started':
            yield _this34.handleRideStart(doc);
            break;

          case 'done':
            yield _this34.handleRideStop(doc);
            break;

          case 'cancelled':
            yield _this34.handleRideCancellation(data);
            break;
        }
      } catch (error) {
        console.error('Error handling ride updates:', error);

        if (error.code === 'permission-denied' || error.code === 'not-found') {
          yield _this34.ReturnHome();
        }
      }
    })();
  }

  handlePendingState() {
    var _this35 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Don't show another loader here since BookRide is already showing one
        if (!_this35.currentDriver?.Driver_id) {
          throw new Error('No valid driver ID found');
        } // Get driver location with timeout


        const locationPromise = _this35.getDriverLocation(_this35.currentDriver.Driver_id);

        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Location fetch timeout')), 10000));
        yield Promise.race([locationPromise, timeoutPromise]);

        if (!_this35.DriverLatLng) {
          throw new Error('Failed to get driver location');
        } // Group all map operations


        yield Promise.all([_this35.clearPrevMarkers(), _this35.clearPolyline(_this35.newPoly), _this35.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this35.DriverLatLng
        })]); // Update map height properly instead of using fixed positioning

        _this35.ngZone.run(() => {
          _this35.setMapHeightHandleDrivertoRider();
        });

        yield _this35.handleDriverToRider(_this35.DriverLatLng, _this35.LatLng);

        _this35.EnterSearchingStage();

        yield _this35.startCountdown(20, _this35.requestID);
      } catch (error) {
        console.error('Error in handlePendingState:', error);
        throw error; // Let BookRide handle the error and cleanup
      }
    })();
  }

  presentCancelRideActionSheet() {
    var _this36 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this36.actionSheetController.create({
        header: 'Cancel Ride',
        buttons: [{
          text: 'Changed my mind',
          handler: () => {
            _this36.cancelRide('Changed my mind');
          }
        }, {
          text: 'Driver took too long',
          handler: () => {
            _this36.cancelRide('Driver took too long');
          }
        }, {
          text: 'Found another ride',
          handler: () => {
            _this36.cancelRide('Found another ride');
          }
        }, {
          text: 'Other',
          handler: () => {
            _this36.cancelRide('Other');
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }

  cancelRide(reason) {
    var _this37 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rideRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.doc)(_this37.firestore, 'Request', _this37.requestID);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.updateDoc)(rideRef, {
        status: 'cancelled',
        cancellationReason: reason,
        canceledBy: 'rider'
      });
      const toast = yield _this37.toastController.create({
        message: 'Ride has been cancelled.',
        duration: 2000
      });
      yield toast.present();
    })();
  }

  handleRideCancellation(data) {
    var _this38 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this38.stopCountdown();

      yield _this38.clearPrevMarkers();

      _this38.unsubscribe();

      _this38.clearSubscriptions();

      if (_this38.drivers_Requested[_this38.current_Request_Number + 1] && !_this38.rideHasStarted) {
        _this38.current_Request_Number++;
        yield _this38.BookRide();
      } else {
        if (data.canceledBy == 'driver') {
          _this38.overlay.showAlert('Cancelled', 'Driver cancelled');
        }

        _this38.ClearRide();

        _this38.ReturnHome();
      }
    })();
  }

  handleRideStart(doc) {
    var _this39 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Starting ride tracking setup...'); // Clear previous visual elements

        yield _this39.clearPrevMarkers();
        yield _this39.clearPolyline(_this39.newPoly); // Get ride data and validate

        const data = doc.data();

        if (!data) {
          console.warn('handleRideStart: No data found in document');
          throw new Error('No ride data available');
        }

        console.log('handleRideStart data:', data); // Set ride state flag first to prevent race conditions

        _this39.rideHasStarted = true; // Set current driver from document data with fallback options

        if (data.driverDetails) {
          _this39.currentDriver = data.driverDetails;
          _this39.driverInfo = data.driverDetails;
        } else if (data.driverId) {
          console.log('Driver details missing, attempting to fetch from driver ID');

          try {
            const driverDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.getDoc)(doc(_this39.firestore, 'Drivers', data.driverId));

            if (driverDoc.exists()) {
              _this39.driverInfo = driverDoc.data();
              _this39.currentDriver = _this39.driverInfo;
            }
          } catch (error) {
            console.warn('Failed to fetch driver details:', error); // Continue with limited driver info
          }
        } // Adjust map height before adding markers


        _this39.setMapHeightHandleDrivertoDestination(); // window.addEventListener('resize', this.setMapHeightHandleDrivertoDestination.bind(this));
        // Initialize locations with fallbacks


        _this39.LatLng = {
          lat: data.Loc_lat || _this39.LatLng?.lat || 0,
          lng: data.Loc_lng || _this39.LatLng?.lng || 0
        };
        _this39.D_LatLng = {
          lat: data.Des_lat || _this39.D_LatLng?.lat || 0,
          lng: data.Des_lng || _this39.D_LatLng?.lng || 0
        }; // Ensure map is initialized

        if (!_this39.map.newMap) {
          console.log('Map not initialized in handleRideStart, initializing now...');

          try {
            yield _this39.initializeMap();
          } catch (mapError) {
            console.error('Failed to initialize map:', mapError); // Allow continuation with limited functionality
          }
        } // Get driver location with better error handling


        let driverLocationFetched = false;

        if (data.driverId) {
          try {
            console.log('Fetching driver location for ID:', data.driverId); // Use Promise.race with a timeout to prevent hanging

            const locationPromise = _this39.database.getDriverLocation(data.driverId);

            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Driver location fetch timeout')), 5000));
            const driverLocation = yield Promise.race([locationPromise, timeoutPromise]);

            if (driverLocation && typeof driverLocation === 'object' && 'lat' in driverLocation && 'lng' in driverLocation) {
              console.log('Got real-time driver location:', driverLocation);
              _this39.DriverLatLng = {
                lat: driverLocation.lat,
                lng: driverLocation.lng
              };
              driverLocationFetched = true;
            }
          } catch (locationError) {
            console.warn('Error getting real-time driver location:', locationError); // Will use fallback below
          }
        } // Fallback to location in document if real-time fetch failed


        if (!driverLocationFetched) {
          console.log('Using driver location from document data');
          _this39.DriverLatLng = {
            lat: data.driverDetails?.Driver_lat || data.driver_lat || _this39.LatLng.lat,
            lng: data.driverDetails?.Driver_lng || data.driver_lng || _this39.LatLng.lng
          };
        } // Setup UI state even if visualization might fail


        _this39.EnterDrivingToDestinationStage();

        _this39.canCheck = true; // Proceed with visualization if we have valid coordinates

        if (_this39.DriverLatLng?.lat && _this39.D_LatLng?.lat) {
          console.log('Calling handleRiderToDestination with locations:', 'Driver:', _this39.DriverLatLng, 'Destination:', _this39.D_LatLng);

          try {
            yield _this39.handleRiderToDestination(_this39.DriverLatLng, _this39.D_LatLng);
          } catch (visualError) {
            console.warn('Failed to visualize route, but ride is still active:', visualError); // Show a non-blocking toast or notification

            const toast = yield _this39.toastController.create({
              message: 'Route visualization failed, but your ride is still active',
              duration: 3000
            });
            toast.present();
          }
        } else {
          console.warn('Invalid coordinates for visualization:', _this39.DriverLatLng, _this39.D_LatLng);
          const toast = yield _this39.toastController.create({
            message: 'Location data incomplete. Your ride is active but not fully visualized.',
            duration: 3000
          });
          toast.present();
        }

        console.log('Ride tracking setup completed successfully');
      } catch (error) {
        console.error('Error in handleRideStart:', error); // Still enter driving stage so user can see at least some UI

        _this39.EnterDrivingToDestinationStage();

        _this39.canCheck = true; // Show a less alarming message to the user

        const toast = yield _this39.toastController.create({
          message: 'Some ride details couldn\'t be loaded. Your ride is still active.',
          duration: 3000
        });
        toast.present();
      }
    })();
  } // Improve handleRideStop to better handle map errors


  handleRideStop(docSnapshot) {
    var _this40 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Handling ride stop...'); // If already processed, exit immediately

        if (_this40.isRideStopProcessed) {
          console.log('Ride stop already processed, exiting function');
          return;
        } // Set flag immediately to prevent re-processing


        _this40.isRideStopProcessed = true; // Stop all location polling and mapping activities immediately

        _this40.stopPolling = true; // Unsubscribe from route updates first

        if (_this40.routeUpdateSubscription) {
          _this40.routeUpdateSubscription.unsubscribe();

          _this40.routeUpdateSubscription = null;
        } // Then clear other subscriptions


        _this40.clearSubscriptions(); // Force removal of all map elements with multiple attempts if needed


        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            yield _this40.clearPrevMarkers();
            yield _this40.clearAllPolylines();
            break; // Exit loop if successful
          } catch (e) {
            console.error(`Map cleanup attempt ${attempt + 1} failed:`, e); // Short delay before retry

            yield new Promise(resolve => setTimeout(resolve, 100));
          }
        } // Prepare ride data with proper fallbacks for required fields


        const docData = docSnapshot.data ? docSnapshot.data() : docSnapshot;
        const tripId = docSnapshot.id || _this40.requestID;
        const rideData = {
          tripId: tripId || '',
          riderId: _this40.database.user?.uid || '',
          driverId: docData?.driverDetails?.Driver_id || _this40.driverInfo?.Driver_id || '',
          driverName: docData?.driverDetails?.Driver_name || _this40.driverInfo?.Driver_name || 'Unknown Driver',
          driverImage: docData?.driverDetails?.Driver_imgUrl || _this40.driverInfo?.Driver_imgUrl || '',
          driverCar: docData?.driverDetails?.Driver_car || _this40.driverInfo?.Driver_car || '',
          driverPlate: docData?.driverDetails?.Driver_plate || _this40.driverInfo?.Driver_plate || '',
          driverRating: docData?.driverDetails?.Driver_rating || _this40.driverInfo?.Driver_rating || 0,
          pickup: docData?.Rider_Location || _this40.locationAddress || 'Unknown pickup',
          destination: docData?.Rider_Destination || _this40.destinationAddress || 'Unknown destination',
          locationAddress: docData?.Rider_Location || _this40.locationAddress || 'Unknown pickup',
          destinationAddress: docData?.Rider_Destination || _this40.destinationAddress || 'Unknown destination',
          Loc_lat: docData?.Loc_lat || _this40.LatLng?.lat || 0,
          Loc_lng: docData?.Loc_lng || _this40.LatLng?.lng || 0,
          Des_lat: docData?.Des_lat || _this40.D_LatLng?.lat || 0,
          Des_lng: docData?.Des_lng || _this40.D_LatLng?.lng || 0,
          Rider_Location: docData?.Rider_Location || _this40.locationAddress || 'Unknown pickup',
          Rider_Destination: docData?.Rider_Destination || _this40.destinationAddress || 'Unknown destination',
          Driver_name: docData?.driverDetails?.Driver_name || _this40.driverInfo?.Driver_name || 'Unknown Driver',
          Driver_car: docData?.driverDetails?.Driver_car || _this40.driverInfo?.Driver_car || '',
          Driver_plate: docData?.driverDetails?.Driver_plate || _this40.driverInfo?.Driver_plate || '',
          Driver_imgUrl: docData?.driverDetails?.Driver_imgUrl || _this40.driverInfo?.Driver_imgUrl || '',
          Driver_rating: docData?.driverDetails?.Driver_rating || _this40.driverInfo?.Driver_rating || 0,
          price: docData?.price || _this40.price || 0,
          distance: docData?.distance || _this40.distance || 0,
          duration: docData?.duration || _this40.duration || '',
          rating: docData?.driverDetails?.Driver_rating || _this40.driverInfo?.Driver_rating || 0,
          completed: true,
          completedAt: new Date(),
          timestamp: new Date()
        }; // Process payment at the end of the ride (if not using cash)

        if (!_this40.cash && _this40.selectedCard && _this40.selectedCard !== 'cash' && !_this40.paymentProcessed && !docData?.paymentProcessed) {
          // Check if we're already processing payment for this exact ride
          if (_this40.processingPaymentForRide === _this40.requestID) {
            console.log('Payment already being processed for this ride, skipping...');
          } else {
            // Set the processing flag IMMEDIATELY before any async operations
            _this40.processingPaymentForRide = _this40.requestID;

            try {
              yield _this40.processRidePayment(docData);
            } finally {
              // Clear the processing flag after completion (success or failure)
              _this40.processingPaymentForRide = null;
            }
          }
        } else if (docData?.paymentProcessed) {
          // Payment was already processed, just update the flag
          console.log('Payment already processed for this ride');
          _this40.paymentProcessed = true;
        } // Save to ride history BEFORE showing modal


        try {
          console.log('Saving ride history with data:', rideData);
          yield _this40.database.saveRideHistory(rideData);
          console.log('Ride history saved successfully');
        } catch (historyError) {
          console.error('Failed to save ride history:', historyError); // Don't block the modal from showing even if history save fails
        } // CRITICAL: Clear ride state from storage BEFORE showing modal


        try {
          yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_7__.Preferences.remove({
            key: _this40.RIDE_STATE_KEY
          });
          console.log('Cleared ride state from storage');
        } catch (e) {
          console.warn('Error clearing storage:', e);
        } // Reset ride properties BEFORE showing modal


        _this40.rideHasStarted = false;
        _this40.driverLocation = null;
        _this40.lastHandledState = null;
        console.log('Showing trip summary with data:', rideData); // Show the trip summary

        const modal = yield _this40.modalCtrl.create({
          component: _trip_summary_trip_summary_component__WEBPACK_IMPORTED_MODULE_8__.TripSummaryComponent,
          componentProps: {
            rideData
          }
        });
        yield modal.present(); // Clean up once modal is dismissed

        modal.onDidDismiss().then( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.log('Trip summary dismissed, resetting state');
          _this40.isRideStopProcessed = false; // Comprehensive cleanup and return home

          yield _this40.clearRideState();
          yield _this40.ReturnHome();
        }));
      } catch (error) {
        console.error('Error in handleRideStop:', error);
        _this40.isRideStopProcessed = false;

        _this40.ReturnHome();
      }
    })();
  } // Add this method for more thorough ride state cleanup


  clearRideState() {
    var _this41 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Clearing ride state completely'); // First clear all subscriptions

      _this41.clearSubscriptions(); // Clear visual elements from map


      yield _this41.clearPrevMarkers().catch(e => console.error('Error clearing markers:', e));
      yield _this41.clearAllPolylines().catch(e => console.error('Error clearing polylines:', e)); // Reset all ride-related properties

      _this41.requestID = null;
      _this41.driverInfo = null;
      _this41.currentDriver = null;
      _this41.driver_marker = null;
      _this41.rider_marker = null;
      _this41.destinationMarker = null;
      _this41.marker1 = null;
      _this41.marker2 = null;
      _this41.routePolyline = null;
      _this41.routePath = null;
      _this41.newPoly = null;
      _this41.animatedMarker = null;
      _this41.driverLocation = null;
      _this41.isRideStopProcessed = false;
      _this41.paymentProcessed = false;
      _this41.processingPaymentForRide = null; // Reset driver/ride info

      _this41.carname = null;
      _this41.driverImage = null;
      _this41.driver_duration_apart = null;
      _this41.driver_ID = null;
      _this41.driver_number_of_seats = null;
      _this41.DriverLatLng = null;
      _this41.rideHasStarted = false;
      _this41.duration = null;
      _this41.distance = null; // Reset destination data

      _this41.destinationAddress = 'Unknown location';
      _this41.actualDestination = null;
      _this41.D_LatLng = {
        lat: null,
        lng: null
      };
      _this41.price = null; // Clear car markers array

      if (_this41._carmarkers && _this41._carmarkers.length > 0) {
        for (const {
          marker
        } of _this41._carmarkers) {
          if (marker !== null && marker !== undefined && _this41.map?.newMap) {
            yield _this41.map.newMap.removeMarker(marker).catch(e => console.error('Error removing car marker:', e));
          }
        }

        _this41._carmarkers = [];
      } // Reset drivers list


      _this41.drivers_Requested = [];
      _this41.NoDrivers = false; // Reset stage-related properties

      _this41.bookingStage = false;
      _this41.confirmStage = false;
      _this41.trackingStage = false;
      _this41.searchingStage = false;
      _this41.noDriverStage = false;
      _this41.drivingToDestinationStage = false;
      _this41.mapPinStage = false; // Set default stage

      _this41.EnterBookingStage(); // Reset polling state


      _this41.stopPolling = false; // Reset current request number

      _this41.current_Request_Number = 0; // Re-enable map interactions if needed

      if (_this41.map && _this41.map.newMap) {
        try {
          yield _this41.map.newMap.enableCurrentLocation(true);

          _this41.map.newMap.enableTouch();
        } catch (e) {
          console.error('Error enabling map features:', e);
        }
      }

      console.log('Ride state cleared completely');
    })();
  }

  handleRideConfirmation(docOrData) {
    var _this42 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Starting ride confirmation handling...', docOrData);

        _this42.stopCountdown(); // Clear existing markers and polylines


        yield Promise.all([_this42.clearPrevMarkers(), _this42.clearPolyline(_this42.newPoly)]); // Get the ride data

        let rideData;
        let docId;

        if (!docOrData) {
          throw new Error('Invalid input: null or undefined');
        } // Handle different input types


        if (typeof docOrData.data === 'function') {
          // It's a Firebase DocumentSnapshot
          rideData = docOrData.data();
          docId = docOrData.id;
        } else {
          // It's already a data object from currentRide.data()
          rideData = docOrData;
          docId = _this42.requestID; // Use the current requestID if available
        }

        if (!rideData) {
          throw new Error('No ride data found');
        } // Update ride information


        _this42.requestID = docId || rideData.requestId;
        _this42.driverInfo = rideData.driverDetails; // Note: Payment processing moved to handleRideStop (end of ride)
        // Check if payment was already processed

        if (rideData.paymentProcessed) {
          console.log('Payment already processed in previous session');
          _this42.paymentProcessed = true;
        } // Set driver information for UI display to avoid template errors


        if (_this42.driverInfo) {
          _this42.carname = _this42.driverInfo.Driver_car || 'Unknown Car';
          _this42.driverImage = _this42.driverInfo.Driver_imgUrl || 'assets/icon/profile.png';
          _this42.driver_ID = _this42.driverInfo.Driver_id;
          _this42.driver_number_of_seats = _this42.driverInfo.seats || 4;
          _this42.driver_duration_apart = _this42.driverInfo.duration ? Math.ceil(_this42.driverInfo.duration / 60000) : 0;
        } // Set locations


        _this42.LatLng = {
          lat: rideData.Loc_lat,
          lng: rideData.Loc_lng
        };
        _this42.D_LatLng = {
          lat: rideData.Des_lat,
          lng: rideData.Des_lng
        }; // Initialize map if not already initialized

        if (!_this42.map.newMap) {
          yield _this42.initializeMap();
        } // Check for shared ride match and subscribe to updates


        yield _this42.checkForSharedRideMatch(rideData); // Get and wait for driver location

        if (!_this42.driverInfo?.Driver_id) {
          console.warn('Driver ID not found in driver details, using fallback location'); // Use fallback location from driver details

          _this42.driverLocation = {
            lat: _this42.driverInfo?.Driver_lat || _this42.driverInfo?.driver_lat,
            lng: _this42.driverInfo?.Driver_lng || _this42.driverInfo?.driver_lng
          };
        } else {
          try {
            yield _this42.getDriverLocation(_this42.driverInfo.Driver_id);
          } catch (locationError) {
            console.warn('Error getting real-time driver location, using fallback:', locationError); // Use fallback location from driver details

            _this42.driverLocation = {
              lat: _this42.driverInfo?.Driver_lat || _this42.driverInfo?.driver_lat,
              lng: _this42.driverInfo?.Driver_lng || _this42.driverInfo?.driver_lng
            };
          }
        }

        if (!_this42.driverLocation?.lat || !_this42.driverLocation?.lng) {
          throw new Error('Unable to determine driver location');
        }

        _this42.DriverLatLng = {
          lat: _this42.driverLocation.lat,
          lng: _this42.driverLocation.lng
        };
        console.log('Driver location set:', _this42.DriverLatLng); // Set map height and add event listener

        _this42.setMapHeightHandleDrivertoRider(); // window.addEventListener('resize', this.setMapHeightHandleDrivertoRider.bind(this));
        // Initialize the map view with driver and rider markers


        yield _this42.handleDriverToRider(_this42.DriverLatLng, _this42.LatLng); // Update UI state

        _this42.EnterTrackingStage(); // Save ride state to local storage


        yield _this42.saveRideStateToStorage();
        console.log('Ride confirmation handled successfully');
        return true;
      } catch (error) {
        console.error('Error handling ride confirmation:', error);
        return false;
      }
    })();
  } // Add this method to save ride state to storage


  saveRideStateToStorage() {
    var _this43 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const rideState = {
          requestID: _this43.requestID,
          driverInfo: _this43.driverInfo,
          LatLng: _this43.LatLng,
          D_LatLng: _this43.D_LatLng,
          DriverLatLng: _this43.DriverLatLng,
          stage: _this43.getCurrentStage()
        };
        yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_7__.Preferences.set({
          key: 'RIDE_STATE',
          value: JSON.stringify(rideState)
        });
        console.log('Ride state saved successfully');
      } catch (error) {
        console.error('Error saving ride state:', error); // Don't throw the error as this is not critical
      }
    })();
  } // Update getDriverLocation to return a Promise<void> and handle errors better


  getDriverLocation(driverId) {
    if (!driverId) {
      return Promise.reject(new Error('No driver ID provided'));
    }

    console.log('Getting driver location for:', driverId);
    return this.database.getDriverLocation(driverId).then(location => {
      if (!location || !location.lat || !location.lng) {
        throw new Error('Invalid location data received');
      }

      console.log('Driver location received:', location);
      this.driverLocation = location;
    }).catch(error => {
      console.error('Error getting driver location:', error);
      throw error;
    });
  }

  EnterChat() {
    var _this44 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_3__.EnrouteChatComponent,
        componentProps: {
          chatData: {
            userId: _this44.requestID,
            message: ""
          }
        }
      };
      const modal = yield _this44.modalCtrl.create(options);
      return yield modal.present();
    })();
  }

  startCountdown(initialTime, requestId) {
    var _this45 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this45.countdownActive = true;
      let timeRemaining = initialTime;

      const _updateCountdown = /*#__PURE__*/function () {
        var _ref12 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (!_this45.countdownActive) {
            console.log('Countdown stopped');
            return;
          }

          if (timeRemaining > 0) {
            try {
              yield _this45.database.UpdateCountDown(timeRemaining, requestId);
              timeRemaining--;
              setTimeout(_updateCountdown, 1000);
            } catch (error) {
              console.error('Error updating countdown:', error); // Retry after a short delay

              setTimeout(_updateCountdown, 2000);
            }
          } else {
            yield _this45.handleCountdownEnd(requestId);
            console.log('Countdown ended');
          }
        });

        return function updateCountdown() {
          return _ref12.apply(this, arguments);
        };
      }();

      _updateCountdown();
    })();
  }

  handleCountdownEnd(requestId) {
    var _this46 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Implement a grace period to account for any delays
        setTimeout( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this46.clearPrevMarkers();
          yield _this46.requestNextDriver();
        }), 5000); // 5-second grace period
      } catch (error) {
        console.error('Error handling countdown end:', error); // Optionally, retry the operation or notify the user
      }
    })();
  }

  stopCountdown() {
    this.countdownActive = false;
  }

  goBackToAutoComplete() {
    var _this47 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this47.stopPolling = false; // Enable current location and set the camera to the initial position

        yield _this47.map.newMap.enableCurrentLocation(true);
        yield _this47.ResetState();
        yield _this47.showAutocompleteModal();
        console.log('Game state reset successfully');
      } catch (error) {
        console.error('Error resetting game state:', error);
      }
    })();
  }

  clearPrevMarkers() {
    var _this48 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if map is initialized
        if (!_this48.map || !_this48.map.newMap) {
          console.warn('Map not initialized when clearing markers');
          return; // Exit early if map is not available
        }

        console.log('Clearing all markers...'); // Clear individual markers with proper error handling

        const markers = [{
          ref: _this48.rider_marker,
          name: 'rider_marker'
        }, {
          ref: _this48.driver_marker,
          name: 'driver_marker'
        }, {
          ref: _this48.destinationMarker,
          name: 'destinationMarker'
        }, {
          ref: _this48.marker1,
          name: 'marker1'
        }, {
          ref: _this48.marker2,
          name: 'marker2'
        }, {
          ref: _this48.animatedMarker,
          name: 'animatedMarker'
        }]; // Add car markers to the list

        if (_this48._carmarkers && Array.isArray(_this48._carmarkers)) {
          _this48._carmarkers.forEach(cm => {
            if (cm.marker) {
              markers.push({
                ref: cm.marker,
                name: 'car_marker'
              });
            }
          });

          _this48._carmarkers = [];
        }

        const clearPromises = markers.filter(m => m.ref !== null && m.ref !== undefined && m.ref !== '').map(m => _this48.clearMarker(m.ref).catch(e => {
          console.error(`Error clearing ${m.name}:`, e); // Continue despite error

          return null;
        }));
        yield Promise.all(clearPromises); // Reset all marker references

        _this48.rider_marker = null;
        _this48.driver_marker = null;
        _this48.destinationMarker = null;
        _this48.marker1 = null;
        _this48.marker2 = null;
        _this48.animatedMarker = null;
        console.log('All markers cleared successfully');
      } catch (e) {
        console.error('Error in clearPrevMarkers:', e); // Just log the error but don't throw, allowing the process to continue
      }
    })();
  } // Add this helper method for individual marker clearing


  clearMarker(marker) {
    var _this49 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!marker || !_this49.map?.newMap) return Promise.resolve();

      try {
        console.log('Clearing marker:', marker);
        yield _this49.map.newMap.removeMarker(marker);
        return true;
      } catch (error) {
        console.error('Error clearing marker:', error);
        return false;
      }
    })();
  } // Helper method to update marker position without duplication


  updateMarkerPosition(marker, coordinate, iconUrl, title) {
    var _this50 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this50.map?.newMap) return null;
      const markerSize = {
        width: 40,
        height: 40
      };
      const iconAnchor = {
        x: 20,
        y: 40
      };

      try {
        // Remove old marker if it exists
        if (marker !== null && marker !== undefined) {
          yield _this50.map.newMap.removeMarker(marker).catch(e => console.log('Marker already removed or invalid:', e));
        } // Create new marker at updated position


        const newMarker = yield _this50.map.newMap.addMarker({
          coordinate: coordinate,
          iconUrl: iconUrl,
          title: title,
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 0,
            y: 0
          },
          zIndex: title === 'Driver' ? 100 : 101
        });
        return newMarker;
      } catch (error) {
        console.error('Error updating marker position:', error);
        return null;
      }
    })();
  } // Modify clearAllPolylines for safer handling


  clearAllPolylines() {
    var _this51 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this51.map || !_this51.map.newMap) {
          console.warn('Map not initialized when clearing polylines');
          return;
        }

        console.log('Clearing all polylines...'); // Try to clear specific polyline first

        if (_this51.newPoly) {
          try {
            yield _this51.map.newMap.removePolylines(_this51.newPoly);
            console.log('Specific polyline cleared');
          } catch (error) {
            console.error('Error clearing specific polyline:', error);
          }
        } // Reset reference


        _this51.newPoly = null;
      } catch (error) {
        console.error('Error in clearAllPolylines:', error); // Just log the error but don't throw
      }
    })();
  }

  ResetState() {
    var _this52 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Resetting state to initial booking view'); // Clear all subscriptions first

        _this52.clearSubscriptions(); // Clear previous markers and polylines


        yield _this52.clearPrevMarkers();
        yield _this52.clearAllPolylines(); // Reset map camera to user location

        if (_this52.map && _this52.map.newMap && _this52.LatLng) {
          yield _this52.map.newMap.setCamera({
            animate: true,
            animationDuration: 500,
            zoom: 15,
            coordinate: _this52.LatLng
          });
        }

        _this52.ResetMapHeight(); // window.addEventListener('resize', this.ResetMapHeight.bind(this));


        if (_this52.map && _this52.map.newMap) {
          _this52.map.newMap.enableTouch();

          yield _this52.map.newMap.enableCurrentLocation(true);
        } // Reset all ride-related data


        _this52.current_Request_Number = 0;
        _this52.price = null;
        _this52.actualDestination = null;
        _this52.D_LatLng = {
          lat: null,
          lng: null
        };
        _this52.destinationAddress = 'Unknown location';
        _this52.driverInfo = null;
        _this52.currentDriver = null;
        _this52.driverLocation = null;
        _this52.duration = null;
        _this52.distance = null; // Reset polling state

        _this52.stopPolling = false;
      } catch (e) {
        throw new Error(e);
      }
    })();
  }

  showAutocompleteModal() {
    var _this53 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent,
        componentProps: {
          LatLng: _this53.LatLng,
          locationAddress: _this53.locationAddress
        }
      };
      const modal = yield _this53.modalCtrl.create(options);
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      console.log('Modal dismissed with data:', data);
      _this53.data = data;

      if (data.pinOnMap) {
        _this53.EnterMapPinStage();

        _this53.mapPinDrag = true;
        _this53.stopPolling = true;
      }

      if (data.home) {
        console.log("Entering Booking Stage...");

        _this53.EnterBookingStage();

        _this53.stopPolling = false;

        _this53.ResetState();
      }

      if (data.searching) {
        _this53.database.AddKnownPlace(data);

        _this53.destinationAddress = data.full;
        _this53.actualDestination = data.whole.full; // Handle edited pickup location

        if (data.editedPickup) {
          console.log("Pickup location was edited:", data.editedPickup);
          _this53.LatLng = {
            lat: data.editedPickup.lat,
            lng: data.editedPickup.lng
          };
          _this53.locationAddress = data.editedPickup.location;
          console.log("Updated pickup LatLng:", _this53.LatLng);
        }

        try {
          const latLng = yield _this53.geocode.getLatLng(data.whole.description).toPromise();
          _this53.D_LatLng = {
            lat: latLng.results[0].geometry.location.lat,
            lng: latLng.results[0].geometry.location.lng
          };
          console.log("Destination LatLng:", _this53.D_LatLng);
          yield _this53.getDistanceAndDirections();
        } catch (error) {
          console.error("Error in geocoding:", error);

          _this53.overlay.showAlert('Error in geocoding:', error.message);
        }
      }
    })();
  }

  RequestRide(dat) {
    var _this54 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this54.LatLng) {
        yield _this54.fetchAndDisplayDrivers([_this54.LatLng.lat, _this54.LatLng.lng], 8000);
      }

      if (!_this54.NoDrivers) {
        _this54.destinationAddress = dat.place.full;
        _this54.actualDestination = dat.place.whole.full;

        try {
          const latLng = yield _this54.geocode.getLatLng(dat.place.whole.description).toPromise();
          _this54.D_LatLng = {
            lat: latLng.results[0].geometry.location.lat,
            lng: latLng.results[0].geometry.location.lng
          };
          yield _this54.getDistanceAndDirections();
        } catch (error) {
          console.error("Error in geocoding:", error);

          _this54.overlay.showAlert('Check Your Network', error.message);
        }
      } else {
        _this54.EnterNoDriverStage();

        console.log("No drivers available");
      }
    })();
  }

  getDistanceAndDirections() {
    var _this55 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("getDistanceAndDirections called");
      _this55.duration = null;
      yield _this55.clearMarkers();

      _this55.cleanupListeners();

      _this55.stopPolling = true;

      if (_this55.D_LatLng && _this55.D_LatLng.lat) {
        console.log("D_LatLng is set:", _this55.D_LatLng);

        if (_this55.LatLng) {
          yield _this55.fetchAndDisplayDrivers([_this55.LatLng.lat, _this55.LatLng.lng], 8000);
          console.log('=== AFTER fetchAndDisplayDrivers in getDistanceAndDirections ===');
          console.log('drivers_Requested:', _this55.drivers_Requested?.length, _this55.drivers_Requested);
          console.log('NoDrivers:', _this55.NoDrivers);
          console.log('stopPolling:', _this55.stopPolling);
        }

        if (!_this55.NoDrivers) {
          _this55.EnterConfirmStage();

          console.log('=== ENTERED CONFIRM STAGE ===');
          console.log('drivers_Requested after EnterConfirmStage:', _this55.drivers_Requested?.length);
        } else {
          _this55.EnterNoDriverStage();

          console.log("No drivers available");
          return;
        } // Use Dijkstra service instead of Google Directions


        try {
          const pathResult = yield _this55.dijkstraService.findShortestPath(_this55.LatLng, _this55.D_LatLng);

          if (pathResult) {
            _this55.direction = pathResult; // Store for compatibility

            _this55.distance = pathResult.totalDistance;
            _this55.bounds = null; // Not needed for Dijkstra

            _this55.price = yield _this55.database.getPriceEstimate(_this55.distance);
            _this55.duration = Math.round(pathResult.totalWeight / 60) + ' mins'; // Convert to minutes string
            // Extract route path

            const routePath = pathResult.coordinates;
            yield _this55.createAndAddMarkers(_this55.LatLng, _this55.D_LatLng, routePath); // Call getDistanceAndDirectionsDriver after this part is successful

            yield _this55.getDistanceAndDirectionsDriver();
          } else {
            throw new Error('No route found');
          }
        } catch (error) {
          console.error('Dijkstra route error:', error);

          _this55.overlay.showAlert('Route Error', 'Unable to calculate route. Please try again.');
        }
      } else {
        _this55.overlay.showAlert('Drag Map', 'Drag the map and stop on your required destination');

        console.error('D_LatLng or D_LatLng.lat is undefined');
      }
    })();
  }

  getDistanceAndDirectionsDriver() {
    var _this56 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("getDistanceAndDirectionsDriver called");

      if (!_this56.NoDrivers) {
        console.log("Driver LatLng:", _this56.DriverLatLng);

        if (_this56.DriverLatLng) {
          const origin1 = new google.maps.LatLng(_this56.LatLng.lat, _this56.LatLng.lng);
          const origin2 = new google.maps.LatLng(_this56.DriverLatLng.lat, _this56.DriverLatLng.lng);
          const request = {
            origin: origin1,
            destination: origin2,
            travelMode: google.maps.TravelMode.DRIVING
          };

          _this56.geocode.directions.route(request, (response, status) => {
            if (status === 'OK') {
              _this56.D_duration = response.routes[0].legs[0].duration.text;
              console.log("Driver duration:", _this56.D_duration);
            } else {
              console.error('Direction ERROR:', response);

              _this56.overlay.showAlert('Direction ERROR:', JSON.stringify(response));
            }
          });
        } else {
          console.log("DriverLatLng is undefined");
        }
      } else {
        console.log("No drivers available");
      }
    })();
  }

  resetLocation() {
    var _this57 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this57.LatLng);
      yield _this57.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this57.LatLng
      });
      _this57.showResetLocationButton = false;
    })();
  }

  processAddressResponse(addressResponse) {
    console.log("processAddressResponse : " + addressResponse);

    if (addressResponse) {
      console.log(addressResponse);
      this.actualDestination = this.map.actualLocation;
      const results = addressResponse.results;

      if (results && results.length > 1 && results[1].geometry && results[1].geometry.location) {
        this.D_LatLng = {
          lat: results[1].geometry.location.lat,
          lng: results[1].geometry.location.lng
        };
        const addressComponents = results[1].address_components;

        if (addressComponents && addressComponents.length > 1) {
          this.destinationAddress = `${addressComponents[0].long_name} ${addressComponents[1].long_name}`;
          console.log("this is it " + this.destinationAddress);
        } else {
          console.log('Address components are missing or incomplete.');
          this.destinationAddress = 'Unknown address';
        }
      } else {
        console.log('Results are missing or incomplete.');
        this.D_LatLng = {
          lat: null,
          lng: null
        };
        this.destinationAddress = 'Unknown location';
      }
    } else {
      console.log('Failed to fetch address.');
      this.D_LatLng = {
        lat: null,
        lng: null
      };
      this.destinationAddress = 'Failed to fetch address';
    }
  }

  UpdateCarMarker(elements) {
    var _this58 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Elements to update car markers:', elements); // Validate map is initialized

      if (!_this58.map || !_this58.map.newMap) {
        console.warn('Map not initialized when updating car markers');
        return;
      }

      const bounds = new google.maps.LatLngBounds();
      let hasValidBounds = false; // Create a map of driver IDs to driver elements for quick lookup

      const driverMap = new Map(elements.map(element => [element.Driver_id, element])); // Track markers to keep and update

      const updatedMarkers = []; // Remove markers that are not needed and update positions

      for (const {
        id,
        marker
      } of _this58._carmarkers) {
        const driver = driverMap.get(id);

        if (!driver || !driver.onlineState) {
          console.log(`Removing marker for driver ID: ${id}`);

          if (marker !== null && marker !== undefined) {
            yield _this58.map.newMap.removeMarker(marker).catch(e => console.error(`Error removing marker ${id}:`, e));
          }
        } else if (driver.Driver_lat !== undefined && driver.Driver_lng !== undefined) {
          const latlng = {
            lat: driver.Driver_lat,
            lng: driver.Driver_lng
          }; // Remove old marker

          if (marker !== null && marker !== undefined) {
            yield _this58.map.newMap.removeMarker(marker).catch(e => console.error(`Error removing marker ${id}:`, e));
          }

          bounds.extend(latlng);
          hasValidBounds = true;
          console.log(`Updated marker for driver ID: ${id}`);
        } else {
          console.error('Invalid driver coordinates:', driver);
        }
      } // Add new markers for drivers that are online and not in the existing markers


      for (const element of elements) {
        if (element.onlineState) {
          const existingMarkerIndex = updatedMarkers.findIndex(({
            id
          }) => id === element.Driver_id);

          if (existingMarkerIndex === -1 && element.Driver_lat !== undefined && element.Driver_lng !== undefined) {
            const latlng = {
              lat: element.Driver_lat,
              lng: element.Driver_lng
            };
            console.log(`Adding new marker for driver ID: ${element.Driver_id} at`, latlng);

            try {
              const marker = yield _this58.map.newMap.addMarker({
                coordinate: latlng,
                iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
                title: 'Driver',
                iconSize: {
                  width: 40,
                  height: 40
                },
                iconAnchor: {
                  x: 20,
                  y: 40
                },
                zIndex: 100
              });

              if (marker) {
                updatedMarkers.push({
                  id: element.Driver_id,
                  marker
                });
                bounds.extend(latlng);
                hasValidBounds = true;
              }
            } catch (error) {
              console.error('Error adding marker:', error);
            }
          }
        }
      } // Update the _carmarkers array with the updated markers


      _this58._carmarkers = updatedMarkers; // Center the map around the car markers if there are any markers

      if (updatedMarkers.length > 0 && hasValidBounds) {
        try {
          const mapDim = {
            height: _this58.mapRef.nativeElement.offsetHeight || 600,
            width: _this58.mapRef.nativeElement.offsetWidth || 400
          };
          const minZoom = 10; // Closer minimum zoom

          const maxZoom = 17; // Reasonable maximum zoom

          let zoomLevel = yield _this58.map.getBoundsZoomLevel(bounds, mapDim); // Constrain the zoom level within the min and max range

          zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel));
          console.log('Setting camera with zoom level:', zoomLevel);
          const center = bounds.getCenter();
        } catch (error) {
          console.error('Error setting camera:', error);
        }
      } else {
        console.log('No markers to display on the map.');
      }
    })();
  }

  GoHome() {
    var _this59 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Going home...');
      yield _this59.ReturnHome();
    })();
  }

  GotoSupport() {
    var _this60 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this60.nav.navigateForward('support');
    })();
  }
  /**
   * Test push notification alerts - call this to verify alerts work on web/iOS/Android
   * You can trigger this from the browser console:
   * document.querySelector('app-home').componentInstance.testPushNotifications()
   */


  testPushNotifications() {
    var _this61 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🧪 Testing push notifications from home page...');
      yield _this61.oneSignalService.testPushNotificationAlerts();
    })();
  }
  /**
   * Send a test notification via the backend
   */


  sendTestNotification() {
    var _this62 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('📤 Sending test notification...'); // Get the current user's external ID

      const userId = _this62.auth.currentUser?.uid;

      if (!userId) {
        _this62.overlay.showAlert('Error', 'You must be logged in to send test notifications');

        return;
      } // Send notification via backend


      _this62.oneSignalService.sendByUserIds({
        externalUserIds: [userId],
        title: 'Test Notification',
        message: 'This is a test push notification from your app!',
        data: {
          notificationType: 'ride_confirmed',
          rideId: 'test-ride-123',
          timestamp: new Date().toISOString()
        }
      }).subscribe({
        next: response => {
          console.log('Test notification sent:', response);
        },
        error: error => {
          console.error('Test notification failed:', error);
        }
      });
    })();
  }

  ReturnHome() {
    var _this63 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Returning home - resetting to booking stage');

      try {
        // Clear all ride state first
        yield _this63.clearRideState(); // Reset map state

        yield _this63.ResetState(); // Ensure we're in booking stage

        _this63.EnterBookingStage(); // Reset map camera


        if (_this63.map && _this63.map.newMap && _this63.LatLng) {
          yield _this63.map.newMap.setCamera({
            animate: true,
            animationDuration: 500,
            zoom: 15,
            coordinate: _this63.LatLng
          });
        }

        console.log('Successfully returned to booking view');
      } catch (error) {
        console.error('Error returning home:', error); // Ensure we at least enter booking stage

        _this63.EnterBookingStage();
      }
    })();
  }

  CancelRide() {
    var _this64 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Cancelling ride...');

        _this64.overlay.showLoader('Cancelling your ride...'); // Cancel ride in database


        if (_this64.requestID) {
          yield _this64.database.cancelRide(_this64.requestID);
        } // Clear subscriptions


        if (_this64.unsubscribe) {
          _this64.unsubscribe();
        }

        if (_this64.numCalls) {
          _this64.numCalls.unsubscribe();
        }

        _this64.riderCleared = true; // Comprehensive cleanup

        yield _this64.clearRideState(); // Reset to booking view

        yield _this64.ReturnHome();

        _this64.overlay.hideLoader();

        console.log('Ride cancelled successfully');
      } catch (error) {
        _this64.overlay.hideLoader();

        console.error('Error cancelling ride:', error);

        _this64.overlay.showAlert('Error', 'Failed to cancel ride. Please try again.'); // Try to return home anyway


        try {
          yield _this64.ReturnHome();
        } catch (e) {
          console.error('Error returning home after cancel error:', e);
        }
      }
    })();
  }

  ClearRide() {
    var _this65 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = _this65.auth.currentUser;

        if (user) {
          const riderDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.doc)(_this65.firestore, 'Riders', user.uid);
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.updateDoc)(riderDocRef, {
            currentRequestId: null
          });
        }
      } catch (error) {
        console.error('Error clearing ride state:', error);
      }

      _this65.EnterBookingStage();

      yield _this65.clearPrevMarkers();
      yield _this65.clearPolyline(_this65.newPoly);
      _this65.newPoly = null;
      yield _this65.map.newMap.enableCurrentLocation(true);
      _this65.current_Request_Number = 0;
      _this65.price = null;
      yield _this65.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this65.LatLng,
        bearing: 0
      });
    })();
  }

  CallDriver() {
    var _this66 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const phone = _this66.driverInfo?.Driver_phone?.replace(/[^\d]/g, '');

      if (phone) {
        const message = encodeURIComponent('Hi, I am your rider.');
        window.open(`https://wa.me/${phone}?text=${message}`, '_system');
        return;
      }

      const toast = yield _this66.toastController.create({
        message: 'Driver WhatsApp number not available',
        duration: 2000
      });
      yield toast.present();
    })();
  }

  handleDriverToRider(driverLatLng, riderLatLng) {
    var _this67 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 40,
        height: 40
      }; // Increased size for better visibility

      const iconAnchor = {
        x: 20,
        y: 40
      }; // Center bottom of the icon

      try {
        // Cancel any existing route update subscription first
        if (_this67.routeUpdateSubscription) {
          _this67.routeUpdateSubscription.unsubscribe();

          _this67.routeUpdateSubscription = null;
        } // Check if map is initialized, if not initialize it


        if (!_this67.map.newMap) {
          console.log('Map not initialized, initializing now...');
          yield _this67.initializeMap();
        } // Thoroughly clean up previous visual elements


        yield _this67.clearPrevMarkers();
        yield _this67.clearAllPolylines(); // Use the unified height method and ensure proper positioning

        _this67.setMapHeightHandleDrivertoRider(); // Add driver marker at the starting position with adjusted z-index


        const driverMarker = yield _this67.map.newMap.addMarker({
          coordinate: driverLatLng,
          iconUrl: 'assets/icon/car.png',
          title: 'Driver',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          zIndex: 100 // Ensure marker appears above polylines

        });
        _this67.driver_marker = driverMarker; // Add rider marker with higher z-index

        const riderMarker = yield _this67.map.newMap.addMarker({
          coordinate: riderLatLng,
          iconUrl: _this67.database.user?.photoURL || 'assets/icon/person.png',
          title: 'Rider',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          zIndex: 101 // Higher than driver marker

        });
        _this67.rider_marker = riderMarker; // Function to update route, duration, and distance

        const updateRoute = /*#__PURE__*/function () {
          var _ref14 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            // Fetch updated driver location
            let updatedDriverLatLng = driverLatLng;

            if (_this67.currentDriver?.Driver_id) {
              try {
                const driverLocation = yield _this67.database.getDriverLocation(_this67.currentDriver.Driver_id);

                if (driverLocation && driverLocation.lat && driverLocation.lng) {
                  updatedDriverLatLng = {
                    lat: driverLocation.lat,
                    lng: driverLocation.lng
                  };
                  _this67.DriverLatLng = updatedDriverLatLng;
                }
              } catch (error) {
                console.warn('Failed to fetch updated driver location:', error);
              }
            }

            const request = {
              origin: updatedDriverLatLng,
              destination: riderLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };

            _this67.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref15 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                // Check if subscription is still active to prevent race conditions
                if (!_this67.routeUpdateSubscription) {
                  console.log('Route update cancelled - subscription inactive');
                  return;
                }

                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  }));
                  _this67.duration = response.routes[0].legs[0].duration.text;
                  _this67.distance = response.routes[0].legs[0].distance.text;
                  console.log(`Duration: ${_this67.duration}, Distance: ${_this67.distance}`);
                  const locs = [{
                    geoCode: {
                      latitude: updatedDriverLatLng.lat,
                      longitude: updatedDriverLatLng.lng
                    }
                  }, {
                    geoCode: {
                      latitude: riderLatLng.lat,
                      longitude: riderLatLng.lng
                    }
                  }];

                  const center = _this67.map.calculateCenter(locs);

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(updatedDriverLatLng.lat, updatedDriverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(riderLatLng.lat, riderLatLng.lng));
                  const availableHeight = _this67.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

                  const mapDim = {
                    height: availableHeight,
                    width: _this67.mapRef.nativeElement.offsetWidth
                  }; // Calculate zoom level with better constraints

                  let zoomLevel = _this67.map.getBoundsZoomLevel(bounds, mapDim); // Apply reasonable constraints for driver-to-rider view


                  const minZoom = 12;
                  const maxZoom = 16;
                  zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel)); // Adjust zoom to ensure both markers are visible with padding

                  const adjustedZoomLevel = Math.max(zoomLevel - 1, minZoom);
                  yield _this67.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this67.map.calculateBearing(updatedDriverLatLng, riderLatLng)); // Clear existing polyline before drawing a new one

                  yield _this67.clearAllPolylines(); // Draw full route polyline (use overview_path)

                  yield _this67.addPolyline(updatedDriverLatLng, riderLatLng, path); // Update driver marker position smoothly without duplication

                  _this67.driver_marker = yield _this67.updateMarkerPosition(_this67.driver_marker, updatedDriverLatLng, 'assets/icon/car.png', 'Driver');
                } else {
                  console.error('Direction ERROR:', response);

                  _this67.overlay.showAlert('Direction ERROR', JSON.stringify(response));
                }
              });

              return function (_x5, _x6) {
                return _ref15.apply(this, arguments);
              };
            }());
          });

          return function updateRoute() {
            return _ref14.apply(this, arguments);
          };
        }(); // Start updating the route periodically


        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.interval)(_this67.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.switchMap)(() => updateRoute())); // Subscribe to the interval observable to start updating

        _this67.routeUpdateSubscription = routeUpdate$.subscribe();
      } catch (error) {
        console.error('Error handling driver to rider:', error);
      }
    })();
  } // Update clearPolyline to handle null map


  clearPolyline(polylineId) {
    var _this68 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!polylineId || !_this68.map?.newMap) return;

      try {
        yield _this68.map.newMap.removePolylines(polylineId);
      } catch (error) {
        console.error('Error clearing polyline:', error);
      }
    })();
  }

  handleRiderToDestination(driverLatLng, destinationLatLng) {
    var _this69 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 40,
        height: 40
      }; // Increased size for better visibility

      const iconAnchor = {
        x: 20,
        y: 40
      }; // Center bottom of the icon

      try {
        // Cancel any existing route update subscription first
        if (_this69.routeUpdateSubscription) {
          _this69.routeUpdateSubscription.unsubscribe();

          _this69.routeUpdateSubscription = null;
        } // Check if map is initialized, if not initialize it


        if (!_this69.map.newMap) {
          console.log('Map not initialized, initializing now...');
          yield _this69.initializeMap();
        } // Reset map position and apply proper height first


        _this69.mapRef.nativeElement.style.top = '0';

        _this69.setMapHeightHandleDrivertoDestination(); // Thoroughly clean up previous visual elements


        yield _this69.clearPrevMarkers();
        yield _this69.clearAllPolylines(); // Update driver marker to driver's current position

        const driverMarker = yield _this69.map.newMap.addMarker({
          coordinate: driverLatLng,
          iconUrl: 'assets/icon/car.png',
          title: 'Driver',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 0,
            y: 0
          },
          zIndex: 100 // Higher z-index to appear above polyline

        });
        _this69.driver_marker = driverMarker; // Add destination marker

        const destinationMarker = yield _this69.map.newMap.addMarker({
          coordinate: destinationLatLng,
          iconUrl: 'assets/icon/flag.png',
          title: 'Destination',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 0,
            y: 0
          },
          zIndex: 101 // Higher z-index than driver marker

        });
        _this69.destinationMarker = destinationMarker; // Function to update route, duration, and distance

        const updateRoute = /*#__PURE__*/function () {
          var _ref16 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            // Fetch updated driver location
            let updatedDriverLatLng = driverLatLng;

            if (_this69.currentDriver?.Driver_id) {
              try {
                const driverLocation = yield _this69.database.getDriverLocation(_this69.currentDriver.Driver_id);

                if (driverLocation && driverLocation.lat && driverLocation.lng) {
                  updatedDriverLatLng = {
                    lat: driverLocation.lat,
                    lng: driverLocation.lng
                  };
                  _this69.DriverLatLng = updatedDriverLatLng;
                }
              } catch (error) {
                console.warn('Failed to fetch updated driver location:', error);
              }
            }

            const request = {
              origin: updatedDriverLatLng,
              destination: destinationLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };

            _this69.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref17 = (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                // Check if subscription is still active to prevent race conditions
                if (!_this69.routeUpdateSubscription) {
                  console.log('Route update cancelled - subscription inactive');
                  return;
                }

                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  }));
                  _this69.duration = response.routes[0].legs[0].duration.text;
                  _this69.distance = response.routes[0].legs[0].distance.text;
                  console.log(`Duration: ${_this69.duration}, Distance: ${_this69.distance}`);
                  const locs = [{
                    geoCode: {
                      latitude: updatedDriverLatLng.lat,
                      longitude: updatedDriverLatLng.lng
                    }
                  }, {
                    geoCode: {
                      latitude: destinationLatLng.lat,
                      longitude: destinationLatLng.lng
                    }
                  }];

                  const center = _this69.map.calculateCenter(locs);

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(updatedDriverLatLng.lat, updatedDriverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng));
                  const availableHeight = _this69.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

                  const mapDim = {
                    height: availableHeight,
                    width: _this69.mapRef.nativeElement.offsetWidth
                  }; // Calculate zoom level with better constraints

                  let zoomLevel = _this69.map.getBoundsZoomLevel(bounds, mapDim); // Apply reasonable constraints for rider-to-destination view


                  const minZoom = 11;
                  const maxZoom = 16;
                  zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel)); // Adjust zoom to ensure both markers are visible with padding

                  const adjustedZoomLevel = Math.max(zoomLevel - 1, minZoom); // Set the camera to focus on the center point with appropriate zoom level

                  yield _this69.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this69.map.calculateBearing(updatedDriverLatLng, destinationLatLng)); // Clear existing polyline before drawing a new one

                  yield _this69.clearAllPolylines(); // Draw full route polyline (use overview_path)

                  yield _this69.addPolyline(updatedDriverLatLng, destinationLatLng, path); // Update driver marker position smoothly without duplication

                  _this69.driver_marker = yield _this69.updateMarkerPosition(_this69.driver_marker, updatedDriverLatLng, 'assets/icon/car.png', 'Driver');
                } else {
                  console.error('Direction ERROR:', response);

                  _this69.overlay.showAlert('Direction ERROR', JSON.stringify(response));
                }
              });

              return function (_x7, _x8) {
                return _ref17.apply(this, arguments);
              };
            }());
          });

          return function updateRoute() {
            return _ref16.apply(this, arguments);
          };
        }(); // Start updating the route periodically


        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.interval)(_this69.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.switchMap)(() => updateRoute())); // Subscribe to the interval observable to start updating

        _this69.routeUpdateSubscription = routeUpdate$.subscribe();
      } catch (error) {
        console.error('Error handling rider to destination:', error);
      }
    })();
  } // Add polyline using either a full route path or fallback to start/end


  addPolyline(loc, des, routePath) {
    var _this70 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const polylineColor = "#007bff";
        const pathPoints = Array.isArray(routePath) && routePath.length > 0 ? routePath : [{
          lat: loc.lat,
          lng: loc.lng
        }, {
          lat: des.lat,
          lng: des.lng
        }];
        const polylines = [{
          path: pathPoints,
          strokeColor: polylineColor,
          strokeWeight: 8,
          geodesic: true
        }];
        const addedPolylines = yield _this70.map.newMap.addPolylines(polylines);

        if (Array.isArray(addedPolylines) && addedPolylines.length > 0) {
          _this70.newPoly = addedPolylines; // assign the returned ids

          console.log('Polylines added:', _this70.newPoly);
          return _this70.newPoly;
        } else {
          throw new Error('Failed to add polyline: Unexpected response format');
        }
      } catch (e) {
        console.error('Error Adding Polyline: ', e);
        throw e;
      }
    })();
  }

  createAndAddMarkers(loc, des, routePath) {
    var _this71 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 10,
        y: 0
      }; // Center bottom of the icon

      try {
        _this71.map.newMap.disableTouch(); // Add start marker


        _this71.marker1 = yield _this71.map.newMap.addMarker({
          coordinate: loc,
          iconUrl: 'assets/icon/point.png',
          title: 'Start',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 1,
            y: 0
          }
        }); // Add destination marker

        _this71.marker2 = yield _this71.map.newMap.addMarker({
          coordinate: des,
          iconUrl: 'assets/icon/flag.png',
          title: 'Destination',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 1,
            y: 0
          }
        }); // Calculate the center point between the start and destination

        const locs = [{
          geoCode: {
            latitude: loc.lat,
            longitude: loc.lng
          }
        }, {
          geoCode: {
            latitude: des.lat,
            longitude: des.lng
          }
        }];

        const center = _this71.map.calculateCenter(locs); // Calculate the bounds


        const bounds = new google.maps.LatLngBounds();
        bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
        bounds.extend(new google.maps.LatLng(des.lat, des.lng)); // Set map height before calculating zoom level

        _this71.setMapHeight();

        const availableHeight = _this71.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

        const mapDim = {
          height: availableHeight,
          width: _this71.mapRef.nativeElement.offsetWidth
        }; // Calculate zoom level

        const zoomLevel = _this71.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


        const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
        // Set the camera to focus on the center point with appropriate zoom level

        yield _this71.map.setCameraToLocation({
          lat: center.latitude,
          lng: center.longitude
        }, adjustedZoomLevel, _this71.map.calculateBearing(loc, des)); // Add polyline for the route - use actual route path if available, fallback to straight line

        const polylineColor = "#007bff";
        const pathPoints = Array.isArray(routePath) && routePath.length > 0 ? routePath : [{
          lat: loc.lat,
          lng: loc.lng
        }, {
          lat: des.lat,
          lng: des.lng
        }];
        const polylines = [{
          path: pathPoints,
          strokeColor: polylineColor,
          strokeWeight: 8,
          geodesic: true
        }]; // Add polyline to the map

        _this71.newPoly = yield _this71.map.newMap.addPolylines(polylines);
      } catch (error) {
        console.error('Error creating and adding markers:', error);
      }
    })();
  } // Update the animateMarker method to properly handle cleanup


  animateMarker(marker, path, iconUrl) {
    var _this72 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this72.map || !_this72.map.newMap) {
        console.warn('Map not initialized for marker animation');
        return;
      }

      const markerSize = {
        width: 50,
        height: 50
      };
      const iconAnchor = {
        x: 25,
        y: 50
      }; // Center bottom of the icon

      try {
        // Remove any existing animated marker
        if (_this72.animatedMarker !== null && _this72.animatedMarker !== undefined) {
          yield _this72.map.newMap.removeMarker(_this72.animatedMarker).catch(e => console.error('Error removing existing animated marker:', e));
          _this72.animatedMarker = null;
        }

        let lastMarker = null;

        for (let i = 0; i < path.length; i++) {
          // Remove previous animation step marker if it exists
          if (lastMarker !== null && lastMarker !== undefined) {
            yield _this72.map.newMap.removeMarker(lastMarker).catch(e => console.error('Error removing animation step marker:', e));
          } // Remove the original marker for the first frame of animation


          if (i === 0 && marker !== null && marker !== undefined) {
            yield _this72.map.newMap.removeMarker(marker).catch(e => console.error('Error removing original marker:', e));
          }

          const coordinate = path[i] instanceof google.maps.LatLng ? {
            lat: path[i].lat(),
            lng: path[i].lng()
          } : {
            lat: path[i].lat,
            lng: path[i].lng
          };
          lastMarker = yield _this72.map.newMap.addMarker({
            coordinate: coordinate,
            iconUrl: iconUrl,
            title: 'Moving Marker',
            iconSize: markerSize,
            iconAnchor: iconAnchor,
            iconOrigin: {
              x: 0,
              y: 0
            },
            zIndex: 20 // Higher than other markers

          });
          yield new Promise(resolve => setTimeout(resolve, 100)); // Adjust the interval as needed
        } // Store the last position of the animated marker


        _this72.animatedMarker = lastMarker;
      } catch (error) {
        console.error('Error in animateMarker:', error);
      }
    })();
  }

  ShowDriverInfoPop() {
    var _this73 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this73.alert.create({
        header: 'Driver Information',
        message: `
      <div style="text-align: center;">
        <h2 style="font-size: 1.2em; margin-bottom: 0.5em;">Car Name: ${_this73.carname}</h2>
        <div style="margin: 10px 0;">
          <img src="${_this73.driverImage}" alt="Driver Image" style="width: 60px; height: 60px; border-radius: 50%;">
        </div>
        <p><strong>Duration Apart:</strong> ${_this73.driver_duration_apart} minutes</p>
        <p><strong>Driver ID:</strong> ${_this73.driver_ID}</p>
        <p><strong>Number of Seats:</strong> ${_this73.driver_number_of_seats}</p>
        <p><strong>Driver Location:</strong> (${_this73.DriverLatLng.lat}, ${_this73.DriverLatLng.lng})</p>
      </div>
    `,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  } // State management methods


  EnterBookingStage() {
    console.log('Entering booking stage');
    this.setStage(this.STAGES.BOOKING); // Ensure polling is active to fetch nearby drivers

    if (!this.pollingInterval && this.LatLng) {
      console.log('Restarting driver polling in booking stage');
      this.stopPolling = false;
    } // Ensure map is in proper state


    if (this.map && this.map.newMap) {
      try {
        this.map.newMap.enableTouch();
        this.map.newMap.enableCurrentLocation(true);
      } catch (e) {
        console.error('Error enabling map features in booking stage:', e);
      }
    }
  }

  EnterMapPinStage() {
    this.setStage(this.STAGES.MAP_PIN);
  }

  EnterConfirmStage() {
    this.setStage(this.STAGES.CONFIRM);
  }

  EnterSearchingStage() {
    this.setStage(this.STAGES.SEARCHING);
  }

  EnterNoDriverStage() {
    this.setStage(this.STAGES.NO_DRIVER);
  }

  EnterTrackingStage() {
    this.setStage(this.STAGES.TRACKING);
  }

  EnterDrivingToDestinationStage() {
    this.setStage(this.STAGES.DRIVING);
  }

  setStage(stage) {
    // Reset all stages first
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = false;
    this.drivingToDestinationStage = false;
    this.noDriverStage = false;
    this.mapPinStage = false; // Set the appropriate stage without calling Enter methods

    switch (stage) {
      case this.STAGES.BOOKING:
        this.bookingStage = true;
        break;

      case this.STAGES.CONFIRM:
        this.confirmStage = true;
        break;

      case this.STAGES.TRACKING:
        this.trackingStage = true;
        break;

      case this.STAGES.SEARCHING:
        this.searchingStage = true;
        break;

      case this.STAGES.DRIVING:
        this.drivingToDestinationStage = true;
        break;

      case this.STAGES.NO_DRIVER:
        this.noDriverStage = true;
        break;

      case this.STAGES.MAP_PIN:
        this.mapPinStage = true;
        break;
    }
  }

  getCurrentStage() {
    if (this.bookingStage) return this.STAGES.BOOKING;
    if (this.confirmStage) return this.STAGES.CONFIRM;
    if (this.trackingStage) return this.STAGES.TRACKING;
    if (this.searchingStage) return this.STAGES.SEARCHING;
    if (this.drivingToDestinationStage) return this.STAGES.DRIVING;
    if (this.noDriverStage) return this.STAGES.NO_DRIVER;
    if (this.mapPinStage) return this.STAGES.MAP_PIN;
    return this.STAGES.BOOKING; // default
  }

  ngOnInit() {
    // ... existing code ...
    // Check for "book again" navigation state
    const navigation = this.router.getCurrentNavigation();

    if (navigation?.extras.state) {
      const state = navigation.extras.state;
      console.log('Navigation state received:', state);

      if (state['bookAgain']) {
        // Wait for the map to be ready
        this.mapLoadedSubscription = this.mapLoadedSubject.subscribe(loaded => {
          if (loaded) {
            setTimeout(() => {
              console.log('Processing book again data:', state);
              this.processBookAgainData(state);
            }, 1000); // Small delay to ensure map is fully ready
          }
        });
      }
    } // ... existing code ...

  }

  processBookAgainData(state) {
    var _this74 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Setting up rebooking with data:', state); // Set pickup location

        if (state.pickup && state.pickup.address) {
          _this74.locationAddress = state.pickup.address;

          if (state.pickup.lat && state.pickup.lng) {
            _this74.LatLng = {
              lat: state.pickup.lat,
              lng: state.pickup.lng
            }; // Add location marker

            yield _this74.addLocationMarker(_this74.LatLng);
          } else {
            // If no coordinates, geocode the address
            const coords = yield _this74.geocodeService.geocodeAddress(state.pickup.address);

            if (coords) {
              _this74.LatLng = coords;
              yield _this74.addLocationMarker(coords);
            }
          }
        } // Set destination


        if (state.destination && state.destination.address) {
          _this74.destinationAddress = state.destination.address;

          if (state.destination.lat && state.destination.lng) {
            _this74.D_LatLng = {
              lat: state.destination.lat,
              lng: state.destination.lng
            }; // Add destination marker

            yield _this74.addDestinationMarker(_this74.D_LatLng);
          } else {
            // If no coordinates, geocode the address
            const coords = yield _this74.geocodeService.geocodeAddress(state.destination.address);

            if (coords) {
              _this74.D_LatLng = coords;
              yield _this74.addDestinationMarker(coords);
            }
          }
        } // If both locations are set, calculate route


        if (_this74.LatLng && _this74.D_LatLng) {
          yield _this74.drawRoute();
          yield _this74.calculatePrice();

          _this74.EnterConfirmStage();
        }
      } catch (error) {
        console.error('Error processing book again data:', error); // Show error toast

        const toast = yield _this74.toastCtrl.create({
          message: 'Could not load previous ride data. Please try again.',
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        });
        toast.present();
      }
    })();
  }
  /**
   * Draw route using Dijkstra API
   */


  drawRoute() {
    var _this75 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this75.LatLng || !_this75.D_LatLng) {
        console.error('Cannot draw route: missing start or destination');
        return;
      }

      try {
        console.log('Drawing route from', _this75.LatLng, 'to', _this75.D_LatLng); // Use Dijkstra service to get route

        const pathResult = yield _this75.dijkstraService.findShortestPath(_this75.LatLng, _this75.D_LatLng);

        if (!pathResult) {
          console.error('No route found');

          _this75.overlay.showAlert('Route Error', 'Unable to calculate route. Please try again.');

          return;
        } // Store route data


        _this75.distance = pathResult.totalDistance;
        _this75.duration = Math.round(pathResult.totalWeight / 60); // Convert seconds to minutes

        _this75.routePath = pathResult.coordinates; // Calculate price

        _this75.price = yield _this75.database.getPriceEstimate(_this75.distance); // Create markers and polyline

        yield _this75.createAndAddMarkers(_this75.LatLng, _this75.D_LatLng, pathResult.coordinates);
        console.log('Route drawn successfully:', {
          distance: _this75.distance,
          duration: _this75.duration,
          price: _this75.price
        });
      } catch (error) {
        console.error('Error drawing route:', error);

        _this75.overlay.showAlert('Route Error', 'Failed to calculate route. Please check your connection and try again.');
      }
    })();
  } // ==================== SHARED RIDE METHODS ====================

  /**
   * Toggle shared ride option
   */


  toggleSharedRide(event) {
    this.sharedRideEnabled = event.detail.checked;
    console.log('Shared ride enabled:', this.sharedRideEnabled); // Update potential savings display

    if (this.sharedRideEnabled && this.price) {
      this.updatePotentialSavingsDisplay();
    }
  }
  /**
   * Update potential savings display on booking screen
   */


  updatePotentialSavingsDisplay() {
    if (this.price) {
      const savings = this.sharedRideService.getPotentialSavingsRange(this.price);
      console.log(`Potential savings: $${savings.min.toFixed(2)} - $${savings.max.toFixed(2)}`);
    }
  }
  /**
   * Get potential savings range for display
   */


  getPotentialSavings() {
    if (!this.price) return {
      min: 0,
      max: 0
    };
    return this.sharedRideService.getPotentialSavingsRange(this.price);
  }
  /**
   * Get discounted price range for display
   */


  getDiscountedPriceRange() {
    if (!this.price) return {
      min: 0,
      max: 0
    };
    return {
      min: this.price * 0.60,
      max: this.price * 0.90 // 10% discount

    };
  }
  /**
   * Subscribe to shared ride updates when matched
   */


  subscribeToSharedRide(sharedRideId) {
    if (!this.auth.currentUser?.uid) {
      console.error('No user ID for shared ride subscription');
      return;
    } // Subscribe to shared ride updates


    this.sharedRideSubscription = this.sharedRideService.subscribeToSharedRide(sharedRideId, this.auth.currentUser.uid).subscribe(sharedRide => {
      if (sharedRide) {
        this.ngZone.run(() => {
          this.sharedRideData = sharedRide;
          this.coPassengers = this.sharedRideService.getCoPassengers();
          this.pickupQueuePosition = this.sharedRideService.getMyPickupPosition();
          this.passengersBeforeMe = this.sharedRideService.getPassengersBeforeMe();
        });
      }
    }); // Subscribe to notifications

    this.sharedRideNotificationSubscription = this.sharedRideService.notifications$.subscribe(notification => {
      if (notification) {
        this.handleSharedRideNotification(notification);
      }
    });
  }
  /**
   * Handle shared ride notifications
   */


  handleSharedRideNotification(notification) {
    console.log('Shared ride notification:', notification); // Update prices if fare changed

    if (notification.type === 'discount_increased' || notification.type === 'passenger_cancelled') {
      this.refreshSharedRidePrice();
    }
  }
  /**
   * Refresh shared ride price from Firestore
   */


  refreshSharedRidePrice() {
    var _this76 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this76.requestID) return;

      try {
        const requestRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.doc)(_this76.firestore, 'Request', _this76.requestID);
        const requestDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.getDoc)(requestRef);

        if (requestDoc.exists()) {
          const data = requestDoc.data();

          _this76.ngZone.run(() => {
            _this76.isSharedRide = data['isSharedRide'] || false;
            _this76.originalPrice = data['originalPrice'] || _this76.price;
            _this76.discountedPrice = data['discountedPrice'] || _this76.price;
            _this76.discountPercent = data['discountPercent'] || 0; // Update displayed price

            if (_this76.isSharedRide) {
              _this76.price = _this76.discountedPrice;
            }
          });
        }
      } catch (error) {
        console.error('Error refreshing shared ride price:', error);
      }
    })();
  }
  /**
   * Cancel sharing (only allowed before ride confirmed)
   */


  cancelSharing() {
    var _this77 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this77.requestID) return;
      const rideRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.doc)(_this77.firestore, 'Request', _this77.requestID);
      const rideDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.getDoc)(rideRef);

      if (rideDoc.exists()) {
        const data = rideDoc.data(); // Check if sharing can be disabled

        if (!_this77.sharedRideService.canDisableSharing(data['status'])) {
          const toast = yield _this77.toastController.create({
            message: 'Cannot disable sharing once ride is confirmed',
            duration: 3000,
            position: 'top',
            color: 'warning'
          });
          yield toast.present();
          return;
        }

        try {
          // Cancel shared ride
          if (data['sharedRideId']) {
            yield _this77.sharedRideService.cancelSharedRide(_this77.requestID, data['sharedRideId']);
          } // Update local state


          _this77.isSharedRide = false;
          _this77.sharedRideEnabled = false;
          _this77.discountedPrice = _this77.originalPrice;
          _this77.discountPercent = 0;
          _this77.price = _this77.originalPrice; // Unsubscribe from shared ride updates

          _this77.cleanupSharedRideSubscriptions();

          const toast = yield _this77.toastController.create({
            message: 'Sharing disabled. Price reverted to original.',
            duration: 2000,
            position: 'top',
            color: 'success'
          });
          yield toast.present();
        } catch (error) {
          console.error('Error cancelling sharing:', error);
        }
      }
    })();
  }
  /**
   * Cleanup shared ride subscriptions
   */


  cleanupSharedRideSubscriptions() {
    if (this.sharedRideSubscription) {
      this.sharedRideSubscription.unsubscribe();
      this.sharedRideSubscription = null;
    }

    if (this.sharedRideNotificationSubscription) {
      this.sharedRideNotificationSubscription.unsubscribe();
      this.sharedRideNotificationSubscription = null;
    }

    this.sharedRideService.unsubscribeFromSharedRide(); // Reset shared ride state

    this.sharedRideData = null;
    this.coPassengers = [];
    this.pickupQueuePosition = 0;
    this.passengersBeforeMe = 0;
  }
  /**
   * Get savings amount for display
   */


  getSavingsAmount() {
    if (!this.isSharedRide) return 0;
    return this.sharedRideService.calculateSavings(this.originalPrice, this.discountedPrice);
  }
  /**
   * Get co-passenger status label
   */


  getPassengerStatusLabel(status) {
    switch (status) {
      case 'waiting':
        return 'Waiting';

      case 'picked_up':
        return 'Picked Up';

      case 'dropped_off':
        return 'Dropped Off';

      default:
        return status;
    }
  }
  /**
   * Check for shared ride match when ride status changes
   */


  checkForSharedRideMatch(rideData) {
    var _this78 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (rideData.isSharedRide && rideData.sharedRideId && !_this78.sharedRideSubscription) {
        _this78.ngZone.run(() => {
          _this78.isSharedRide = true;
          _this78.originalPrice = rideData.originalPrice || _this78.price;
          _this78.discountedPrice = rideData.discountedPrice || _this78.price;
          _this78.discountPercent = rideData.discountPercent || 0;
        }); // Subscribe to shared ride updates


        _this78.subscribeToSharedRide(rideData.sharedRideId);
      }
    })();
  }
  /**
   * Reset shared ride state when returning home
   */


  resetSharedRideState() {
    this.sharedRideEnabled = false;
    this.isSharedRide = false;
    this.originalPrice = 0;
    this.discountedPrice = 0;
    this.discountPercent = 0;
    this.cleanupSharedRideSubscriptions();
  } // ==================== DIJKSTRA ROUTE MATCHING METHODS ====================

  /**
   * Find nearby riders with similar routes when shared ride is enabled
   * Uses Dijkstra algorithm to compute optimal routes and calculate overlap
   */


  findNearbySharedRideMatches() {
    var _this79 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this79.sharedRideEnabled || !_this79.LatLng || !_this79.D_LatLng) {
        console.log('Cannot find matches: sharing disabled or missing locations');
        return;
      }

      try {
        _this79.isCalculatingRoute = true;
        console.log('Finding nearby riders with similar routes...'); // 1. Compute optimal route using Dijkstra

        const origin = {
          lat: _this79.LatLng.lat,
          lng: _this79.LatLng.lng
        };
        const destination = {
          lat: _this79.D_LatLng.lat,
          lng: _this79.D_LatLng.lng
        };
        _this79.computedPath = yield _this79.dijkstraService.findShortestPath(origin, destination);
        console.log('Computed path:', _this79.computedPath); // 2. Find nearby active riders

        const nearbyCandidates = yield _this79.nearbyRiderService.findNearbyActiveRiders(origin, destination, _this79.profile?.userId || _this79.auth.currentUser?.uid || '');
        console.log(`Found ${nearbyCandidates.length} nearby candidates`); // 3. Score matches by route overlap

        _this79.nearbyMatches = yield _this79.nearbyRiderService.scoreNearbyRiders(_this79.computedPath, nearbyCandidates);
        console.log(`Found ${_this79.nearbyMatches.length} matching routes`);
        _this79.nearbyRidersCount = _this79.nearbyMatches.length; // 4. If good matches found, create opportunity and notify

        if (_this79.nearbyMatches.length > 0) {
          yield _this79.createAndNotifySharedRideOpportunity();
        }

        _this79.isCalculatingRoute = false;
      } catch (error) {
        console.error('Error finding nearby matches:', error);
        _this79.isCalculatingRoute = false;
      }
    })();
  }
  /**
   * Create shared ride opportunity and notify nearby riders
   */


  createAndNotifySharedRideOpportunity() {
    var _this80 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this80.computedPath || !_this80.profile) return;

      try {
        const origin = {
          lat: _this80.LatLng.lat,
          lng: _this80.LatLng.lng
        };
        const destination = {
          lat: _this80.D_LatLng.lat,
          lng: _this80.D_LatLng.lng
        }; // Create opportunity

        _this80.sharedRideOpportunityId = yield _this80.nearbyRiderService.createSharedRideOpportunity(_this80.profile.userId || _this80.auth.currentUser?.uid, _this80.profile.firstName || 'A rider', origin, destination, _this80.locationAddress || 'Current Location', _this80.destinationAddress || 'Destination', _this80.price || 0, _this80.computedPath);
        console.log('Created shared ride opportunity:', _this80.sharedRideOpportunityId); // Notify nearby riders

        const originArea = _this80.nearbyRiderService.getGeneralAreaFromAddress(_this80.locationAddress || '');

        const destArea = _this80.nearbyRiderService.getGeneralAreaFromAddress(_this80.destinationAddress || '');

        const notificationsSent = yield _this80.nearbyRiderService.notifyNearbyRiders(_this80.nearbyMatches, {
          name: _this80.profile.firstName || 'A rider',
          originArea,
          destinationArea: destArea
        }, _this80.sharedRideOpportunityId);

        if (notificationsSent > 0) {
          const toast = yield _this80.toastController.create({
            message: `Notified ${notificationsSent} nearby rider(s) about your trip!`,
            duration: 3000,
            position: 'top',
            color: 'success'
          });
          yield toast.present();
        }
      } catch (error) {
        console.error('Error creating shared ride opportunity:', error);
      }
    })();
  }
  /**
   * Subscribe to nearby shared ride opportunities
   */


  subscribeToNearbyOpportunities() {
    if (!this.LatLng || !this.profile) return;
    const location = {
      lat: this.LatLng.lat,
      lng: this.LatLng.lng
    };
    const riderId = this.profile.userId || this.auth.currentUser?.uid || '';
    this.nearbyOpportunitiesSubscription = this.nearbyRiderService.subscribeToNearbyOpportunities(location, riderId).subscribe(opportunities => {
      this.ngZone.run(() => {
        this.availableSharedRides = opportunities.filter(opp => opp.initiatorId !== riderId && opp.status === 'open'); // Show prompt if good matches available and sharing enabled

        if (this.availableSharedRides.length > 0 && this.sharedRideEnabled) {
          this.nearbyRidersCount = this.availableSharedRides.length;
        }
      });
    });
  }
  /**
   * Show shared ride opportunities modal
   */


  viewSharedRides() {
    if (this.availableSharedRides.length > 0) {
      this.showSharedRidePrompt = true;
    }
  }
  /**
   * Accept a shared ride opportunity
   */


  acceptSharedRideOpportunity(opportunity) {
    var _this81 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this81.overlay.showLoader('Joining shared ride...');
        const riderId = _this81.profile?.userId || _this81.auth.currentUser?.uid || '';
        const riderName = _this81.profile?.firstName || 'Rider';
        const success = yield _this81.nearbyRiderService.acceptOpportunity(opportunity.opportunityId, riderId, riderName);

        if (success) {
          // Set local state
          _this81.selectedSharedRide = opportunity;
          _this81.isSharedRide = true;
          _this81.discountPercent = opportunity.potentialDiscount;
          _this81.originalPrice = _this81.price;
          _this81.discountedPrice = _this81.price * (1 - opportunity.potentialDiscount / 100);
          _this81.price = _this81.discountedPrice;
          _this81.showSharedRidePrompt = false;

          _this81.overlay.hideLoader(); // Show success message


          const toast = yield _this81.toastController.create({
            message: `Joined shared ride! Saving ${opportunity.potentialDiscount}%`,
            duration: 3000,
            position: 'top',
            color: 'success'
          });
          yield toast.present();
        } else {
          _this81.overlay.hideLoader();
        }
      } catch (error) {
        console.error('Error accepting shared ride:', error);

        _this81.overlay.hideLoader();

        yield _this81.overlay.showAlert('Error', 'Could not join shared ride. Please try again.');
      }
    })();
  }
  /**
   * Dismiss shared ride prompt
   */


  dismissSharedRidePrompt() {
    this.showSharedRidePrompt = false;
  }
  /**
   * Handle deep link from shared ride notification
   */


  handleSharedRideDeepLink(opportunityId) {
    var _this82 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const opportunity = yield _this82.nearbyRiderService.getOpportunity(opportunityId);

        if (opportunity && opportunity.status === 'open') {
          _this82.selectedSharedRide = opportunity;
          _this82.availableSharedRides = [opportunity];
          _this82.showSharedRidePrompt = true;
        } else {
          const toast = yield _this82.toastController.create({
            message: 'This shared ride opportunity is no longer available',
            duration: 3000,
            position: 'top',
            color: 'warning'
          });
          yield toast.present();
        }
      } catch (error) {
        console.error('Error handling deep link:', error);
      }
    })();
  }
  /**
   * Enhanced toggle shared ride with route matching
   */


  onSharedRideToggle(event) {
    var _this83 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this83.toggleSharedRide(event);

      if (_this83.sharedRideEnabled) {
        // Start listening for nearby opportunities
        _this83.subscribeToNearbyOpportunities(); // If we already have destination, find matches


        if (_this83.D_LatLng && _this83.D_LatLng.lat) {
          yield _this83.findNearbySharedRideMatches();
        }
      } else {
        // Cleanup subscriptions
        if (_this83.nearbyOpportunitiesSubscription) {
          _this83.nearbyOpportunitiesSubscription.unsubscribe();

          _this83.nearbyOpportunitiesSubscription = null;
        }

        _this83.nearbyRiderService.unsubscribeFromOpportunities();

        _this83.availableSharedRides = [];
        _this83.nearbyRidersCount = 0;
      }
    })();
  }
  /**
   * Cleanup Dijkstra-related subscriptions
   */


  cleanupDijkstraSubscriptions() {
    if (this.nearbyOpportunitiesSubscription) {
      this.nearbyOpportunitiesSubscription.unsubscribe();
      this.nearbyOpportunitiesSubscription = null;
    }

    this.nearbyRiderService.unsubscribeFromOpportunities();
    this.computedPath = null;
    this.nearbyMatches = [];
    this.availableSharedRides = [];
    this.selectedSharedRide = null;
    this.sharedRideOpportunityId = null;
    this.nearbyRidersCount = 0;
  }

}

HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_network_service__WEBPACK_IMPORTED_MODULE_10__.NetworkService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_map_service__WEBPACK_IMPORTED_MODULE_11__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_29__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_29__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_12__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_22__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_geocode_service__WEBPACK_IMPORTED_MODULE_13__.GeocodeService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_14__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_30__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_30__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_15__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_30__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_30__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_shared_ride_service__WEBPACK_IMPORTED_MODULE_16__.SharedRideService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_17__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_dijkstra_service__WEBPACK_IMPORTED_MODULE_18__.DijkstraService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_nearby_rider_service__WEBPACK_IMPORTED_MODULE_19__.NearbyRiderService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_one_signal_service__WEBPACK_IMPORTED_MODULE_20__.OnesignalService));
};

HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
  type: HomePage,
  selectors: [["app-home"]],
  viewQuery: function HomePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_c3, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.mapRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.topBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.bottomBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    }
  },
  decls: 27,
  vars: 20,
  consts: [[1, "ion-no-border", 2, "position", "relative", "z-index", "1000", 3, "translucent"], ["class", "ion-padding:10px", 4, "ngIf"], ["lines", "none", "color", "light", "class", "main-buttons ion-no-padding", "class", "top_bar", 3, "click", 4, "ngIf"], ["vertical", "top", "horizontal", "start", "style", "top: 35px;", 4, "ngIf"], ["vertical", "top", "horizontal", "end", "style", "top: 35px;", 3, "click", 4, "ngIf"], ["vertical", "top", "horizontal", "end", "style", "top: 100px;", 3, "click", 4, "ngIf"], ["vertical", "top", "horizontal", "start", "style", "top: 35px;", 3, "click", 4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], ["scroll-y", "false"], [2, "width", "100%", "height", "100%"], ["map", ""], ["vertical", "bottom", "horizontal", "end", "style", "bottom: 130px;", 4, "ngIf"], ["class", "centerPin", "vertical", "center", "horizontal", "center", "style", "z-index: 1000;", 4, "ngIf"], ["bottomBar", ""], ["class", "bottomItems shadow-top", 4, "ngIf"], [3, "isOpen", "didDismiss"], [1, "ion-padding:10px"], ["slot", "start"], ["shape", "round", 3, "click"], ["slot", "icon-only", "name", "arrow-back", "color", "tertiary"], ["slot", "end"], ["fill", "outline", "color", "primary", "lines", "none", 1, "duration"], ["slot", "icon-only", "name", "flag", "color", "primary"], ["color", "primary", 4, "ngIf"], ["color", "primary"], ["lines", "none", "color", "light", 1, "top_bar", 3, "click"], ["slot", "start", "color", "primary", "name", "pencil"], ["vertical", "top", "horizontal", "start", 2, "top", "35px"], ["color", "light"], ["vertical", "top", "horizontal", "end", 2, "top", "35px", 3, "click"], ["color", "primary", "name", "chatbubble-ellipses"], ["vertical", "top", "horizontal", "end", 2, "top", "100px", 3, "click"], ["color", "warning", "size", "small"], ["name", "notifications"], ["vertical", "top", "horizontal", "start", 2, "top", "35px", 3, "click"], ["name", "arrow-back", "color", "primary"], [1, "ion-text-center"], ["vertical", "bottom", "horizontal", "end", 2, "bottom", "130px"], ["color", "light", 3, "click"], ["name", "locate"], ["vertical", "center", "horizontal", "center", 1, "centerPin", 2, "z-index", "1000"], ["src", "../../assets/icon/pin.png"], [1, "bottomItems", "shadow-top"], [1, "ion-margin-horizontal", "ion-margin-bottom"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 1, "main-button", 3, "disabled", "click"], ["slot", "start", "name", "search", "color", "primary"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 3, "click"], ["slot", "end", "name", "arrow-forward"], ["lines", "none", 2, "margin", "2px"], ["src", "../../assets/imgs/No connection-pana.svg", 2, "height", "200px", "width", "150px", "margin", "0 auto"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "name", "arrow-back"], [1, "ride-confirmation-card"], ["class", "ride-details", 4, "ngIf"], ["class", "ride-details skeleton", 4, "ngIf"], ["class", "shared-ride-toggle", 4, "ngIf"], [1, "payment-selector"], ["lines", "none"], ["name", "wallet-outline", "slot", "start", "color", "primary"], ["interface", "action-sheet", 3, "value", "ionChange"], ["value", "cash"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "add_card"], ["class", "payment-hint", 4, "ngIf"], [1, "book-button-container"], ["shape", "round", "color", "primary", "size", "large", "expand", "block", 1, "book-ride-btn", 3, "click"], ["slot", "start", "name", "checkmark-sharp", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], [4, "ngIf"], [1, "ride-details"], [1, "vehicle-info", 3, "click"], [1, "vehicle-details"], ["name", "information-circle", "color", "primary"], [1, "vehicle-stats"], ["name", "time", "color", "primary"], ["name", "person", "color", "primary"], [1, "price-tag"], ["class", "shared-price", 4, "ngIf"], ["class", "original-price", 4, "ngIf"], [1, "shared-price"], [1, "original-price"], [1, "ride-details", "skeleton"], [1, "vehicle-info"], [3, "animated"], [2, "width", "130px", 3, "animated"], [2, "width", "60px", 3, "animated"], [1, "shared-ride-toggle"], ["lines", "none", 1, "share-save-item"], ["name", "people-outline", "slot", "start", "color", "success"], ["slot", "end", "color", "success", 3, "checked", "ionChange"], ["class", "savings-preview", 4, "ngIf"], ["class", "calculating-route", 4, "ngIf"], ["class", "nearby-riders-banner", 3, "click", 4, "ngIf"], [1, "savings-preview"], ["name", "pricetag-outline", "color", "success"], [1, "calculating-route"], ["name", "dots", "color", "primary"], [1, "nearby-riders-banner", 3, "click"], ["name", "people", "color", "success"], ["fill", "clear", "size", "small", "color", "success"], ["name", "chevron-forward", "slot", "end"], [3, "value"], [1, "payment-hint"], ["name", "information-circle-outline", "color", "primary"], ["slot", "start", "name", "checkmark-sharp"], ["color", "light", "type", "indeterminate"], [3, "src"], ["fill", "outline", "shape", "round", "color", "danger", "size", "large", "type", "submit", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "name", "close-circle-outline", "color", "danger"], ["color", "primary", "type", "indeterminate", 1, "ion-padding"], [1, "card"], ["lines", "none", 1, "driver-card-item"], ["slot", "end", 1, "driver-avatar-container"], [1, "driver-rating"], ["color", "warning", "name", "star"], ["slot", "end", 1, "price-container"], [1, "driver-actions-accordion"], ["value", "first"], ["slot", "header", 1, "accordion-header"], ["slot", "content", 1, "accordion-content"], ["shape", "round", "size", "large", "expand", "block", 1, "main-button", 3, "click"], ["color", "primary", "slot", "start", "name", "person"], ["color", "primary", "slot", "start", "name", "chatbubbles"], ["color", "primary", "slot", "start", "name", "close"], ["color", "primary", "name", "cash"], ["color", "primary", "name", "card"], ["color", "secondary", "name", "star"], [3, "opportunities", "userLocation", "userDestination", "accept", "dismiss"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, HomePage_ion_toolbar_1_Template, 11, 4, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, HomePage_ion_item_2_Template, 4, 1, "ion-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, HomePage_ion_fab_3_Template, 3, 0, "ion-fab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, HomePage_ion_fab_4_Template, 3, 0, "ion-fab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](5, HomePage_ion_fab_5_Template, 3, 0, "ion-fab", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, HomePage_ion_fab_6_Template, 3, 0, "ion-fab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, HomePage_ion_toolbar_7_Template, 4, 4, "ion-toolbar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, HomePage_ion_toolbar_8_Template, 4, 4, "ion-toolbar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](10, "capacitor-google-maps", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](12, HomePage_ion_fab_12_Template, 3, 0, "ion-fab", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](13, HomePage_ion_fab_13_Template, 3, 0, "ion-fab", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "ion-footer", 0)(15, "div", null, 13)(17, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](18, HomePage_div_18_Template, 8, 6, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](19, HomePage_div_19_Template, 6, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](20, HomePage_div_20_Template, 10, 3, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](21, HomePage_div_21_Template, 25, 18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, HomePage_div_22_Template, 18, 9, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, HomePage_div_23_Template, 50, 22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](24, HomePage_div_24_Template, 45, 19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](25, "ion-modal", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("didDismiss", function HomePage_Template_ion_modal_didDismiss_25_listener() {
        return ctx.dismissSharedRidePrompt();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](26, HomePage_ng_template_26_Template, 1, 3, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.trackingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.drivingToDestinationStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.bookingStage && ctx.showResetLocationButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.noDriverStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.searchingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.trackingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.drivingToDestinationStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isOpen", ctx.showSharedRidePrompt);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_30__.SelectValueAccessor, _shared_ride_prompt_shared_ride_prompt_component__WEBPACK_IMPORTED_MODULE_21__.SharedRidePromptComponent, _angular_common__WEBPACK_IMPORTED_MODULE_31__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslatePipe],
  styles: ["capacitor-google-maps[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.centerPin[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.8s;\n}\n\n.bottomItems[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(0, 98, 255, 0.625);\n}\n\nion-header[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-top: 0vh;\n  background: transparent;\n  display: block;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .bottomItems[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 20px 20px;\n  padding-bottom: 0vh;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .bottomItems[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n  --inner-padding-bottom: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  position: relative;\n  --background: transparent;\n  margin-top: 20px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n  background: transparent;\n  display: block;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  margin-right: 2.5vh;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .bottomItems[_ngcontent-%COMP%] {\n  border-radius: 20px 20px 0 0;\n  background: #ffffff; \n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .bottomItems[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-top: -40px;\n}\n\nion-footer[_ngcontent-%COMP%]   .bottomItems[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  --background: transparent !important;\n}\n\nion-footer[_ngcontent-%COMP%]   .bottomItems[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --inner-padding-bottom: 1px;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n  --background: transparent !important;\n}\n\n.centerElem[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex: 0.5;\n}\n\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.top_bar[_ngcontent-%COMP%] {\n  box-shadow: 0px 1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.main-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1024px;\n  padding-bottom: 100%;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%] {\n  min-height: 150px;\n  height: auto;\n  max-height: 80vh;\n  overflow-y: auto;\n  transition: height 0.3s ease;\n  padding: 16px;\n  margin-bottom: env(safe-area-inset-bottom, 0px);\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(10px);\n  border-radius: 24px 24px 0 0;\n}\n\n.bottomItems.shadow-top[ngIf=trackingStage][_ngcontent-%COMP%], .bottomItems.shadow-top[ngIf=drivingToDestinationStage][_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 200px;\n}\n\n.bottomItems.shadow-top[ngIf=searchingStage][_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 180px;\n}\n\n.bottomItems.shadow-top[ngIf=confirmStage][_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 250px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 12px 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  border-radius: 16px;\n  margin-bottom: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-right: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n  margin: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border-radius: 16px;\n  background: var(--ion-color-light);\n  overflow: hidden;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --background: transparent;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  --padding-start: 0;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 16px;\n  --border-radius: 12px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.bottomItems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\nion-progress-bar[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 4px;\n  margin: 8px 0;\n}\n\nion-progress-bar[type=indeterminate][_ngcontent-%COMP%] {\n  --progress-background: var(--ion-color-primary);\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --border-radius: 8px;\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   .ion-margin-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   .ion-margin-horizontal[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --border-radius: 20px;\n  height: 40px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   .ion-margin-horizontal[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border: 2px solid var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]:has(ion-progress-bar[type=indeterminate])   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border: 2px solid var(--ion-color-primary);\n  position: relative;\n  overflow: visible;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 14px;\n  height: 14px;\n  background: var(--ion-color-success);\n  border-radius: 50%;\n  border: 2px solid white;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item.price[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item.price[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-label   p[_ngcontent-%COMP%]:first-child) {\n  --background: rgba(var(--ion-color-light-rgb), 0.5);\n  border-radius: 12px;\n  margin: 8px 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-label   p[_ngcontent-%COMP%]:first-child)   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-label   p[_ngcontent-%COMP%]:first-child)   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=cash]), .bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=card]) {\n  --background: rgba(var(--ion-color-light-rgb), 0.5);\n  border-radius: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=cash])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=card])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=cash])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:has(ion-icon[name=card])   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header.ion-margin-bottom[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n  border-radius: 16px;\n  margin-bottom: 16px !important;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header.ion-margin-bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  overflow: hidden;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-light-rgb), 0.5);\n  --border-radius: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 0;\n  --border-width: 1px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:last-child {\n  --background: rgba(var(--ion-color-danger-rgb), 0.1);\n  --color: var(--ion-color-danger);\n  --border-color: var(--ion-color-danger);\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:last-child   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger) !important;\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(var(--ion-color-primary-rgb), 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(var(--ion-color-primary-rgb), 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(var(--ion-color-primary-rgb), 0);\n  }\n}\n\n.bottomItems[_ngcontent-%COMP%]   ion-list[ngIf=searchingStage][_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%], .bottomItems[_ngcontent-%COMP%]   ion-list[ngIf=trackingStage][_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%], .bottomItems[_ngcontent-%COMP%]   ion-list[ngIf=drivingToDestinationStage][_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  animation: pulse 2s infinite;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%] {\n  max-height: 55vh;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-bottom: 16px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-radius: 16px;\n  background: var(--ion-color-light);\n  overflow: visible;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --min-height: 48px;\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item.price[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --min-height: 42px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 0;\n  margin-bottom: 2px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  padding: 8px;\n  min-height: unset;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=trackingStage][_ngcontent-%COMP%]   .ion-margin-bottom[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=drivingToDestinationStage][_ngcontent-%COMP%]   .ion-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n\n.bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=trackingStage][_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%], .bottomItems.shadow-top[_ngcontent-%COMP%]   ion-list.bottomItems.shadow-top[ngIf=drivingToDestinationStage][_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\nion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n\nion-accordion[_ngcontent-%COMP%]   div[slot=content][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  margin-bottom: 4px;\n  height: auto;\n}\n\n.driver-card-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0;\n  margin-bottom: 8px;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 60px;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 4px;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%]   .driver-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n}\n\n.driver-avatar-container[_ngcontent-%COMP%]   .driver-rating[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 2px;\n}\n\n.price-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  min-width: 70px;\n}\n\n.price-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0;\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  border-top: 1px solid var(--ion-color-light-shade);\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%]   .accordion-content[_ngcontent-%COMP%] {\n  padding: 8px 16px 24px;\n  padding-bottom: 32px;\n}\n\n.driver-actions-accordion[_ngcontent-%COMP%]   .accordion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: visible;\n  margin: 0 16px 16px;\n  padding-bottom: 16px;\n}\n\nion-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.bottomItems[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px 16px 0 0;\n  padding: 16px;\n  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .ride-details[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .ride-details.skeleton[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]:active {\n  background: #eef0f2;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0 0 4px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-size: 18px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .vehicle-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .vehicle-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .vehicle-details[_ngcontent-%COMP%]   .vehicle-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  font-size: 16px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-left: 8px;\n  flex-shrink: 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 2px;\n  color: var(--ion-color-primary);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  color: var(--ion-color-medium);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   .price-tag[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  text-decoration-color: var(--ion-color-danger);\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n  --padding-start: 12px;\n  --padding-end: 8px;\n  --min-height: 54px;\n  border-radius: 12px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 10px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  min-width: 130px;\n  color: var(--ion-color-primary);\n  font-weight: 500;\n  --padding-end: 12px;\n  --placeholder-opacity: 1;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   .payment-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  margin-top: 8px;\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  background: rgba(var(--ion-color-primary-rgb), 0.05);\n  border-radius: 8px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .payment-selector[_ngcontent-%COMP%]   .payment-hint[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 16px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  margin: 0;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.ride-confirmation-card[_ngcontent-%COMP%]   .book-button-container[_ngcontent-%COMP%]   .book-ride-btn[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n\nion-footer[_ngcontent-%COMP%]   .bottomItems.shadow-top[ngIf=confirmStage][_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  max-height: unset;\n}\n\nion-footer[_ngcontent-%COMP%]   .bottomItems.shadow-top[ngIf=confirmStage][_ngcontent-%COMP%]   .ride-confirmation-card[_ngcontent-%COMP%] {\n  animation: slide-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@keyframes pulse-bg {\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.6;\n  }\n}\n\n.ride-details.skeleton[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%] {\n  animation: pulse-bg 1.5s infinite;\n  --border-radius: 8px;\n  --background: rgba(var(--ion-color-primary-rgb), 0.12);\n}\n\n[_ngcontent-%COMP%]:root   ion-select-popover[_ngcontent-%COMP%] {\n  --width: 240px;\n}\n\n[_ngcontent-%COMP%]:root   ion-select-popover[_ngcontent-%COMP%]   .select-interface-option[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\n[_ngcontent-%COMP%]:root   ion-select-popover[_ngcontent-%COMP%]   .select-interface-option[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  font-size: 18px;\n}\n\n.map-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: calc(100% - var(--bottom-bar-height, 0px));\n  top: var(--header-height, 0px);\n  left: 0;\n  z-index: 10;\n  transition: height 0.3s ease;\n}\n\n.map-container.with-tracking[_ngcontent-%COMP%] {\n  height: calc(100% - 210px);\n  top: 56px;\n}\n\n.map-container.with-booking[_ngcontent-%COMP%] {\n  height: calc(100% - 100px);\n  top: 0;\n}\n\n.map-container.with-confirm[_ngcontent-%COMP%] {\n  height: calc(100% - 260px);\n  top: 120px;\n}\n\n.map-container.with-searching[_ngcontent-%COMP%] {\n  height: calc(100% - 180px);\n  top: 56px;\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%] {\n  margin: 12px 16px;\n  padding: 8px;\n  background: linear-gradient(135deg, rgba(45, 211, 111, 0.1) 0%, rgba(45, 211, 111, 0.05) 100%);\n  border-radius: 12px;\n  border: 1px solid rgba(45, 211, 111, 0.3);\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%]   .share-save-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%]   .share-save-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--ion-color-success);\n  margin: 0;\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%]   .share-save-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: var(--ion-color-medium);\n  margin: 4px 0 0;\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%]   .savings-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  margin-top: 8px;\n  background: rgba(45, 211, 111, 0.15);\n  border-radius: 8px;\n  font-size: 0.9em;\n  color: var(--ion-color-success-shade);\n  font-weight: 500;\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%]   .calculating-route[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px;\n  margin-top: 8px;\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n  border-radius: 8px;\n  font-size: 0.9em;\n  color: var(--ion-color-primary);\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%]   .calculating-route[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%]   .nearby-riders-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  margin-top: 8px;\n  background: linear-gradient(135deg, rgba(45, 211, 111, 0.2) 0%, rgba(45, 211, 111, 0.1) 100%);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%]   .nearby-riders-banner[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  background: rgba(45, 211, 111, 0.25);\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%]   .nearby-riders-banner[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%]   .nearby-riders-banner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.9em;\n  font-weight: 600;\n  color: var(--ion-color-success-shade);\n}\n\n.shared-ride-toggle[_ngcontent-%COMP%]   .nearby-riders-banner[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 0;\n  margin: 0;\n  height: auto;\n  font-size: 0.85em;\n  font-weight: 600;\n}\n\n.shared-price[_ngcontent-%COMP%] {\n  font-size: 0.9em !important;\n  color: var(--ion-color-success);\n}\n\n.shared-ride-matching[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  text-align: center;\n}\n\n.shared-ride-matching[_ngcontent-%COMP%]   .matching-message[_ngcontent-%COMP%] {\n  --background: rgba(45, 211, 111, 0.1);\n  border-radius: 8px;\n}\n\n.shared-ride-matching[_ngcontent-%COMP%]   .matching-message[_ngcontent-%COMP%]   .matching-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-success);\n  font-weight: 500;\n  animation: pulse 2s infinite;\n}\n\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n\n.shared-ride-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: linear-gradient(135deg, rgba(45, 211, 111, 0.15) 0%, rgba(45, 211, 111, 0.05) 100%);\n  border-bottom: 1px solid rgba(45, 211, 111, 0.2);\n}\n\n.shared-ride-badge[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  --background: var(--ion-color-success);\n  --color: white;\n  font-weight: 600;\n}\n\n.shared-ride-badge[_ngcontent-%COMP%]   .co-passenger-count[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: var(--ion-color-success-shade);\n  font-weight: 500;\n}\n\n.shared-price-display[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.shared-price-display[_ngcontent-%COMP%]   .original-price-small[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: var(--ion-color-medium);\n  margin: 0;\n}\n\n.shared-price-display[_ngcontent-%COMP%]   .discounted-price[_ngcontent-%COMP%] {\n  color: var(--ion-color-success);\n  font-weight: 700;\n  margin: 2px 0;\n}\n\n.shared-price-display[_ngcontent-%COMP%]   .savings-badge[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  color: var(--ion-color-success);\n  background: rgba(45, 211, 111, 0.15);\n  padding: 2px 8px;\n  border-radius: 12px;\n  margin: 0;\n  display: inline-block;\n}\n\n.pickup-queue[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n\n.pickup-queue[_ngcontent-%COMP%]   .queue-message[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.1);\n  border-radius: 8px;\n}\n\n.pickup-queue[_ngcontent-%COMP%]   .queue-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-weight: 500;\n  font-size: 0.9em;\n}\n\n.co-passengers[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-top: 1px solid var(--ion-color-light);\n}\n\n.co-passengers[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.co-passengers[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 600;\n  color: var(--ion-color-medium);\n}\n\n.co-passengers[_ngcontent-%COMP%]   .co-passenger-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 56px;\n}\n\n.co-passengers[_ngcontent-%COMP%]   .co-passenger-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n\n.co-passengers[_ngcontent-%COMP%]   .co-passenger-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: var(--ion-color-medium);\n}\n\n.co-passengers[_ngcontent-%COMP%]   .co-passenger-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95em;\n  margin: 0;\n}\n\n.co-passengers[_ngcontent-%COMP%]   .co-passenger-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: var(--ion-color-medium);\n  margin: 2px 0 0;\n}\n\n.co-passengers[_ngcontent-%COMP%]   .co-passenger-item[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  padding: 4px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMkJBQUE7RUFDRjtFQUNBO0lBQ0UseUJBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0MsbUVBQUE7QUFBRDs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFHQTtFQUNFLHFDQUFBO0FBQUY7O0FBS0U7RUFDRSxnQkFBQTtBQUZKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFHSTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFFUTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQUFWOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBTEo7O0FBTUk7RUFDSSxtQkFBQTtBQUpSOztBQU1JO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQSxFQUFBLDBEQUFBO0FBSlI7O0FBT1k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBTGhCOztBQVVFO0VBQ0UsaUJBQUE7QUFSSjs7QUFXSztFQUNDLGdCQUFBO0VBRUMsb0NBQUE7QUFWUDs7QUFXTztFQUNDLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUFUUjs7QUFvQkE7RUFFRSx1QkFBQTtFQUNBLG1CQUFBO0FBbEJGOztBQXFCQTtFQUVFLGlCQUFBO0VBQ0EsU0FBQTtBQW5CRjs7QUFzQkM7RUFFRyx1REFBQTtBQXBCSjs7QUF1QkU7RUFDRSxzREFBQTtBQXBCSjs7QUF1QkU7RUFDRSx1REFBQTtBQXBCSjs7QUF1QkE7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0FBcEJGOztBQXdCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBckJGOztBQXdCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQXRCRjs7QUEyQkU7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFHQSxhQUFBO0VBQ0EsK0NBQUE7RUFtQkEscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBN0NKOztBQTJCSTtFQUVFLFlBQUE7RUFDQSxpQkFBQTtBQTFCTjs7QUE2Qkk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUEzQk47O0FBOEJJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBNUJOOztBQW1DSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBakNOOztBQW1DTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBakNSOztBQW1DUTtFQUNFLGdCQUFBO0FBakNWOztBQW9DUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFsQ1Y7O0FBc0NVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBcENaOztBQXNDWTtFQUNFLGVBQUE7QUFwQ2Q7O0FBd0NVO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXRDWjs7QUF3Q1k7RUFDRSxlQUFBO0FBdENkOztBQTRDTTtFQUNFLGlCQUFBO0FBMUNSOztBQTRDUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQTFDVjs7QUE2Q1E7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUEzQ1Y7O0FBaURFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUEvQ0o7O0FBaURJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBL0NOOztBQWlETTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUEvQ1I7O0FBbURJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWpETjs7QUFtRE07RUFDRSxpQkFBQTtBQWpEUjs7QUFvRE07RUFDRSxZQUFBO0FBbERSOztBQXlEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUF0REY7O0FBd0RFO0VBQ0UsK0NBQUE7QUF0REo7O0FBMkRBO0VBQ0Usb0JBQUE7RUFDQSxxREFBQTtBQXhERjs7QUFrRU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBL0RSOztBQWlFUTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQS9EVjs7QUFpRVU7RUFDRSxlQUFBO0FBL0RaOztBQW9FTTtFQUNFLFVBQUE7QUFsRVI7O0FBb0VRO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQWxFVjs7QUFvRVU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FBbEVaOztBQXFFVTtFQUNFLGlCQUFBO0FBbkVaOztBQXFFWTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbkVkOztBQXNFWTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtBQXBFZDs7QUFnRk07RUFFRSxrQkFBQTtBQS9FUjs7QUFpRlE7RUFDRSxnQkFBQTtBQS9FVjs7QUFrRlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWhGVjs7QUFrRlU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBaEZaOztBQW9GUTtFQUNFLHVCQUFBO0FBbEZWOztBQXFGWTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBbkZkOztBQXlGUTtFQUNFLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBdkZWOztBQTBGWTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBeEZkOztBQTJGWTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBekZkOztBQStGUTtFQUVFLG1EQUFBO0VBQ0EsbUJBQUE7QUE5RlY7O0FBZ0dVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQTlGWjs7QUFnR1k7RUFDRSxlQUFBO0FBOUZkOztBQXNHSTtFQUNFLGtCQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBcEdOOztBQXNHTTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFwR1I7O0FBeUdJO0VBQ0UsZ0JBQUE7QUF2R047O0FBeUdNO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQXZHUjs7QUF5R1E7RUFDRSxtREFBQTtFQUNBLHFCQUFBO0FBdkdWOztBQXlHVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBdkdaOztBQTJHUTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBekdWOztBQTJHVTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQXpHWjs7QUEyR1k7RUFDRSxvREFBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7QUF6R2Q7O0FBMkdjO0VBQ0UseUNBQUE7QUF6R2hCOztBQW9IQTtFQUNFO0lBQ0UsMkRBQUE7RUFqSEY7RUFtSEE7SUFDRSw0REFBQTtFQWpIRjtFQW1IQTtJQUNFLHlEQUFBO0VBakhGO0FBQ0Y7O0FBb0hBOzs7RUFHRSw0QkFBQTtBQWxIRjs7QUF1SEU7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtBQXJISjs7QUF3SEk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQXRITjs7QUF5SE07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBdkhSOztBQTBIUTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUF4SFY7O0FBNEhRO0VBQ0Usa0JBQUE7QUExSFY7O0FBNEhVO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBMUhaOztBQTRIWTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUExSGQ7O0FBNkhZO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQTNIZDs7QUFpSVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQS9IVjs7QUFxSUk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFuSU47O0FBcUlNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQW5JUjs7QUF3SUk7O0VBRUUsNkJBQUE7QUF0SU47O0FBeUlJOztFQUVFLGVBQUE7QUF2SU47O0FBNklBO0VBQ0UsdUJBQUE7QUExSUY7O0FBNElFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQTFJSjs7QUErSUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQTVJRjs7QUFnSkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUE3SUY7O0FBK0lFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTdJSjs7QUFnSkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTlJSjs7QUFnSkk7RUFDRSxpQkFBQTtBQTlJTjs7QUFvSkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBakpGOztBQW1KRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFqSko7O0FBc0pBO0VBQ0UsZUFBQTtFQUNBLGtEQUFBO0FBbkpGOztBQXFKRTtFQUNFLG9DQUFBO0FBbkpKOztBQXNKRTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUFwSko7O0FBc0pJO0VBQ0UsZ0JBQUE7QUFwSk47O0FBMEpBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBdkpGOztBQTJKQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUF4SkY7O0FBNEpBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQXpKRjs7QUE2SkE7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FBMUpGOztBQTRKRTtFQUNFLG1CQUFBO0FBMUpKOztBQTRKSTtFQUNFLFlBQUE7QUExSk47O0FBOEpFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUE1Sko7O0FBOEpJO0VBQ0UsbUJBQUE7QUE1Sk47O0FBK0pJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE3Sk47O0FBZ0tJO0VBQ0UsT0FBQTtBQTlKTjs7QUFnS007RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBOUpSOztBQWdLUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTlKVjs7QUFrS007RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFoS1I7O0FBa0tRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBaEtWOztBQWtLVTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQWhLWjs7QUFzS0k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXBLTjs7QUFzS007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFwS1I7O0FBdUtNO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQXJLUjs7QUF1S1E7RUFDRSw4Q0FBQTtBQXJLVjs7QUEyS0U7RUFDRSxjQUFBO0FBektKOztBQTJLSTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUF6S047O0FBMktNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBektSOztBQTRLTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTFLUjs7QUE2S007RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBM0tSOztBQStLSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG9EQUFBO0VBQ0Esa0JBQUE7QUE3S047O0FBK0tNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBN0tSOztBQWtMRTtFQUNFLGdCQUFBO0FBaExKOztBQWtMSTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFoTE47O0FBa0xNO0VBQ0UsaUJBQUE7QUFoTFI7O0FBbUxNO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFqTFI7O0FBb0xNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBbExSOztBQXlMQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBdExGOztBQXdMRTtFQUNFLG1FQUFBO0FBdExKOztBQTJMQTtFQUNFO0lBQ0UsWUFBQTtFQXhMRjtFQTBMQTtJQUNFLFVBQUE7RUF4TEY7RUEwTEE7SUFDRSxZQUFBO0VBeExGO0FBQ0Y7O0FBNkxJO0VBQ0UsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLHNEQUFBO0FBM0xOOztBQW1NRTtFQUNFLGNBQUE7QUFoTUo7O0FBa01JO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQWhNTjs7QUFrTU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFoTVI7O0FBeU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUF0TUY7O0FBeU1FO0VBQ0UsMEJBQUE7RUFDQSxTQUFBO0FBdk1KOztBQTBNRTtFQUNFLDBCQUFBO0VBQ0EsTUFBQTtBQXhNSjs7QUEyTUU7RUFDRSwwQkFBQTtFQUNBLFVBQUE7QUF6TUo7O0FBNE1FO0VBQ0UsMEJBQUE7RUFDQSxTQUFBO0FBMU1KOztBQWlOQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDhGQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQTlNRjs7QUFnTkU7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUE5TUo7O0FBZ05JO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7QUE5TU47O0FBaU5JO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUEvTU47O0FBbU5FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUFqTko7O0FBcU5FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQW5OSjs7QUFxTkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQW5OTjs7QUF3TkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkZBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQXROSjs7QUF3Tkk7RUFDRSxzQkFBQTtFQUNBLG9DQUFBO0FBdE5OOztBQXlOSTtFQUNFLGVBQUE7QUF2Tk47O0FBME5JO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQXhOTjs7QUEyTkk7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBek5OOztBQStOQTtFQUNFLDJCQUFBO0VBQ0EsK0JBQUE7QUE1TkY7O0FBZ09BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQTdORjs7QUErTkU7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0FBN05KOztBQStOSTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQTdOTjs7QUFrT0E7RUFDRTtJQUFXLFVBQUE7RUE5Tlg7RUErTkE7SUFBTSxZQUFBO0VBNU5OO0FBQ0Y7O0FBK05BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLCtGQUFBO0VBQ0EsZ0RBQUE7QUE3TkY7O0FBK05FO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUE3Tko7O0FBZ09FO0VBQ0UsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBOU5KOztBQW1PQTtFQUNFLGlCQUFBO0FBaE9GOztBQWtPRTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBaE9KOztBQW1PRTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBak9KOztBQW9PRTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFsT0o7O0FBdU9BO0VBQ0UsaUJBQUE7QUFwT0Y7O0FBc09FO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtBQXBPSjs7QUFzT0k7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFwT047O0FBME9BO0VBQ0UsY0FBQTtFQUNBLDRDQUFBO0FBdk9GOztBQXlPRTtFQUNFLGVBQUE7QUF2T0o7O0FBeU9JO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBdk9OOztBQTJPRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXpPSjs7QUEyT0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXpPTjs7QUEyT007RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUF6T1I7O0FBNk9JO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUEzT047O0FBOE9JO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUE1T047O0FBK09JO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQTdPTiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhcGFjaXRvci1nb29nbGUtbWFwcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZS10b3Age1xyXG5cdGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG59XHJcblxyXG4uY2VudGVyUGlue1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xyXG59XHJcblxyXG4uYm90dG9tSXRlbXN7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuXHJcbmlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgOTgsIDI1NSwgMC42MjUpO1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICBcclxuICBpb24tZmFie1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgaW9uLXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC5ib3R0b21JdGVtcyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDB2aDtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gIFxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1mb290ZXJ7XHJcbiAgaW9uLXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXZoO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIuNXZoO1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbUl0ZW1zIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7IC8qIEVuc3VyZSBiYWNrZ3JvdW5kIGlzIHNldCBzaW5jZSBpb24tbGlzdCBoYWQgYSBkZWZhdWx0ICovXHJcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDZ2aDtcclxuICAgICAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gIGlvbi1mYWJ7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICB9XHJcbiAgIC5ib3R0b21JdGVtc3tcclxuICAgICAucGF5bWVudHtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgLy8gIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDFweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICBcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG4uY2VudGVyRWxlbVxyXG57XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByaWNlXHJcbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgZmxleDogMC41O1xyXG4gfVxyXG4gXHJcbiAuc2hhZG93LXRvcFxyXG4gIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XHJcbiAgfVxyXG5cclxuICAudG9wX2JhcntcclxuICAgIGJveC1zaGFkb3c6IDBweCAxLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcclxuICB9XHJcblxyXG4gIC5jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcclxuICB9XHJcblxyXG4ubWFpbi1idXR0b257XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsgXHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5wcmV2aWV3IHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mYWxsYmFjayB7XHJcbiAgd2lkdGg6IDEyOHB4O1xyXG4gIGhlaWdodDogMTI4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubWFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMjRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwJVxyXG59XHJcblxyXG4vLyBNb2Rlcm4gQ2FyZCBTdHlsaW5nIGZvciBTZWxlY3Rpb24gQmFyXHJcbi5ib3R0b21JdGVtcyB7XHJcbiAgJi5zaGFkb3ctdG9wIHtcclxuICAgIC8vIFJlbW92ZSBmaXhlZCBtYXgtaGVpZ2h0XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDsgLy8gTWluaW11bSBoZWlnaHQgdG8gZW5zdXJlIHZpc2liaWxpdHlcclxuICAgIGhlaWdodDogYXV0bzsgLy8gTGV0IGl0IGdyb3cgYmFzZWQgb24gY29udGVudFxyXG4gICAgbWF4LWhlaWdodDogODB2aDsgLy8gTWF4aW11bSBoZWlnaHQgYXMgcGVyY2VudGFnZSBvZiB2aWV3cG9ydCBoZWlnaHRcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8vIEtlZXAgc2Nyb2xsaW5nIGlmIGNvbnRlbnQgaXMgdG9vIGxvbmdcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7IC8vIFNtb290aCBoZWlnaHQgdHJhbnNpdGlvbnNcclxuICAgIFxyXG4gICAgLy8gRW5zdXJlIHByb3BlciBwYWRkaW5nIGFuZCBzcGFjaW5nXHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20sIDBweCk7IC8vIEFjY291bnQgZm9yIG5vdGNoZXMvaG9tZSBpbmRpY2F0b3JzXHJcbiAgICBcclxuICAgIC8vIFdoZW4gaW4gZGlmZmVyZW50IHN0YWdlcywgYWRqdXN0IGhlaWdodCBhY2NvcmRpbmdseVxyXG4gICAgJltuZ0lmPVwidHJhY2tpbmdTdGFnZVwiXSxcclxuICAgICZbbmdJZj1cImRyaXZpbmdUb0Rlc3RpbmF0aW9uU3RhZ2VcIl0ge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4OyAvLyBTbGlnaHRseSB0YWxsZXIgZm9yIHRoZXNlIHN0YWdlc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmW25nSWY9XCJzZWFyY2hpbmdTdGFnZVwiXSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZbbmdJZj1cImNvbmZpcm1TdGFnZVwiXSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMCAwO1xyXG4gICAgXHJcbiAgICAucGF5bWVudCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgICBcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnByaWNlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcCBkZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgXHJcbiAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMTZweDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICBcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNb2Rlcm4gUHJvZ3Jlc3MgQmFyXHJcbmlvbi1wcm9ncmVzcy1iYXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIFxyXG4gICZbdHlwZT1cImluZGV0ZXJtaW5hdGVcIl0ge1xyXG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTa2VsZXRvbiBMb2FkaW5nIEFuaW1hdGlvblxyXG5pb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XHJcbn1cclxuXHJcbi8vIFNoYXJlZCBzdHlsZXMgZm9yIGFsbCB0cmFja2luZyBiYXJzXHJcbi5ib3R0b21JdGVtcyB7XHJcbiAgJi5zaGFkb3ctdG9wIHtcclxuICAgIC8vIC4uLiBleGlzdGluZyBzdHlsZXMgLi4uXHJcbiAgICBcclxuICAgIC8vIENvbm5lY3RpbmcgdG8gZHJpdmVyIGJhciAoc2VhcmNoaW5nU3RhZ2UpXHJcbiAgICAmOmhhcyhpb24tcHJvZ3Jlc3MtYmFyW3R5cGU9XCJpbmRldGVybWluYXRlXCJdKSB7XHJcbiAgICAgIC5pb24tbWFyZ2luLWhvcml6b250YWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRHJpdmVyIHRyYWNraW5nIHN0eWxlcyAodHJhY2tpbmdTdGFnZSAmIGRyaXZpbmdUb0Rlc3RpbmF0aW9uU3RhZ2UpXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIC8vIC4uLiBleGlzdGluZyBzdHlsZXMgLi4uXHJcbiAgICAgIFxyXG4gICAgICAvLyBFbmhhbmNlZCBkcml2ZXIgaW5mbyBsYXlvdXRcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC8vIC4uLiBleGlzdGluZyBzdHlsZXMgLi4uXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAtMnB4O1xyXG4gICAgICAgICAgICByaWdodDogLTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLnByaWNlIHtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBEcml2ZXIgY2FyIGluZm9cclxuICAgICAgICAmOmhhcyhpb24tbGFiZWwgcDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQYXltZW50IG1ldGhvZCBpdGVtXHJcbiAgICAgICAgJjpoYXMoaW9uLWljb25bbmFtZT1cImNhc2hcIl0pLCBcclxuICAgICAgICAmOmhhcyhpb24taWNvbltuYW1lPVwiY2FyZFwiXSkge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaW9uLWxhYmVsIGgxIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFycml2YWwgdGltZSBoZWFkZXJcclxuICAgIGlvbi1saXN0LWhlYWRlci5pb24tbWFyZ2luLWJvdHRvbSB7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWNjb3JkaW9uIGdyb3VwIHN0eWxpbmdcclxuICAgIGlvbi1hY2NvcmRpb24tZ3JvdXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICBcclxuICAgICAgaW9uLWFjY29yZGlvbiB7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuNSk7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1sYWJlbCBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGl2W3Nsb3Q9XCJjb250ZW50XCJdIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC4xKTtcclxuICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBbmltYXRpb24gZm9yIGRyaXZlciBhdmF0YXJcclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuNCk7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmJvdHRvbUl0ZW1zIGlvbi1saXN0W25nSWY9XCJzZWFyY2hpbmdTdGFnZVwiXSBpb24tYXZhdGFyLFxyXG4uYm90dG9tSXRlbXMgaW9uLWxpc3RbbmdJZj1cInRyYWNraW5nU3RhZ2VcIl0gaW9uLWF2YXRhcixcclxuLmJvdHRvbUl0ZW1zIGlvbi1saXN0W25nSWY9XCJkcml2aW5nVG9EZXN0aW5hdGlvblN0YWdlXCJdIGlvbi1hdmF0YXIge1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi8vIENvbnNpc3RlbnQgaGVpZ2h0IGZvciBhbGwgYm90dG9tIGJhcnNcclxuLmJvdHRvbUl0ZW1zIHtcclxuICAmLnNoYWRvdy10b3Age1xyXG4gICAgLy8gQ29tbW9uIHNldHRpbmdzIGZvciBhbGwgYm90dG9tIGJhcnNcclxuICAgIG1heC1oZWlnaHQ6IDU1dmg7IC8vIEluY3JlYXNlZCB0byBhbGxvdyBtb3JlIGNvbnRlbnQgdmlzaWJpbGl0eVxyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgLy8gU21vb3RoIHNjcm9sbGluZyBvbiBpT1NcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4OyAvLyBFbnN1cmUgY29udGVudCBhdCBib3R0b20gaXMgdmlzaWJsZVxyXG4gICAgXHJcbiAgICAvLyBDb25zaXN0ZW50IGNhcmQgc3R5bGluZyBhY3Jvc3MgYWxsIGJvdHRvbSBiYXJzXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvLyBBbGxvdyBhY2NvcmRpb24gdG8gZXhwYW5kIHByb3Blcmx5XHJcbiAgICAgIFxyXG4gICAgICAvLyBNb3JlIGNvbXBhY3QgaXRlbSBzcGFjaW5nIGZvciB0cmFja2luZy9kZXN0aW5hdGlvbiBzdGFnZXNcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogNDhweDsgLy8gUmVkdWNlIGRlZmF1bHQgaXRlbSBoZWlnaHRcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyAvLyBSZW1vdmUgbWFyZ2luIGJldHdlZW4gaXRlbXNcclxuICAgICAgICBcclxuICAgICAgICAvLyBSZWR1Y2UgcGFkZGluZyBpbnNpZGUgaXRlbXNcclxuICAgICAgICAmLnByaWNlIGlvbi1sYWJlbCBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7IC8vIFNsaWdodGx5IHNtYWxsZXIgcHJpY2UgZm9udFxyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1ha2UgbmVzdGVkIGl0ZW1zIG1vcmUgY29tcGFjdFxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIC0tbWluLWhlaWdodDogNDJweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1ha2UgYXZhdGFycyBzbWFsbGVyIGFuZCBjb25zaXN0ZW50XHJcbiAgICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTW9yZSBjb21wYWN0IGhlYWRlclxyXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiB1bnNldDtcclxuICAgICAgXHJcbiAgICAgIGlvbi1sYWJlbCBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU3BlY2lmaWNhbGx5IGZvciB0cmFja2luZyBzdGFnZXMsIG1ha2UgdGhlbSBtb3JlIGNvbXBhY3RcclxuICAgIGlvbi1saXN0LmJvdHRvbUl0ZW1zLnNoYWRvdy10b3BbbmdJZj1cInRyYWNraW5nU3RhZ2VcIl0gLmlvbi1tYXJnaW4tYm90dG9tLFxyXG4gICAgaW9uLWxpc3QuYm90dG9tSXRlbXMuc2hhZG93LXRvcFtuZ0lmPVwiZHJpdmluZ1RvRGVzdGluYXRpb25TdGFnZVwiXSAuaW9uLW1hcmdpbi1ib3R0b20ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGlzdC5ib3R0b21JdGVtcy5zaGFkb3ctdG9wW25nSWY9XCJ0cmFja2luZ1N0YWdlXCJdIGlvbi1hY2NvcmRpb24tZ3JvdXAsXHJcbiAgICBpb24tbGlzdC5ib3R0b21JdGVtcy5zaGFkb3ctdG9wW25nSWY9XCJkcml2aW5nVG9EZXN0aW5hdGlvblN0YWdlXCJdIGlvbi1hY2NvcmRpb24tZ3JvdXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNYWtlIGFjY29yZGlvbiBtb3JlIGNvbXBhY3QgZm9yIGFjdGlvbiBidXR0b25zXHJcbmlvbi1hY2NvcmRpb24gZGl2W3Nsb3Q9XCJjb250ZW50XCJdIHtcclxuICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcclxuICBcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDhweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi8vIEJldHRlciBsYXlvdXQgZm9yIGRyaXZlciBjYXJkXHJcbi5kcml2ZXItY2FyZC1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLy8gQ29udGFpbmVyIGZvciBkcml2ZXIgYXZhdGFyIGFuZCByYXRpbmdcclxuLmRyaXZlci1hdmF0YXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgXHJcbiAgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmRyaXZlci1yYXRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFByaWNlIGNvbnRhaW5lciBzdHlsaW5nXHJcbi5wcmljZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCZXR0ZXIgYWNjb3JkaW9uIHN0eWxpbmdcclxuLmRyaXZlci1hY3Rpb25zLWFjY29yZGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gIFxyXG4gIC5hY2NvcmRpb24taGVhZGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY29yZGlvbi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4IDI0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDsgLy8gRXh0cmEgcGFkZGluZyB0byBlbnN1cmUgbGFzdCBidXR0b24gaXMgdmlzaWJsZVxyXG4gICAgXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEdlbmVyYWwgY2FyZCBzdHlsZXNcclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvLyBDaGFuZ2VkIHRvIGFsbG93IGFjY29yZGlvbiB0byBleHBhbmQgcHJvcGVybHlcclxuICBtYXJnaW46IDAgMTZweCAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4OyAvLyBFbnN1cmUgY29udGVudCBhdCBib3R0b20gaXMgdmlzaWJsZVxyXG59XHJcblxyXG4vLyBGaXggbmVzdGVkIGl0ZW1zIGlzc3VlXHJcbmlvbi1pdGVtIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxufVxyXG5cclxuLy8gTWFrZSBzdXJlIGJvdHRvbSBpdGVtcyBhcmUgdGFsbCBlbm91Z2ggdG8gYmUgc2Nyb2xsYWJsZS92aXNpYmxlXHJcbi5ib3R0b21JdGVtcyB7XHJcbiAgbWF4LWhlaWdodDogNjB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vLyBNb2Rlcm4gcmlkZSBjb25maXJtYXRpb24gY2FyZCBzdHlsZXNcclxuLnJpZGUtY29uZmlybWF0aW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3gtc2hhZG93OiAwIC00cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgXHJcbiAgLnJpZGUtZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgXHJcbiAgICAmLnNrZWxldG9uIHtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudmVoaWNsZS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIFxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWVmMGYyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZlaGljbGUtZGV0YWlscyB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIFxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW46IDAgMCA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnZlaGljbGUtc3RhdHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByaWNlLXRhZyB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW46IDAgMCAycHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLm9yaWdpbmFsLXByaWNlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICBcclxuICAgICAgICBkZWwge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnBheW1lbnQtc2VsZWN0b3Ige1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAgICAgLS1taW4taGVpZ2h0OiA1NHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTMwcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wYXltZW50LWhpbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjA1KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm9vay1idXR0b24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBcclxuICAgIC5ib29rLXJpZGUtYnRuIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIFxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFVwZGF0ZXMgdG8gbWFrZSBzdXJlIHRoZSBjYXJkIHN0aWNrcyBwcm9wZXJseSBhdCB0aGUgYm90dG9tXHJcbmlvbi1mb290ZXIgLmJvdHRvbUl0ZW1zLnNoYWRvdy10b3BbbmdJZj1cImNvbmZpcm1TdGFnZVwiXSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBtYXgtaGVpZ2h0OiB1bnNldDtcclxuICBcclxuICAucmlkZS1jb25maXJtYXRpb24tY2FyZCB7XHJcbiAgICBhbmltYXRpb246IHNsaWRlLXRvcCAwLjRzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEltcHJvdmUgYW5pbWF0aW9uIGZvciBza2VsZXRvbiBsb2FkaW5nIGFwcGVhcmFuY2VcclxuQGtleWZyYW1lcyBwdWxzZS1iZyB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG59XHJcblxyXG4ucmlkZS1kZXRhaWxzLnNrZWxldG9uIHtcclxuICAudmVoaWNsZS1pbmZvIHtcclxuICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgYW5pbWF0aW9uOiBwdWxzZS1iZyAxLjVzIGluZmluaXRlO1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gSW1wcm92ZSBzZWxlY3QgcG9wb3ZlciBhcHBlYXJhbmNlXHJcbi8vIE5vdGU6IFRoaXMgcmVxdWlyZXMgOnJvb3Qgc3R5bGluZyBmb3IgZ2xvYmFsIGltcGFjdCBvbiBpb24tc2VsZWN0c1xyXG46cm9vdCB7XHJcbiAgaW9uLXNlbGVjdC1wb3BvdmVyIHtcclxuICAgIC0td2lkdGg6IDI0MHB4O1xyXG4gICAgXHJcbiAgICAuc2VsZWN0LWludGVyZmFjZS1vcHRpb24ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAgIFxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRGFyayBtb2RlIGRpc2FibGVkIC0gYXBwIHVzZXMgbGlnaHQgbW9kZSBvbmx5XHJcblxyXG4vLyBGaXggbWFwIHNpemluZyBhbmQgcG9zaXRpb25pbmdcclxuLm1hcC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLWJvdHRvbS1iYXItaGVpZ2h0LCAwcHgpKTtcclxuICB0b3A6IHZhcigtLWhlYWRlci1oZWlnaHQsIDBweCk7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xyXG4gIFxyXG4gIC8vIEFkanVzdCBtYXAgaGVpZ2h0IGJhc2VkIG9uIGFjdGl2ZSBVSSBzdGFnZXNcclxuICAmLndpdGgtdHJhY2tpbmcge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMTBweCk7XHJcbiAgICB0b3A6IDU2cHg7IC8vIEFkanVzdCBmb3IgaGVhZGVyIGhlaWdodFxyXG4gIH1cclxuICBcclxuICAmLndpdGgtYm9va2luZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgJi53aXRoLWNvbmZpcm0ge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNjBweCk7XHJcbiAgICB0b3A6IDEyMHB4OyAvLyBBZGp1c3QgZm9yIGhlYWRlciBoZWlnaHRcclxuICB9XHJcbiAgXHJcbiAgJi53aXRoLXNlYXJjaGluZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE4MHB4KTtcclxuICAgIHRvcDogNTZweDsgLy8gQWRqdXN0IGZvciBoZWFkZXIgaGVpZ2h0XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBTSEFSRUQgUklERSBTVFlMRVMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIFNoYXJlICYgU2F2ZSBUb2dnbGUgb24gQm9va2luZyBTY3JlZW5cclxuLnNoYXJlZC1yaWRlLXRvZ2dsZSB7XHJcbiAgbWFyZ2luOiAxMnB4IDE2cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNDUsIDIxMSwgMTExLCAwLjEpIDAlLCByZ2JhKDQ1LCAyMTEsIDExMSwgMC4wNSkgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ1LCAyMTEsIDExMSwgMC4zKTtcclxuXHJcbiAgLnNoYXJlLXNhdmUtaXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICBcclxuICAgIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgbWFyZ2luOiA0cHggMCAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNhdmluZ3MtcHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCAyMTEsIDExMSwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIENhbGN1bGF0aW5nIHJvdXRlIGluZGljYXRvclxyXG4gIC5jYWxjdWxhdGluZy1yb3V0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBcclxuICAgIGlvbi1zcGlubmVyIHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gTmVhcmJ5IHJpZGVycyBiYW5uZXJcclxuICAubmVhcmJ5LXJpZGVycy1iYW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNDUsIDIxMSwgMTExLCAwLjIpIDAlLCByZ2JhKDQ1LCAyMTEsIDExMSwgMC4xKSAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBcclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg0NSwgMjExLCAxMTEsIDAuMjUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gU2hhcmVkIHByaWNlIGRpc3BsYXkgb24gYm9va2luZ1xyXG4uc2hhcmVkLXByaWNlIHtcclxuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxufVxyXG5cclxuLy8gU2hhcmVkIHJpZGUgbWF0Y2hpbmcgbWVzc2FnZSBvbiBzZWFyY2hpbmcgc3RhZ2VcclxuLnNoYXJlZC1yaWRlLW1hdGNoaW5nIHtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgLm1hdGNoaW5nLW1lc3NhZ2Uge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDQ1LCAyMTEsIDExMSwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIFxyXG4gICAgLm1hdGNoaW5nLXRleHQge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgNTAlIHsgb3BhY2l0eTogMC42OyB9XHJcbn1cclxuXHJcbi8vIFNoYXJlZCBSaWRlIEJhZGdlIG9uIFRyYWNraW5nIFNjcmVlblxyXG4uc2hhcmVkLXJpZGUtYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNDUsIDIxMSwgMTExLCAwLjE1KSAwJSwgcmdiYSg0NSwgMjExLCAxMTEsIDAuMDUpIDEwMCUpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQ1LCAyMTEsIDExMSwgMC4yKTtcclxuXHJcbiAgaW9uLWNoaXAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAuY28tcGFzc2VuZ2VyLWNvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNoYXJlZCBwcmljZSBkaXNwbGF5IG9uIHRyYWNraW5nXHJcbi5zaGFyZWQtcHJpY2UtZGlzcGxheSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgXHJcbiAgLm9yaWdpbmFsLXByaWNlLXNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNjb3VudGVkLXByaWNlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAycHggMDtcclxuICB9XHJcbiAgXHJcbiAgLnNhdmluZ3MtYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg0NSwgMjExLCAxMTEsIDAuMTUpO1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQaWNrdXAgUXVldWUgTWVzc2FnZVxyXG4ucGlja3VwLXF1ZXVlIHtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBcclxuICAucXVldWUtbWVzc2FnZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDby1QYXNzZW5nZXJzIExpc3RcclxuLmNvLXBhc3NlbmdlcnMge1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIFxyXG4gIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNvLXBhc3Nlbmdlci1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgICBcclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICB3aWR0aDogMzZweDtcclxuICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICBcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDAuOTVlbTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBtYXJnaW46IDJweCAwIDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"]
});

/***/ }),

/***/ 40123:
/*!*******************************************!*\
  !*** ./src/app/interfaces/route-graph.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * Route Graph Interfaces for Dijkstra-based shared ride matching
 */



/***/ }),

/***/ 6354:
/*!**********************************************!*\
  !*** ./src/app/services/dijkstra.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DijkstraService": () => (/* binding */ DijkstraService)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _interfaces_route_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/route-graph */ 40123);
/* harmony import */ var _mapbox_polyline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mapbox/polyline */ 28824);
/* harmony import */ var _mapbox_polyline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mapbox_polyline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





/**
 * MinHeap implementation for Dijkstra's priority queue
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return undefined;
    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0 && last) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].distance <= this.heap[index].distance) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const length = this.heap.length;

    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let smallest = index;

      if (leftChild < length && this.heap[leftChild].distance < this.heap[smallest].distance) {
        smallest = leftChild;
      }

      if (rightChild < length && this.heap[rightChild].distance < this.heap[smallest].distance) {
        smallest = rightChild;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

}

class DijkstraService {
  constructor(http) {
    this.http = http; // Cache for computed paths (key: "lat1,lng1-lat2,lng2")

    this.pathCache = new Map();
    this.CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache TTL

    this.cacheTimestamps = new Map(); // Earth radius in meters for Haversine calculation

    this.EARTH_RADIUS_M = 6371000;
    this.API_URL = 'https://asia-southeast1-dijkstra-routing-demo-se-f3d91.cloudfunctions.net/computeRoute';
  }
  /**
   * Calculate shortest path using the Dijkstra Routing API
   */


  findShortestPath(origin, destination, weightConfig) {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cacheKey = _this.getCacheKey(origin, destination); // Check cache first


      const cached = _this.getFromCache(cacheKey);

      if (cached) {
        console.log('Returning cached path for:', cacheKey);
        return cached;
      }

      try {
        // Call the Dijkstra Routing API
        const route = yield _this.getDijkstraRoute(origin, destination, weightConfig);

        if (!route) {
          throw new Error('No route found');
        }

        const pathResult = {
          nodes: route.nodes,
          coordinates: route.coordinates,
          totalWeight: route.duration,
          totalDistance: route.distance,
          encodedPolyline: route.encodedPolyline
        }; // Cache the result

        _this.setCache(cacheKey, pathResult);

        return pathResult;
      } catch (error) {
        console.error('Error finding shortest path:', error); // Fallback: return direct path with Haversine distance

        return _this.createDirectPath(origin, destination);
      }
    })();
  }
  /**
   * Get route from Dijkstra Routing API
   */


  getDijkstraRoute(origin, destination, weightConfig) {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const request = {
        start: origin,
        end: destination,
        weightConfig: weightConfig || {
          distance: 1,
          time: 0.5
        } // Default weights

      };

      try {
        const response = yield _this2.http.post(_this2.API_URL, request).toPromise();

        if (!response || !response.polyline) {
          return null;
        } // Decode the polyline to get coordinates


        const decodedCoords = _mapbox_polyline__WEBPACK_IMPORTED_MODULE_2__.decode(response.polyline);
        const coordinates = decodedCoords.map(([lat, lng]) => ({
          lat,
          lng
        })); // Create node IDs for each coordinate

        const nodes = coordinates.map((_, index) => `node_${index}`);
        return {
          nodes,
          coordinates,
          duration: response.duration,
          distance: response.distance,
          encodedPolyline: response.polyline
        };
      } catch (error) {
        console.error('API call failed:', error);
        return null;
      }
    })();
  }
  /**
   * Create a direct path when no route is available (fallback)
   */


  createDirectPath(origin, destination) {
    const distance = this.calculateHaversineDistance(origin, destination); // Estimate duration: average speed ~40 km/h in city

    const duration = distance / 1000 / 40 * 3600; // seconds

    return {
      nodes: ['origin', 'destination'],
      coordinates: [origin, destination],
      totalWeight: Math.round(duration),
      totalDistance: Math.round(distance)
    };
  }
  /**
   * Run Dijkstra's algorithm on a graph
   * This is used when we have a pre-built road network graph
   */


  runDijkstra(graph, startId, endId) {
    const distances = new Map();
    const previous = new Map();
    const visited = new Set();
    const heap = new MinHeap(); // Initialize distances

    graph.forEach((_, nodeId) => {
      distances.set(nodeId, Infinity);
      previous.set(nodeId, null);
    });
    distances.set(startId, 0);
    heap.push({
      nodeId: startId,
      distance: 0
    });

    while (!heap.isEmpty()) {
      const current = heap.pop();
      if (visited.has(current.nodeId)) continue;
      visited.add(current.nodeId); // Found destination

      if (current.nodeId === endId) break;
      const currentNode = graph.get(current.nodeId);
      if (!currentNode) continue; // Process neighbors

      for (const edge of currentNode.neighbors) {
        if (visited.has(edge.targetId)) continue;
        const newDistance = distances.get(current.nodeId) + edge.weight;

        if (newDistance < distances.get(edge.targetId)) {
          distances.set(edge.targetId, newDistance);
          previous.set(edge.targetId, current.nodeId);
          heap.push({
            nodeId: edge.targetId,
            distance: newDistance
          });
        }
      }
    } // Reconstruct path


    if (distances.get(endId) === Infinity) {
      return null; // No path found
    }

    const path = [];
    const coordinates = [];
    let totalDistance = 0;
    let currentId = endId;

    while (currentId) {
      path.unshift(currentId);
      const node = graph.get(currentId);

      if (node) {
        coordinates.unshift({
          lat: node.lat,
          lng: node.lng
        });
      }

      const prevId = previous.get(currentId);

      if (prevId) {
        const prevNode = graph.get(prevId);

        if (prevNode) {
          const edge = prevNode.neighbors.find(e => e.targetId === currentId);

          if (edge) {
            totalDistance += edge.distance;
          }
        }
      }

      currentId = prevId ?? null;
    }

    return {
      nodes: path,
      coordinates,
      totalWeight: distances.get(endId),
      totalDistance
    };
  }
  /**
   * Calculate route overlap between two paths using Jaccard similarity
   * Returns a value between 0 and 1 (1 = identical routes)
   */


  calculateRouteOverlap(path1, path2) {
    if (!path1.coordinates.length || !path2.coordinates.length) {
      return 0;
    } // Use a grid-based approach to find overlapping segments


    const GRID_SIZE = 100; // 100 meters grid cell

    const getGridKey = coord => {
      const latGrid = Math.floor(coord.lat * 111000 / GRID_SIZE);
      const lngGrid = Math.floor(coord.lng * 111000 * Math.cos(coord.lat * Math.PI / 180) / GRID_SIZE);
      return `${latGrid},${lngGrid}`;
    }; // Create sets of grid cells for each path


    const set1 = new Set();
    const set2 = new Set();
    path1.coordinates.forEach(coord => set1.add(getGridKey(coord)));
    path2.coordinates.forEach(coord => set2.add(getGridKey(coord))); // Calculate Jaccard similarity

    let intersection = 0;
    set1.forEach(key => {
      if (set2.has(key)) intersection++;
    });
    const union = set1.size + set2.size - intersection;
    return union > 0 ? intersection / union : 0;
  }
  /**
   * Calculate overlap with direction awareness
   * Ensures routes are going in similar direction, not just crossing
   */


  calculateDirectionalOverlap(path1, path2) {
    const basicOverlap = this.calculateRouteOverlap(path1, path2);
    if (basicOverlap < 0.1) return 0; // Check if origins and destinations are in similar positions

    const originDistance = this.calculateHaversineDistance(path1.coordinates[0], path2.coordinates[0]);
    const destDistance = this.calculateHaversineDistance(path1.coordinates[path1.coordinates.length - 1], path2.coordinates[path2.coordinates.length - 1]); // Penalize if routes are in opposite directions

    const maxRouteLength = Math.max(path1.totalDistance, path2.totalDistance);
    const directionScore = 1 - Math.min((originDistance + destDistance) / (2 * maxRouteLength), 1);
    return basicOverlap * (0.5 + 0.5 * directionScore);
  }
  /**
   * Find and score similar routes from candidate rides
   */


  findSimilarRoutes(_x, _x2) {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (riderPath, candidates, maxDetourPercent = 0.25) {
      const matches = [];

      for (const candidate of candidates) {
        try {
          // Get or compute candidate's path
          let candidatePath = candidate.path;

          if (!candidatePath) {
            candidatePath = yield _this3.findShortestPath(candidate.origin, candidate.destination);
            candidate.path = candidatePath;
          } // Calculate overlap


          const overlapScore = _this3.calculateDirectionalOverlap(riderPath, candidatePath); // Skip if overlap is too low


          if (overlapScore < 0.3) continue; // Calculate detour cost (simplified: compare total distances)

          const combinedPathDistance = yield _this3.estimateCombinedPathDistance(riderPath.coordinates[0], riderPath.coordinates[riderPath.coordinates.length - 1], candidate.origin, candidate.destination);
          const originalDistance = riderPath.totalDistance + candidatePath.totalDistance;
          const detourCost = combinedPathDistance - Math.max(riderPath.totalDistance, candidatePath.totalDistance);
          const detourPercent = detourCost / riderPath.totalDistance; // Skip if detour is too high

          if (detourPercent > maxDetourPercent) continue; // Calculate potential savings (10-40% based on overlap)

          const potentialSavings = Math.min(10 + Math.floor(overlapScore * 30), 40);
          matches.push({
            candidate,
            overlapScore,
            detourCost,
            detourPercent,
            potentialSavings
          });
        } catch (error) {
          console.error('Error processing candidate:', candidate.requestId, error);
        }
      } // Sort by overlap score (highest first)


      return matches.sort((a, b) => b.overlapScore - a.overlapScore);
    }).apply(this, arguments);
  }
  /**
   * Estimate combined path distance for two riders sharing a ride
   */


  estimateCombinedPathDistance(origin1, dest1, origin2, dest2) {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Simplified estimation: use Haversine distances
      // A more accurate method would use Google Directions with waypoints
      // Try different pickup/dropoff orders and find the shortest
      const orders = [[origin1, origin2, dest1, dest2], [origin1, origin2, dest2, dest1], [origin2, origin1, dest1, dest2], [origin2, origin1, dest2, dest1]];
      let minDistance = Infinity;

      for (const order of orders) {
        let totalDistance = 0;

        for (let i = 0; i < order.length - 1; i++) {
          totalDistance += _this4.calculateHaversineDistance(order[i], order[i + 1]);
        }

        minDistance = Math.min(minDistance, totalDistance);
      }

      return minDistance;
    })();
  }
  /**
   * Calculate Haversine distance between two points in meters
   */


  calculateHaversineDistance(point1, point2) {
    const lat1 = point1.lat * Math.PI / 180;
    const lat2 = point2.lat * Math.PI / 180;
    const deltaLat = (point2.lat - point1.lat) * Math.PI / 180;
    const deltaLng = (point2.lng - point1.lng) * Math.PI / 180;
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return this.EARTH_RADIUS_M * c;
  }
  /**
   * Generate cache key from origin and destination
   */


  getCacheKey(origin, dest) {
    // Round to 5 decimal places (~1 meter precision)
    const round = n => Math.round(n * 100000) / 100000;

    return `${round(origin.lat)},${round(origin.lng)}-${round(dest.lat)},${round(dest.lng)}`;
  }
  /**
   * Get path from cache if valid
   */


  getFromCache(key) {
    const timestamp = this.cacheTimestamps.get(key);

    if (!timestamp || Date.now() - timestamp > this.CACHE_TTL_MS) {
      this.pathCache.delete(key);
      this.cacheTimestamps.delete(key);
      return null;
    }

    return this.pathCache.get(key) || null;
  }
  /**
   * Set path in cache
   */


  setCache(key, path) {
    this.pathCache.set(key, path);
    this.cacheTimestamps.set(key, Date.now()); // Clean old cache entries periodically

    if (this.pathCache.size > 100) {
      this.cleanCache();
    }
  }
  /**
   * Clean expired cache entries
   */


  cleanCache() {
    const now = Date.now();
    this.cacheTimestamps.forEach((timestamp, key) => {
      if (now - timestamp > this.CACHE_TTL_MS) {
        this.pathCache.delete(key);
        this.cacheTimestamps.delete(key);
      }
    });
  }
  /**
   * Clear all cached paths
   */


  clearCache() {
    this.pathCache.clear();
    this.cacheTimestamps.clear();
  }

}

DijkstraService.ɵfac = function DijkstraService_Factory(t) {
  return new (t || DijkstraService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

DijkstraService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DijkstraService,
  factory: DijkstraService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 68793:
/*!*********************************************!*\
  !*** ./src/app/services/geocode.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeocodeService": () => (/* binding */ GeocodeService)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 47614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.service */ 75596);









class GeocodeService {
  constructor(client, overlay, http) {
    this.client = client;
    this.overlay = overlay;
    this.http = http;
    this.service = new google.maps.DistanceMatrixService();
    this.directions = new google.maps.DirectionsService();
    this.apiUrl = 'https://maps.googleapis.com/maps/api';
  }

  getAddress(lat, lng) {
    const url = `${this.apiUrl}/geocode/json`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('latlng', `${lat},${lng}`).set('key', src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKey);
    return this.http.get(url, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Error in reverse geocoding:', error);
      this.overlay.showAlert('GeoError', error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }));
  } // Convert the address to lat and lng


  getLatLng(address) {
    const url = `${this.apiUrl}/geocode/json`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('address', address).set('key', src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKey);
    return this.http.get(url, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Error in geocoding:', error);
      this.overlay.showAlert('GeoError', error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }));
  } // Get the distance between the origin and destination


  getDirections(from, to) {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {// You can implement the directions request here using google.maps.DirectionsService
      } catch (e) {
        _this.overlay.showAlert('GeoError', e);

        console.log(e);
      }
    })();
  }

  getDistanceMatrix(origin, destination) {
    const distanceMatrixService = new google.maps.DistanceMatrixService();
    return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(observer => {
      distanceMatrixService.getDistanceMatrix({
        origins: [new google.maps.LatLng(origin.lat, origin.lng)],
        destinations: [new google.maps.LatLng(destination.lat, destination.lng)],
        travelMode: google.maps.TravelMode.DRIVING
      }, (response, status) => {
        if (status === 'OK') {
          observer.next(response);
        } else {
          observer.error(status);
        }

        observer.complete();
      });
    });
  }

}

GeocodeService.ɵfac = function GeocodeService_Factory(t) {
  return new (t || GeocodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__.Client), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

GeocodeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: GeocodeService,
  factory: GeocodeService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 89947:
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapService": () => (/* binding */ MapService)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/google-maps */ 94822);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.service */ 75596);
/* harmony import */ var _geocode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geocode.service */ 68793);








class MapService {
  constructor(overlay, geocode, http) {
    this.overlay = overlay;
    this.geocode = geocode;
    this.http = http;
    this._map = null;
    this.locationAddress = 'Loading..';
  }

  get newMap() {
    if (!this._map) {
      throw new Error('Map not initialized');
    }

    return this._map;
  }

  set newMap(map) {
    this._map = map;
  }

  createMap(ref, coords) {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Validate coords before using
        const lat = coords?.coords?.latitude || 3.1390; // Default to Kuala Lumpur, Malaysia

        const lng = coords?.coords?.longitude || 101.6869; // Destroy existing map if it exists

        _this._map = yield _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__.GoogleMap.create({
          id: 'my-cool-map',
          element: ref,
          apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey,
          config: {
            center: {
              lat: lat,
              lng: lng
            },
            zoom: 15,
            styles: [],
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
          }
        });
        _this.LatLng = {
          lat: lat,
          lng: lng
        };
        yield Promise.all([_this._map.enableTrafficLayer(true), _this._map.enableCurrentLocation(true), _this._map.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this.LatLng
        })]);
        const address = yield _this.getAddress(_this.LatLng.lat, _this.LatLng.lng);

        _this.processAddressResponse(address);
      } catch (error) {
        console.error('Error creating map:', error);
        throw error;
      }
    })();
  }

  destroyMap() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2._map) {
        try {
          yield _this2._map.destroy();
          _this2._map = null;
        } catch (error) {
          console.error('Error destroying map:', error);
        }
      }
    })();
  }

  processAddressResponse(address) {
    if (address?.results?.length > 0) {
      this.actualLocation = address.results[0].formatted_address;

      if (address.results.length > 1) {
        const components = address.results[1].address_components;

        if (components?.length >= 2) {
          this.locationAddress = `${components[0].long_name} ${components[1].long_name}`;
        }
      }
    }
  }

  calculateCenter(points) {
    const latitudes = points.map(p => p.geoCode.latitude);
    const longitudes = points.map(p => p.geoCode.longitude);
    const avgLat = latitudes.reduce((a, b) => a + b, 0) / latitudes.length;
    const avgLng = longitudes.reduce((a, b) => a + b, 0) / longitudes.length;
    return {
      latitude: avgLat,
      longitude: avgLng
    };
  }

  setCameraToLocation(coordinate, zoom, bearing) {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3._map) {
        console.error('Map not initialized');
        return;
      }

      try {
        yield _this3._map.setCamera({
          animate: true,
          animationDuration: 500,
          zoom,
          coordinate,
          bearing
        });
      } catch (error) {
        console.error('Error setting camera:', error);
      }
    })();
  } // Add other necessary methods like getAddress here


  getBoundsZoomLevel(bounds, mapDim) {
    const WORLD_DIM = {
      height: 256,
      width: 256
    };
    const ZOOM_MAX = 21;

    const latRad = lat => {
      const sin = Math.sin(lat * Math.PI / 180);
      const radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
      return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    };

    const zoom = (mapPx, worldPx, fraction) => Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);

    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    const latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;
    const lngDiff = ne.lng() - sw.lng();
    const lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;
    const latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
    const lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
    return Math.min(latZoom, lngZoom, ZOOM_MAX);
  }

  calculateBearing(start, end) {
    const startLat = start.lat * (Math.PI / 180);
    const startLng = start.lng * (Math.PI / 180);
    const endLat = end.lat * (Math.PI / 180);
    const endLng = end.lng * (Math.PI / 180);
    const dLng = endLng - startLng;
    const y = Math.sin(dLng) * Math.cos(endLat);
    const x = Math.cos(startLat) * Math.sin(endLat) - Math.sin(startLat) * Math.cos(endLat) * Math.cos(dLng);
    const bearing = Math.atan2(y, x) * (180 / Math.PI);
    return (bearing + 360) % 360;
  }

  getDirections(from, to) {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey}`;
        const response = yield _this4.http.get(url).toPromise();
        return response;
      } catch (error) {
        console.error('Error in getting directions:', error);
        return null;
      }
    })();
  }

  getAddress(lat, lng) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams().set('latlng', `${lat},${lng}`).set('key', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey);
    return this.http.get(url, {
      params
    }).toPromise();
  } // Add the addMarker method to the MapService class


  addMarker(lat, lng, title) {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const marker = {
          coordinate: {
            lat,
            lng
          },
          title
        };
        yield _this5._map.addMarker(marker);
        return marker;
      } catch (error) {
        console.error('Error adding marker:', error);
        return null;
      }
    })();
  }

}

MapService.ɵfac = function MapService_Factory(t) {
  return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_geocode_service__WEBPACK_IMPORTED_MODULE_4__.GeocodeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};

MapService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: MapService,
  factory: MapService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7418:
/*!**************************************************!*\
  !*** ./src/app/services/nearby-rider.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NearbyRiderService": () => (/* binding */ NearbyRiderService)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 26009);
/* harmony import */ var geofire_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! geofire-common */ 73942);
/* harmony import */ var geofire_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(geofire_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _interfaces_route_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/route-graph */ 40123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dijkstra_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dijkstra.service */ 6354);
/* harmony import */ var _one_signal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../one-signal.service */ 8126);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 58385);











class NearbyRiderService {
  constructor(firestore, dijkstraService, oneSignalService, toastController, ngZone) {
    this.firestore = firestore;
    this.dijkstraService = dijkstraService;
    this.oneSignalService = oneSignalService;
    this.toastController = toastController;
    this.ngZone = ngZone; // Configuration

    this.SEARCH_RADIUS_KM = 5; // Search within 5km

    this.MIN_OVERLAP_THRESHOLD = 0.35; // 35% route overlap minimum

    this.MAX_RIDERS_TO_NOTIFY = 10; // Max riders to notify

    this.OPPORTUNITY_EXPIRY_MINUTES = 5; // Opportunities expire after 5 min

    this.NOTIFICATION_COOLDOWN_MS = 10 * 60 * 1000; // 10 min cooldown per rider
    // Track notification history to prevent spam

    this.notificationHistory = new Map(); // Observable for nearby opportunities

    this.nearbyOpportunitiesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.nearbyOpportunities$ = this.nearbyOpportunitiesSubject.asObservable(); // Active subscription

    this.opportunitySubscription = null;
  }
  /**
   * Find active riders nearby who might want to share this ride
   * Uses GeoFire for efficient location-based queries
   */


  findNearbyActiveRiders(newRiderLocation, newRiderDestination, excludeRiderId) {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const candidates = [];

      try {
        // Generate geohash bounds for the search area
        const center = [newRiderLocation.lat, newRiderLocation.lng];
        const radiusM = _this.SEARCH_RADIUS_KM * 1000;
        const bounds = (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashQueryBounds)(center, radiusM); // Query the Request collection for pending rides in the area

        const requestsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_this.firestore, 'Request');

        for (const b of bounds) {
          const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.query)(requestsRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('status', '==', 'pending'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('sharedRideAccepted', '==', true), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('originGeohash', '>=', b[0]), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('originGeohash', '<=', b[1]), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.limit)(50));
          const snapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(q);
          snapshot.forEach(doc => {
            const data = doc.data(); // Exclude the current rider

            if (data['Rider_id'] === excludeRiderId) return; // Verify actual distance (geohash can have false positives)

            const riderLocation = [data['Loc_lat'], data['Loc_lng']];
            const distanceKm = (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.distanceBetween)(center, riderLocation);

            if (distanceKm <= _this.SEARCH_RADIUS_KM) {
              candidates.push({
                requestId: doc.id,
                riderId: data['Rider_id'],
                origin: {
                  lat: data['Loc_lat'],
                  lng: data['Loc_lng']
                },
                destination: {
                  lat: data['Des_lat'],
                  lng: data['Des_lng']
                },
                riderName: data['Rider_name'],
                riderToken: data['oneSignalPlayerId'] || null,
                createdAt: data['createdAt']?.toDate(),
                price: data['price']
              });
            }
          });
        }

        console.log(`Found ${candidates.length} nearby active riders`);
        return candidates;
      } catch (error) {
        console.error('Error finding nearby riders:', error);
        return [];
      }
    })();
  }
  /**
   * Score nearby riders by route similarity using Dijkstra
   */


  scoreNearbyRiders(newRiderPath, nearbyCandidates) {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.dijkstraService.findSimilarRoutes(newRiderPath, nearbyCandidates, 0.25 // 25% max detour
      );
    })();
  }
  /**
   * Create a shared ride opportunity document
   */


  createSharedRideOpportunity(initiatorId, initiatorName, origin, destination, originAddress, destinationAddress, estimatedPrice, path) {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const now = new Date();
        const expiresAt = new Date(now.getTime() + _this3.OPPORTUNITY_EXPIRY_MINUTES * 60 * 1000);
        const opportunity = {
          initiatorId,
          initiatorName,
          originGeohash: (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashForLocation)([origin.lat, origin.lng]),
          destinationGeohash: (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashForLocation)([destination.lat, destination.lng]),
          origin,
          destination,
          originAddress,
          destinationAddress,
          pathEncoded: path?.encodedPolyline,
          estimatedPrice,
          potentialDiscount: 10,
          status: 'open',
          expiresAt,
          createdAt: now,
          matchedRiders: [],
          maxPassengers: 4
        };
        const docRef = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_this3.firestore, 'SharedRideOpportunities'), { ...opportunity,
          expiresAt: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Timestamp.fromDate(expiresAt),
          createdAt: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Timestamp.fromDate(now)
        });
        console.log('Created shared ride opportunity:', docRef.id);
        return docRef.id;
      } catch (error) {
        console.error('Error creating shared ride opportunity:', error);
        throw error;
      }
    })();
  }
  /**
   * Send push notifications to nearby riders about shared ride opportunity
   */


  notifyNearbyRiders(matches, newRiderInfo, opportunityId) {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let notificationsSent = 0; // Sort by overlap score and limit

      const topMatches = matches.filter(m => m.overlapScore >= _this4.MIN_OVERLAP_THRESHOLD).slice(0, _this4.MAX_RIDERS_TO_NOTIFY);

      for (const match of topMatches) {
        // Check notification cooldown
        const lastNotified = _this4.notificationHistory.get(match.candidate.riderId);

        if (lastNotified && Date.now() - lastNotified < _this4.NOTIFICATION_COOLDOWN_MS) {
          console.log(`Skipping notification for ${match.candidate.riderId} - cooldown active`);
          continue;
        } // Skip if no push token


        if (!match.candidate.riderToken) {
          console.log(`No push token for rider ${match.candidate.riderId}`);
          continue;
        }

        try {
          const savingsPercent = match.potentialSavings;
          const title = '🚗 Shared Ride Opportunity!';
          const message = `${newRiderInfo.name} is heading your way! Save up to ${savingsPercent}% by sharing.`; // Send notification via OneSignal

          yield _this4.oneSignalService.sendNotification(message, title, {
            type: 'shared_ride_opportunity',
            opportunityId,
            savings: savingsPercent,
            originArea: newRiderInfo.originArea,
            destinationArea: newRiderInfo.destinationArea,
            overlapScore: match.overlapScore
          }, [match.candidate.riderToken]).toPromise(); // Update notification history

          _this4.notificationHistory.set(match.candidate.riderId, Date.now());

          notificationsSent++;
          console.log(`Notification sent to rider ${match.candidate.riderId}`);
        } catch (error) {
          console.error(`Failed to notify rider ${match.candidate.riderId}:`, error);
        }
      }

      console.log(`Sent ${notificationsSent} shared ride notifications`);
      return notificationsSent;
    })();
  }
  /**
   * Subscribe to nearby shared ride opportunities for a rider's location
   */


  subscribeToNearbyOpportunities(riderLocation, riderId) {
    // Unsubscribe from previous listener
    this.unsubscribeFromOpportunities();
    const center = [riderLocation.lat, riderLocation.lng];
    const radiusM = this.SEARCH_RADIUS_KM * 1000;
    const bounds = (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashQueryBounds)(center, radiusM); // We'll aggregate results from multiple queries

    const allOpportunities = new Map();
    const unsubscribes = [];

    for (const b of bounds) {
      const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(this.firestore, 'SharedRideOpportunities'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('status', '==', 'open'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('originGeohash', '>=', b[0]), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('originGeohash', '<=', b[1]), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.orderBy)('originGeohash'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.orderBy)('createdAt', 'desc'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.limit)(20));
      const unsub = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.onSnapshot)(q, snapshot => {
        this.ngZone.run(() => {
          snapshot.docChanges().forEach(change => {
            const data = change.doc.data();
            const opportunity = {
              opportunityId: change.doc.id,
              initiatorId: data['initiatorId'],
              initiatorName: data['initiatorName'],
              originGeohash: data['originGeohash'],
              destinationGeohash: data['destinationGeohash'],
              origin: data['origin'],
              destination: data['destination'],
              originAddress: data['originAddress'],
              destinationAddress: data['destinationAddress'],
              pathEncoded: data['pathEncoded'],
              estimatedPrice: data['estimatedPrice'],
              potentialDiscount: data['potentialDiscount'],
              status: data['status'],
              expiresAt: data['expiresAt']?.toDate(),
              createdAt: data['createdAt']?.toDate(),
              matchedRiders: data['matchedRiders'] || [],
              maxPassengers: data['maxPassengers'] || 4
            }; // Filter out own opportunities and expired ones

            if (opportunity.initiatorId === riderId) return;
            if (opportunity.expiresAt && opportunity.expiresAt < new Date()) return; // Verify actual distance

            const oppLocation = [opportunity.origin.lat, opportunity.origin.lng];
            const distanceKm = (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.distanceBetween)(center, oppLocation);
            if (distanceKm > this.SEARCH_RADIUS_KM) return;

            if (change.type === 'removed') {
              allOpportunities.delete(change.doc.id);
            } else {
              allOpportunities.set(change.doc.id, opportunity);
            }
          }); // Emit updated list

          const opportunities = Array.from(allOpportunities.values()).filter(o => o.status === 'open').sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
          this.nearbyOpportunitiesSubject.next(opportunities);
        });
      }, error => {
        console.error('Error listening to opportunities:', error);
      });
      unsubscribes.push(unsub);
    } // Store unsubscribe function


    this.opportunitySubscription = () => {
      unsubscribes.forEach(unsub => unsub());
    };

    return this.nearbyOpportunities$;
  }
  /**
   * Unsubscribe from opportunity updates
   */


  unsubscribeFromOpportunities() {
    if (this.opportunitySubscription) {
      this.opportunitySubscription();
      this.opportunitySubscription = null;
    }

    this.nearbyOpportunitiesSubject.next([]);
  }
  /**
   * Accept a shared ride opportunity
   */


  acceptOpportunity(opportunityId, riderId, riderName) {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const oppRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_this5.firestore, 'SharedRideOpportunities', opportunityId);
        const oppDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(oppRef);

        if (!oppDoc.exists()) {
          throw new Error('Opportunity not found');
        }

        const data = oppDoc.data(); // Check if still open

        if (data['status'] !== 'open') {
          throw new Error('Opportunity is no longer available');
        } // Check if expired


        if (data['expiresAt']?.toDate() < new Date()) {
          throw new Error('Opportunity has expired');
        } // Check if already at max passengers


        const currentMatched = data['matchedRiders'] || [];

        if (currentMatched.length >= data['maxPassengers'] - 1) {
          throw new Error('Ride is already full');
        } // Add rider to matched list


        const updatedMatched = [...currentMatched, riderId]; // Calculate new discount (10% per passenger, max 40%)

        const newDiscount = Math.min((updatedMatched.length + 1) * 10, 40);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.updateDoc)(oppRef, {
          matchedRiders: updatedMatched,
          potentialDiscount: newDiscount,
          status: updatedMatched.length >= data['maxPassengers'] - 1 ? 'matched' : 'open',
          updatedAt: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Timestamp.now()
        }); // Show success toast

        const toast = yield _this5.toastController.create({
          message: `Joined shared ride! You'll save ${newDiscount}%`,
          duration: 3000,
          position: 'top',
          color: 'success'
        });
        yield toast.present();
        return true;
      } catch (error) {
        console.error('Error accepting opportunity:', error);
        const toast = yield _this5.toastController.create({
          message: error instanceof Error ? error.message : 'Failed to join shared ride',
          duration: 3000,
          position: 'top',
          color: 'danger'
        });
        yield toast.present();
        return false;
      }
    })();
  }
  /**
   * Cancel/leave a shared ride opportunity
   */


  leaveOpportunity(opportunityId, riderId) {
    var _this6 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const oppRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_this6.firestore, 'SharedRideOpportunities', opportunityId);
        const oppDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(oppRef);
        if (!oppDoc.exists()) return false;
        const data = oppDoc.data();
        const currentMatched = data['matchedRiders'] || [];
        const updatedMatched = currentMatched.filter(id => id !== riderId); // Recalculate discount

        const newDiscount = Math.min((updatedMatched.length + 1) * 10, 40);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.updateDoc)(oppRef, {
          matchedRiders: updatedMatched,
          potentialDiscount: newDiscount,
          status: 'open',
          updatedAt: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Timestamp.now()
        });
        return true;
      } catch (error) {
        console.error('Error leaving opportunity:', error);
        return false;
      }
    })();
  }
  /**
   * Get a specific opportunity by ID
   */


  getOpportunity(opportunityId) {
    var _this7 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const oppRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_this7.firestore, 'SharedRideOpportunities', opportunityId);
        const oppDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(oppRef);
        if (!oppDoc.exists()) return null;
        const data = oppDoc.data();
        return {
          opportunityId: oppDoc.id,
          initiatorId: data['initiatorId'],
          initiatorName: data['initiatorName'],
          originGeohash: data['originGeohash'],
          destinationGeohash: data['destinationGeohash'],
          origin: data['origin'],
          destination: data['destination'],
          originAddress: data['originAddress'],
          destinationAddress: data['destinationAddress'],
          pathEncoded: data['pathEncoded'],
          estimatedPrice: data['estimatedPrice'],
          potentialDiscount: data['potentialDiscount'],
          status: data['status'],
          expiresAt: data['expiresAt']?.toDate(),
          createdAt: data['createdAt']?.toDate(),
          matchedRiders: data['matchedRiders'] || [],
          maxPassengers: data['maxPassengers'] || 4
        };
      } catch (error) {
        console.error('Error getting opportunity:', error);
        return null;
      }
    })();
  }
  /**
   * Expire old opportunities (call periodically or via cloud function)
   */


  expireOldOpportunities() {
    var _this8 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_this8.firestore, 'SharedRideOpportunities'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('status', '==', 'open'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.where)('expiresAt', '<', _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Timestamp.now()));
        const snapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(q);
        let expiredCount = 0;

        for (const docSnap of snapshot.docs) {
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.updateDoc)(docSnap.ref, {
            status: 'expired',
            updatedAt: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.Timestamp.now()
          });
          expiredCount++;
        }

        console.log(`Expired ${expiredCount} old opportunities`);
        return expiredCount;
      } catch (error) {
        console.error('Error expiring opportunities:', error);
        return 0;
      }
    })();
  }
  /**
   * Get general area name for privacy (don't show exact address)
   */


  getGeneralAreaFromAddress(address) {
    // Extract city/neighborhood from full address
    const parts = address.split(',');

    if (parts.length >= 2) {
      return parts.slice(-2).join(',').trim();
    }

    return address;
  }

}

NearbyRiderService.ɵfac = function NearbyRiderService_Factory(t) {
  return new (t || NearbyRiderService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_dijkstra_service__WEBPACK_IMPORTED_MODULE_3__.DijkstraService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_one_signal_service__WEBPACK_IMPORTED_MODULE_4__.OnesignalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone));
};

NearbyRiderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: NearbyRiderService,
  factory: NearbyRiderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 62982:
/*!*********************************************!*\
  !*** ./src/app/services/network.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/network */ 54984);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class NetworkService {
  constructor() {
    this.networkStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
    this.networkStatus$ = this.networkStatus.asObservable();
    this.initializeNetworkListener();
  }

  initializeNetworkListener() {
    try {
      _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.addListener('networkStatusChange', status => {
        console.log('Network status changed', status);
        this.networkStatus.next(status.connected);

        if (status.connected) {
          this.handleReconnect();
        } else {
          this.handleDisconnect();
        }
      });
    } catch (error) {
      console.warn('Failed to add network listener:', error);
    }

    this.checkInitialNetworkStatus();
  }

  checkInitialNetworkStatus() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.getStatus();
        console.log('Initial network status:', status);

        _this.networkStatus.next(status.connected);

        if (!status.connected) {
          _this.handleDisconnect();
        }
      } catch (error) {
        console.warn('Network status check failed, performing fallback check:', error); // Fallback: try to make a simple network request with timeout

        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

          yield fetch('https://www.google.com/favicon.ico', {
            method: 'HEAD',
            mode: 'no-cors',
            cache: 'no-cache',
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          _this.networkStatus.next(true);

          console.log('Fallback network check: connected');
        } catch (fetchError) {
          console.warn('Fallback network check failed:', fetchError); // Be more conservative - assume connected if we can't determine

          _this.networkStatus.next(true);

          console.log('Network status uncertain, assuming connected');
        }
      }
    })();
  }

  handleDisconnect() {
    console.log('Disconnected from network'); // Handle the UI or logic when the network is disconnected
  }

  handleReconnect() {
    console.log('Reconnected to network'); // Handle the UI or logic when the network is reconnected
  }

  isConnected() {
    return this.networkStatus.value;
  }

}

NetworkService.ɵfac = function NetworkService_Factory(t) {
  return new (t || NetworkService)();
};

NetworkService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: NetworkService,
  factory: NetworkService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 59103:
/*!*************************************************!*\
  !*** ./src/app/services/shared-ride.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedRideService": () => (/* binding */ SharedRideService)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 56466);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 58385);






class SharedRideService {
  constructor(firestore, toastController) {
    this.firestore = firestore;
    this.toastController = toastController;
    this.sharedRideSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.notificationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.unsubscribe = null; // Observable streams

    this.sharedRide$ = this.sharedRideSubject.asObservable();
    this.notifications$ = this.notificationSubject.asObservable(); // Current state

    this.currentSharedRide = null;
    this.currentRiderId = null;
  }
  /**
   * Subscribe to a SharedRides document for real-time updates
   */


  subscribeToSharedRide(sharedRideId, riderId) {
    // Unsubscribe from any previous listener
    this.unsubscribeFromSharedRide();
    this.currentRiderId = riderId;
    const sharedRideRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, 'SharedRides', sharedRideId);
    this.unsubscribe = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(sharedRideRef, snapshot => {
      if (snapshot.exists()) {
        const newData = snapshot.data();
        const previousData = this.currentSharedRide; // Check for changes and emit notifications

        this.checkForNotifications(previousData, newData);
        this.currentSharedRide = newData;
        this.sharedRideSubject.next(newData);
      } else {
        this.currentSharedRide = null;
        this.sharedRideSubject.next(null);
      }
    }, error => {
      console.error('Error listening to shared ride:', error);
      this.sharedRideSubject.next(null);
    });
    return this.sharedRide$;
  }
  /**
   * Unsubscribe from shared ride updates
   */


  unsubscribeFromSharedRide() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }

    this.currentSharedRide = null;
    this.currentRiderId = null;
    this.sharedRideSubject.next(null);
  }
  /**
   * Check for changes and emit notifications
   */


  checkForNotifications(previous, current) {
    // First time matched with shared ride
    if (!previous && current) {
      this.emitNotification({
        type: 'matched',
        message: 'You\'ve been matched with a shared ride! Save up to 40%.',
        data: {
          passengers: current.totalPassengers
        }
      });
      return;
    }

    if (!previous) return; // New passenger joined (discount increased)

    if (current.totalPassengers > previous.totalPassengers) {
      this.emitNotification({
        type: 'discount_increased',
        message: `New passenger joined! Your discount has increased.`,
        data: {
          previousCount: previous.totalPassengers,
          newCount: current.totalPassengers
        }
      });
    } // Passenger cancelled (fare updated)


    if (current.totalPassengers < previous.totalPassengers) {
      this.emitNotification({
        type: 'passenger_cancelled',
        message: 'A passenger cancelled. Your fare has been updated.',
        data: {
          previousCount: previous.totalPassengers,
          newCount: current.totalPassengers
        }
      });
    } // Check for pickup queue position changes


    if (this.currentRiderId) {
      const previousPosition = this.getPickupPosition(previous.passengers, this.currentRiderId);
      const currentPosition = this.getPickupPosition(current.passengers, this.currentRiderId);

      if (previousPosition !== currentPosition && currentPosition > 0) {
        this.emitNotification({
          type: 'pickup_queue',
          message: currentPosition === 1 ? 'You\'re next for pickup!' : `Driver picking up ${currentPosition - 1} passenger(s) first`,
          data: {
            position: currentPosition
          }
        });
      }
    }
  }
  /**
   * Get pickup position for a rider
   */


  getPickupPosition(passengers, riderId) {
    const passenger = passengers?.find(p => p.riderId === riderId);
    return passenger?.pickupOrder || 0;
  }
  /**
   * Emit a notification
   */


  emitNotification(notification) {
    this.notificationSubject.next(notification);
    this.showToast(notification.message);
  }
  /**
   * Show toast notification
   */


  showToast(message) {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message,
        duration: 3000,
        position: 'top',
        color: 'primary',
        buttons: [{
          text: 'OK',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }
  /**
   * Get current shared ride data
   */


  getCurrentSharedRide() {
    return this.currentSharedRide;
  }
  /**
   * Get co-passengers (excluding current rider)
   */


  getCoPassengers() {
    if (!this.currentSharedRide || !this.currentRiderId) {
      return [];
    }

    return this.currentSharedRide.passengers.filter(p => p.riderId !== this.currentRiderId);
  }
  /**
   * Get current rider's pickup position
   */


  getMyPickupPosition() {
    if (!this.currentSharedRide || !this.currentRiderId) {
      return 0;
    }

    return this.getPickupPosition(this.currentSharedRide.passengers, this.currentRiderId);
  }
  /**
   * Get passengers being picked up before current rider
   */


  getPassengersBeforeMe() {
    const myPosition = this.getMyPickupPosition();
    return myPosition > 0 ? myPosition - 1 : 0;
  }
  /**
   * Calculate savings amount
   */


  calculateSavings(originalPrice, discountedPrice) {
    return originalPrice - discountedPrice;
  }
  /**
   * Calculate discount percentage based on number of passengers
   * Max 40% discount with more passengers
   */


  calculateDiscountPercent(totalPassengers) {
    // Base discount: 10% per additional passenger, max 40%
    const baseDiscount = 10;
    const additionalPassengers = totalPassengers - 1;
    return Math.min(additionalPassengers * baseDiscount, 40);
  }
  /**
   * Get potential savings range for display
   */


  getPotentialSavingsRange(originalPrice) {
    return {
      min: originalPrice * 0.10,
      max: originalPrice * 0.40 // 40% savings with max passengers

    };
  }
  /**
   * Cancel sharing after match - update SharedRide document
   */


  cancelSharedRide(requestId, sharedRideId) {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.currentRiderId) {
        console.error('No rider ID set');
        return;
      }

      try {
        // Update the Request document to remove sharing
        const requestRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_this2.firestore, 'Request', requestId);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(requestRef, {
          sharedRideAccepted: false,
          isSharedRide: false,
          sharedRideId: null,
          discountedPrice: null,
          discountPercent: 0
        }); // The SharedRides document should be updated by the backend/cloud function
        // to remove this passenger and recalculate other passengers' fares

        _this2.unsubscribeFromSharedRide();
      } catch (error) {
        console.error('Error cancelling shared ride:', error);
        throw error;
      }
    })();
  }
  /**
   * Check if sharing can be disabled (only before ride is confirmed)
   */


  canDisableSharing(rideStatus) {
    return rideStatus === 'pending' || rideStatus === 'matching';
  }

}

SharedRideService.ɵfac = function SharedRideService_Factory(t) {
  return new (t || SharedRideService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController));
};

SharedRideService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SharedRideService,
  factory: SharedRideService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 64692:
/*!********************************************************************!*\
  !*** ./src/app/shared-ride-prompt/shared-ride-prompt.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedRidePromptComponent": () => (/* binding */ SharedRidePromptComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 28653);
/* harmony import */ var _services_dijkstra_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dijkstra.service */ 6354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







function SharedRidePromptComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-text", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "SHARED_RIDE.NO_RIDES_AVAILABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "SHARED_RIDE.CHECK_BACK_LATER"));
} }
function SharedRidePromptComponent_ion_card_19_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37)(1, "ion-list", 38)(2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label")(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label")(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label")(21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const opportunity_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, "SHARED_RIDE.PASSENGERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r3.getPassengerCount(opportunity_r2), " / ", opportunity_r2.maxPassengers, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 9, "SHARED_RIDE.SEATS_AVAILABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getAvailableSeats(opportunity_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 11, "SHARED_RIDE.YOUR_SAVINGS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getSavingsText(opportunity_r2));
} }
function SharedRidePromptComponent_ion_card_19_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SharedRidePromptComponent_ion_card_19_Template_ion_card_header_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const opportunity_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.toggleExpand(opportunity_r2.opportunityId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17)(3, "div", 18)(4, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20)(7, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 21)(12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-card-content")(19, "div", 25)(20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 28)(23, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 28)(32, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, SharedRidePromptComponent_ion_card_19_div_37_Template, 26, 13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 34)(39, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SharedRidePromptComponent_ion_card_19_Template_ion_button_click_39_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const opportunity_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onAccept(opportunity_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const opportunity_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("urgent", ctx_r1.isUrgent(opportunity_r2.opportunityId))("expanded", ctx_r1.expandedOpportunityId === opportunity_r2.opportunityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](opportunity_r2.initiatorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getDistanceToOrigin(opportunity_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", opportunity_r2.potentialDiscount, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("urgent", ctx_r1.isUrgent(opportunity_r2.opportunityId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatTimeRemaining(opportunity_r2.opportunityId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 17, "SHARED_RIDE.FROM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](opportunity_r2.originAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 19, "SHARED_RIDE.TO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](opportunity_r2.destinationAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.expandedOpportunityId === opportunity_r2.opportunityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.getAvailableSeats(opportunity_r2) <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 21, "SHARED_RIDE.JOIN_RIDE"), " ");
} }
class SharedRidePromptComponent {
    constructor(dijkstraService) {
        this.dijkstraService = dijkstraService;
        this.opportunities = [];
        this.userLocation = null;
        this.userDestination = null;
        this.accept = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // Track time remaining for each opportunity
        this.timeRemaining = new Map();
        this.timerSubscription = null;
        // Expanded opportunity for details view
        this.expandedOpportunityId = null;
    }
    ngOnInit() {
        // Start countdown timer
        this.updateTimeRemaining();
        this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(1000).subscribe(() => {
            this.updateTimeRemaining();
        });
    }
    ngOnDestroy() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    }
    /**
     * Update time remaining for all opportunities
     */
    updateTimeRemaining() {
        const now = new Date().getTime();
        this.opportunities.forEach(opp => {
            if (opp.expiresAt) {
                const remaining = Math.max(0, opp.expiresAt.getTime() - now);
                this.timeRemaining.set(opp.opportunityId, remaining);
            }
        });
        // Remove expired opportunities from view
        this.opportunities = this.opportunities.filter(opp => {
            const remaining = this.timeRemaining.get(opp.opportunityId);
            return remaining === undefined || remaining > 0;
        });
    }
    /**
     * Format time remaining as MM:SS
     */
    formatTimeRemaining(opportunityId) {
        const ms = this.timeRemaining.get(opportunityId) || 0;
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    /**
     * Calculate distance to opportunity origin
     */
    getDistanceToOrigin(opportunity) {
        if (!this.userLocation)
            return '--';
        const distance = this.dijkstraService.calculateHaversineDistance(this.userLocation, opportunity.origin);
        if (distance < 1000) {
            return `${Math.round(distance)}m away`;
        }
        return `${(distance / 1000).toFixed(1)}km away`;
    }
    /**
     * Get number of passengers already matched
     */
    getPassengerCount(opportunity) {
        return (opportunity.matchedRiders?.length || 0) + 1; // +1 for initiator
    }
    /**
     * Get available seats remaining
     */
    getAvailableSeats(opportunity) {
        const matched = opportunity.matchedRiders?.length || 0;
        return opportunity.maxPassengers - matched - 1; // -1 for initiator
    }
    /**
     * Toggle expanded view for an opportunity
     */
    toggleExpand(opportunityId) {
        if (this.expandedOpportunityId === opportunityId) {
            this.expandedOpportunityId = null;
        }
        else {
            this.expandedOpportunityId = opportunityId;
        }
    }
    /**
     * Accept a shared ride opportunity
     */
    onAccept(opportunity) {
        this.accept.emit(opportunity);
    }
    /**
     * Dismiss the prompt
     */
    onDismiss() {
        this.dismiss.emit();
    }
    /**
     * Check if opportunity is urgent (< 1 min remaining)
     */
    isUrgent(opportunityId) {
        const remaining = this.timeRemaining.get(opportunityId) || 0;
        return remaining < 60000 && remaining > 0;
    }
    /**
     * Get savings display text
     */
    getSavingsText(opportunity) {
        const savings = opportunity.estimatedPrice * (opportunity.potentialDiscount / 100);
        return `Save RM ${savings.toFixed(2)} (${opportunity.potentialDiscount}%)`;
    }
    /**
     * Track by function for ngFor
     */
    trackByOpportunityId(index, opportunity) {
        return opportunity.opportunityId;
    }
}
SharedRidePromptComponent.ɵfac = function SharedRidePromptComponent_Factory(t) { return new (t || SharedRidePromptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dijkstra_service__WEBPACK_IMPORTED_MODULE_0__.DijkstraService)); };
SharedRidePromptComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SharedRidePromptComponent, selectors: [["app-shared-ride-prompt"]], inputs: { opportunities: "opportunities", userLocation: "userLocation", userDestination: "userDestination" }, outputs: { accept: "accept", dismiss: "dismiss" }, decls: 31, vars: 18, consts: [["color", "primary"], ["slot", "end"], [3, "click"], ["name", "close"], [1, "ion-padding"], [1, "header-info"], ["name", "people", "color", "primary"], [1, "savings-badge"], ["class", "no-opportunities", 4, "ngIf"], [1, "opportunities-list"], [3, "urgent", "expanded", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bottom-info"], ["color", "medium"], ["name", "shield-checkmark-outline"], ["expand", "block", "fill", "clear", 3, "click"], [1, "no-opportunities"], ["name", "car-outline", "color", "medium"], [1, "card-header-content"], [1, "rider-info"], ["name", "person-circle", "color", "primary"], [1, "rider-details"], [1, "discount-badge"], [1, "discount-value"], [1, "timer"], ["name", "time-outline"], [1, "route-info"], [1, "route-point"], [1, "point-marker", "origin"], [1, "point-text"], [1, "label"], [1, "address"], [1, "route-line"], [1, "point-marker", "destination"], ["class", "expanded-details", 4, "ngIf"], [1, "action-buttons"], ["expand", "block", 3, "disabled", "click"], ["name", "checkmark-circle", "slot", "start"], [1, "expanded-details"], ["lines", "none"], ["name", "people-outline", "slot", "start", "color", "primary"], ["name", "car-outline", "slot", "start", "color", "primary"], ["name", "cash-outline", "slot", "start", "color", "success"], [1, "savings-amount"]], template: function SharedRidePromptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 1)(6, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SharedRidePromptComponent_Template_ion_button_click_6_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 4)(9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SharedRidePromptComponent_div_17_Template, 8, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SharedRidePromptComponent_ion_card_19_Template, 43, 23, "ion-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "ion-text", 12)(22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-footer")(27, "ion-toolbar")(28, "ion-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SharedRidePromptComponent_Template_ion_button_click_28_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 8, "SHARED_RIDE.NEARBY_RIDES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 10, "SHARED_RIDE.RIDERS_GOING_YOUR_WAY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 12, "SHARED_RIDE.SAVE_UP_TO"), " 40%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.opportunities.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.opportunities)("ngForTrackBy", ctx.trackByOpportunityId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 14, "SHARED_RIDE.PRIVACY_NOTE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 16, "SHARED_RIDE.NO_THANKS"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px;\n  margin-bottom: 16px;\n}\n.header-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 8px;\n}\n.header-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px;\n  color: var(--ion-text-color);\n}\n.header-info[_ngcontent-%COMP%]   .savings-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745, #20c997);\n  color: white;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.no-opportunities[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 16px;\n  text-align: center;\n}\n.no-opportunities[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.no-opportunities[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0 0 8px;\n}\n.opportunities-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.opportunities-list[_ngcontent-%COMP%]   ion-card.urgent[_ngcontent-%COMP%] {\n  border: 2px solid #dc3545;\n  animation: pulse 1s infinite;\n}\n.opportunities-list[_ngcontent-%COMP%]   ion-card.expanded[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n}\n.opportunities-list[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  cursor: pointer;\n}\n.opportunities-list[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.opportunities-list[_ngcontent-%COMP%]   .rider-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.opportunities-list[_ngcontent-%COMP%]   .rider-info[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--ion-color-light);\n  border-radius: 50%;\n}\n.opportunities-list[_ngcontent-%COMP%]   .rider-info[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.opportunities-list[_ngcontent-%COMP%]   .rider-info[_ngcontent-%COMP%]   .rider-details[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n.opportunities-list[_ngcontent-%COMP%]   .rider-info[_ngcontent-%COMP%]   .rider-details[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-top: 2px;\n}\n.opportunities-list[_ngcontent-%COMP%]   .discount-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745, #20c997);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 12px;\n}\n.opportunities-list[_ngcontent-%COMP%]   .discount-badge[_ngcontent-%COMP%]   .discount-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n}\n.opportunities-list[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 8px;\n  font-size: 13px;\n  color: var(--ion-color-medium);\n}\n.opportunities-list[_ngcontent-%COMP%]   .timer.urgent[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n.opportunities-list[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.opportunities-list[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 0 16px 16px;\n}\n.route-info[_ngcontent-%COMP%] {\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n.route-info[_ngcontent-%COMP%]   .route-point[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.route-info[_ngcontent-%COMP%]   .route-point[_ngcontent-%COMP%]   .point-marker[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin-top: 4px;\n  flex-shrink: 0;\n}\n.route-info[_ngcontent-%COMP%]   .route-point[_ngcontent-%COMP%]   .point-marker.origin[_ngcontent-%COMP%] {\n  background: #3880ff;\n  box-shadow: 0 0 0 4px rgba(56, 128, 255, 0.2);\n}\n.route-info[_ngcontent-%COMP%]   .route-point[_ngcontent-%COMP%]   .point-marker.destination[_ngcontent-%COMP%] {\n  background: #28a745;\n  box-shadow: 0 0 0 4px rgba(40, 167, 69, 0.2);\n}\n.route-info[_ngcontent-%COMP%]   .route-point[_ngcontent-%COMP%]   .point-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.route-info[_ngcontent-%COMP%]   .route-point[_ngcontent-%COMP%]   .point-text[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  color: var(--ion-color-medium);\n  font-weight: 500;\n}\n.route-info[_ngcontent-%COMP%]   .route-point[_ngcontent-%COMP%]   .point-text[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-text-color);\n  line-height: 1.4;\n}\n.route-info[_ngcontent-%COMP%]   .route-line[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 20px;\n  background: var(--ion-color-medium-shade);\n  margin: 4px 0 4px 5px;\n  border-radius: 1px;\n}\n.expanded-details[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.expanded-details[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0;\n}\n.expanded-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background: transparent;\n}\n.expanded-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 12px;\n}\n.expanded-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  margin: 0;\n}\n.expanded-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 4px 0 0;\n}\n.expanded-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .savings-amount[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.action-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  font-weight: 600;\n  height: 48px;\n}\n.bottom-info[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: center;\n}\n.bottom-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 13px;\n  margin: 0;\n}\n.bottom-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n@keyframes pulse {\n  0%, 100% {\n    box-shadow: 0 4px 12px rgba(220, 53, 69, 0.2);\n  }\n  50% {\n    box-shadow: 0 4px 20px rgba(220, 53, 69, 0.4);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .route-info[_ngcontent-%COMP%] {\n    background: var(--ion-color-dark);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1yaWRlLXByb21wdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFBSjtBQUdFO0VBQ0UscURBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURKO0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZGO0FBSUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBUUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtBQUxKO0FBT0k7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBTE47QUFRSTtFQUNFLDBDQUFBO0FBTk47QUFVRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBUko7QUFXRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFZRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFWSjtBQVlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFWTjtBQVlNO0VBQ0UsZUFBQTtBQVZSO0FBZU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFiUjtBQWdCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBZFI7QUFtQkU7RUFDRSxxREFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBakJKO0FBbUJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBakJOO0FBcUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFuQko7QUFxQkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFuQk47QUFzQkk7RUFDRSxlQUFBO0FBcEJOO0FBd0JFO0VBQ0Usb0JBQUE7QUF0Qko7QUEwQkE7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdkJGO0FBeUJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQXZCSjtBQXlCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXZCTjtBQXlCTTtFQUNFLG1CQUFBO0VBQ0EsNkNBQUE7QUF2QlI7QUEwQk07RUFDRSxtQkFBQTtFQUNBLDRDQUFBO0FBeEJSO0FBNEJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBMUJOO0FBNEJNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQTFCUjtBQTZCTTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBM0JSO0FBZ0NFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUE5Qko7QUFrQ0E7RUFDRSxtQkFBQTtBQS9CRjtBQWlDRTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtBQS9CSjtBQWtDRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQWhDSjtBQWtDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQWhDTjtBQW9DTTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFsQ1I7QUFxQ007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBbkNSO0FBc0NNO0VBQ0UsY0FBQTtBQXBDUjtBQTJDRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBeENKO0FBNENBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBekNGO0FBMkNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUF6Q0o7QUEyQ0k7RUFDRSxlQUFBO0FBekNOO0FBOENBO0VBQ0U7SUFDRSw2Q0FBQTtFQTNDRjtFQTZDQTtJQUNFLDZDQUFBO0VBM0NGO0FBQ0Y7QUErQ0E7RUFDRTtJQUNFLGlDQUFBO0VBN0NGO0FBQ0YiLCJmaWxlIjoic2hhcmVkLXJpZGUtcHJvbXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgMCA4cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAuc2F2aW5ncy1iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1LCAjMjBjOTk3KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubm8tb3Bwb3J0dW5pdGllcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDhweCAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDAgMCA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ub3Bwb3J0dW5pdGllcy1saXN0IHtcclxuICBpb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIFxyXG4gICAgJi51cmdlbnQge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGMzNTQ1O1xyXG4gICAgICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmV4cGFuZGVkIHtcclxuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5yaWRlci1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgXHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJpZGVyLWRldGFpbHMge1xyXG4gICAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNjb3VudC1iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1LCAjMjBjOTk3KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIFxyXG4gICAgLmRpc2NvdW50LXZhbHVlIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudGltZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDRweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIFxyXG4gICAgJi51cmdlbnQge1xyXG4gICAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCAxNnB4IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucm91dGUtaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBcclxuICAucm91dGUtcG9pbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgXHJcbiAgICAucG9pbnQtbWFya2VyIHtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBcclxuICAgICAgJi5vcmlnaW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzODgwZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoNTYsIDEyOCwgMjU1LCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLmRlc3RpbmF0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wb2ludC10ZXh0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgXHJcbiAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3V0ZS1saW5lIHtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgIG1hcmdpbjogNHB4IDAgNHB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICB9XHJcbn1cclxuXHJcbi5leHBhbmRlZC1kZXRhaWxzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIFxyXG4gIGlvbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMCAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc2F2aW5ncy1hbW91bnQge1xyXG4gICAgICAgIGNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3R0b20taW5mbyB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIyMCwgNTMsIDY5LCAwLjIpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDIyMCwgNTMsIDY5LCAwLjQpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRGFyayBtb2RlIHN1cHBvcnRcclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gIC5yb3V0ZS1pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 45203:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/definitions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 93253:
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 45203);

const App = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('App', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_app_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 40731)).then(m => new m.AppWeb())
});



/***/ }),

/***/ 40591:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7621:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _capacitor_synapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/synapse */ 32933);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 40591);


const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 58391)).then(m => new m.GeolocationWeb())
});
(0,_capacitor_synapse__WEBPACK_IMPORTED_MODULE_1__.exposeSynapse)();



/***/ }),

/***/ 95325:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LatLngBounds": () => (/* binding */ LatLngBounds),
/* harmony export */   "MapType": () => (/* binding */ MapType)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implementation */ 81819);


class LatLngBounds {
  constructor(bounds) {
    this.southwest = bounds.southwest;
    this.center = bounds.center;
    this.northeast = bounds.northeast;
  }

  contains(point) {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsContains({
        bounds: _this,
        point
      });
      return result['contains'];
    })();
  }

  extend(point) {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsExtend({
        bounds: _this2,
        point
      });
      _this2.southwest = result['bounds']['southwest'];
      _this2.center = result['bounds']['center'];
      _this2.northeast = result['bounds']['northeast'];
      return _this2;
    })();
  }

}
var MapType;

(function (MapType) {
  /**
   * Basic map.
   */
  MapType["Normal"] = "Normal";
  /**
   * Satellite imagery with roads and labels.
   */

  MapType["Hybrid"] = "Hybrid";
  /**
   * Satellite imagery with no labels.
   */

  MapType["Satellite"] = "Satellite";
  /**
   * Topographic data.
   */

  MapType["Terrain"] = "Terrain";
  /**
   * No base map tiles.
   */

  MapType["None"] = "None";
})(MapType || (MapType = {}));

/***/ }),

/***/ 81819:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/implementation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorGoogleMaps": () => (/* binding */ CapacitorGoogleMaps)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);

const CapacitorGoogleMaps = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CapacitorGoogleMaps', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_google-maps_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 20601)).then(m => new m.CapacitorGoogleMapsWeb())
});
CapacitorGoogleMaps.addListener('isMapInFocus', data => {
  var _a;

  const x = data.x;
  const y = data.y;
  const elem = document.elementFromPoint(x, y);
  const internalId = (_a = elem === null || elem === void 0 ? void 0 : elem.dataset) === null || _a === void 0 ? void 0 : _a.internalId;
  const mapInFocus = internalId === data.mapId;
  CapacitorGoogleMaps.dispatchMapEvent({
    id: data.mapId,
    focus: mapInFocus
  });
});


/***/ }),

/***/ 94822:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_1__.GoogleMap),
/* harmony export */   "LatLngBounds": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.LatLngBounds),
/* harmony export */   "MapType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.MapType)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 95325);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 18968);
/* eslint-disable @typescript-eslint/no-namespace */




/***/ }),

/***/ 18968:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/map.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 95325);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./implementation */ 81819);





class MapCustomElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = '';

    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'ios') {
      this.style.overflow = 'scroll';
      this.style['-webkit-overflow-scrolling'] = 'touch';
      const overflowDiv = document.createElement('div');
      overflowDiv.style.height = '200%';
      this.appendChild(overflowDiv);
    }
  }

}

customElements.define('capacitor-google-map', MapCustomElement);
class GoogleMap {
  constructor(id) {
    this.element = null;
    this.resizeObserver = null;

    this.handleScrollEvent = () => this.updateMapBounds();

    this.id = id;
  }
  /**
   * Creates a new instance of a Google Map
   * @param options
   * @param callback
   * @returns GoogleMap
   */


  static create(options, callback) {
    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newMap = new GoogleMap(options.id);

      if (!options.element) {
        throw new Error('container element is required');
      }

      if (options.config.androidLiteMode === undefined) {
        options.config.androidLiteMode = false;
      }

      newMap.element = options.element;
      newMap.element.dataset.internalId = options.id;
      const elementBounds = yield GoogleMap.getElementBounds(options.element);
      options.config.width = elementBounds.width;
      options.config.height = elementBounds.height;
      options.config.x = elementBounds.x;
      options.config.y = elementBounds.y;
      options.config.devicePixelRatio = window.devicePixelRatio;

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        newMap.initScrolling();
      }

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        options.element = {};

        const getMapBounds = () => {
          var _a, _b;

          const mapRect = (_b = (_a = newMap.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : {};
          return {
            x: mapRect.x,
            y: mapRect.y,
            width: mapRect.width,
            height: mapRect.height
          };
        };

        const onDisplay = () => {
          _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onDisplay({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };

        const onResize = () => {
          _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onResize({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };

        const ionicPage = newMap.element.closest('.ion-page');

        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'ios' && ionicPage) {
          ionicPage.addEventListener('ionViewWillEnter', () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
          ionicPage.addEventListener('ionViewDidEnter', () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
        }

        const lastState = {
          width: elementBounds.width,
          height: elementBounds.height,
          isHidden: false
        };
        newMap.resizeObserver = new ResizeObserver(() => {
          if (newMap.element != null) {
            const mapRect = newMap.element.getBoundingClientRect();
            const isHidden = mapRect.width === 0 && mapRect.height === 0;

            if (!isHidden) {
              if (lastState.isHidden) {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'ios' && !ionicPage) {
                  onDisplay();
                }
              } else if (lastState.width !== mapRect.width || lastState.height !== mapRect.height) {
                onResize();
              }
            }

            lastState.width = mapRect.width;
            lastState.height = mapRect.height;
            lastState.isHidden = isHidden;
          }
        });
        newMap.resizeObserver.observe(newMap.element);
      } // small delay to allow for iOS WKWebView to setup corresponding element sub-scroll views ???


      yield new Promise((resolve, reject) => {
        setTimeout( /*#__PURE__*/(0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.create(options);
            resolve(undefined);
          } catch (err) {
            reject(err);
          }
        }), 200);
      });

      if (callback) {
        const onMapReadyListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMapReady', data => {
          if (data.mapId == newMap.id) {
            callback(data);
            onMapReadyListener.remove();
          }
        });
      }

      return newMap;
    })();
  }

  static getElementBounds(element) {
    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        let elementBounds = element.getBoundingClientRect();

        if (elementBounds.width == 0) {
          let retries = 0;
          const boundsInterval = setInterval(function () {
            if (elementBounds.width == 0 && retries < 30) {
              elementBounds = element.getBoundingClientRect();
              retries++;
            } else {
              if (retries == 30) {
                console.warn('Map size could not be determined');
              }

              clearInterval(boundsInterval);
              resolve(elementBounds);
            }
          }, 100);
        } else {
          resolve(elementBounds);
        }
      });
    })();
  }
  /**
   * Enable touch events on native map
   *
   * @returns void
   */


  enableTouch() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableTouch({
        id: _this.id
      });
    })();
  }
  /**
   * Disable touch events on native map
   *
   * @returns void
   */


  disableTouch() {
    var _this2 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.disableTouch({
        id: _this2.id
      });
    })();
  }
  /**
   * Enable marker clustering
   *
   * @param minClusterSize - The minimum number of markers that can be clustered together.
   * @defaultValue 4
   *
   * @returns void
   */


  enableClustering(minClusterSize) {
    var _this3 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableClustering({
        id: _this3.id,
        minClusterSize
      });
    })();
  }
  /**
   * Disable marker clustering
   *
   * @returns void
   */


  disableClustering() {
    var _this4 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.disableClustering({
        id: _this4.id
      });
    })();
  }
  /**
   * Adds a tile overlay to the map
   *
   * @param tileOverlay
   * @returns created tile overlay id
   */


  addTileOverlay(tileOverlay) {
    var _this5 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addTileOverlay({
        id: _this5.id,
        tileOverlay
      });
      return res.id;
    })();
  }
  /**
   * Removes a tile overlay from the map
   *
   * @param id of the tile overlay to remove from the map
   * @returns void
   */


  removeTileOverlay(id) {
    var _this6 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeTileOverlay({
        id: _this6.id,
        tileOverlayId: id
      });
    })();
  }
  /**
   * Adds a marker to the map
   *
   * @param marker
   * @returns created marker id
   */


  addMarker(marker) {
    var _this7 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addMarker({
        id: _this7.id,
        marker
      });
      return res.id;
    })();
  }
  /**
   * Adds multiple markers to the map
   *
   * @param markers
   * @returns array of created marker IDs
   */


  addMarkers(markers) {
    var _this8 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addMarkers({
        id: _this8.id,
        markers
      });
      return res.ids;
    })();
  }
  /**
   * Remove marker from the map
   *
   * @param id id of the marker to remove from the map
   * @returns
   */


  removeMarker(id) {
    var _this9 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarker({
        id: _this9.id,
        markerId: id
      });
    })();
  }
  /**
   * Remove markers from the map
   *
   * @param ids array of ids to remove from the map
   * @returns
   */


  removeMarkers(ids) {
    var _this0 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarkers({
        id: _this0.id,
        markerIds: ids
      });
    })();
  }

  addPolygons(polygons) {
    var _this1 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolygons({
        id: _this1.id,
        polygons
      });
      return res.ids;
    })();
  }

  addPolylines(polylines) {
    var _this10 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolylines({
        id: _this10.id,
        polylines
      });
      return res.ids;
    })();
  }

  removePolygons(ids) {
    var _this11 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolygons({
        id: _this11.id,
        polygonIds: ids
      });
    })();
  }

  addCircles(circles) {
    var _this12 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addCircles({
        id: _this12.id,
        circles
      });
      return res.ids;
    })();
  }

  removeCircles(ids) {
    var _this13 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeCircles({
        id: _this13.id,
        circleIds: ids
      });
    })();
  }

  removePolylines(ids) {
    var _this14 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolylines({
        id: _this14.id,
        polylineIds: ids
      });
    })();
  }
  /**
   * Destroy the current instance of the map
   */


  destroy() {
    var _this15 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        _this15.disableScrolling();
      }

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        (_a = _this15.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      }

      _this15.removeAllMapListeners();

      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.destroy({
        id: _this15.id
      });
    })();
  }
  /**
   * Update the map camera configuration
   *
   * @param config
   * @returns
   */


  setCamera(config) {
    var _this16 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setCamera({
        id: _this16.id,
        config
      });
    })();
  }

  getMapType() {
    var _this17 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        type
      } = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapType({
        id: _this17.id
      });
      return _definitions__WEBPACK_IMPORTED_MODULE_2__.MapType[type];
    })();
  }
  /**
   * Sets the type of map tiles that should be displayed.
   *
   * @param mapType
   * @returns
   */


  setMapType(mapType) {
    var _this18 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setMapType({
        id: _this18.id,
        mapType
      });
    })();
  }
  /**
   * Sets whether indoor maps are shown, where available.
   *
   * @param enabled
   * @returns
   */


  enableIndoorMaps(enabled) {
    var _this19 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableIndoorMaps({
        id: _this19.id,
        enabled
      });
    })();
  }
  /**
   * Controls whether the map is drawing traffic data, if available.
   *
   * @param enabled
   * @returns
   */


  enableTrafficLayer(enabled) {
    var _this20 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableTrafficLayer({
        id: _this20.id,
        enabled
      });
    })();
  }
  /**
   * Show accessibility elements for overlay objects, such as Marker and Polyline.
   *
   * Only available on iOS.
   *
   * @param enabled
   * @returns
   */


  enableAccessibilityElements(enabled) {
    var _this21 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableAccessibilityElements({
        id: _this21.id,
        enabled
      });
    })();
  }
  /**
   * Set whether the My Location dot and accuracy circle is enabled.
   *
   * @param enabled
   * @returns
   */


  enableCurrentLocation(enabled) {
    var _this22 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableCurrentLocation({
        id: _this22.id,
        enabled
      });
    })();
  }
  /**
   * Set padding on the 'visible' region of the view.
   *
   * @param padding
   * @returns
   */


  setPadding(padding) {
    var _this23 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setPadding({
        id: _this23.id,
        padding
      });
    })();
  }
  /**
   * Get the map's current viewport latitude and longitude bounds.
   *
   * @returns {LatLngBounds}
   */


  getMapBounds() {
    var _this24 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new _definitions__WEBPACK_IMPORTED_MODULE_2__.LatLngBounds(yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapBounds({
        id: _this24.id
      }));
    })();
  }

  fitBounds(bounds, padding) {
    var _this25 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.fitBounds({
        id: _this25.id,
        bounds,
        padding
      });
    })();
  }

  initScrolling() {
    const ionContents = document.getElementsByTagName('ion-content'); // eslint-disable-next-line @typescript-eslint/prefer-for-of

    for (let i = 0; i < ionContents.length; i++) {
      ionContents[i].scrollEvents = true;
    }

    window.addEventListener('ionScroll', this.handleScrollEvent);
    window.addEventListener('scroll', this.handleScrollEvent);
    window.addEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.addEventListener('change', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    } else {
      window.addEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    }
  }

  disableScrolling() {
    window.removeEventListener('ionScroll', this.handleScrollEvent);
    window.removeEventListener('scroll', this.handleScrollEvent);
    window.removeEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.removeEventListener('change', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    } else {
      window.removeEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    }
  }

  updateMapBounds() {
    if (this.element) {
      const mapRect = this.element.getBoundingClientRect();
      _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onScroll({
        id: this.id,
        mapBounds: {
          x: mapRect.x,
          y: mapRect.y,
          width: mapRect.width,
          height: mapRect.height
        }
      });
    }
  }
  /*
  private findContainerElement(): HTMLElement | null {
    if (!this.element) {
      return null;
    }
       let parentElement = this.element.parentElement;
    while (parentElement !== null) {
      if (window.getComputedStyle(parentElement).overflowY !== 'hidden') {
        return parentElement;
      }
         parentElement = parentElement.parentElement;
    }
       return null;
  }
  */

  /**
   * Set the event listener on the map for 'onCameraIdle' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraIdleListener(callback) {
    var _this26 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this26.onCameraIdleListener) {
        _this26.onCameraIdleListener.remove();
      }

      if (callback) {
        _this26.onCameraIdleListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCameraIdle', _this26.generateCallback(callback));
      } else {
        _this26.onCameraIdleListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onBoundsChanged' events.
   *
   * @param callback
   * @returns
   */


  setOnBoundsChangedListener(callback) {
    var _this27 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this27.onBoundsChangedListener) {
        _this27.onBoundsChangedListener.remove();
      }

      if (callback) {
        _this27.onBoundsChangedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onBoundsChanged', _this27.generateCallback(callback));
      } else {
        _this27.onBoundsChangedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCameraMoveStarted' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraMoveStartedListener(callback) {
    var _this28 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this28.onCameraMoveStartedListener) {
        _this28.onCameraMoveStartedListener.remove();
      }

      if (callback) {
        _this28.onCameraMoveStartedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCameraMoveStarted', _this28.generateCallback(callback));
      } else {
        _this28.onCameraMoveStartedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterClickListener(callback) {
    var _this29 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this29.onClusterClickListener) {
        _this29.onClusterClickListener.remove();
      }

      if (callback) {
        _this29.onClusterClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onClusterClick', _this29.generateCallback(callback));
      } else {
        _this29.onClusterClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterInfoWindowClickListener(callback) {
    var _this30 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this30.onClusterInfoWindowClickListener) {
        _this30.onClusterInfoWindowClickListener.remove();
      }

      if (callback) {
        _this30.onClusterInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onClusterInfoWindowClick', _this30.generateCallback(callback));
      } else {
        _this30.onClusterInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnInfoWindowClickListener(callback) {
    var _this31 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this31.onInfoWindowClickListener) {
        _this31.onInfoWindowClickListener.remove();
      }

      if (callback) {
        _this31.onInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onInfoWindowClick', _this31.generateCallback(callback));
      } else {
        _this31.onInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMapClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMapClickListener(callback) {
    var _this32 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this32.onMapClickListener) {
        _this32.onMapClickListener.remove();
      }

      if (callback) {
        _this32.onMapClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMapClick', _this32.generateCallback(callback));
      } else {
        _this32.onMapClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onPolygonClick' events.
   *
   * @param callback
   * @returns
   */


  setOnPolygonClickListener(callback) {
    var _this33 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this33.onPolygonClickListener) {
        _this33.onPolygonClickListener.remove();
      }

      if (callback) {
        _this33.onPolygonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onPolygonClick', _this33.generateCallback(callback));
      } else {
        _this33.onPolygonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCircleClick' events.
   *
   * @param callback
   * @returns
   */


  setOnCircleClickListener(callback) {
    var _this34 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this34.onCircleClickListener) [_this34.onCircleClickListener.remove()];

      if (callback) {
        _this34.onCircleClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCircleClick', _this34.generateCallback(callback));
      } else {
        _this34.onCircleClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerClickListener(callback) {
    var _this35 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this35.onMarkerClickListener) {
        _this35.onMarkerClickListener.remove();
      }

      if (callback) {
        _this35.onMarkerClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerClick', _this35.generateCallback(callback));
      } else {
        _this35.onMarkerClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onPolylineClick' events.
   *
   * @param callback
   * @returns
   */


  setOnPolylineClickListener(callback) {
    var _this36 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this36.onPolylineClickListener) {
        _this36.onPolylineClickListener.remove();
      }

      if (callback) {
        _this36.onPolylineClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onPolylineClick', _this36.generateCallback(callback));
      } else {
        _this36.onPolylineClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragStart' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragStartListener(callback) {
    var _this37 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this37.onMarkerDragStartListener) {
        _this37.onMarkerDragStartListener.remove();
      }

      if (callback) {
        _this37.onMarkerDragStartListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDragStart', _this37.generateCallback(callback));
      } else {
        _this37.onMarkerDragStartListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDrag' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragListener(callback) {
    var _this38 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this38.onMarkerDragListener) {
        _this38.onMarkerDragListener.remove();
      }

      if (callback) {
        _this38.onMarkerDragListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDrag', _this38.generateCallback(callback));
      } else {
        _this38.onMarkerDragListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragEnd' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragEndListener(callback) {
    var _this39 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this39.onMarkerDragEndListener) {
        _this39.onMarkerDragEndListener.remove();
      }

      if (callback) {
        _this39.onMarkerDragEndListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDragEnd', _this39.generateCallback(callback));
      } else {
        _this39.onMarkerDragEndListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationButtonClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationButtonClickListener(callback) {
    var _this40 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this40.onMyLocationButtonClickListener) {
        _this40.onMyLocationButtonClickListener.remove();
      }

      if (callback) {
        _this40.onMyLocationButtonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMyLocationButtonClick', _this40.generateCallback(callback));
      } else {
        _this40.onMyLocationButtonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationClickListener(callback) {
    var _this41 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this41.onMyLocationClickListener) {
        _this41.onMyLocationClickListener.remove();
      }

      if (callback) {
        _this41.onMyLocationClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMyLocationClick', _this41.generateCallback(callback));
      } else {
        _this41.onMyLocationClickListener = undefined;
      }
    })();
  }
  /**
   * Remove all event listeners on the map.
   *
   * @param callback
   * @returns
   */


  removeAllMapListeners() {
    var _this42 = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this42.onBoundsChangedListener) {
        _this42.onBoundsChangedListener.remove();

        _this42.onBoundsChangedListener = undefined;
      }

      if (_this42.onCameraIdleListener) {
        _this42.onCameraIdleListener.remove();

        _this42.onCameraIdleListener = undefined;
      }

      if (_this42.onCameraMoveStartedListener) {
        _this42.onCameraMoveStartedListener.remove();

        _this42.onCameraMoveStartedListener = undefined;
      }

      if (_this42.onClusterClickListener) {
        _this42.onClusterClickListener.remove();

        _this42.onClusterClickListener = undefined;
      }

      if (_this42.onClusterInfoWindowClickListener) {
        _this42.onClusterInfoWindowClickListener.remove();

        _this42.onClusterInfoWindowClickListener = undefined;
      }

      if (_this42.onInfoWindowClickListener) {
        _this42.onInfoWindowClickListener.remove();

        _this42.onInfoWindowClickListener = undefined;
      }

      if (_this42.onMapClickListener) {
        _this42.onMapClickListener.remove();

        _this42.onMapClickListener = undefined;
      }

      if (_this42.onPolylineClickListener) {
        _this42.onPolylineClickListener.remove();

        _this42.onPolylineClickListener = undefined;
      }

      if (_this42.onMarkerClickListener) {
        _this42.onMarkerClickListener.remove();

        _this42.onMarkerClickListener = undefined;
      }

      if (_this42.onPolygonClickListener) {
        _this42.onPolygonClickListener.remove();

        _this42.onPolygonClickListener = undefined;
      }

      if (_this42.onCircleClickListener) {
        _this42.onCircleClickListener.remove();

        _this42.onCircleClickListener = undefined;
      }

      if (_this42.onMarkerDragStartListener) {
        _this42.onMarkerDragStartListener.remove();

        _this42.onMarkerDragStartListener = undefined;
      }

      if (_this42.onMarkerDragListener) {
        _this42.onMarkerDragListener.remove();

        _this42.onMarkerDragListener = undefined;
      }

      if (_this42.onMarkerDragEndListener) {
        _this42.onMarkerDragEndListener.remove();

        _this42.onMarkerDragEndListener = undefined;
      }

      if (_this42.onMyLocationButtonClickListener) {
        _this42.onMyLocationButtonClickListener.remove();

        _this42.onMyLocationButtonClickListener = undefined;
      }

      if (_this42.onMyLocationClickListener) {
        _this42.onMyLocationClickListener.remove();

        _this42.onMyLocationClickListener = undefined;
      }
    })();
  }

  generateCallback(callback) {
    const mapId = this.id;
    return data => {
      if (data.mapId == mapId) {
        callback(data);
      }
    };
  }

}

/***/ }),

/***/ 28824:
/*!*******************************************************!*\
  !*** ./node_modules/@mapbox/polyline/src/polyline.js ***!
  \*******************************************************/
/***/ ((module) => {


/**
 * Based off of [the offical Google document](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)
 *
 * Some parts from [this implementation](http://facstaff.unca.edu/mcmcclur/GoogleMaps/EncodePolyline/PolylineEncoder.js)
 * by [Mark McClure](http://facstaff.unca.edu/mcmcclur/)
 *
 * @module polyline
 */

var polyline = {};

function py2_round(value) {
  // Google's polyline algorithm uses the same rounding strategy as Python 2, which is different from JS for negative values
  return Math.floor(Math.abs(value) + 0.5) * (value >= 0 ? 1 : -1);
}

function encode(current, previous, factor) {
  current = py2_round(current * factor);
  previous = py2_round(previous * factor);
  var coordinate = (current - previous) * 2;

  if (coordinate < 0) {
    coordinate = -coordinate - 1;
  }

  var output = '';

  while (coordinate >= 0x20) {
    output += String.fromCharCode((0x20 | coordinate & 0x1f) + 63);
    coordinate /= 32;
  }

  output += String.fromCharCode((coordinate | 0) + 63);
  return output;
}
/**
 * Decodes to a [latitude, longitude] coordinates array.
 *
 * This is adapted from the implementation in Project-OSRM.
 *
 * @param {String} str
 * @param {Number} precision
 * @returns {Array}
 *
 * @see https://github.com/Project-OSRM/osrm-frontend/blob/master/WebContent/routing/OSRM.RoutingGeometry.js
 */


polyline.decode = function (str, precision) {
  var index = 0,
      lat = 0,
      lng = 0,
      coordinates = [],
      shift = 0,
      result = 0,
      byte = null,
      latitude_change,
      longitude_change,
      factor = Math.pow(10, Number.isInteger(precision) ? precision : 5); // Coordinates have variable length when encoded, so just keep
  // track of whether we've hit the end of the string. In each
  // loop iteration, a single coordinate is decoded.

  while (index < str.length) {
    // Reset shift, result, and byte
    byte = null;
    shift = 1;
    result = 0;

    do {
      byte = str.charCodeAt(index++) - 63;
      result += (byte & 0x1f) * shift;
      shift *= 32;
    } while (byte >= 0x20);

    latitude_change = result & 1 ? (-result - 1) / 2 : result / 2;
    shift = 1;
    result = 0;

    do {
      byte = str.charCodeAt(index++) - 63;
      result += (byte & 0x1f) * shift;
      shift *= 32;
    } while (byte >= 0x20);

    longitude_change = result & 1 ? (-result - 1) / 2 : result / 2;
    lat += latitude_change;
    lng += longitude_change;
    coordinates.push([lat / factor, lng / factor]);
  }

  return coordinates;
};
/**
 * Encodes the given [latitude, longitude] coordinates array.
 *
 * @param {Array.<Array.<Number>>} coordinates
 * @param {Number} precision
 * @returns {String}
 */


polyline.encode = function (coordinates, precision) {
  if (!coordinates.length) {
    return '';
  }

  var factor = Math.pow(10, Number.isInteger(precision) ? precision : 5),
      output = encode(coordinates[0][0], 0, factor) + encode(coordinates[0][1], 0, factor);

  for (var i = 1; i < coordinates.length; i++) {
    var a = coordinates[i],
        b = coordinates[i - 1];
    output += encode(a[0], b[0], factor);
    output += encode(a[1], b[1], factor);
  }

  return output;
};

function flipped(coords) {
  var flipped = [];

  for (var i = 0; i < coords.length; i++) {
    var coord = coords[i].slice();
    flipped.push([coord[1], coord[0]]);
  }

  return flipped;
}
/**
 * Encodes a GeoJSON LineString feature/geometry.
 *
 * @param {Object} geojson
 * @param {Number} precision
 * @returns {String}
 */


polyline.fromGeoJSON = function (geojson, precision) {
  if (geojson && geojson.type === 'Feature') {
    geojson = geojson.geometry;
  }

  if (!geojson || geojson.type !== 'LineString') {
    throw new Error('Input must be a GeoJSON LineString');
  }

  return polyline.encode(flipped(geojson.coordinates), precision);
};
/**
 * Decodes to a GeoJSON LineString geometry.
 *
 * @param {String} str
 * @param {Number} precision
 * @returns {Object}
 */


polyline.toGeoJSON = function (str, precision) {
  var coords = polyline.decode(str, precision);
  return {
    type: 'LineString',
    coordinates: flipped(coords)
  };
};

if ( true && module.exports) {
  module.exports = polyline;
}

/***/ }),

/***/ 28653:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 96936);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 78947);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }

  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}

/***/ }),

/***/ 32933:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/synapse/dist/synapse.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exposeSynapse": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);


function s(t) {
  t.CapacitorUtils.Synapse = new Proxy({}, {
    get(e, n) {
      return new Proxy({}, {
        get(w, o) {
          return (c, p, r) => {
            const i = t.Capacitor.Plugins[n];

            if (i === void 0) {
              r(new Error(`Capacitor plugin ${n} not found`));
              return;
            }

            if (typeof i[o] != "function") {
              r(new Error(`Method ${o} not found in Capacitor plugin ${n}`));
              return;
            }

            (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              try {
                const a = yield i[o](c);
                p(a);
              } catch (a) {
                r(a);
              }
            })();
          };
        }

      });
    }

  });
}

function u(t) {
  t.CapacitorUtils.Synapse = new Proxy({}, {
    get(e, n) {
      return t.cordova.plugins[n];
    }

  });
}

function f(t = !1) {
  typeof window > "u" || (window.CapacitorUtils = window.CapacitorUtils || {}, window.Capacitor !== void 0 && !t ? s(window) : window.cordova !== void 0 && u(window));
}



/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map