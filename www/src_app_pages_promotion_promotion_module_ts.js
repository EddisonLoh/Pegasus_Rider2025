"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_promotion_promotion_module_ts"],{

/***/ 63973:
/*!*************************************************************!*\
  !*** ./src/app/pages/promotion/promotion-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionPageRoutingModule": () => (/* binding */ PromotionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _promotion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion.page */ 91242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _promotion_page__WEBPACK_IMPORTED_MODULE_0__.PromotionPage
    }
];
class PromotionPageRoutingModule {
}
PromotionPageRoutingModule.ɵfac = function PromotionPageRoutingModule_Factory(t) { return new (t || PromotionPageRoutingModule)(); };
PromotionPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PromotionPageRoutingModule });
PromotionPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PromotionPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 62145:
/*!*****************************************************!*\
  !*** ./src/app/pages/promotion/promotion.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionPageModule": () => (/* binding */ PromotionPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _promotion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion-routing.module */ 63973);
/* harmony import */ var _promotion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion.page */ 91242);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);








class PromotionPageModule {
}
PromotionPageModule.ɵfac = function PromotionPageModule_Factory(t) { return new (t || PromotionPageModule)(); };
PromotionPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PromotionPageModule });
PromotionPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _promotion_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromotionPageRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PromotionPageModule, { declarations: [_promotion_page__WEBPACK_IMPORTED_MODULE_1__.PromotionPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _promotion_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromotionPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ }),

/***/ 91242:
/*!***************************************************!*\
  !*** ./src/app/pages/promotion/promotion.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromotionPage": () => (/* binding */ PromotionPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 32124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);



class PromotionPage {
    constructor(nav, translate) {
        this.nav = nav;
        this.translate = translate;
    }
    ngOnInit() {
    }
    goBack() {
        this.nav.pop();
    }
    changeLanguage(lang) {
        this.translate.use(lang);
    }
}
PromotionPage.ɵfac = function PromotionPage_Factory(t) { return new (t || PromotionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
PromotionPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromotionPage, selectors: [["app-promotion"]], decls: 28, vars: 9, consts: [[1, "ion-no-border"], ["slot", "start"], ["color", "primary"], ["src", "../../../assets/imgs/promo.svg"], [2, "margin-top", "10%"], ["color", "primary", 1, "ion-text-center"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "language-fab"], ["size", "medium", "color", "light"], ["name", "language-outline"], ["side", "top"], ["color", "light", "size", "small", 3, "click"]], template: function PromotionPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-list-header", 4)(11, "ion-label", 5)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-fab", 6)(19, "ion-fab-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-fab-list", 9)(22, "ion-fab-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromotionPage_Template_ion_fab_button_click_22_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-fab-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromotionPage_Template_ion_fab_button_click_25_listener() { return ctx.changeLanguage("ms"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "MS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, "PROMOTION.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, "PROMOTION.NO_PROMO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, "PROMOTION.NO_PROMO_MESSAGE"));
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tb3Rpb24ucGFnZS5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_promotion_promotion_module_ts.js.map