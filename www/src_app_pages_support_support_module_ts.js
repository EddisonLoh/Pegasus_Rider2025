"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_support_support_module_ts"],{

/***/ 27544:
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageRoutingModule": () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.page */ 66227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_0__.SupportPage
    }
];
class SupportPageRoutingModule {
}
SupportPageRoutingModule.ɵfac = function SupportPageRoutingModule_Factory(t) { return new (t || SupportPageRoutingModule)(); };
SupportPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SupportPageRoutingModule });
SupportPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SupportPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 82602:
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageModule": () => (/* binding */ SupportPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-routing.module */ 27544);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page */ 66227);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);








class SupportPageModule {
}
SupportPageModule.ɵfac = function SupportPageModule_Factory(t) { return new (t || SupportPageModule)(); };
SupportPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SupportPageModule });
SupportPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SupportPageModule, { declarations: [_support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ }),

/***/ 66227:
/*!***********************************************!*\
  !*** ./src/app/pages/support/support.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPage": () => (/* binding */ SupportPage)
/* harmony export */ });
/* harmony import */ var C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/status-bar */ 19326);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var rxfire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxfire/auth */ 96890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/avatar.service */ 25083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ 61577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);













const _c0 = function (a0, a1) {
  return {
    "my-message": a0,
    "other-message": a1
  };
};

function SupportPage_ion_grid_12_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 23)(2, "div", 24)(3, "div", 25)(4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("offset", message_r5.myMsg ? 3 : 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c0, message_r5.myMsg, !message_r5.myMsg));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r5.fromName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 5, message_r5.createdAt == null ? null : message_r5.createdAt.toMillis(), "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r5.msg);
  }
}

function SupportPage_ion_grid_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SupportPage_ion_grid_12_ion_row_1_Template, 11, 11, "ion-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r0.messages));
  }
}

function SupportPage_div_13_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 30)(1, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-skeleton-text", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animated", true);
  }
}

function SupportPage_div_13_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 30)(1, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-skeleton-text", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animated", true);
  }
}

function SupportPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SupportPage_div_13_ion_item_1_Template, 3, 1, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SupportPage_div_13_ion_item_2_Template, 3, 1, "ion-item", 29);
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

function SupportPage_ion_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 33);
  }
}

function SupportPage_ion_list_header_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-list-header", 34)(1, "ion-label", 35)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, "SUPPORT.RESPOND_IMMEDIATELY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 4, "SUPPORT.TELL_US"));
  }
}

class SupportPage {
  constructor(chatService, router, translate, auth) {
    this.chatService = chatService;
    this.router = router;
    this.translate = translate;
    this.auth = auth;
    this.newMsg = '';
    this.hasNoData = false;
    this.skeletOns = [{}, {}, {}, {}];
    this.hideSkeleton = false;
    this.loading = true;
  }

  ngOnInit() {
    // Check authentication status
    (0,rxfire_auth__WEBPACK_IMPORTED_MODULE_4__.authState)(this.auth).subscribe(user => {
      if (user) {
        this.initializeChat();
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  initializeChat() {
    this.hideSkeleton = true;
    this.loading = true;
    this.messages = this.chatService.getMessage(); // Store subscription for cleanup

    this.messageSubscription = this.messages.subscribe({
      next: messages => {
        this.loading = false;
        this.hideSkeleton = false;
        this.hasNoData = messages.length === 0;

        if (messages.length > 0) {
          requestAnimationFrame(() => this.content.scrollToBottom(300));
        }
      },
      error: error => {
        console.error('Error loading messages:', error);
        this.loading = false;
        this.hideSkeleton = false;
        this.hasNoData = true; // Handle permission error specifically

        if (error.code === 'permission-denied') {
          // You might want to show a user-friendly message or redirect
          this.router.navigate(['/error'], {
            queryParams: {
              message: 'You do not have permission to access this chat.'
            }
          });
        }
      }
    });
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

  sendMessage() {
    var _this = this;

    return (0,C_Users_user_STABLE_Pegasus_Rider2025_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.newMsg.trim()) {
        try {
          yield _this.chatService.addChatMessage(_this.newMsg);
          _this.newMsg = '';

          _this.content.scrollToBottom();

          yield _this.chatService.updateMessageInfo();
        } catch (error) {
          console.error('Error sending message:', error);
        }
      }
    })();
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }

  ngOnDestroy() {
    // Cleanup subscriptions
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

}

SupportPage.ɵfac = function SupportPage_Factory(t) {
  return new (t || SupportPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.Auth));
};

SupportPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SupportPage,
  selectors: [["app-support"]],
  viewQuery: function SupportPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  decls: 36,
  vars: 12,
  consts: [[1, "ion-no-border"], ["slot", "start"], ["color", "primary"], ["slot", "end"], ["name", "call", "slot", "icon-only"], [1, "ion-padding"], [4, "ngIf"], ["lines", "none", 1, "ion-no-padding"], ["src", "../../../assets/imgs/chat.svg", 4, "ngIf"], ["style", "margin-top: 10%", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "language-fab"], ["size", "medium", "color", "light"], ["name", "language-outline"], ["side", "top"], ["color", "light", "size", "small", 3, "click"], ["color", "light"], [1, "ion-align-items-center"], ["size", "10"], ["autoGrow", "true", "rows", "1", "maxLength", "500", 1, "message-input", 3, "placeholder", "ngModel", "ionFocus", "ionBlur", "ngModelChange"], ["size", "2"], ["expand", "block", "fill", "clear", "color", "primary", 1, "msg-btn", 3, "disabled", "click"], ["name", "send", "slot", "icon-only"], [4, "ngFor", "ngForOf"], ["size", "9", 1, "message", 3, "offset", "ngClass"], [1, "message-bubble"], [1, "message-meta"], [1, "sender"], [1, "timestamp"], [1, "message-text"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], [2, "width", "250px", "height", "400px", 3, "animated"], [2, "width", "250px", "height", "400px", "left", "100px", 3, "animated"], ["src", "../../../assets/imgs/chat.svg"], [2, "margin-top", "10%"], ["color", "primary", 1, "ion-text-center"]],
  template: function SupportPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-buttons", 3)(6, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SupportPage_ion_grid_12_Template, 3, 3, "ion-grid", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SupportPage_div_13_Template, 3, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-list", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SupportPage_ion_img_15_Template, 1, 0, "ion-img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SupportPage_ion_list_header_16_Template, 8, 6, "ion-list-header", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-fab", 10)(18, "ion-fab-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-fab-list", 13)(21, "ion-fab-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupportPage_Template_ion_fab_button_click_21_listener() {
        return ctx.changeLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "EN");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-fab-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupportPage_Template_ion_fab_button_click_24_listener() {
        return ctx.changeLanguage("ms");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "MS");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-footer")(28, "ion-toolbar", 15)(29, "ion-row", 16)(30, "ion-col", 17)(31, "ion-textarea", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionFocus", function SupportPage_Template_ion_textarea_ionFocus_31_listener() {
        return ctx.Show();
      })("ionBlur", function SupportPage_Template_ion_textarea_ionBlur_31_listener() {
        return ctx.Hide();
      })("ngModelChange", function SupportPage_Template_ion_textarea_ngModelChange_31_listener($event) {
        return ctx.newMsg = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-col", 19)(34, "ion-button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupportPage_Template_ion_button_click_34_listener() {
        return ctx.sendMessage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "ion-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 8, "SUPPORT.TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideSkeleton);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hideSkeleton);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasNoData);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasNoData);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 10, "SUPPORT.START_TYPING"))("ngModel", ctx.newMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.newMsg === "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: [".message-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 6px;\n  resize: none;\n  margin-top: 0px;\n  --padding-start: 10px;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(0, 98, 255, 0.259);\n}\n\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  padding: 0 !important;\n  margin-bottom: 12px !important;\n}\n\n.my-message[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\n.other-message[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  animation-name: slide-top;\n  animation-duration: 0.6s;\n}\n\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding: 12px;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  word-break: break-word;\n}\n\n.my-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n}\n\n.other-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary);\n  color: #fff;\n}\n\n.message-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.sender[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.8;\n  white-space: nowrap;\n}\n\n.message-text[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: pre-line;\n}\n\n.no-messages[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #888;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNFLDJCQUFBO0VBQ0o7RUFDRTtJQUNFLHlCQUFBO0VBQ0o7QUFDRjs7QUFFRTtFQUNJLG1FQUFBO0FBQU47O0FBTUE7RUFDSSxxQ0FBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUhKOztBQU1BO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBSEo7O0FBTUE7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFNQTtFQUNJLHFDQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1BO0VBQ0ksc0NBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSEoiLCJmaWxlIjoic3VwcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLXRvcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2xpZGUtdG9wIHtcclxuICAgICAgYW5pbWF0aW9uOiBzbGlkZS10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuIFxyXG5pb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgOTgsIDI1NSwgMC4yNTkpO1xyXG4gIH1cclxuICBcclxuLm1lc3NhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LW1lc3NhZ2Uge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5vdGhlci1tZXNzYWdlIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWJ1YmJsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubXktbWVzc2FnZSAubWVzc2FnZS1idWJibGUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ub3RoZXItbWVzc2FnZSAubWVzc2FnZS1idWJibGUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1lc3NhZ2UtbWV0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4uc2VuZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50aW1lc3RhbXAge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLm1lc3NhZ2UtdGV4dCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbi5uby1tZXNzYWdlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_support_support_module_ts.js.map