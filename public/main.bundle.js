webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\">\n        <a routerLink=\"create\" routerLinkActive=\"active\">\n          Add coins\n        </a> |\n\t\t <a routerLink=\"index\" routerLinkActive=\"active\">\n          List coins\n        </a>\n\t\t\n      </li>    \n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <router-outlet></router-outlet>\n  \n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Welcome to crypto world';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_index_index_component__ = __webpack_require__("./src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_create_create_component__ = __webpack_require__("./src/app/components/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routerConfig__ = __webpack_require__("./src/app/routerConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_coin_service__ = __webpack_require__("./src/app/services/coin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_edit_edit_component__["a" /* EditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_10__routerConfig__["a" /* appRoutes */]), __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5_angular_flash_message__["FlashMessageModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_coin_service__["a" /* CoinService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      {{ title }}\n    </div>\n    <div class=\"panel-body\">\n      <form [formGroup]=\"angForm\" novalidate>\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Coin Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" #name />\n        </div>\n        <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['name'].errors.required\">\n            Name is required.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Coin Price</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"price\" #price/>\n        </div>\n        <div *ngIf=\"angForm.controls['price'].invalid && (angForm.controls['price'].dirty || angForm.controls['price'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['price'].errors.required\">\n            Price is required.\n          </div>\n        </div>\n          <div class=\"form-group\">\n            <button (click)=\"addCoin(name.value, price.value)\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Add</button>\n          </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_coin_service__ = __webpack_require__("./src/app/services/coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    function CreateComponent(coinservice, fb) {
        this.coinservice = coinservice;
        this.fb = fb;
        this.title = 'Add Coin';
        this.createForm();
    }
    CreateComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
    };
    CreateComponent.prototype.addCoin = function (name, price) {
        this.coinservice.addCoin(name, price);
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__("./src/app/components/create/create.component.html"),
            styles: [__webpack_require__("./src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_coin_service__["a" /* CoinService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    {{ title }}\n  </div>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Coin Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" #name [(ngModel)] = \"coin.name\"/>\n      </div>\n      <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['name'].errors.required\">\n          Name is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Coin Price</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"price\" #price [(ngModel)] = \"coin.price\" />\n      </div>\n      <div *ngIf=\"angForm.controls['price'].invalid && (angForm.controls['price'].dirty || angForm.controls['price'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['price'].errors.required\">\n          Price is required.\n        </div>\n      </div>\n        <div class=\"form-group\">\n          <button (click)=\"updateCoin(name.value, price.value)\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Update</button>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_coin_service__ = __webpack_require__("./src/app/services/coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, service, fb) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.fb = fb;
        this.title = 'Edit Coin';
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]
        });
    };
    EditComponent.prototype.updateCoin = function (name, price) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.updateCoin(name, price, params['id']);
            _this.router.navigate(['index']);
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.coin = _this.service.editCoin(params['id']).subscribe(function (res) {
                _this.coin = res;
            });
        });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__services_coin_service__["a" /* CoinService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/index/index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead>\n  <tr>\n      <td>Coin Name</td>\n      <td>Coin Price</td>\n      <td colspan=\"2\">Actions</td>\n  </tr>\n  </thead>\n\n  <tbody>\n      <tr *ngFor=\"let coin of coins\">\n          <td>{{ coin.name }}</td>\n          <td>{{ coin.price }}</td>\n          <td><a [routerLink]=\"['/edit', coin._id]\" class=\"btn btn-primary\">Edit</a></td>\n          <td><button (click)=\"deleteCoin(coin._id)\"  class=\"btn btn-danger\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_coin_service__ = __webpack_require__("./src/app/services/coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, service) {
        this.http = http;
        this.service = service;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.getCoins();
    };
    IndexComponent.prototype.getCoins = function () {
        var _this = this;
        this.service.getCoins().subscribe(function (res) {
            _this.coins = res;
        });
    };
    IndexComponent.prototype.deleteCoin = function (id) {
        this.service.deleteCoin(id).subscribe(function (res) {
            console.log('Deleted');
        });
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/components/index/index.component.html"),
            styles: [__webpack_require__("./src/app/components/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__services_coin_service__["a" /* CoinService */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/routerConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_create_create_component__ = __webpack_require__("./src/app/components/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_component__ = __webpack_require__("./src/app/components/index/index.component.ts");



var appRoutes = [
    { path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_0__components_create_create_component__["a" /* CreateComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__components_edit_edit_component__["a" /* EditComponent */]
    },
    { path: 'index',
        component: __WEBPACK_IMPORTED_MODULE_2__components_index_index_component__["a" /* IndexComponent */]
    }
];


/***/ }),

/***/ "./src/app/services/coin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoinService = /** @class */ (function () {
    function CoinService(http) {
        this.http = http;
    }
    CoinService.prototype.addCoin = function (name, price) {
        var uri = 'http://localhost:4000/coins/add';
        var obj = {
            name: name,
            price: price
        };
        this
            .http
            .post(uri, obj)
            .subscribe(function (res) {
            return console.log('Done');
        });
    };
    CoinService.prototype.getCoins = function () {
        var uri = 'http://localhost:4000/coins';
        return this
            .http
            .get(uri)
            .map(function (res) {
            return res;
        });
    };
    CoinService.prototype.editCoin = function (id) {
        var uri = 'http://localhost:4000/coins/edit/' + id;
        return this
            .http
            .get(uri)
            .map(function (res) {
            return res;
        });
    };
    CoinService.prototype.updateCoin = function (name, price, id) {
        var uri = 'http://localhost:4000/coins/update/' + id;
        var obj = {
            name: name,
            price: price
        };
        this
            .http
            .post(uri, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    CoinService.prototype.deleteCoin = function (id) {
        var uri = 'http://localhost:4000/coins/delete/' + id;
        return this
            .http
            .get(uri)
            .map(function (res) {
            return res;
        });
    };
    CoinService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CoinService);
    return CoinService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map