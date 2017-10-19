webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigations_tabs__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.goTo = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__navigations_tabs__["a" /* TabsPage */], {
            item: item
        });
        // this.navCtrl.push(HomePage);
        //this.navCtrl.setRoot(HomePage);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\login\login.html"*/'<!--<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>-->\n\n\n\n<ion-content no-padding style="background: #34495e;">\n\n    <div class="" style="margin: 0 10%; margin-top: 25%">\n\n        <div class="text-center">\n\n            <h4 style="color: #fff">Sign in</h4>\n\n        </div>\n\n        <div>\n\n            <div>\n\n                <button class="btn btn-success" style="width:100%;margin: 6px 0;">\n\n                    <span class="glyphicon glyphicon-phone" ></span> \n\n                    <span> Phone Number</span>\n\n                </button>\n\n            </div>\n\n            <div>\n\n                <button class="btn btn-primary" style="width:100%;margin: 6px 0;">\n\n                    <span class="glyphicon glyphicon-user"></span> \n\n                    Facebook\n\n                </button>\n\n            </div>\n\n            <div>\n\n                <button class="btn btn-danger" style="width:100%;margin: 6px 0;">\n\n                    <span class="glyphicon glyphicon-envelope"></span> \n\n                    Google\n\n                </button>\n\n            </div>\n\n        </div>\n\n        <div style="margin-top: 5%;">\n\n            <a>\n\n                <p class="text-center" style="color:#fff">\n\n                    <u>Or sign in with your account</u>\n\n                </p>\n\n            </a>\n\n        </div>\n\n\n\n        <div style="margin-top: 25%;">\n\n            <div class="input-group">\n\n                <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-envelope"></span></span>\n\n                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">\n\n            </div>\n\n            <div class="input-group">\n\n                <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-lock"></span></span>\n\n                <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">\n\n            </div>\n\n            <button class="btn btn-info" style="width:100%;margin: 6px 0;" (click)="goTo()">\n\n                <span> Sign in</span>\n\n            </button>\n\n            <div style="margin-top: 5%;">\n\n                <a>\n\n                    <p class="text-center" style="color:#fff">\n\n                        <u>Forgot password?</u>\n\n                    </p>\n\n                </a>\n\n            </div>\n\n            <div style="margin-top: 25%;">\n\n                <a>\n\n                    <h4 class="text-center" style="color:#fff">\n\n                        Sign up\n\n                    </h4>\n\n                </a>\n\n            </div>\n\n        </div>\n\n\n\n\n\n        <div></div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_survey__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_manage__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__survey_survey__["a" /* SurveyPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_4__manage_manage__["a" /* ManagePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\navigations\tabs.html"*/'<ion-tabs>\n\n    <ion-tab tabIcon="home" tabTitle="Home" [root]="tab1"></ion-tab>\n\n    <ion-tab tabIcon="list-box" tabTitle="Survey" [root]="tab2"></ion-tab>\n\n    <ion-tab tabIcon="contacts" tabTitle="Group" [root]="tab3"></ion-tab>\n\n    <ion-tab tabIcon="apps" tabTitle="Manage" [root]="tab4"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\navigations\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePage = (function () {
    function HomePage() {
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            HOME\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-item>\n\n        <ion-label>Your Poll List: </ion-label>\n\n    </ion-item>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>My Neighbor Totoro</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Raiders of the Lost Ark</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Ghostbusters</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Batman</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Back to the Future</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>The Empire Strikes Back</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>The Terminator</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyPage = (function () {
    function SurveyPage(navCtrl) {
        this.navCtrl = navCtrl;
        // Id is 2, nav refers to Tab2
        console.log(this.navCtrl.id);
    }
    return SurveyPage;
}());
SurveyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-survey',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\survey\survey.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        SURVEY PAGE\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n      <h1>SURVEY PAGE</h1>\n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\survey\survey.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], SurveyPage);

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagePage = (function () {
    function ManagePage() {
    }
    return ManagePage;
}());
ManagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-manage',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\manage\manage.html"*/'<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\manage\manage.html"*/
    }),
    __metadata("design:paramtypes", [])
], ManagePage);

//# sourceMappingURL=manage.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileInfor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProfileInfor = (function () {
    function EditProfileInfor(params) {
        this.isEditPassword = false;
        this.isEditEmail = false;
        this.item = params.data.item;
        switch (this.item.type) {
            case 1:
                this.isEditPassword = true;
                break;
            case 2:
                this.isEditEmail = true;
                break;
        }
    }
    return EditProfileInfor;
}());
EditProfileInfor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\edit-profile-infor\edit-profile-infor.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{ item.title }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <p *ngIf="isEditPassword">password</p>\n\n    <p *ngIf="isEditEmail">email</p> -->\n\n  <div *ngIf="isEditPassword">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label stacked>Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Retype Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button>Save</button>\n\n  </div>\n\n  <div *ngIf="isEditEmail">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label stacked>Email</ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button>Save</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\edit-profile-infor\edit-profile-infor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], EditProfileInfor);

//# sourceMappingURL=edit-profile-infor.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_product_product__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_register_user_register__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_survey_survey__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_navigations_tabs__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_my_profile_my_profile__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_infor_edit_profile_infor__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_manage_manage__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_product_product__["a" /* ProductPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_user_register_user_register__["a" /* UserRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_survey_survey__["a" /* SurveyPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_navigations_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_infor_edit_profile_infor__["a" /* EditProfileInfor */],
            __WEBPACK_IMPORTED_MODULE_14__pages_manage_manage__["a" /* ManagePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_product_product__["a" /* ProductPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_user_register_user_register__["a" /* UserRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_survey_survey__["a" /* SurveyPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_navigations_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_infor_edit_profile_infor__["a" /* EditProfileInfor */],
            __WEBPACK_IMPORTED_MODULE_14__pages_manage_manage__["a" /* ManagePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductPage = (function () {
    function ProductPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ProductPage;
}());
ProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\product\product.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1>PRODUCT PAGE</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\product\product.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ProductPage);

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserRegisterPage = (function () {
    function UserRegisterPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return UserRegisterPage;
}());
UserRegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-register',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\user-register\user-register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Register\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    \n\n      <ion-item>\n\n        <ion-label stacked class="user-label-left">Username</ion-label>\n\n        <ion-input type="text" ></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n          <ion-label stacked class="user-label-left">Password</ion-label>\n\n        <ion-input type="password" ></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label stacked class="user-label-left">Email</ion-label>\n\n        <ion-input type="email" ></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button>Register</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\user-register\user-register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], UserRegisterPage);

//# sourceMappingURL=user-register.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_infor_edit_profile_infor__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyProfilePage = (function () {
    function MyProfilePage(nav) {
        this.nav = nav;
        // email: string;
        // constructor() {
        // this.username = "ttran229";
        // this.email = "ttran229@csc.com";
        // }
        this.items = [];
        this.username = "ttran229";
        this.items = [
            {
                'title': 'Edit Password',
                'type': 1
            },
            {
                'title': 'Edit Email',
                'type': 2
            }
        ];
    }
    MyProfilePage.prototype.openNavDetailsPage = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__edit_profile_infor_edit_profile_infor__["a" /* EditProfileInfor */], { item: item });
    };
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"D:\bai-tap\typescript\PJI\src\pages\my-profile\my-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      My Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- <ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img class="myprofile-photos" src="./assets/images/IMG_2807.JPG">\n\n      </ion-avatar>\n\n      <h2 class="myprofile-profilephotostext">Profile Photo</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Username</ion-label>\n\n      <ion-input type="text" readonly="true" [(ngModel)]="username"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Password</ion-label>\n\n      <ion-input type="password" name="txtPassword" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Retype Password</ion-label>\n\n      <ion-input type="password" name="txtRetyPassword" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Email</ion-label>\n\n      <ion-input type="email" name="txtEmail" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button name="btnUpdate">Update</button>\n\n</ion-content> -->\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img class="myprofile-photos" src="./assets/images/IMG_2807.JPG">\n\n      </ion-avatar>\n\n      <h2 class="myprofile-profilephotostext">Profile Photo</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n\n      <p class="myprofile-profilephotostext">Hello {{username}} !</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)">\n\n        <ion-label>{{item.title}}</ion-label>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bai-tap\typescript\PJI\src\pages\my-profile\my-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map