"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_paymentcallback_paymentcallback_module_ts"],{

/***/ 51024:
/*!*******************************************************************!*\
  !*** ./src/app/paymentcallback/paymentcallback-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentcallbackPageRoutingModule": () => (/* binding */ PaymentcallbackPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _paymentcallback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymentcallback.page */ 51310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _paymentcallback_page__WEBPACK_IMPORTED_MODULE_0__.PaymentcallbackPage
    }
];
class PaymentcallbackPageRoutingModule {
}
PaymentcallbackPageRoutingModule.ɵfac = function PaymentcallbackPageRoutingModule_Factory(t) { return new (t || PaymentcallbackPageRoutingModule)(); };
PaymentcallbackPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PaymentcallbackPageRoutingModule });
PaymentcallbackPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentcallbackPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 70848:
/*!***********************************************************!*\
  !*** ./src/app/paymentcallback/paymentcallback.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentcallbackPageModule": () => (/* binding */ PaymentcallbackPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _paymentcallback_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymentcallback-routing.module */ 51024);
/* harmony import */ var _paymentcallback_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentcallback.page */ 51310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);








class PaymentcallbackPageModule {
}
PaymentcallbackPageModule.ɵfac = function PaymentcallbackPageModule_Factory(t) { return new (t || PaymentcallbackPageModule)(); };
PaymentcallbackPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PaymentcallbackPageModule });
PaymentcallbackPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _paymentcallback_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentcallbackPageRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaymentcallbackPageModule, { declarations: [_paymentcallback_page__WEBPACK_IMPORTED_MODULE_1__.PaymentcallbackPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _paymentcallback_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentcallbackPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ }),

/***/ 51310:
/*!*********************************************************!*\
  !*** ./src/app/paymentcallback/paymentcallback.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentcallbackPage": () => (/* binding */ PaymentcallbackPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 58385);




class PaymentcallbackPage {
    constructor(route, router, translate) {
        this.route = route;
        this.router = router;
        this.translate = translate;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const status = params['status'];
            this.statusMessage = this.getStatusMessage(status);
        });
    }
    getStatusMessage(status) {
        switch (status) {
            case 'success':
                return 'Payment was successful!';
            case 'cancelled':
                return 'Payment was cancelled.';
            case 'failed':
                return 'Payment failed. Please try again.';
            default:
                return 'Payment status unknown.';
        }
    }
    goBack() {
        this.router.navigate(['/home']); // Replace with your desired route
    }
    changeLanguage(lang) {
        this.translate.use(lang);
        localStorage.setItem('language', lang);
    }
}
PaymentcallbackPage.ɵfac = function PaymentcallbackPage_Factory(t) { return new (t || PaymentcallbackPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
PaymentcallbackPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentcallbackPage, selectors: [["app-paymentcallback"]], decls: 22, vars: 7, consts: [[1, "status"], [3, "click"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "language-fab"], ["size", "medium", "color", "light"], ["name", "language-outline"], ["side", "top"], ["color", "light", "size", "small", 3, "click"]], template: function PaymentcallbackPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content")(6, "div", 0)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentcallbackPage_Template_ion_button_click_9_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-fab", 2)(13, "ion-fab-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-fab-list", 5)(16, "ion-fab-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentcallbackPage_Template_ion_fab_button_click_16_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-fab-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentcallbackPage_Template_ion_fab_button_click_19_listener() { return ctx.changeLanguage("ms"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "PAYMENT_CALLBACK.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statusMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, "PAYMENT_CALLBACK.GO_BACK"));
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50Y2FsbGJhY2sucGFnZS5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_paymentcallback_paymentcallback_module_ts.js.map