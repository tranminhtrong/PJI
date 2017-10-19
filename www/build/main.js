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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        selector: 'page-login',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\login\login.html"*/'<!--<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>-->\n\n\n\n<ion-content no-padding style="background: #34495e;">\n\n    <div class="" style="margin: 0 10%; margin-top: 25%">\n\n        <div class="text-center">\n\n            <h4 style="color: #fff">Sign in</h4>\n\n        </div>\n\n        <div>\n\n            <div>\n\n                <button class="btn btn-success" style="width:100%;margin: 6px 0;">\n\n                    <span class="glyphicon glyphicon-phone" ></span> \n\n                    <span> Phone Number</span>\n\n                </button>\n\n            </div>\n\n            <div>\n\n                <button class="btn btn-primary" style="width:100%;margin: 6px 0;">\n\n                    <span class="glyphicon glyphicon-user"></span> \n\n                    Facebook\n\n                </button>\n\n            </div>\n\n            <div>\n\n                <button class="btn btn-danger" style="width:100%;margin: 6px 0;">\n\n                    <span class="glyphicon glyphicon-envelope"></span> \n\n                    Google\n\n                </button>\n\n            </div>\n\n        </div>\n\n        <div style="margin-top: 5%;">\n\n            <a>\n\n                <p class="text-center" style="color:#fff">\n\n                    <u>Or sign in with your account</u>\n\n                </p>\n\n            </a>\n\n        </div>\n\n\n\n        <div style="margin-top: 25%;">\n\n            <div class="input-group">\n\n                <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-envelope"></span></span>\n\n                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">\n\n            </div>\n\n            <div class="input-group">\n\n                <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-lock"></span></span>\n\n                <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">\n\n            </div>\n\n            <button class="btn btn-info" style="width:100%;margin: 6px 0;" (click)="goTo()">\n\n                <span> Sign in</span>\n\n            </button>\n\n            <div style="margin-top: 5%;">\n\n                <a>\n\n                    <p class="text-center" style="color:#fff">\n\n                        <u>Forgot password?</u>\n\n                    </p>\n\n                </a>\n\n            </div>\n\n            <div style="margin-top: 25%;">\n\n                <a>\n\n                    <h4 class="text-center" style="color:#fff">\n\n                        Sign up\n\n                    </h4>\n\n                </a>\n\n            </div>\n\n        </div>\n\n\n\n\n\n        <div></div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_survey__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_manage__ = __webpack_require__(196);
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
        selector: 'page-tabs',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\navigations\tabs.html"*/'<!-- <ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Ionic Blank\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-tabs>\n\n    <ion-tab tabIcon="ios-home"  [root]="tab1" tabTitle="Home"></ion-tab>\n\n    <ion-tab tabIcon="ios-paper"  [root]="tab2" tabTitle="Poll"></ion-tab>\n\n    <ion-tab tabIcon="ios-clock"  [root]="tab3" tabTitle="History"></ion-tab>\n\n    <ion-tab tabIcon="ios-person" [root]="tab4" tabTitle="Profile"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\navigations\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
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
        selector: 'page-home',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            HOME\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-item>\n\n        <ion-label>Your Poll List: </ion-label>\n\n    </ion-item>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>My Neighbor Totoro</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Raiders of the Lost Ark</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Ghostbusters</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Batman</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>Back to the Future</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>The Empire Strikes Back</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/IMG_2807.JPG">\n\n            </ion-avatar>\n\n            <h2>The Terminator</h2>\n\n            <p>Expire on 10/20/2017</p>\n\n            <button ion-button  item-end>View</button>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\home\home.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_create_survey_create__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_detail_survey_detail__ = __webpack_require__(268);
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
    }
    SurveyPage.prototype.create = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__survey_create_survey_create__["a" /* SurveyCreatePage */]);
    };
    SurveyPage.prototype.goToDetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__survey_detail_survey_detail__["a" /* SurveyDetailPage */]);
    };
    return SurveyPage;
}());
SurveyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-survey',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\survey\survey.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #fff">\n\n        <ion-title>\n\n            <h4 class="">Polls</h4>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only style="color: #ff9e48" (click)="create()">\n\n                <ion-icon name="ios-add-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="">\n\n        <div class="" style="padding:5%;">\n\n            <div class="input-group">\n\n                <input type="text" class="form-control search-border" placeholder="Search for..." aria-label="Search for...">\n\n                <span class="input-group-btn ">\n\n                    <button class="btn">\n\n                        <span class="glyphicon glyphicon-search"></span>\n\n                    </button>\n\n                </span>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="list-data">\n\n            <div class="item-data col-lg-12 col-md-12 col-sm-12 nopadding">\n\n                <!-- <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">\n\n                    <img src="/assets/images/background2.jpg" alt="" class="list-data-image">\n\n                </div> -->\n\n\n\n                <div class="item-data-detail col-lg-10 col-md-10 col-sm-10 col-xs-10">\n\n                    <table>\n\n                        <tr>\n\n                            <td>\n\n                                <span style="font-size: 20px; font-weight: bold;">Title</span>\n\n                            </td>\n\n                        </tr>\n\n                        <tr>\n\n                            <td>\n\n                                <i>12/07/2017</i>\n\n                            </td>\n\n                        </tr>\n\n                    </table>\n\n                </div>\n\n                <button (click)="goToDetailPage()" style="min-height:50px; background-color:#ff9e48; color:#fff" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">\n\n                    <span class="glyphicon glyphicon-check"></span>\n\n                </button>\n\n\n\n            </div>\n\n\n\n            <div class="item-data col-lg-12 col-md-12 col-sm-12 nopadding">\n\n                <!-- <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">\n\n                    <img src="/assets/images/background2.jpg" alt="" class="list-data-image">\n\n                </div> -->\n\n\n\n                <div class="item-data-detail col-lg-10 col-md-10 col-sm-10 col-xs-10">\n\n                    <table>\n\n                        <tr>\n\n                            <td>\n\n                                <span style="font-size: 20px; font-weight: bold;">Title</span>\n\n                            </td>\n\n                        </tr>\n\n                        <tr>\n\n                            <td>\n\n                                <i>12/07/2017</i>\n\n                            </td>\n\n                        </tr>\n\n                    </table>\n\n                </div>\n\n                <button style="min-height:50px; background-color:#ff9e48; color:#fff" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">\n\n                    <span class="glyphicon glyphicon-check"></span>\n\n                </button>\n\n\n\n            </div>\n\n\n\n            <div class="item-data col-lg-12 col-md-12 col-sm-12 nopadding">\n\n                <!-- <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 nopadding">\n\n                    <img src="/assets/images/background2.jpg" alt="" class="list-data-image">\n\n                </div> -->\n\n\n\n                <div class="item-data-detail col-lg-10 col-md-10 col-sm-10 col-xs-10">\n\n                    <table>\n\n                        <tr>\n\n                            <td>\n\n                                <span style="font-size: 20px; font-weight: bold;">Title</span>\n\n                            </td>\n\n                        </tr>\n\n                        <tr>\n\n                            <td>\n\n                                <i>12/07/2017</i>\n\n                            </td>\n\n                        </tr>\n\n                    </table>\n\n                    <!-- <p>\n\n                        \n\n                        \n\n                    </p> -->\n\n\n\n                </div>\n\n                <button style="min-height:50px; background-color:#ff9e48; color:#fff" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 nopadding">\n\n                    <span class="glyphicon glyphicon-check"></span>\n\n                </button>\n\n\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\survey\survey.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SurveyPage);

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_survey_create_page2__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyCreatePage = (function () {
    function SurveyCreatePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.showNextButton = false;
        this.answers = ['item1', 'item2', 'item3', 'item4'];
    }
    SurveyCreatePage.prototype.createAnswer = function () {
        this.answers.push("item" + (this.answers.length + 1));
        this.showNextButton = false;
    };
    SurveyCreatePage.prototype.deleteAnswer = function (index) {
        this.answers.splice(index, 1);
        // Check exits answer
        if (this.answers.length == 0)
            this.showNextButton = true;
    };
    SurveyCreatePage.prototype.nextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_survey_create_page2__["a" /* SurveyCreate2Page */]);
    };
    return SurveyCreatePage;
}());
SurveyCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-survey-create',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\survey\create\survey-create.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #fff">\n\n        <ion-title>\n\n            <h4 class="">Building A Poll</h4>\n\n        </ion-title>\n\n        <!-- <ion-buttons end>\n\n            <button class="btn btn-success">\n\n                NEXT\n\n            </button>\n\n        </ion-buttons> -->\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <h3>Poll Question: </h3>\n\n        </div>\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <input type="text" class="form-control" />\n\n        </div>\n\n    </div>\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <h3>Answer Choices: </h3>\n\n        </div>\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <div class="input-group" style="margin: 3% 0;" *ngFor="let item of answers; let i = index;">\n\n                <span class="input-group-addon" id="basic-addon1">{{i+1}}</span>\n\n                <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1">\n\n                <span class="input-group-btn">\n\n                    <button class="btn btn-secondary" type="button" (click)="deleteAnswer(i)">X</button>\n\n                </span>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin: 3% 0;">\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <button class="btn btn-blue form-control" (click)="createAnswer()">Create other answer</button>\n\n        </div>\n\n    </div>\n\n\n\n\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin: 3% 0;" [hidden]="showNextButton">\n\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n            <button type="button" class="btn btn-success form-control" (click)="nextPage()">Next</button>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\survey\create\survey-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SurveyCreatePage);

//# sourceMappingURL=survey-create.js.map

/***/ }),

/***/ 196:
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
        selector: 'page-manage',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\manage\manage.html"*/'<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>\n\n<div class="floating-box">Floating box</div>'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\manage\manage.html"*/
    }),
    __metadata("design:paramtypes", [])
], ManagePage);

//# sourceMappingURL=manage.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileInfor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\edit-profile-infor\edit-profile-infor.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{ item.title }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <p *ngIf="isEditPassword">password</p>\n\n    <p *ngIf="isEditEmail">email</p> -->\n\n  <div *ngIf="isEditPassword">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label stacked>Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Retype Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button>Save</button>\n\n  </div>\n\n  <div *ngIf="isEditEmail">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label stacked>Email</ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button>Save</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\edit-profile-infor\edit-profile-infor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], EditProfileInfor);

//# sourceMappingURL=edit-profile-infor.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_product_product__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_register_user_register__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_survey_survey__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_navigations_tabs__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_my_profile_my_profile__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_profile_infor_edit_profile_infor__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_manage_manage__ = __webpack_require__(196);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Research\Ionic\PJI\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyCreate2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyCreate2Page = (function () {
    function SurveyCreate2Page(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.allowChecked = false;
        this.includeChecked = true;
    }
    SurveyCreate2Page.prototype.change = function (item) {
        var _this = this;
        if (item) {
            var prompt_1 = this.alertCtrl.create({
                title: '',
                message: "Maximum number of items that can be selected? ",
                inputs: [
                    {
                        name: 'Number',
                        placeholder: '0'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            _this.allowChecked = false;
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Save',
                        handler: function (data) {
                            console.log('Saved clicked');
                        }
                    }
                ]
            });
            prompt_1.present();
        }
    };
    return SurveyCreate2Page;
}());
SurveyCreate2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-survey-create-page2',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\survey\create\survey-create-page2.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #fff">\n\n        <ion-title>\n\n            <h4 class="">Options</h4>\n\n        </ion-title>\n\n        <!-- <ion-buttons end>\n\n                <button class="btn btn-success">\n\n                    NEXT\n\n                </button>\n\n            </ion-buttons> -->\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <!-- <ion-list>\n\n        <ion-item *ngFor="#item of items">\n\n            <ion-label>{{item}}</ion-label>\n\n            <ion-checkbox (change)="change($event, item)"></ion-checkbox>\n\n        </ion-item>\n\n    </ion-list> -->\n\n    <!-- <h3 class="text-center" style="color: #ff741b"></h3> -->\n\n    <ion-item>\n\n        <ion-label class="label">Include an "Other, please specify:" text box</ion-label>\n\n        <ion-checkbox checked="includeChecked" [(ngModel)]="includeChecked"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label class="">Allow multiple selections</ion-label>\n\n        <ion-checkbox checked="allowChecked" [(ngModel)]="allowChecked" (ionChange)="change(allowChecked)"></ion-checkbox>\n\n    </ion-item>\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom" style="margin: 3% 0;">\n\n        <button class="btn btn-primary form-control">Save</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\survey\create\survey-create-page2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SurveyCreate2Page);

//# sourceMappingURL=survey-create-page2.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_survey_detail_chart__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_survey_create__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyDetailPage = (function () {
    function SurveyDetailPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.header = "Poll Question";
        this.answers = [
            { name: "Item 1", checked: false },
            { name: "Item 2", checked: false },
            { name: "Item 3", checked: false },
            { name: "Item 4", checked: false },
        ];
    }
    SurveyDetailPage.prototype.checkedItem = function (item) {
        item.checked = item.checked ? false : true;
    };
    SurveyDetailPage.prototype.goToPollChart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_survey_detail_chart__["a" /* SurveyDetailChartPage */]);
    };
    SurveyDetailPage.prototype.goToEditPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_survey_create__["a" /* SurveyCreatePage */]);
    };
    return SurveyDetailPage;
}());
SurveyDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-survey-detail',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\survey\detail\survey-detail.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #fff">\n\n        <ion-title>\n\n            <h4 class="">{{header}}</h4>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="goToEditPage()">\n\n                <ion-icon name="cog"></ion-icon>\n\n            </button>\n\n            <!-- <ion-icon class="icon" name="cog" ></ion-icon> -->\n\n            <!-- <button class="btn btn-organe">E</button> -->\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <!-- <ion-list>\n\n            <ion-item *ngFor="#item of items">\n\n                <ion-label>{{item}}</ion-label>\n\n                <ion-checkbox (change)="change($event, item)"></ion-checkbox>\n\n            </ion-item>\n\n        </ion-list> -->\n\n    <!-- <h3 class="text-center" style="color: #ff741b"></h3> -->\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom">\n\n        <div>\n\n            <timer></timer>\n\n        </div>\n\n        <h3>What\'s your favorite subject?</h3>\n\n        <div>\n\n            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n\n                <div class="input-group" style="margin: 3% 0;" *ngFor="let item of answers; let i = index;" (click)="checkedItem(item)">\n\n                    <span class="input-group-addon" id="basic-addon1">\n\n                        <ion-checkbox checked="item.checked" [(ngModel)]="item.checked"></ion-checkbox>\n\n                    </span>\n\n                    <input type="text" style="min-height: 60px;" disabled class="form-control" placeholder="" value="{{item.name}}" aria-describedby="basic-addon1">\n\n                </div>\n\n            </div>\n\n            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom" style="margin: 3% 0;">\n\n                <button class="btn btn-blue form-control">Vote</button>\n\n            </div>\n\n            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom" style="margin: 3% 0;">\n\n                <button class="btn btn-success form-control" (click)="goToPollChart()">View Result</button>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\survey\detail\survey-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SurveyDetailPage);

//# sourceMappingURL=survey-detail.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyDetailChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyDetailChartPage = (function () {
    function SurveyDetailChartPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.pieChartWidth = 400;
        this.pieChartHeight = 400;
        //this.pieChartHeight = platform.height()+200;
        //this.pieChartWidth = platform.width();
        console.log('W: ' + this.pieChartWidth + ', H: ' + this.pieChartHeight);
    }
    // events
    SurveyDetailChartPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    SurveyDetailChartPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return SurveyDetailChartPage;
}());
SurveyDetailChartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-survey-detail-chart',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\survey\detail\survey-detail-chart.html"*/'<ion-header>\n\n    <ion-navbar style="background-color: #fff">\n\n        <ion-title>\n\n            <h4 class="">Poll Chart</h4>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-top: 10px">\n\n        <div style="display: block; height: 350px">\n\n            <canvas baseChart \n\n                [data]="pieChartData" \n\n                [labels]="pieChartLabels" \n\n                [chartType]="pieChartType" \n\n                [options]="options"\n\n                (chartHover)="chartHovered($event)"\n\n                (chartClick)="chartClicked($event)"></canvas>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\survey\detail\survey-detail-chart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
], SurveyDetailChartPage);

//# sourceMappingURL=survey-detail-chart.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        selector: 'page-product',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\product\product.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1>PRODUCT PAGE</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\product\product.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ProductPage);

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        selector: 'page-user-register',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\user-register\user-register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Register\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    \n\n      <ion-item>\n\n        <ion-label stacked class="user-label-left">Username</ion-label>\n\n        <ion-input type="text" ></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n          <ion-label stacked class="user-label-left">Password</ion-label>\n\n        <ion-input type="password" ></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label stacked class="user-label-left">Email</ion-label>\n\n        <ion-input type="email" ></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button>Register</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\user-register\user-register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], UserRegisterPage);

//# sourceMappingURL=user-register.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_infor_edit_profile_infor__ = __webpack_require__(197);
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
        selector: 'page-my-profile',template:/*ion-inline-start:"D:\Research\Ionic\PJI\src\pages\my-profile\my-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      My Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- <ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img class="myprofile-photos" src="./assets/images/IMG_2807.JPG">\n\n      </ion-avatar>\n\n      <h2 class="myprofile-profilephotostext">Profile Photo</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Username</ion-label>\n\n      <ion-input type="text" readonly="true" [(ngModel)]="username"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Password</ion-label>\n\n      <ion-input type="password" name="txtPassword" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Retype Password</ion-label>\n\n      <ion-input type="password" name="txtRetyPassword" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked class="myprofile-profilephotostext">Email</ion-label>\n\n      <ion-input type="email" name="txtEmail" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button name="btnUpdate">Update</button>\n\n</ion-content> -->\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img class="myprofile-photos" src="./assets/images/IMG_2807.JPG">\n\n      </ion-avatar>\n\n      <h2 class="myprofile-profilephotostext">Profile Photo</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n\n      <p class="myprofile-profilephotostext">Hello {{username}} !</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)">\n\n        <ion-label>{{item.title}}</ion-label>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Research\Ionic\PJI\src\pages\my-profile\my-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map