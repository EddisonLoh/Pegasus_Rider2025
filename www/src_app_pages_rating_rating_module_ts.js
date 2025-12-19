"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rating_rating_module_ts"],{

/***/ 31049:
/*!*******************************************************!*\
  !*** ./src/app/pages/rating/rating-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingPageRoutingModule": () => (/* binding */ RatingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating.page */ 77977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _rating_page__WEBPACK_IMPORTED_MODULE_0__.RatingPage
    }
];
class RatingPageRoutingModule {
}
RatingPageRoutingModule.ɵfac = function RatingPageRoutingModule_Factory(t) { return new (t || RatingPageRoutingModule)(); };
RatingPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RatingPageRoutingModule });
RatingPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RatingPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 34176:
/*!***********************************************!*\
  !*** ./src/app/pages/rating/rating.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingPageModule": () => (/* binding */ RatingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 58385);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _rating_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating-routing.module */ 31049);
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.page */ 77977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);








class RatingPageModule {
}
RatingPageModule.ɵfac = function RatingPageModule_Factory(t) { return new (t || RatingPageModule)(); };
RatingPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RatingPageModule });
RatingPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _rating_routing_module__WEBPACK_IMPORTED_MODULE_0__.RatingPageRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RatingPageModule, { declarations: [_rating_page__WEBPACK_IMPORTED_MODULE_1__.RatingPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _rating_routing_module__WEBPACK_IMPORTED_MODULE_0__.RatingPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ }),

/***/ 77977:
/*!*********************************************!*\
  !*** ./src/app/pages/rating/rating.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingPage": () => (/* binding */ RatingPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 58385);



class RatingPage {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() {
    }
    changeLanguage(lang) {
        this.translate.use(lang);
        localStorage.setItem('language', lang);
    }
}
RatingPage.ɵfac = function RatingPage_Factory(t) { return new (t || RatingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
RatingPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingPage, selectors: [["app-rating"]], decls: 16, vars: 3, consts: [["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "language-fab"], ["size", "medium", "color", "light"], ["name", "language-outline"], ["side", "top"], ["color", "light", "size", "small", 3, "click"]], template: function RatingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content")(6, "ion-fab", 0)(7, "ion-fab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-fab-list", 3)(10, "ion-fab-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingPage_Template_ion_fab_button_click_10_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-fab-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingPage_Template_ion_fab_button_click_13_listener() { return ctx.changeLanguage("ms"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "MS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "RATING.TITLE"));
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRpbmcucGFnZS5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_rating_rating_module_ts.js.map