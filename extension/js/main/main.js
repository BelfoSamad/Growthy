(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

    /***/ "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        function webpackEmptyAsyncContext(req) {
            // Here Promise.resolve().then() is used instead of new Promise() to prevent
            // uncaught exception popping up in devtools
            return Promise.resolve().then(function () {
                var e = new Error("Cannot find module '" + req + "'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            });
        }

        webpackEmptyAsyncContext.keys = function () {
            return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

        /***/
    }),

    /***/ "./src/app/app-routing.module.ts":
    /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
    /*! exports provided: AppRoutingModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
            return AppRoutingModule;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
        /* harmony import */
        var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
        /* harmony import */
        var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
        /* harmony import */
        var _components_junior_login_junior_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/junior-login/junior-login.component */ "./src/app/components/junior-login/junior-login.component.ts");
        /* harmony import */
        var _components_dashboard_general_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/general/dashboard.component */ "./src/app/components/dashboard/general/dashboard.component.ts");
        /* harmony import */
        var _components_dashboard_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/main/main.component */ "./src/app/components/dashboard/main/main.component.ts");
        /* harmony import */
        var _components_dashboard_junior_dashboard_junior_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/junior-dashboard/junior-dashboard.component */ "./src/app/components/dashboard/junior-dashboard/junior-dashboard.component.ts");
        /* harmony import */
        var _components_dashboard_history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/history/history.component */ "./src/app/components/dashboard/history/history.component.ts");
        /* harmony import */
        var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
        /* harmony import */
        var _components_addchild_addchild_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/addchild/addchild.component */ "./src/app/components/addchild/addchild.component.ts");
        /* harmony import */
        var _components_editchild_editchild_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/editchild/editchild.component */ "./src/app/components/editchild/editchild.component.ts");
        /* harmony import */
        var _components_editparent_editpwd_editpwd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/editparent/editpwd/editpwd.component */ "./src/app/components/editparent/editpwd/editpwd.component.ts");
        /* harmony import */
        var _components_editparent_editname_editname_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/editparent/editname/editname.component */ "./src/app/components/editparent/editname/editname.component.ts");
        /* harmony import */
        var _components_editparent_editemail_editemail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/editparent/editemail/editemail.component */ "./src/app/components/editparent/editemail/editemail.component.ts");


        var redirectLoggedInToLogin = function () {
            return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__["redirectLoggedInTo"])(['login']);
        };
        var routes = [
            {
                path: 'dashboard',
                component: _components_dashboard_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                children: [
                    {
                        path: '',
                        component: _components_dashboard_general_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthGuard"]],
                        data: {
                            authGuardPipe: function () {
                                return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__["redirectUnauthorizedTo"])(['login']);
                            }
                        }
                    },
                    {
                        path: 'history',
                        component: _components_dashboard_history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"],
                    },
                    {
                        path: ':child',
                        component: _components_dashboard_junior_dashboard_junior_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["JuniorDashboardComponent"],
                    },
                ],
            },
            {
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                data: {
                    authGuardPipe: function () {
                        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__["redirectLoggedInTo"])(['']);
                    }
                }
            },
            {
                path: 'register',
                component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
            },
            {
                path: 'editchild/:child',
                component: _components_editchild_editchild_component__WEBPACK_IMPORTED_MODULE_11__["EditchildComponent"]
            },
            {
                path: 'addchild',
                component: _components_addchild_addchild_component__WEBPACK_IMPORTED_MODULE_10__["AddchildComponent"],
            },
            {
                path: '',
                component: _components_junior_login_junior_login_component__WEBPACK_IMPORTED_MODULE_4__["JuniorLoginComponent"],
                canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthGuard"]],
                data: {
                    authGuardPipe: function () {
                        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__["redirectUnauthorizedTo"])(['login']);
                    }
                }
            },
            {
                path: 'editname',
                component: _components_editparent_editname_editname_component__WEBPACK_IMPORTED_MODULE_13__["EditnameComponent"],
                canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthGuard"]]
            },
            {
                path: 'editpwd',
                component: _components_editparent_editpwd_editpwd_component__WEBPACK_IMPORTED_MODULE_12__["EditpwdComponent"],
                canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthGuard"]]
            },
            {
                path: 'editemail',
                component: _components_editparent_editemail_editemail_component__WEBPACK_IMPORTED_MODULE_14__["EditemailComponent"],
                canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthGuard"]]
            },
        ];
        var AppRoutingModule = /** @class */ (function () {
            function AppRoutingModule() {
            }

            AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type: AppRoutingModule});
            AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
                factory: function AppRoutingModule_Factory(t) {
                    return new (t || AppRoutingModule)();
                },
                imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            });
            return AppRoutingModule;
        }());

        (function () {
            (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            });
        })();
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
            }], null, null);
        })();


        /***/
    }),

    /***/ "./src/app/app.component.ts":
    /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
    /*! exports provided: AppComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
            return AppComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


        var AppComponent = /** @class */ (function () {
            function AppComponent() {
            }

            AppComponent.prototype.ngOnInit = function () {
            };
            AppComponent.prototype.prepareRoute = function (outlet) {
                return outlet && outlet.activatedRouteData;
            };
            AppComponent.ɵfac = function AppComponent_Factory(t) {
                return new (t || AppComponent)();
            };
            AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: AppComponent,
                selectors: [["app-root"]],
                decls: 3,
                vars: 1,
                consts: [[1, "global-wrapper", "position-relative", "ac-background-25", "h-100", "d-flex", "flex-column", "align-items-center", "p-3"], ["outlet", "outlet"]],
                template: function AppComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnim", ctx.prepareRoute(_r0));
                    }
                },
                directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
                styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"],
                data: {
                    animation: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        display: "none"
                                    })
                                ], {optional: true}),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 0
                                    }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.15s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 1
                                    }))
                                ], {optional: true})
                            ])
                        ])
                    ]
                }
            });
            return AppComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.sass'],
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        display: "none"
                                    })
                                ], {optional: true}),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 0
                                    }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.15s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 1
                                    }))
                                ], {optional: true})
                            ])
                        ])
                    ]
                }]
            }], function () {
                return [];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/app.module.ts":
    /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
    /*! exports provided: AppModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
            return AppModule;
        });
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
        /* harmony import */
        var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
        /* harmony import */
        var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
        /* harmony import */
        var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/intro/intro.component */ "./src/app/components/intro/intro.component.ts");
        /* harmony import */
        var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
        /* harmony import */
        var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
        /* harmony import */
        var _components_junior_login_junior_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/junior-login/junior-login.component */ "./src/app/components/junior-login/junior-login.component.ts");
        /* harmony import */
        var _components_dashboard_general_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/general/dashboard.component */ "./src/app/components/dashboard/general/dashboard.component.ts");
        /* harmony import */
        var _components_dashboard_junior_dashboard_junior_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/junior-dashboard/junior-dashboard.component */ "./src/app/components/dashboard/junior-dashboard/junior-dashboard.component.ts");
        /* harmony import */
        var _components_dashboard_history_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/history/history.component */ "./src/app/components/dashboard/history/history.component.ts");
        /* harmony import */
        var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
        /* harmony import */
        var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
        /* harmony import */
        var _components_dashboard_main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/main/main.component */ "./src/app/components/dashboard/main/main.component.ts");
        /* harmony import */
        var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
        /* harmony import */
        var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
        /* harmony import */
        var _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
        /* harmony import */
        var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
        /* harmony import */
        var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
        /* harmony import */
        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
        /* harmony import */
        var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
        /* harmony import */
        var _services_firebase_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/firebase.service */ "./src/app/services/firebase.service.ts");
        /* harmony import */
        var _components_addchild_addchild_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/addchild/addchild.component */ "./src/app/components/addchild/addchild.component.ts");
        /* harmony import */
        var _components_editchild_editchild_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/editchild/editchild.component */ "./src/app/components/editchild/editchild.component.ts");
        /* harmony import */
        var _components_editparent_editpwd_editpwd_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/editparent/editpwd/editpwd.component */ "./src/app/components/editparent/editpwd/editpwd.component.ts");
        /* harmony import */
        var _components_editparent_editemail_editemail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/editparent/editemail/editemail.component */ "./src/app/components/editparent/editemail/editemail.component.ts");
        /* harmony import */
        var _components_editparent_editname_editname_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/editparent/editname/editname.component */ "./src/app/components/editparent/editname/editname.component.ts");


//import { AngularFireAuth } from '@angular/fire/auth';
//import { auth } from 'firebase/app';


        var AppModule = /** @class */ (function () {
            function AppModule() {
            }

            AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
                type: AppModule,
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            });
            AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
                factory: function AppModule_Factory(t) {
                    return new (t || AppModule)();
                },
                providers: [_services_firebase_service__WEBPACK_IMPORTED_MODULE_22__["FirebaseService"], _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthGuard"]],
                imports: [[
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase, 'growthy'),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"]
                ]]
            });
            return AppModule;
        }());

        (function () {
            (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _components_junior_login_junior_login_component__WEBPACK_IMPORTED_MODULE_8__["JuniorLoginComponent"],
                    _components_dashboard_general_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _components_dashboard_junior_dashboard_junior_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["JuniorDashboardComponent"],
                    _components_dashboard_history_history_component__WEBPACK_IMPORTED_MODULE_11__["HistoryComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbComponent"],
                    _components_dashboard_main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                    _components_addchild_addchild_component__WEBPACK_IMPORTED_MODULE_23__["AddchildComponent"],
                    _components_editchild_editchild_component__WEBPACK_IMPORTED_MODULE_24__["EditchildComponent"],
                    _components_editparent_editpwd_editpwd_component__WEBPACK_IMPORTED_MODULE_25__["EditpwdComponent"],
                    _components_editparent_editemail_editemail_component__WEBPACK_IMPORTED_MODULE_26__["EditemailComponent"],
                    _components_editparent_editname_editname_component__WEBPACK_IMPORTED_MODULE_27__["EditnameComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"]]
            });
        })();
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                args: [{
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
                        _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _components_junior_login_junior_login_component__WEBPACK_IMPORTED_MODULE_8__["JuniorLoginComponent"],
                        _components_dashboard_general_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                        _components_dashboard_junior_dashboard_junior_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["JuniorDashboardComponent"],
                        _components_dashboard_history_history_component__WEBPACK_IMPORTED_MODULE_11__["HistoryComponent"],
                        _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                        _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbComponent"],
                        _components_dashboard_main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                        _components_addchild_addchild_component__WEBPACK_IMPORTED_MODULE_23__["AddchildComponent"],
                        _components_editchild_editchild_component__WEBPACK_IMPORTED_MODULE_24__["EditchildComponent"],
                        _components_editparent_editpwd_editpwd_component__WEBPACK_IMPORTED_MODULE_25__["EditpwdComponent"],
                        _components_editparent_editemail_editemail_component__WEBPACK_IMPORTED_MODULE_26__["EditemailComponent"],
                        _components_editparent_editname_editname_component__WEBPACK_IMPORTED_MODULE_27__["EditnameComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase, 'growthy'),
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
                        _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"],
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"]
                    ],
                    providers: [_services_firebase_service__WEBPACK_IMPORTED_MODULE_22__["FirebaseService"], _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthGuard"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                }]
            }], null, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/addchild/addchild.component.ts":
    /*!***********************************************************!*\
  !*** ./src/app/components/addchild/addchild.component.ts ***!
  \***********************************************************/
    /*! exports provided: AddchildComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddchildComponent", function () {
            return AddchildComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
        /* harmony import */
        var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
        /* harmony import */
        var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
        /* harmony import */
        var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


        function AddchildComponent_div_14_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Firstname is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function AddchildComponent_div_14_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddchildComponent_div_14_span_1_Template, 2, 0, "span", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.firstname == null ? null : ctx_r0.firstname.errors.required);
            }
        }

        function AddchildComponent_div_19_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Age is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function AddchildComponent_div_19_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Minimum age is 4.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function AddchildComponent_div_19_span_3_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Maximum age is 16.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function AddchildComponent_div_19_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddchildComponent_div_19_span_1_Template, 2, 0, "span", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddchildComponent_div_19_span_2_Template, 2, 0, "span", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddchildComponent_div_19_span_3_Template, 2, 0, "span", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.age == null ? null : ctx_r1.age.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.age == null ? null : ctx_r1.age.errors.min);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.age == null ? null : ctx_r1.age.errors.max);
            }
        }

        function AddchildComponent_div_33_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Watch Time is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function AddchildComponent_div_33_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Minimum duration is 5.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function AddchildComponent_div_33_span_3_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Maximum duration is 30.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function AddchildComponent_div_33_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddchildComponent_div_33_span_1_Template, 2, 0, "span", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddchildComponent_div_33_span_2_Template, 2, 0, "span", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddchildComponent_div_33_span_3_Template, 2, 0, "span", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.watch_time == null ? null : ctx_r2.watch_time.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.watch_time == null ? null : ctx_r2.watch_time.errors.min);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.watch_time == null ? null : ctx_r2.watch_time.errors.max);
            }
        }

        function AddchildComponent_div_49_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var interest_r11 = ctx.$implicit;
                var i_r12 = ctx.index;
                var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", interest_r11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.interests[i_r12].name);
            }
        }

        var AddchildComponent = /** @class */ (function () {
            function AddchildComponent(fs, db, router, auth) {
                this.fs = fs;
                this.db = db;
                this.router = router;
                this.auth = auth;
                this.interests = [
                    {name: "sport", selected: false},
                    {name: "anime", selected: false},
                    {name: "action", selected: false},
                ];
            }

            AddchildComponent.prototype.ngOnInit = function () {
                this.addChildForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'firstname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                    ]),
                    'age': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(4),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(16),
                    ]),
                    'watch_time': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](15, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(5),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(30),
                    ]),
                    'interests': this.buildInterests()
                });
                console.log(this.getInterests);
            };
            AddchildComponent.prototype.buildInterests = function () {
                var arr = this.interests.map(function (interest) {
                    return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
                });
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](arr);
            };
            Object.defineProperty(AddchildComponent.prototype, "firstname", {
                get: function () {
                    return this.addChildForm.get("firstname");
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(AddchildComponent.prototype, "age", {
                get: function () {
                    return this.addChildForm.get('age');
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(AddchildComponent.prototype, "watch_time", {
                get: function () {
                    return this.addChildForm.get('watch_time');
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(AddchildComponent.prototype, "getInterests", {
                get: function () {
                    return this.addChildForm.get('interests');
                },
                enumerable: false,
                configurable: true
            });
            AddchildComponent.prototype.onSubmit = function () {
                var _this = this;
                var child = {};
                child["firstname"] = this.firstname.value;
                child["age"] = this.age.value;
                child["last_seen"] = null;
                child["settings"] = {
                    watch_time: this.watch_time.value,
                };
                var selectedInterests = this.getInterests.value
                    .map(function (checked, i) {
                        return checked ? {
                            name: _this.interests[i].name,
                            selected: true
                        } : {name: _this.interests[i].name, selected: false};
                    });
                child["interests"] = selectedInterests;
                //console.log(child);
                this.addChild(child);
            };
            AddchildComponent.prototype.move = function (source, destination) {
                console.log(source, destination);
                document.getElementById(source).classList.add('d-none');
                document.getElementById(source).classList.remove('d-flex');
                document.getElementById(destination).classList.add('d-flex');
                document.getElementById(destination).classList.remove('d-none');
            };
            AddchildComponent.prototype.addChild = function (child) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        this.db.addChild(child);
                        this.router.navigate(['']);
                        return [2 /*return*/];
                    });
                });
            };
            AddchildComponent.ɵfac = function AddchildComponent_Factory(t) {
                return new (t || AddchildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]));
            };
            AddchildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
                type: AddchildComponent,
                selectors: [["app-addchild"]],
                decls: 61,
                vars: 12,
                consts: [[1, "addchild1", "w-100", "h-100", "d-flex", "flex-column", "align-items-center"], [1, "logo", "w-fc", "mb-3"], ["src", "../../../assets/images/Slice (2).png", "alt", "Lol", 2, "width", "auto", "height", "30px", "object-fit", "cover"], [1, "content", "w-100", "rounded", "p-3", "d-flex", "flex-column", "align-items-start", "justify-content-between"], [1, "d-flex", "flex-column", "w-100", 3, "formGroup", "ngSubmit"], ["id", "addchild1", 1, "form-part", "d-flex", "flex-column"], [1, "roboto", "ac-color", "fs-20"], [1, "form-text", "text-muted", "fs-12"], [1, "form-group"], ["for", "exampleInputPassword1", 1, "fs-12"], ["type", "text", "placeholder", "Enter firstname", "formControlName", "firstname", 1, "form-control", "fs-14"], [4, "ngIf"], ["type", "number", "placeholder", "Enter your child's age", "placeholder", "Age", "formControlName", "age", 1, "form-control", "fs-14"], ["type", "button", 1, "fs-14", "align-self-end", "btn", "btn-growthy", 3, "disabled", "click"], ["id", "addchild2", 1, "form-part", "d-none", "flex-column"], [1, "italic"], ["type", "number", "formControlName", "watch_time", 1, "form-control", "fs-14"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fs-12", "fw-bold", 3, "click"], ["type", "button", 1, "fs-14", "btn", "btn-growthy", 3, "disabled", "click"], ["id", "addchild3", 1, "form-part", "d-none", "flex-column"], [1, "fs-14", "mb-3"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "fs-14", "btn", "btn-growthy", 3, "disabled"], [1, "fs-12", 2, "color", "red"], ["type", "submit", 1, "d-none", "fs-14", "align-self-end", "btn", "btn-growthy", 3, "disabled"], ["routerLink", "", 1, "fs-12", "fw-bold", "mt-3"], ["class", "fs-12 italic", 4, "ngIf"], [1, "fs-12", "italic"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "formControl"], ["for", "interest"]],
                template: function AddchildComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddchildComponent_Template_form_ngSubmit_4_listener() {
                            return ctx.onSubmit();
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add an account for your child");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Fill out the form below. ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Firstname");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddchildComponent_div_14_Template, 2, 1, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Age");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddchildComponent_div_19_Template, 4, 3, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddchildComponent_Template_button_click_20_listener() {
                            return ctx.move("addchild1", "addchild2");
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Next ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h1", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Adjust account settings for ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " You can ignore this step and keep the default settings. ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Watch Time");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AddchildComponent_div_33_Template, 4, 3, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddchildComponent_Template_a_click_35_listener() {
                            return ctx.move("addchild2", "addchild1");
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Back");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddchildComponent_Template_button_click_37_listener() {
                            return ctx.move("addchild2", "addchild3");
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Next ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h1", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Select some interests for ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " You can always change these at a later time. ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h3", 21);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Interests");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, AddchildComponent_div_49_Template, 4, 2, "div", 22);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddchildComponent_Template_a_click_51_listener() {
                            return ctx.move("addchild3", "addchild2");
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Back");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 23);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Finish ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 24);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 25);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Submit ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 26);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Cancel registration");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addChildForm);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstname.invalid && (ctx.firstname.dirty || ctx.firstname.touched));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.age.invalid && (ctx.age.dirty || ctx.age.touched));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.age.valid || !ctx.firstname.valid);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.firstname.value);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.watch_time.invalid && (ctx.watch_time.dirty || ctx.watch_time.touched));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.watch_time.valid);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.firstname.value);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getInterests["controls"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.addChildForm.valid);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.error != undefined ? ctx.error : "", " ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.addChildForm.valid);
                    }
                },
                directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]],
                styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGRjaGlsZC9hZGRjaGlsZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkY2hpbGQvYWRkY2hpbGQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0XG4gIHdpZHRoOiAxMDAlIl19 */"]
            });
            return AddchildComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddchildComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [{
                    selector: 'app-addchild',
                    templateUrl: './addchild.component.html',
                    styleUrls: ['./addchild.component.sass']
                }]
            }], function () {
                return [{type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]}, {type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]}, {type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]}, {type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/breadcrumb/breadcrumb.component.ts":
    /*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
    /*! exports provided: BreadcrumbComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
            return BreadcrumbComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


        var BreadcrumbComponent = /** @class */ (function () {
            function BreadcrumbComponent() {
            }

            BreadcrumbComponent.prototype.ngOnInit = function () {
            };
            BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
                return new (t || BreadcrumbComponent)();
            };
            BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: BreadcrumbComponent,
                selectors: [["app-breadcrumb"]],
                inputs: {links: "links"},
                decls: 7,
                vars: 0,
                consts: [["aria-label", "breadcrumb", 1, "mb-2", "fs-12", "fw-bold", "w-100", "bsb-15"], [1, "breadcrumb", "bpc-background", "m-0"], [1, "breadcrumb-item"], ["routerLink", "/jlogin"], ["aria-current", "page", 1, "breadcrumb-item", "active"]],
                template: function BreadcrumbComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                },
                directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
                styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zYXNzIn0= */"]
            });
            return BreadcrumbComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-breadcrumb',
                    templateUrl: './breadcrumb.component.html',
                    styleUrls: ['./breadcrumb.component.sass']
                }]
            }], function () {
                return [];
            }, {
                links: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                }]
            });
        })();


        /***/
    }),

    /***/ "./src/app/components/dashboard/general/dashboard.component.ts":
    /*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/general/dashboard.component.ts ***!
  \*********************************************************************/
    /*! exports provided: DashboardComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
            return DashboardComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
        /* harmony import */
        var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
        /* harmony import */
        var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
        /* harmony import */
        var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
        /* harmony import */
        var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../header/header.component */ "./src/app/components/header/header.component.ts");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
        /* harmony import */
        var _history_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../history/history.component */ "./src/app/components/dashboard/history/history.component.ts");


        function DashboardComponent_ng_container_46_ng_container_1_div_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "account settings");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var child_r8 = ctx.$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@childAnim", undefined);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r8.firstname);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/", child_r8.key, "");
            }
        }

        function DashboardComponent_ng_container_46_ng_container_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_ng_container_46_ng_container_1_div_1_Template, 7, 3, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            }
            if (rf & 2) {
                var childs_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childs_r3);
            }
        }

        function DashboardComponent_ng_container_46_ng_template_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "There are no children to show!");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add child");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function DashboardComponent_ng_container_46_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_ng_container_46_ng_container_1_Template, 2, 1, "ng-container", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_ng_container_46_ng_template_2_Template, 7, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            }
            if (rf & 2) {
                var childs_r3 = ctx.$implicit;
                var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (childs_r3 == null ? null : childs_r3.length) > 0)("ngIfElse", _r5);
            }
        }

        function DashboardComponent_ng_template_48_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading...");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        var _c0 = function () {
            return ["/editname"];
        };
        var _c1 = function () {
            return ["/editemail"];
        };
        var _c2 = function () {
            return ["/editpwd"];
        };
        var _c3 = function () {
            return ["/addchild"];
        };
        var DashboardComponent = /** @class */ (function () {
            function DashboardComponent(router, fs, db) {
                this.router = router;
                this.fs = fs;
                this.db = db;
                this.children = null;
                this.parent = null;
            }

            DashboardComponent.prototype.ngOnInit = function () {
                var _this = this;
                setTimeout(function () {
                    _this.getChildren();
                    _this.parent = _this.db.getParent().valueChanges();
                }, 100);
            };
            DashboardComponent.prototype.getChildren = function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        this.children = this.db.getChildren().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
                            return changes.map(function (c) {
                                return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({key: c.payload.key}, c.payload.val()));
                            });
                        }));
                        return [2 /*return*/];
                    });
                });
            };
            DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
                return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]));
            };
            DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
                type: DashboardComponent,
                selectors: [["app-dashboard"]],
                decls: 51,
                vars: 19,
                consts: [[1, "w-100"], ["aria-label", "breadcrumb", 1, "mb-2", "fs-12", "fw-bold", "w-100", "bsb-15"], [1, "breadcrumb", "bpc-background", "m-0"], [1, "breadcrumb-item"], ["routerLink", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "content", "w-100", "rounded", "d-flex", "flex-column", "align-items-start", "justify-content-between"], [1, "credentials", "bsb-15", "bpc-background", "w-100", "rounded", "p-3", "mb-2"], [1, "header", "d-flex", "justify-content-between", "w-100"], [1, "o-75", "fs-14", "fw-bold", "mb-3"], [1, "fullname", "px-3", "rounded", "d-flex", "justify-content-between"], [1, "align-self-center", "fs-12", "fw-bold", "o-75"], [1, "data", "align-self-start"], [1, "fs-12"], ["routerLinkActive", "active", 1, "ml-1", "fw-bold", "fs-11", 3, "routerLink"], [1, "email", "px-3", "rounded", "d-flex", "justify-content-between"], [1, "password", "px-3", "rounded", "d-flex", "justify-content-between"], [1, "children", "bsb-15", "bpc-background", "w-100", "rounded", "p-3", "mb-2"], ["routerLinkActive", "active", 1, "fw-bold", "fs-12", 3, "routerLink"], [1, "content", "border-rounded", "pr-2", 2, "max-height", "150px", "overflow-y", "scroll"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "w-100", 3, "browse"], ["empty", ""], ["class", "child mb-3 p-2 ac-background-25 bsb-15 rounded d-flex align-items-center", 4, "ngFor", "ngForOf"], [1, "child", "mb-3", "p-2", "ac-background-25", "bsb-15", "rounded", "d-flex", "align-items-center"], [1, "ac-background", "pic", "mr-3", "o-25", 2, "width", "50px", "height", "50px", "border-radius", "100%"], [1, "data", "d-flex", "flex-column", "align-items-start"], [1, "first-name", "fw-bold", "fs-12"], ["routerLinkActive", "active", 1, "fs-11", "fw-bold", "o-75", 3, "routerLink"], [1, "child", "mb-3", "p-2", "ac-background-25", "bsb-15", "rounded", "d-flex", "flex-row", "align-items-center"], ["routerLink", "/addchild", "routerLinkActive", "active", 1, "fs-11", "fw-bold", "o-75"]],
                template: function DashboardComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ol", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Dashboard");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h1", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Account Credentials");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Full name");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "edit");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Email");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "update");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Password");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "********");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "change");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h1", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Children Accounts");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Add Child");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, DashboardComponent_ng_container_46_Template, 4, 2, "ng-container", 20);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, DashboardComponent_ng_template_48_Template, 7, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "app-history", 22);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49);
                        var tmp_0_0 = null;
                        var tmp_2_0 = null;
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 9, ctx.parent)) == null ? null : tmp_0_0.fullname);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 11, ctx.parent)) == null ? null : tmp_2_0.email);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c1));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c2));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c3));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 13, ctx.children))("ngIfElse", _r1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("browse", true);
                    }
                },
                directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _history_history_component__WEBPACK_IMPORTED_MODULE_9__["HistoryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
                pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
                styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.child[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZ2VuZXJhbC9kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQUE7RUFDSSwyQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZ2VuZXJhbC9kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdFxuICAgIHdpZHRoOiAxMDAlXG4uY2hpbGQ6bGFzdC1jaGlsZFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudFxuIl19 */"],
                data: {
                    animation: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('childAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: .5,
                                    transform: "translateX(-5px)"
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: 1,
                                    transform: "translateX(0px)"
                                }))
                            ])
                        ])
                    ]
                }
            });
            return DashboardComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [{
                    selector: 'app-dashboard',
                    templateUrl: './dashboard.component.html',
                    styleUrls: ['./dashboard.component.sass'],
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('childAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: .5,
                                    transform: "translateX(-5px)"
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: 1,
                                    transform: "translateX(0px)"
                                }))
                            ])
                        ])
                    ]
                }]
            }], function () {
                return [{type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]}, {type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]}, {type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/dashboard/history/history.component.ts":
    /*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/history/history.component.ts ***!
  \*******************************************************************/
    /*! exports provided: HistoryComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "HistoryComponent", function () {
            return HistoryComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
        /* harmony import */
        var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
        /* harmony import */
        var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../header/header.component */ "./src/app/components/header/header.component.ts");
        /* harmony import */
        var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");


        function HistoryComponent_div_0_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-breadcrumb");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function HistoryComponent_ng_container_6_ng_container_1_div_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var history_r9 = ctx.$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", history_r9.child_name, " Played ", history_r9.game, " and ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("passed level ", history_r9.level, " with high score of ", history_r9.progress, "!");
            }
        }

        function HistoryComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HistoryComponent_ng_container_6_ng_container_1_div_1_Template, 6, 4, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            }
            if (rf & 2) {
                var histories_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", histories_r4);
            }
        }

        function HistoryComponent_ng_container_6_ng_template_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No History... yet!");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function HistoryComponent_ng_container_6_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HistoryComponent_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HistoryComponent_ng_container_6_ng_template_2_Template, 5, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            }
            if (rf & 2) {
                var histories_r4 = ctx.$implicit;
                var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (histories_r4 == null ? null : histories_r4.length) > 0)("ngIfElse", _r6);
            }
        }

        function HistoryComponent_ng_template_8_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading...");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        var _c0 = function () {
            return {"max-height": "256px"};
        };
        var HistoryComponent = /** @class */ (function () {
            function HistoryComponent(db) {
                this.db = db;
                this.histories = null;
            }

            HistoryComponent.prototype.ngOnInit = function () {
                //get histories
                this.histories = this.db.getHistory().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
                    return changes.map(function (c) {
                        return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({key: c.payload.key}, c.payload.val()));
                    });
                }));
            };
            HistoryComponent.ɵfac = function HistoryComponent_Factory(t) {
                return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]));
            };
            HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
                type: HistoryComponent,
                selectors: [["app-history"]],
                inputs: {browse: "browse"},
                decls: 10,
                vars: 7,
                consts: [[4, "ngIf"], [1, "history", "bsb-15", "bpc-background", "w-100", "rounded", "p-3", "mb-3"], [1, "header", "d-flex", "justify-content-between", "w-100"], [1, "o-75", "fs-14", "fw-bold", "mb-3"], [1, "content", "border-rounded", "pr-2", 2, "overflow-y", "scroll", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["empty", ""], ["class", "item mb-3 p-2 px-3 ac-background-25 bsb-15 rounded d-flex align-items-center", 4, "ngFor", "ngForOf"], [1, "item", "mb-3", "p-2", "px-3", "ac-background-25", "bsb-15", "rounded", "d-flex", "align-items-center"], [1, "data", "d-flex", "flex-column", "align-items-start"], [1, "first-name", "fw-bold", "fs-12"], [1, "last-seen", "fs-11", "fw-bold", "o-75"], [1, "child", "mb-3", "p-2", "ac-background-25", "bsb-15", "rounded", "d-flex", "flex-row", "align-items-center"], [1, "ac-background", "pic", "mr-3", "o-25", 2, "width", "50px", "height", "50px", "border-radius", "100%"]],
                template: function HistoryComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HistoryComponent_div_0_Template, 3, 0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "History");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HistoryComponent_ng_container_6_Template, 4, 2, "ng-container", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HistoryComponent_ng_template_8_Template, 7, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.browse);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.browse && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, ctx.histories))("ngIfElse", _r2);
                    }
                },
                directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
                pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
                styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgd2lkdGg6IDEwMCVcbiJdfQ== */"]
            });
            return HistoryComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HistoryComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [{
                    selector: 'app-history',
                    templateUrl: './history.component.html',
                    styleUrls: ['./history.component.sass']
                }]
            }], function () {
                return [{type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]}];
            }, {
                browse: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
                }]
            });
        })();


        /***/
    }),

    /***/ "./src/app/components/dashboard/junior-dashboard/junior-dashboard.component.ts":
    /*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/junior-dashboard/junior-dashboard.component.ts ***!
  \*************************************************************************************/
    /*! exports provided: JuniorDashboardComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "JuniorDashboardComponent", function () {
            return JuniorDashboardComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
        /* harmony import */
        var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
        /* harmony import */
        var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

///<reference types="chrome"/>
///<reference types="chrome"/>


        function JuniorDashboardComponent_div_48_ng_container_1_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var interest_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", interest_r7["name"], " ");
            }
        }

        function JuniorDashboardComponent_div_48_ng_container_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JuniorDashboardComponent_div_48_ng_container_1_span_1_Template, 2, 1, "span", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            }
            if (rf & 2) {
                var interest_r7 = ctx.$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", interest_r7["selected"]);
            }
        }

        function JuniorDashboardComponent_div_48_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JuniorDashboardComponent_div_48_ng_container_1_Template, 2, 1, "ng-container", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                var tmp_0_0 = null;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.child)) == null ? null : tmp_0_0.interests);
            }
        }

        function JuniorDashboardComponent_ng_template_49_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No interests set yet. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function JuniorDashboardComponent_ng_container_56_ng_container_1_div_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var history_r16 = ctx.$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Played ", history_r16.game, " and");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("passed level ", history_r16.level, " with high score of ", history_r16.progress, "!");
            }
        }

        function JuniorDashboardComponent_ng_container_56_ng_container_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JuniorDashboardComponent_ng_container_56_ng_container_1_div_1_Template, 6, 3, "div", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            }
            if (rf & 2) {
                var histories_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", histories_r11);
            }
        }

        function JuniorDashboardComponent_ng_container_56_ng_template_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No History... yet!");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function JuniorDashboardComponent_ng_container_56_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JuniorDashboardComponent_ng_container_56_ng_container_1_Template, 2, 1, "ng-container", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, JuniorDashboardComponent_ng_container_56_ng_template_2_Template, 5, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            }
            if (rf & 2) {
                var histories_r11 = ctx.$implicit;
                var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (histories_r11 == null ? null : histories_r11.length) > 0)("ngIfElse", _r13);
            }
        }

        function JuniorDashboardComponent_ng_template_58_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading...");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        var JuniorDashboardComponent = /** @class */ (function () {
            function JuniorDashboardComponent(router, route, fs, db) {
                this.router = router;
                this.route = route;
                this.fs = fs;
                this.db = db;
                this.child = null;
                this.histories = null;
                this.childId = this.route.snapshot.paramMap.get('child');
            }

            JuniorDashboardComponent.prototype.ngOnInit = function () {
                var _this = this;
                console.log(this.childId);
                this.child = this.db.getChild(this.childId).valueChanges();
                this.childSub = this.child.subscribe(function (child) {
                    _this.nointerests = child['interests'].every(function (interest) {
                        return interest['selected'] == false;
                    });
                });
                //get histories based in childId
                this.histories = this.db.getHistory(function (ref) {
                    return _this.childId ? ref.orderByChild('child_id').equalTo(_this.childId) : ref;
                }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
                    return changes.map(function (c) {
                        return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({key: c.payload.key}, c.payload.val()));
                    });
                }));
            };
            JuniorDashboardComponent.prototype.ngOnChanges = function () {
                var _this = this;
                var sub = this.child.subscribe(function (child) {
                    _this.nointerests = child['interests'].every(function (interest) {
                        return interest['selected'] == false;
                    });
                });
                sub.unsubscribe();
                console.log(this.nointerests);
            };
            JuniorDashboardComponent.prototype.deleteChild = function (childId) {
                if (childId === void 0) {
                    childId = this.childId;
                }
                console.log(childId);
                chrome.runtime.sendMessage({mode: 'Popup', action: 'Reset'});
                this.db.deleteChild(childId)
                    .then(function (_) {
                        return console.log(childId + " deleted successfully!");
                    })
                    .catch(function (_) {
                        return console.log(_);
                    });
                var jlogin = localStorage.getItem('jlogin');
                if (jlogin) {
                    var jloginObj = JSON.parse(jlogin);
                    if (jloginObj['id'] == this.childId)
                        localStorage.removeItem('jlogin');
                }
                this.router.navigate(["/dashboard"]);
            };
            JuniorDashboardComponent.prototype.ngOnDestroy = function () {
                this.childSub.unsubscribe();
            };
            JuniorDashboardComponent.ɵfac = function JuniorDashboardComponent_Factory(t) {
                return new (t || JuniorDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]));
            };
            JuniorDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
                type: JuniorDashboardComponent,
                selectors: [["app-junior-dashboard"]],
                features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
                decls: 60,
                vars: 19,
                consts: [[1, "dashboard", "w-100", "h-100", "d-flex", "flex-column", "align-items-center"], [1, "logo", "d-flex", "justify-content-between", "align-items-end", "w-100", "mb-3"], [1, "roboto", "ac-color", "fw-bold", "fs-24", "p-0"], ["src", "../../../assets/images/logo2.png", "alt", "Lol", 1, "align-self-start", 2, "width", "auto", "height", "30px", "object-fit", "cover"], ["aria-label", "breadcrumb", 1, "mb-3", "fs-12", "fw-bold", "w-100", "bsb-15"], [1, "breadcrumb", "bpc-background", "m-0"], [1, "breadcrumb-item"], ["routerLink", ""], ["routerLink", "/dashboard"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "content", "w-100", "rounded", "d-flex", "flex-column", "align-items-start", "justify-content-between"], [1, "settings", "bsb-15", "bpc-background", "w-100", "rounded", "p-3", "mb-3"], [1, "header", "d-flex", "justify-content-between"], [1, "o-75", "fs-14", "fw-bold", "mb-3"], ["href", "#", 1, "d-none", "fw-bold", "fs-12"], [1, "profile", "w-100", "mb-3", "rounded", "d-flex", "align-items-center"], [1, "ac-background", "pic", "mr-3", "o-25", 2, "width", "50px", "height", "50px", "border-radius", "100%"], [1, "data", "d-flex", "flex-column", "align-items-start"], [1, "first-name", "fw-bold", "fs-14"], [1, "fs-10", "o-75"], [1, "d-flex"], ["routerLinkActive", "active", 1, "fw-bold", "fs-11", "o-75", "mr-1", 3, "routerLink"], [1, "fw-bold", "fs-11", "o-75", 2, "cursor", "pointer", "color", "red", 3, "click"], [1, "content"], [1, "setting", "mb-3", "p-1", "px-3", "ac-background-25", "bsb-15", "rounded", "d-flex", "align-items-center", "justify-content-between"], [1, "align-self-center", "fs-12", "fw-bold"], [1, "data", "align-self-start", 2, "max-width", "80px"], [1, "fs-12", "fw-bold", "o-75"], [1, "interests", "mb-3", "p-1", "px-3", "ac-background-25", "bsb-15", "rounded", "d-flex", "flex-column", "align-items-start"], [1, "fs-12", "fw-bold"], ["style", "padding-bottom: 8px;", 4, "ngIf", "ngIfElse"], ["empty", ""], [1, "history", "bsb-15", "bpc-background", "w-100", "rounded", "p-3", "mb-3"], [1, "header", "d-flex", "justify-content-between", "w-100"], [1, "content", "border-rounded", "pr-2", 2, "max-height", "256px", "overflow-y", "scroll"], [4, "ngIf", "ngIfElse"], ["loading", ""], [2, "padding-bottom", "8px"], [4, "ngFor", "ngForOf"], ["class", "fs-12 italic rounded p-1 ac-background bsb-15 ml-1 fw-bold", 4, "ngIf"], [1, "fs-12", "italic", "rounded", "p-1", "ac-background", "bsb-15", "ml-1", "fw-bold"], [1, "fs-12", "italic", "fw-bold"], ["class", "item mb-3 p-2 px-3 ac-background-25 bsb-15 rounded d-flex align-items-center", 4, "ngFor", "ngForOf"], [1, "item", "mb-3", "p-2", "px-3", "ac-background-25", "bsb-15", "rounded", "d-flex", "align-items-center"], [1, "first-name", "fw-bold", "fs-12"], [1, "last-seen", "fs-11", "fw-bold", "o-75"], [1, "child", "mb-3", "p-2", "ac-background-25", "bsb-15", "rounded", "d-flex", "flex-row", "align-items-center"]],
                template: function JuniorDashboardComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Parent Dashboard ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nav", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ol", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Dashboard");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h1", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Account Settings");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Advanced");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 21);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "edit");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 22);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JuniorDashboardComponent_Template_a_click_35_listener() {
                            return ctx.deleteChild();
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "delete");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 23);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 24);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 25);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Watch Time");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 26);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 27);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h3", 29);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Interests");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, JuniorDashboardComponent_div_48_Template, 3, 3, "div", 30);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, JuniorDashboardComponent_ng_template_49_Template, 2, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 32);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 33);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h1", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "History");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 34);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, JuniorDashboardComponent_ng_container_56_Template, 4, 2, "ng-container", 35);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, JuniorDashboardComponent_ng_template_58_Template, 7, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](50);
                        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](59);
                        var tmp_0_0 = null;
                        var tmp_1_0 = null;
                        var tmp_2_0 = null;
                        var tmp_4_0 = null;
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 9, ctx.child)) == null ? null : tmp_0_0.firstname, " ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 11, ctx.child)) == null ? null : tmp_1_0.firstname, ", ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 13, ctx.child)) == null ? null : tmp_2_0.age, " y.o");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/editchild/", ctx.childId, "");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 15, ctx.child)) == null ? null : tmp_4_0.settings.watch_time, " min ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nointerests)("ngIfElse", _r1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 17, ctx.histories))("ngIfElse", _r4);
                    }
                },
                directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
                pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
                styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.item[_ngcontent-%COMP%]:last-child, .setting[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvanVuaW9yLWRhc2hib2FyZC9qdW5pb3ItZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUFBO0VBQ0ksMkJBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2p1bmlvci1kYXNoYm9hcmQvanVuaW9yLWRhc2hib2FyZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0XG4gICAgd2lkdGg6IDEwMCVcbi5pdGVtOmxhc3QtY2hpbGQsIC5zZXR0aW5nOmxhc3QtY2hpbGRcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnRcbiJdfQ== */"]
            });
            return JuniorDashboardComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JuniorDashboardComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [{
                    selector: 'app-junior-dashboard',
                    templateUrl: './junior-dashboard.component.html',
                    styleUrls: ['./junior-dashboard.component.sass']
                }]
            }], function () {
                return [{type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]}, {type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]}, {type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]}, {type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/dashboard/main/main.component.ts":
    /*!*************************************************************!*\
  !*** ./src/app/components/dashboard/main/main.component.ts ***!
  \*************************************************************/
    /*! exports provided: MainComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
            return MainComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/firebase.service */ "./src/app/services/firebase.service.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


        var MainComponent = /** @class */ (function () {
            function MainComponent(fs, router, activatedRoute) {
                this.fs = fs;
                this.router = router;
                this.activatedRoute = activatedRoute;
            }

            MainComponent.prototype.ngOnInit = function () {
                //this.fs.getTests().subscribe(tests => {
                //console.log(tests);
                //});
                //this.router.navigate(['general'], {relativeTo: this.activatedRoute});
            };
            MainComponent.ɵfac = function MainComponent_Factory(t) {
                return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
            };
            MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: MainComponent,
                selectors: [["app-main"]],
                decls: 2,
                vars: 0,
                consts: [[1, "dashboard", "w-100", "h-100", "d-flex", "flex-column", "align-items-center"]],
                template: function MainComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                },
                directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
                styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbWFpbi9tYWluLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvbWFpbi9tYWluLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgd2lkdGg6IDEwMCVcbiJdfQ== */"]
            });
            return MainComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-main',
                    templateUrl: './main.component.html',
                    styleUrls: ['./main.component.sass']
                }]
            }], function () {
                return [{type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]}, {type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]}, {type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/editchild/editchild.component.ts":
    /*!*************************************************************!*\
  !*** ./src/app/components/editchild/editchild.component.ts ***!
  \*************************************************************/
    /*! exports provided: EditchildComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "EditchildComponent", function () {
            return EditchildComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
        /* harmony import */
        var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
        /* harmony import */
        var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


        function EditchildComponent_form_4_div_10_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Firstname is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }

        function EditchildComponent_form_4_div_10_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditchildComponent_form_4_div_10_span_1_Template, 2, 0, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.firstname == null ? null : ctx_r3.firstname.errors.required);
            }
        }

        function EditchildComponent_form_4_div_15_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Age is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }

        function EditchildComponent_form_4_div_15_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum age is 4.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }

        function EditchildComponent_form_4_div_15_span_3_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum age is 16.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }

        function EditchildComponent_form_4_div_15_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditchildComponent_form_4_div_15_span_1_Template, 2, 0, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditchildComponent_form_4_div_15_span_2_Template, 2, 0, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditchildComponent_form_4_div_15_span_3_Template, 2, 0, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.age == null ? null : ctx_r4.age.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.age == null ? null : ctx_r4.age.errors.min);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.age == null ? null : ctx_r4.age.errors.max);
            }
        }

        function EditchildComponent_form_4_div_23_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Watch Time is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }

        function EditchildComponent_form_4_div_23_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum duration is 5.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }

        function EditchildComponent_form_4_div_23_span_3_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum duration is 30.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }

        function EditchildComponent_form_4_div_23_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditchildComponent_form_4_div_23_span_1_Template, 2, 0, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditchildComponent_form_4_div_23_span_2_Template, 2, 0, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditchildComponent_form_4_div_23_span_3_Template, 2, 0, "span", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.watch_time == null ? null : ctx_r5.watch_time.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.watch_time == null ? null : ctx_r5.watch_time.errors.min);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.watch_time == null ? null : ctx_r5.watch_time.errors.max);
            }
        }

        function EditchildComponent_form_4_div_32_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var interest_r14 = ctx.$implicit;
                var i_r15 = ctx.index;
                var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", interest_r14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.interests[i_r15].name);
            }
        }

        function EditchildComponent_form_4_Template(rf, ctx) {
            if (rf & 1) {
                var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditchildComponent_form_4_Template_form_ngSubmit_0_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
                    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                    return ctx_r16.onSubmit();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Edit the form below and hit save. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Firstname");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditchildComponent_form_4_div_10_Template, 2, 1, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Age");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditchildComponent_form_4_div_15_Template, 4, 3, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Adjust Settings ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Watch Time");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditchildComponent_form_4_div_23_Template, 4, 3, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Update interests ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " You can always change these at a later time. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Interests");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EditchildComponent_form_4_div_32_Template, 4, 2, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Save ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cancel");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.editChildForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit ", ctx_r0.child.firstname, "'s account");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.firstname.invalid && (ctx_r0.firstname.dirty || ctx_r0.firstname.touched));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.age.invalid && (ctx_r0.age.dirty || ctx_r0.age.touched));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.watch_time.invalid && (ctx_r0.watch_time.dirty || ctx_r0.watch_time.touched));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getInterests["controls"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error != undefined ? ctx_r0.error : "", " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.editChildForm.valid);
            }
        }

        function EditchildComponent_ng_template_6_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Loading... ");
            }
        }

        var EditchildComponent = /** @class */ (function () {
            function EditchildComponent(router, route, fs, db) {
                this.router = router;
                this.route = route;
                this.fs = fs;
                this.db = db;
                this.interests = [
                    {name: "sport", selected: false},
                    {name: "anime", selected: false},
                    {name: "action", selected: false},
                ];
                this.childId = this.route.snapshot.paramMap.get('child');
            }

            EditchildComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.editChildForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    'firstname': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    'age': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(4),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(16),
                    ]),
                    'watch_time': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](15, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(30),
                    ]),
                    'interests': this.buildInterests()
                });
                this.childObs = this.db.getChild(this.childId).valueChanges();
                this.childSub = this.childObs.subscribe(function (child) {
                    _this.child = child;
                    _this.initilizeForm();
                });
            };
            EditchildComponent.prototype.buildInterests = function () {
                var arr = this.interests.map(function (interest) {
                    return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
                });
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](arr);
            };
            Object.defineProperty(EditchildComponent.prototype, "firstname", {
                get: function () {
                    return this.editChildForm.get("firstname");
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EditchildComponent.prototype, "age", {
                get: function () {
                    return this.editChildForm.get('age');
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EditchildComponent.prototype, "watch_time", {
                get: function () {
                    return this.editChildForm.get('watch_time');
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EditchildComponent.prototype, "getInterests", {
                get: function () {
                    return this.editChildForm.get('interests');
                },
                enumerable: false,
                configurable: true
            });
            EditchildComponent.prototype.onSubmit = function () {
                var _this = this;
                console.log("SUBMITTT!");
                var child = {};
                child["firstname"] = this.firstname.value;
                child["age"] = this.age.value;
                child["settings"] = {
                    watch_time: this.watch_time.value
                };
                child["interests"] = this.getInterests.value
                    .map(function (checked, i) {
                        return checked ? {
                            name: _this.interests[i].name,
                            selected: true
                        } : {name: _this.interests[i].name, selected: false};
                    });
                this.db.updateChild(this.childId, child)
                    .then(function (_) {
                        return console.log(_this.child.firstname + " updated!");
                    })
                    .catch(function (err) {
                        return console.log(err);
                    });
                this.router.navigate(["/dashboard/" + this.childId]);
            };
            EditchildComponent.prototype.initilizeForm = function () {
                this.firstname.setValue(this.child.firstname, {emitEvent: false});
                this.age.setValue(this.child.age, {emitEvent: false});
                this.watch_time.setValue(this.child.settings.watch_time, {emitEvent: false});
                var interests = this.child.interests;
                for (var i = 0; i < interests.length; i++) {
                    this.getInterests['controls'][i].setValue(interests[i].selected, {emitEvent: false});
                }
            };
            EditchildComponent.prototype.ngOnDestroy = function () {
                console.log("Destroyed!");
                this.childSub.unsubscribe();
            };
            EditchildComponent.ɵfac = function EditchildComponent_Factory(t) {
                return new (t || EditchildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]));
            };
            EditchildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: EditchildComponent,
                selectors: [["app-editchild"]],
                decls: 8,
                vars: 4,
                consts: [[1, "editchild", "w-100", "h-100", "d-flex", "flex-column", "align-items-center"], [1, "logo", "w-fc", "mb-3"], ["src", "../../../assets/images/Slice (2).png", "alt", "Lol", 2, "width", "auto", "height", "30px", "object-fit", "cover"], [1, "content", "w-100", "rounded", "p-3", "d-flex", "flex-column", "align-items-start", "justify-content-between"], ["class", "d-flex flex-column w-100", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], ["style", "height: 10000px; width: 100%; background-color: red;"], ["loading", ""], [1, "d-flex", "flex-column", "w-100", 3, "formGroup", "ngSubmit"], ["id", "addchild1", 1, "form-part", "d-flex", "flex-column"], [1, "roboto", "ac-color", "fs-20"], [1, "form-text", "text-muted", "fs-12"], [1, "form-group"], ["for", "exampleInputPassword1", 1, "fs-12"], ["type", "text", "placeholder", "Enter firstname", "formControlName", "firstname", 1, "form-control", "fs-14"], [4, "ngIf"], ["type", "number", "placeholder", "Enter your child's age", "placeholder", "Age", "formControlName", "age", 1, "form-control", "fs-14"], ["id", "addchild2", 1, "form-part", "flex-column"], ["type", "number", "formControlName", "watch_time", 1, "form-control", "fs-14"], ["id", "addchild3", 1, "form-part", "flex-column"], [1, "fs-14", "mb-3"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], [1, "fs-12", 2, "color", "red"], ["type", "submit", 1, "fs-14", "align-self-end", "btn", "btn-growthy", 3, "disabled"], ["routerLink", "", 1, "fs-12", "fw-bold", "mt-3"], ["class", "fs-12 italic", 4, "ngIf"], [1, "fs-12", "italic"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "formControl"], ["for", "interest"]],
                template: function EditchildComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditchildComponent_form_4_Template, 39, 8, "form", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditchildComponent_ng_template_6_Template, 1, 0, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.childObs))("ngIfElse", _r1);
                    }
                },
                directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
                pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
                styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0Y2hpbGQvZWRpdGNoaWxkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0Y2hpbGQvZWRpdGNoaWxkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgICB3aWR0aDogMTAwJSJdfQ== */"]
            });
            return EditchildComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditchildComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-editchild',
                    templateUrl: './editchild.component.html',
                    styleUrls: ['./editchild.component.sass']
                }]
            }], function () {
                return [{type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]}, {type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]}, {type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]}, {type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/editparent/editemail/editemail.component.ts":
    /*!************************************************************************!*\
  !*** ./src/app/components/editparent/editemail/editemail.component.ts ***!
  \************************************************************************/
    /*! exports provided: EditemailComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "EditemailComponent", function () {
            return EditemailComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
        /* harmony import */
        var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
        /* harmony import */
        var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


        function EditemailComponent_form_4_div_8_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function EditemailComponent_form_4_div_8_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid email.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function EditemailComponent_form_4_div_8_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditemailComponent_form_4_div_8_span_1_Template, 2, 0, "span", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditemailComponent_form_4_div_8_span_2_Template, 2, 0, "span", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.email == null ? null : ctx_r3.email.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.email == null ? null : ctx_r3.email.errors.email);
            }
        }

        function EditemailComponent_form_4_div_13_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function EditemailComponent_form_4_div_13_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must contain more than 8 characters.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function EditemailComponent_form_4_div_13_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditemailComponent_form_4_div_13_span_1_Template, 2, 0, "span", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditemailComponent_form_4_div_13_span_2_Template, 2, 0, "span", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.password == null ? null : ctx_r4.password.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.password == null ? null : ctx_r4.password.errors.minlength);
            }
        }

        var _c0 = function () {
            return ["/dashboard"];
        };

        function EditemailComponent_form_4_Template(rf, ctx) {
            if (rf & 1) {
                var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditemailComponent_form_4_Template_form_ngSubmit_0_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
                    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                    return ctx_r9.onSubmit();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Update Email");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditemailComponent_form_4_div_8_Template, 3, 2, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EditemailComponent_form_4_div_13_Template, 3, 2, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Save ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cancel");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.editEmailForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.email.invalid && (ctx_r0.email.dirty || ctx_r0.email.touched));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.password.invalid && (ctx_r0.password.dirty || ctx_r0.password.touched));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error != undefined ? ctx_r0.error : "", " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.editEmailForm.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
            }
        }

        function EditemailComponent_ng_template_6_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Loading... ");
            }
        }

        var EditemailComponent = /** @class */ (function () {
            function EditemailComponent(router, db, fs) {
                this.router = router;
                this.db = db;
                this.fs = fs;
            }

            EditemailComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.editEmailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                    ]),
                    'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
                    ]),
                });
                this.parentObs = this.db.getParent().valueChanges();
                this.sub = this.parentObs.subscribe(function (p) {
                    _this.oldEmail = p['email'];
                    _this.email.setValue(_this.oldEmail || "");
                });
            };
            Object.defineProperty(EditemailComponent.prototype, "email", {
                get: function () {
                    return this.editEmailForm.get("email");
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EditemailComponent.prototype, "password", {
                get: function () {
                    return this.editEmailForm.get("password");
                },
                enumerable: false,
                configurable: true
            });
            EditemailComponent.prototype.onSubmit = function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var _this = this;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                return [4 /*yield*/, this.fs.updateEmail(this.oldEmail, this.password.value, this.email.value)
                                    .then(function (_) {
                                        _this.fs.afAuth.currentUser.then(function (user) {
                                            if (user.email != _this.oldEmail) {
                                                _this.db.updateParent({email: _this.email.value});
                                                _this.router.navigate(["/dashboard"]);
                                            }
                                        });
                                    })
                                    .catch(function (err) {
                                        switch (err.code) {
                                            case "auth/wrong-password":
                                                _this.error = "Incorrect password. Try again";
                                                break;
                                            default:
                                                _this.error = "Something went wrong. Try again";
                                        }
                                    })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            EditemailComponent.prototype.ngOnDestroy = function () {
                this.sub.unsubscribe();
            };
            EditemailComponent.ɵfac = function EditemailComponent_Factory(t) {
                return new (t || EditemailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]));
            };
            EditemailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
                type: EditemailComponent,
                selectors: [["app-editemail"]],
                decls: 8,
                vars: 4,
                consts: [[1, "editmail", "w-100", "h-100", "d-flex", "flex-column", "align-items-center"], [1, "logo", "w-fc", "mb-3"], ["src", "../../../assets/images/Slice (2).png", "alt", "Lol", 2, "width", "auto", "height", "30px", "object-fit", "cover"], [1, "content", "w-100", "rounded", "p-3", "d-flex", "flex-column", "align-items-start", "justify-content-between"], ["class", "d-flex flex-column w-100", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "d-flex", "flex-column", "w-100", 3, "formGroup", "ngSubmit"], [1, "d-flex", "flex-column"], [1, "roboto", "ac-color", "fs-20"], [1, "form-group"], [1, "fs-12"], ["type", "text", "placeholder", "Enter email", "formControlName", "email", 1, "form-control", "fs-14"], [4, "ngIf"], ["for", "exampleInputPassword1", 1, "fs-12"], ["type", "password", "placeholder", "Enter your password", "formControlName", "password", "required", "", 1, "form-control", "fs-14"], [1, "fs-12", 2, "color", "red"], ["type", "submit", 1, "mt-1", "fs-14", "align-self-end", "btn", "btn-growthy", 3, "disabled"], [1, "fs-12", "fw-bold", "mt-3", 3, "routerLink"], ["class", "fs-12 italic", 4, "ngIf"], [1, "fs-12", "italic"]],
                template: function EditemailComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditemailComponent_form_4_Template, 20, 7, "form", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EditemailComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx.parentObs))("ngIfElse", _r1);
                    }
                },
                directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
                pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
                styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0cGFyZW50L2VkaXRlbWFpbC9lZGl0ZW1haWwuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXRwYXJlbnQvZWRpdGVtYWlsL2VkaXRlbWFpbC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0XG4gICAgd2lkdGg6IDEwMCUiXX0= */"]
            });
            return EditemailComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditemailComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [{
                    selector: 'app-editemail',
                    templateUrl: './editemail.component.html',
                    styleUrls: ['./editemail.component.sass']
                }]
            }], function () {
                return [{type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]}, {type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]}, {type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/editparent/editname/editname.component.ts":
    /*!**********************************************************************!*\
  !*** ./src/app/components/editparent/editname/editname.component.ts ***!
  \**********************************************************************/
    /*! exports provided: EditnameComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "EditnameComponent", function () {
            return EditnameComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
        /* harmony import */
        var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


        function EditnameComponent_form_4_div_8_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fullname is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }

        function EditnameComponent_form_4_div_8_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditnameComponent_form_4_div_8_span_1_Template, 2, 0, "span", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fullname == null ? null : ctx_r4.fullname.errors.required);
            }
        }

        var _c0 = function () {
            return ["/dashboard"];
        };

        function EditnameComponent_form_4_Template(rf, ctx) {
            if (rf & 1) {
                var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditnameComponent_form_4_Template_form_ngSubmit_0_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
                    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                    return ctx_r6.onSubmit();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Fullname");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fullname");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditnameComponent_form_4_div_8_Template, 2, 1, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Save ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.editNameForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fullname.invalid && (ctx_r0.fullname.dirty || ctx_r0.fullname.touched));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error != undefined ? ctx_r0.error : "", " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.editNameForm.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
            }
        }

        function EditnameComponent_ng_template_6_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Loading... ");
            }
        }

        var EditnameComponent = /** @class */ (function () {
            function EditnameComponent(router, db) {
                this.router = router;
                this.db = db;
            }

            EditnameComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.editNameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    'fullname': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ])
                });
                this.parentObs = this.db.getParent().valueChanges();
                this.sub = this.parentObs.subscribe(function (p) {
                    _this.fullname.setValue(p['fullname'] || "");
                });
            };
            Object.defineProperty(EditnameComponent.prototype, "fullname", {
                get: function () {
                    return this.editNameForm.get("fullname");
                },
                enumerable: false,
                configurable: true
            });
            EditnameComponent.prototype.onSubmit = function () {
                this.db.updateParent({fullname: this.fullname.value});
                this.router.navigate(["/dashboard"]);
            };
            EditnameComponent.prototype.ngOnDestroy = function () {
                this.sub.unsubscribe();
            };
            EditnameComponent.ɵfac = function EditnameComponent_Factory(t) {
                return new (t || EditnameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]));
            };
            EditnameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: EditnameComponent,
                selectors: [["app-editname"]],
                decls: 8,
                vars: 4,
                consts: [[1, "editname", "w-100", "h-100", "d-flex", "flex-column", "align-items-center"], [1, "logo", "w-fc", "mb-3"], ["src", "../../../assets/images/Slice (2).png", "alt", "Lol", 2, "width", "auto", "height", "30px", "object-fit", "cover"], [1, "content", "w-100", "rounded", "p-3", "d-flex", "flex-column", "align-items-start", "justify-content-between"], ["class", "d-flex flex-column w-100", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "d-flex", "flex-column", "w-100", 3, "formGroup", "ngSubmit"], [1, "d-flex", "flex-column"], [1, "roboto", "ac-color", "fs-20"], [1, "form-group"], ["for", "exampleInputPassword1", 1, "fs-12"], ["type", "text", "placeholder", "Enter fullname", "formControlName", "fullname", 1, "form-control", "fs-14"], [4, "ngIf"], [1, "fs-12", 2, "color", "red"], ["type", "submit", 1, "fs-14", "align-self-end", "btn", "btn-growthy", 3, "disabled"], [1, "fs-12", "fw-bold", "mt-3", 3, "routerLink"], ["class", "fs-12 italic", 4, "ngIf"], [1, "fs-12", "italic"]],
                template: function EditnameComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditnameComponent_form_4_Template, 15, 6, "form", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditnameComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.parentObs))("ngIfElse", _r1);
                    }
                },
                directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
                pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
                styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0cGFyZW50L2VkaXRuYW1lL2VkaXRuYW1lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0cGFyZW50L2VkaXRuYW1lL2VkaXRuYW1lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbiAgICB3aWR0aDogMTAwJSJdfQ== */"]
            });
            return EditnameComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditnameComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-editname',
                    templateUrl: './editname.component.html',
                    styleUrls: ['./editname.component.sass']
                }]
            }], function () {
                return [{type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]}, {type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/editparent/editpwd/editpwd.component.ts":
    /*!********************************************************************!*\
  !*** ./src/app/components/editparent/editpwd/editpwd.component.ts ***!
  \********************************************************************/
    /*! exports provided: EditpwdComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "EditpwdComponent", function () {
            return EditpwdComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
        /* harmony import */
        var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
        /* harmony import */
        var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


        function EditpwdComponent_form_4_div_8_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function EditpwdComponent_form_4_div_8_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must contain more than 8 characters.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function EditpwdComponent_form_4_div_8_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditpwdComponent_form_4_div_8_span_1_Template, 2, 0, "span", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditpwdComponent_form_4_div_8_span_2_Template, 2, 0, "span", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.password == null ? null : ctx_r3.password.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.password == null ? null : ctx_r3.password.errors.minlength);
            }
        }

        function EditpwdComponent_form_4_div_13_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New Password is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function EditpwdComponent_form_4_div_13_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must contain more than 8 characters.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function EditpwdComponent_form_4_div_13_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditpwdComponent_form_4_div_13_span_1_Template, 2, 0, "span", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditpwdComponent_form_4_div_13_span_2_Template, 2, 0, "span", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.new_password == null ? null : ctx_r4.new_password.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.new_password == null ? null : ctx_r4.new_password.errors.minlength);
            }
        }

        var _c0 = function () {
            return ["/dashboard"];
        };

        function EditpwdComponent_form_4_Template(rf, ctx) {
            if (rf & 1) {
                var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditpwdComponent_form_4_Template_form_ngSubmit_0_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
                    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                    return ctx_r9.onSubmit();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Change Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditpwdComponent_form_4_div_8_Template, 3, 2, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "New Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EditpwdComponent_form_4_div_13_Template, 3, 2, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Save ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cancel");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.editPasswordForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.password.invalid && (ctx_r0.password.dirty || ctx_r0.password.touched));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.new_password.invalid && (ctx_r0.new_password.dirty || ctx_r0.new_password.touched));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error != undefined ? ctx_r0.error : "", " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.editPasswordForm.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
            }
        }

        function EditpwdComponent_ng_template_6_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Loading... ");
            }
        }

        var EditpwdComponent = /** @class */ (function () {
            function EditpwdComponent(router, db, fs) {
                this.router = router;
                this.db = db;
                this.fs = fs;
            }

            EditpwdComponent.prototype.ngOnInit = function () {
                this.editPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
                    ]),
                    'new_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
                    ]),
                });
                this.parentObs = this.db.getParent().valueChanges();
            };
            Object.defineProperty(EditpwdComponent.prototype, "password", {
                get: function () {
                    return this.editPasswordForm.get("password");
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EditpwdComponent.prototype, "new_password", {
                get: function () {
                    return this.editPasswordForm.get("new_password");
                },
                enumerable: false,
                configurable: true
            });
            EditpwdComponent.prototype.onSubmit = function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var _this = this;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                return [4 /*yield*/, this.fs.changePassword(this.password.value, this.new_password.value)
                                    .then(function (_) {
                                        console.log("Password changed");
                                        _this.router.navigate(["/dashboard"]);
                                    })
                                    .catch(function (err) {
                                        console.error(err);
                                        switch (err.code) {
                                            case "auth/wrong-password":
                                                _this.error = "Incorrect password. Try again";
                                                break;
                                            default:
                                                _this.error = "Something went wrong. Try again";
                                        }
                                    })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            EditpwdComponent.prototype.ngOnDestroy = function () {
            };
            EditpwdComponent.ɵfac = function EditpwdComponent_Factory(t) {
                return new (t || EditpwdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]));
            };
            EditpwdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
                type: EditpwdComponent,
                selectors: [["app-editpwd"]],
                decls: 8,
                vars: 4,
                consts: [[1, "editpwd", "w-100", "h-100", "d-flex", "flex-column", "align-items-center"], [1, "logo", "w-fc", "mb-3"], ["src", "../../../assets/images/Slice (2).png", "alt", "Lol", 2, "width", "auto", "height", "30px", "object-fit", "cover"], [1, "content", "w-100", "rounded", "p-3", "d-flex", "flex-column", "align-items-start", "justify-content-between"], ["class", "d-flex flex-column w-100", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "d-flex", "flex-column", "w-100", 3, "formGroup", "ngSubmit"], [1, "d-flex", "flex-column"], [1, "roboto", "ac-color", "fs-20"], [1, "form-group"], [1, "fs-12"], ["type", "password", "placeholder", "Enter current password", "formControlName", "password", 1, "form-control", "fs-14"], [4, "ngIf"], ["type", "password", "placeholder", "Enter a new password", "formControlName", "new_password", "required", "", 1, "form-control", "fs-14"], [1, "fs-12", 2, "color", "red"], ["type", "submit", 1, "mt-1", "fs-14", "align-self-end", "btn", "btn-growthy", 3, "disabled"], [1, "fs-12", "fw-bold", "mt-3", 3, "routerLink"], ["class", "fs-12 italic", 4, "ngIf"], [1, "fs-12", "italic"]],
                template: function EditpwdComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditpwdComponent_form_4_Template, 20, 7, "form", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EditpwdComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx.parentObs))("ngIfElse", _r1);
                    }
                },
                directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
                pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
                styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0cGFyZW50L2VkaXRwd2QvZWRpdHB3ZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdHBhcmVudC9lZGl0cHdkL2VkaXRwd2QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdFxuICAgIHdpZHRoOiAxMDAlIl19 */"]
            });
            return EditpwdComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditpwdComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [{
                    selector: 'app-editpwd',
                    templateUrl: './editpwd.component.html',
                    styleUrls: ['./editpwd.component.sass']
                }]
            }], function () {
                return [{type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]}, {type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]}, {type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/header/header.component.ts":
    /*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
    /*! exports provided: HeaderComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
            return HeaderComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


        var HeaderComponent = /** @class */ (function () {
            function HeaderComponent() {
            }

            HeaderComponent.prototype.ngOnInit = function () {
            };
            HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
                return new (t || HeaderComponent)();
            };
            HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: HeaderComponent,
                selectors: [["app-header"]],
                decls: 4,
                vars: 0,
                consts: [[1, "logo", "d-flex", "justify-content-between", "align-items-end", "w-100", "mb-3"], [1, "roboto", "ac-color", "fw-bold", "o-75", "fs-24", "p-0"], ["src", "../../../assets/images/logo2.png", "alt", "Lol", 1, "align-self-start", 2, "width", "auto", "height", "30px", "object-fit", "cover"]],
                template: function HeaderComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Dashboard ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                },
                styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2FzcyJ9 */"]
            });
            return HeaderComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-header',
                    templateUrl: './header.component.html',
                    styleUrls: ['./header.component.sass']
                }]
            }], function () {
                return [];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/intro/intro.component.ts":
    /*!*****************************************************!*\
  !*** ./src/app/components/intro/intro.component.ts ***!
  \*****************************************************/
    /*! exports provided: IntroComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
            return IntroComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


        var IntroComponent = /** @class */ (function () {
            function IntroComponent() {
            }

            IntroComponent.prototype.ngOnInit = function () {
            };
            IntroComponent.ɵfac = function IntroComponent_Factory(t) {
                return new (t || IntroComponent)();
            };
            IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: IntroComponent,
                selectors: [["app-intro"]],
                decls: 14,
                vars: 0,
                consts: [[1, "intro", "h-100", "d-flex", "flex-column", "align-items-center"], [1, "logo", "w-fc", "mb-3"], ["src", "../../../assets/images/Slice (2).png", "alt", "Lol", 2, "width", "auto", "height", "50px", "object-fit", "cover"], [1, "content", "rounded", "p-3", "d-flex", "flex-column", "align-items-start", "justify-content-between"], [1, "roboto", "ac-color", "fs-20"], [1, "fs-14", "o-75", "my-3"], ["routerLink", "/dashboard", 1, "fake-link", "align-self-end"], [1, "btn", "btn-growthy"]],
                template: function IntroComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Caring parent, Welcome!");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Growthy is an app and a whole envirenement designed to mainly focus on the growth of your child, and to help you, as a parent. ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi iste voluptatum, qui deleniti quo optio pariatur, error non laboriosam enim, possimus ducimus nulla natus corporis beatae ipsum cum animi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa impedit aut, delectus hic non tenetur ipsam est consectetur eligendi iure libero, commodi cumque dolor, enim repellat perspiciatis doloribus dolorum voluptatem. ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Get started ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                },
                directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
                styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vaW50cm8uY29tcG9uZW50LnNhc3MifQ== */"]
            });
            return IntroComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-intro',
                    templateUrl: './intro.component.html',
                    styleUrls: ['./intro.component.sass']
                }]
            }], function () {
                return [];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/junior-login/junior-login.component.ts":
    /*!*******************************************************************!*\
  !*** ./src/app/components/junior-login/junior-login.component.ts ***!
  \*******************************************************************/
    /*! exports provided: JuniorLoginComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "JuniorLoginComponent", function () {
            return JuniorLoginComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
        /* harmony import */
        var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
        /* harmony import */
        var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
        /* harmony import */
        var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

///<reference types="chrome"/>
///<reference types="chrome"/>


        function JuniorLoginComponent_ng_container_10_ng_container_1_div_1_Template(rf, ctx) {
            if (rf & 1) {
                var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JuniorLoginComponent_ng_container_10_ng_container_1_div_1_Template_div_click_1_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
                    var child_r9 = ctx.$implicit;
                    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
                    return ctx_r10.jlogin(child_r9);
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var child_r9 = ctx.$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@childAnim", undefined);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", child_r9.key);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r9.firstname);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", child_r9.age, ")");
            }
        }

        function JuniorLoginComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JuniorLoginComponent_ng_container_10_ng_container_1_div_1_Template, 8, 4, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            }
            if (rf & 2) {
                var childs_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childs_r4);
            }
        }

        function JuniorLoginComponent_ng_container_10_ng_template_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add child");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function JuniorLoginComponent_ng_container_10_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JuniorLoginComponent_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, JuniorLoginComponent_ng_container_10_ng_template_2_Template, 7, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            }
            if (rf & 2) {
                var childs_r4 = ctx.$implicit;
                var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (childs_r4 == null ? null : childs_r4.length) > 0)("ngIfElse", _r6);
            }
        }

        function JuniorLoginComponent_ng_template_12_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading...");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function JuniorLoginComponent_small_18_Template(rf, ctx) {
            if (rf & 1) {
                var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JuniorLoginComponent_small_18_Template_a_click_1_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
                    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                    return ctx_r13.logout();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "logout");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        var JuniorLoginComponent = /** @class */ (function () {
            function JuniorLoginComponent(router, fs, db) {
                this.router = router;
                this.fs = fs;
                this.db = db;
                this.loggedIn = false;
                this.children = null;
            }

            JuniorLoginComponent.prototype.ngOnInit = function () {
                var _this = this;
                setTimeout(function () {
                    _this.getChildren();
                }, 100);
            };
            JuniorLoginComponent.prototype.ngAfterViewInit = function () {
                var jlogin = localStorage.getItem('jlogin');
                var jloginObj = JSON.parse(jlogin);
                if (jlogin) {
                    document.getElementById('loggedin').innerHTML = "<span class=\"fs-14 ac-background-75 p-1 rounded italic\">" + jloginObj['firstname'] + "</span> is currently logged in!";
                    //Send Child Data to background
                    var checkLogin_1 = setInterval(function () {
                        var element = document.getElementById(jloginObj['id']);
                        if (element) {
                            element.classList.add('loggedin');
                            console.log("Logged in!");
                            clearInterval(checkLogin_1);
                        }
                    }, 1000);
                } else {
                    document.getElementById('loggedin').innerHTML = "No one is currently logged in!";
                }
            };
            JuniorLoginComponent.prototype.getChildren = function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        this.children = this.db.getChildren().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
                            return changes.map(function (c) {
                                return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({key: c.payload.key}, c.payload.val()));
                            });
                        }));
                        return [2 /*return*/];
                    });
                });
            };
            JuniorLoginComponent.prototype.logout = function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        //this.router.navigate(['/login']);
                        localStorage.removeItem('jlogin');
                        this.fs.logout();
                        return [2 /*return*/];
                    });
                });
            };
            JuniorLoginComponent.prototype.jlogin = function (child) {
                var jlogin = localStorage.getItem('jlogin');
                var firstname = document.querySelector("#" + child.key + " .firstname").innerHTML;
                var c = {};
                chrome.runtime.sendMessage({mode: 'Popup', action: 'Reset'});
                // Someone was logged in
                if (jlogin) {
                    // Lets log him out!
                    var jloginObj = JSON.parse(jlogin);
                    console.log(jloginObj['id'] + " just logged out!");
                    localStorage.removeItem('jlogin');
                    document.getElementById(jloginObj['id']).classList.remove('loggedin');
                    document.getElementById('loggedin').innerText = "No one is currently logged in!";
                    // Log in the new child, only if the one who logged out is not him!
                    if (jloginObj['id'] != child.key) {
                        console.log("Adding logged-in class to " + child.key);
                        document.getElementById(child.key).classList.add('loggedin');
                        console.log(child.key + " just logged in!");
                        var childObj = {};
                        childObj['id'] = child.key;
                        childObj['firstname'] = firstname;
                        localStorage.setItem('jlogin', JSON.stringify(childObj));
                        document.getElementById('loggedin').innerHTML = "<span class=\"fs-14 ac-background-75 p-1 rounded italic\">" + firstname + "</span> is currently logged in!";
                        c['last_seen'] = new Date().getTime();
                        //Send Child Data to background
                        chrome.runtime.sendMessage({mode: 'Popup', child: child, parent_uid: this.fs.UID});
                        //this.db.updateChild(child, c);
                    }
                }
                // No one was logged in! Log this child in directly.
                else {
                    console.log("Adding logged-in class to " + child.key);
                    document.getElementById(child.key).classList.add('loggedin');
                    console.log(child.key + " just logged in!");
                    var childObj = {};
                    childObj['id'] = child.key;
                    childObj['firstname'] = firstname;
                    localStorage.setItem('jlogin', JSON.stringify(childObj));
                    document.getElementById('loggedin').innerHTML = "<span class=\"fs-14 ac-background-75 p-1 rounded italic\">" + firstname + "</span> is currently logged in!";
                    c['last_seen'] = new Date().getTime();
                    //Send Child Data to background
                    chrome.runtime.sendMessage({mode: 'Popup', child: child, parent_uid: this.fs.UID});
                    //this.db.updateChild(child, c);
                }
            };
            JuniorLoginComponent.ɵfac = function JuniorLoginComponent_Factory(t) {
                return new (t || JuniorLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]));
            };
            JuniorLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
                type: JuniorLoginComponent,
                selectors: [["app-junior-login"]],
                decls: 21,
                vars: 5,
                consts: [[1, "signinchild", "w-100", "h-100", "d-flex", "flex-column", "align-items-center"], [1, "logo", "w-fc", "mb-3"], ["src", "../../../assets/images/Slice (2).png", "alt", "Lol", 2, "width", "auto", "height", "40px", "object-fit", "cover"], [1, "content", "w-100", "rounded", "p-3", "d-flex", "flex-column", "align-items-start", "justify-content-between"], [1, "roboto", "pc-color", "fs-20"], ["id", "loggedin", 1, "roboto", "pc-color", "fs-12"], [1, "italic"], [1, "childs", "mt-3", "align-self-center", "row", "w-100", "d-flex", "justify-content-start", 2, "max-height", "400px", "overflow-y", "scroll"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["routerLink", "/addchild", "routerLinkActive", "active", 1, "mt-3", "fs-12", "fw-bold", "d-none"], [1, "bottom", "px-3", "d-flex", "align-items-end", "justify-content-between", "w-100"], [1, ""], ["class", "roboto fw-bold fs-12", 4, "ngIf"], ["routerLink", "dashboard", 1, "fs-12", "fw-bold"], ["empty", ""], ["class", "child p-1 col-4", 4, "ngFor", "ngForOf"], [1, "child", "p-1", "col-4"], [1, "d-flex", "py-3", "rounded", "flex-column", "align-items-center", "wrapper", "ac-background-25", 2, "cursor", "pointer", 3, "id", "click"], [1, "ac-background", "mb-3", "pic", "o-25", 2, "width", "75px", "height", "75px", "border-radius", "100%"], [1, "fs-12"], [1, "firstname", "mr-1"], [1, "fs-12", "o-50"], ["routerLink", "/addchild", "routerLinkActive", "active", 1, ""], [1, "d-flex", "py-3", "rounded", "flex-column", "align-items-center", "wrapper", "ac-background-25", 2, "cursor", "pointer"], [1, "firstname"], [1, "d-flex", "py-3", "rounded", "flex-column", "align-items-center", "wrapper", "ac-background-25"], [1, "roboto", "fw-bold", "fs-12"], ["routerLink", "login", 1, "fs-12", "fw-bold", 3, "click"]],
                template: function JuniorLoginComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Who is it? =) ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Checking who's logged in...");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, JuniorLoginComponent_ng_container_10_Template, 4, 2, "ng-container", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, JuniorLoginComponent_ng_template_12_Template, 6, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add a new account for your child.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, JuniorLoginComponent_small_18_Template, 3, 0, "small", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Dashboard");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 3, ctx.children))("ngIfElse", _r1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fs.UID);
                    }
                },
                directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
                pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
                styles: [".pc-color[_ngcontent-%COMP%] {\n  color: #111;\n}\n\n.pc-background[_ngcontent-%COMP%] {\n  background: #111;\n}\n\n.sc-color[_ngcontent-%COMP%] {\n  color: rgba(17, 17, 17, 0.85);\n}\n\n.sc-background[_ngcontent-%COMP%] {\n  background: rgba(17, 17, 17, 0.85);\n}\n\n.bpc-color[_ngcontent-%COMP%] {\n  color: #F3F5F7;\n}\n\n.bpc-background[_ngcontent-%COMP%] {\n  background: #F3F5F7;\n}\n\n.bsc-color[_ngcontent-%COMP%] {\n  color: rgba(243, 245, 247, 0.85);\n}\n\n.bsc-background[_ngcontent-%COMP%] {\n  background: rgba(243, 245, 247, 0.85);\n}\n\n.ac-color[_ngcontent-%COMP%] {\n  color: #2AAE63;\n}\n\n.ac-background[_ngcontent-%COMP%] {\n  background: #2AAE63;\n}\n\n.ac-background-25[_ngcontent-%COMP%] {\n  background: rgba(42, 174, 99, 0.15);\n}\n\n.ac-background-75[_ngcontent-%COMP%] {\n  background: rgba(42, 174, 99, 0.75);\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.loggedin[_ngcontent-%COMP%] {\n  background: rgba(42, 174, 99, 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGUvc2Fzcy9jb2xvci1wYWxldHRlLnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvanVuaW9yLWxvZ2luL2p1bmlvci1sb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLFdBUFk7QUNFaEI7O0FETUE7RUFDSSxnQkFUWTtBQ01oQjs7QURLQTtFQUNJLDZCQVhjO0FDU2xCOztBREdBO0VBQ0ksa0NBYmM7QUNhbEI7O0FERUE7RUFDSSxjQWZlO0FDZ0JuQjs7QURBQTtFQUNJLG1CQWpCZTtBQ29CbkI7O0FEREE7RUFDSSxnQ0FuQmlCO0FDdUJyQjs7QURIQTtFQUNJLHFDQXJCaUI7QUMyQnJCOztBREpBO0VBQ0ksY0F2Qlc7QUM4QmY7O0FETkE7RUFDSSxtQkF6Qlc7QUNrQ2Y7O0FEUEE7RUFDSSxtQ0FBQTtBQ1VKOztBRFRBO0VBQ0ksbUNBQUE7QUNZSjs7QUE1Q0E7RUFDSSxXQUFBO0FBK0NKOztBQTdDQTtFQUNJLGtDQUFBO0FBZ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9qdW5pb3ItbG9naW4vanVuaW9yLWxvZ2luLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMxMTFcbiRzZWNvbmRhcnktY29sb3I6IHJnYmEoJHByaW1hcnktY29sb3IsIC44NSlcbiRiZy1wcmltYXJ5LWNvbG9yOiAjRjNGNUY3XG4kYmctc2Vjb25kYXJ5LWNvbG9yOiByZ2JhKCRiZy1wcmltYXJ5LWNvbG9yLCAuODUpXG4kYWNjZW50LWNvbG9yOiAjMkFBRTYzXG5cbi5wYy1jb2xvclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvclxuLnBjLWJhY2tncm91bmRcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvclxuXG4uc2MtY29sb3JcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvclxuLnNjLWJhY2tncm91bmRcbiAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNvbG9yXG5cbi5icGMtY29sb3JcbiAgICBjb2xvcjogJGJnLXByaW1hcnktY29sb3Jcbi5icGMtYmFja2dyb3VuZFxuICAgIGJhY2tncm91bmQ6ICRiZy1wcmltYXJ5LWNvbG9yXG5cbi5ic2MtY29sb3JcbiAgICBjb2xvcjogJGJnLXNlY29uZGFyeS1jb2xvclxuLmJzYy1iYWNrZ3JvdW5kXG4gICAgYmFja2dyb3VuZDogJGJnLXNlY29uZGFyeS1jb2xvclxuXG4uYWMtY29sb3JcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvclxuLmFjLWJhY2tncm91bmRcbiAgICBiYWNrZ3JvdW5kOiAkYWNjZW50LWNvbG9yXG5cbi5hYy1iYWNrZ3JvdW5kLTI1XG4gICAgYmFja2dyb3VuZDogcmdiYSgkYWNjZW50LWNvbG9yLCAuMTUpXG4uYWMtYmFja2dyb3VuZC03NVxuICAgIGJhY2tncm91bmQ6IHJnYmEoJGFjY2VudC1jb2xvciwgLjc1KSIsIi5wYy1jb2xvciB7XG4gIGNvbG9yOiAjMTExO1xufVxuXG4ucGMtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICMxMTE7XG59XG5cbi5zYy1jb2xvciB7XG4gIGNvbG9yOiByZ2JhKDE3LCAxNywgMTcsIDAuODUpO1xufVxuXG4uc2MtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTcsIDE3LCAxNywgMC44NSk7XG59XG5cbi5icGMtY29sb3Ige1xuICBjb2xvcjogI0YzRjVGNztcbn1cblxuLmJwYy1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI0YzRjVGNztcbn1cblxuLmJzYy1jb2xvciB7XG4gIGNvbG9yOiByZ2JhKDI0MywgMjQ1LCAyNDcsIDAuODUpO1xufVxuXG4uYnNjLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQ1LCAyNDcsIDAuODUpO1xufVxuXG4uYWMtY29sb3Ige1xuICBjb2xvcjogIzJBQUU2Mztcbn1cblxuLmFjLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjMkFBRTYzO1xufVxuXG4uYWMtYmFja2dyb3VuZC0yNSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDE3NCwgOTksIDAuMTUpO1xufVxuXG4uYWMtYmFja2dyb3VuZC03NSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDE3NCwgOTksIDAuNzUpO1xufVxuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9nZ2VkaW4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCAxNzQsIDk5LCAwLjQpO1xufSJdfQ== */"],
                data: {
                    animation: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('childAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: 0,
                                    transform: "translateX(-25px)"
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: 1,
                                    transform: "translateX(0px)"
                                }))
                            ])
                        ])
                    ]
                }
            });
            return JuniorLoginComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JuniorLoginComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [{
                    selector: 'app-junior-login',
                    templateUrl: './junior-login.component.html',
                    styleUrls: ['./junior-login.component.sass'],
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('childAnim', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: 0,
                                    transform: "translateX(-25px)"
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: 1,
                                    transform: "translateX(0px)"
                                }))
                            ])
                        ])
                    ]
                }]
            }], function () {
                return [{type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]}, {type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]}, {type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/login/login.component.ts":
    /*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
    /*! exports provided: LoginComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
            return LoginComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
        /* harmony import */
        var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
        /* harmony import */
        var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


        function LoginComponent_div_13_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function LoginComponent_div_13_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid email.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function LoginComponent_div_13_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_13_span_1_Template, 2, 0, "span", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_13_span_2_Template, 2, 0, "span", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors.email);
            }
        }

        function LoginComponent_div_18_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function LoginComponent_div_18_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must contain more than 8 characters.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function LoginComponent_div_18_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_18_span_1_Template, 2, 0, "span", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_18_span_2_Template, 2, 0, "span", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.password == null ? null : ctx_r1.password.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.password == null ? null : ctx_r1.password.errors.minlength);
            }
        }

        var LoginComponent = /** @class */ (function () {
            function LoginComponent(fs, router, auth) {
                this.fs = fs;
                this.router = router;
                this.auth = auth;
            }

            LoginComponent.prototype.ngOnInit = function () {
                this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                    ]),
                    'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
                    ]),
                });
            };
            Object.defineProperty(LoginComponent.prototype, "email", {
                get: function () {
                    return this.loginForm.get('email');
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(LoginComponent.prototype, "password", {
                get: function () {
                    return this.loginForm.get('password');
                },
                enumerable: false,
                configurable: true
            });
            LoginComponent.prototype.onSubmit = function () {
                this.login();
            };
            LoginComponent.prototype.login = function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var _this = this;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        this.fs.login(this.email.value, this.password.value)
                            .then(function (user) {
                                if (user != null)
                                    _this.router.navigate(['']);
                            })
                            .catch(function (err) {
                                _this.error = err.message;
                            });
                        return [2 /*return*/];
                    });
                });
            };
            LoginComponent.ɵfac = function LoginComponent_Factory(t) {
                return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]));
            };
            LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
                type: LoginComponent,
                selectors: [["app-login"]],
                decls: 25,
                vars: 5,
                consts: [[1, "signin", "w-100", "h-100", "d-flex", "flex-column", "align-items-center"], [1, "logo", "w-fc", "mb-3"], ["src", "../../../assets/images/Slice (2).png", "alt", "Lol", 2, "width", "auto", "height", "50px", "object-fit", "cover"], [1, "content", "w-100", "rounded", "p-3", "d-flex", "flex-column", "align-items-start", "justify-content-between"], [1, "roboto", "ac-color", "fs-20"], [1, "form-text", "text-muted", "fs-12"], [1, "d-flex", "flex-column", "w-100", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "exampleInputEmail1", 1, "fs-12"], ["type", "email", "aria-describedby", "emailHelp", "placeholder", "Enter email", "formControlName", "email", 1, "form-control", "fs-14"], [4, "ngIf"], ["for", "exampleInputPassword1", 1, "fs-12"], ["type", "password", "placeholder", "Password", "formControlName", "password", "required", "", 1, "form-control", "fs-14"], [1, "fs-12", 2, "color", "red"], ["type", "submit", 1, "mt-1", "fs-14", "align-self-end", "btn", "btn-growthy", 3, "disabled"], ["routerLink", "/register", "routerLinkActive", "active", 1, "fs-12", "fw-bold"], ["class", "fs-12 italic", 4, "ngIf"], [1, "fs-12", "italic"]],
                template: function LoginComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign in to your account");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Fill out the form below. ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
                            return ctx.onSubmit();
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email address");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 3, 2, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Password");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 3, 2, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Login ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "I don't have an account.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.error != undefined ? ctx.error : "", " ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
                    }
                },
                directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
                styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdFxuICAgIHdpZHRoOiAxMDAlXG4iXX0= */"]
            });
            return LoginComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [{
                    selector: 'app-login',
                    templateUrl: './login.component.html',
                    styleUrls: ['./login.component.sass']
                }]
            }], function () {
                return [{type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]}, {type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]}, {type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/components/register/register.component.ts":
    /*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
    /*! exports provided: RegisterComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
            return RegisterComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
        /* harmony import */
        var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
        /* harmony import */
        var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


        function RegisterComponent_div_13_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Full name is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function RegisterComponent_div_13_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid full name.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function RegisterComponent_div_13_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_13_span_1_Template, 2, 0, "span", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_13_span_2_Template, 2, 0, "span", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.fullname == null ? null : ctx_r0.fullname.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.fullname == null ? null : ctx_r0.fullname.errors.pattern);
            }
        }

        function RegisterComponent_div_18_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function RegisterComponent_div_18_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid email.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function RegisterComponent_div_18_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_18_span_1_Template, 2, 0, "span", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_18_span_2_Template, 2, 0, "span", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.email == null ? null : ctx_r1.email.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.email == null ? null : ctx_r1.email.errors.email);
            }
        }

        function RegisterComponent_div_23_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function RegisterComponent_div_23_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must have at least 8 characters.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function RegisterComponent_div_23_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_23_span_1_Template, 2, 0, "span", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_23_span_2_Template, 2, 0, "span", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.password == null ? null : ctx_r2.password.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.password == null ? null : ctx_r2.password.errors.minlength);
            }
        }

        function RegisterComponent_div_28_span_1_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function RegisterComponent_div_28_span_2_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Does not match password.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
        }

        function RegisterComponent_div_28_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_28_span_1_Template, 2, 0, "span", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_28_span_2_Template, 2, 0, "span", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.confirm_password == null ? null : ctx_r3.confirm_password.errors.required);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.confirm_password == null ? null : ctx_r3.confirm_password.errors.pattern);
            }
        }

        var RegisterComponent = /** @class */ (function () {
            function RegisterComponent(router, firebaseService, db) {
                this.router = router;
                this.firebaseService = firebaseService;
                this.db = db;
            }

            RegisterComponent.prototype.ngOnInit = function () {
                this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'fullname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")
                    ]),
                    'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                    ]),
                    'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
                    ]),
                    'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                    ]),
                    'agree': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue
                    ])
                });
            };
            Object.defineProperty(RegisterComponent.prototype, "fullname", {
                get: function () {
                    return this.registerForm.get("fullname");
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(RegisterComponent.prototype, "email", {
                get: function () {
                    return this.registerForm.get('email');
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(RegisterComponent.prototype, "password", {
                get: function () {
                    return this.registerForm.get('password');
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(RegisterComponent.prototype, "confirm_password", {
                get: function () {
                    return this.registerForm.get('confirm_password');
                },
                enumerable: false,
                configurable: true
            });
            RegisterComponent.prototype.confirmedPassword = function () {
                var _this = this;
                return function (control) {
                    var pass = _this.registerForm.get('password').value;
                    var confirmPass = _this.registerForm.get('confirm_password').value;
                    return pass === confirmPass ? {'unconfirmed': true} : null;
                };
            };
            RegisterComponent.prototype.onSubmit = function () {
                this.register();
            };
            RegisterComponent.prototype.register = function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var _this = this;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        this.firebaseService.register(this.email.value, this.password.value)
                            .then(function (message) {
                                if (message != null) {
                                    _this.db.addParent(_this.firebaseService.UID, {
                                        email: _this.email.value,
                                        fullname: _this.fullname.value
                                    });
                                    _this.router.navigate(['']);
                                }
                            })
                            .catch(function (err) {
                                _this.error = err.message;
                                console.error(err);
                            });
                        return [2 /*return*/];
                    });
                });
            };
            RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
                return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]));
            };
            RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
                type: RegisterComponent,
                selectors: [["app-register"]],
                decls: 39,
                vars: 8,
                consts: [[1, "signup", "w-100", "h-100", "d-flex", "flex-column", "align-items-center"], [1, "logo", "w-fc", "mb-3"], ["src", "../../../assets/images/Slice (2).png", "alt", "Lol", 2, "width", "auto", "height", "30px", "object-fit", "cover"], [1, "content", "w-100", "rounded", "p-3", "d-flex", "flex-column", "align-items-start", "justify-content-between"], [1, "roboto", "ac-color", "fs-20"], [1, "form-text", "text-muted", "fs-12"], [1, "d-flex", "flex-column", "w-100", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "exampleInputPassword1", 1, "fs-12"], ["type", "text", "placeholder", "Enter full name", "formControlName", "fullname", 1, "form-control", "fs-14"], [4, "ngIf"], ["for", "exampleInputEmail1", 1, "fs-12"], ["type", "email", "aria-describedby", "emailHelp", "placeholder", "Enter email", "formControlName", "email", 1, "form-control", "fs-14"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", "fs-14"], ["type", "password", "placeholder", "Password", "formControlName", "confirm_password", 1, "form-control", "fs-14", 3, "pattern"], [1, "form-check"], ["formControlName", "agree", "type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label", "fs-12"], [1, "fs-12", 2, "color", "red"], ["type", "submit", 1, "fs-14", "align-self-end", "btn", "btn-growthy", 3, "disabled"], ["routerLink", "/login", "routerLinkActive", "active", 1, "fs-12", "fw-bold"], ["class", "fs-12 italic", 4, "ngIf"], [1, "fs-12", "italic"]],
                template: function RegisterComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Start by signing up");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Fill out the form below. ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
                            return ctx.onSubmit();
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Full name");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 3, 2, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email address");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 3, 2, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Password");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RegisterComponent_div_23_Template, 3, 2, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Confirm password");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 3, 2, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "I agree to the terms of use.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Submit ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 20);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Sign in with your account.");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fullname.invalid && (ctx.fullname.dirty || ctx.fullname.touched));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("pattern", ctx.password.value);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.confirm_password.invalid && (ctx.confirm_password.dirty || ctx.confirm_password.touched));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.error != undefined ? ctx.error : "", " ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
                    }
                },
                directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
                styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdFxuICAgIHdpZHRoOiAxMDAlXG4iXX0= */"]
            });
            return RegisterComponent;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [{
                    selector: 'app-register',
                    templateUrl: './register.component.html',
                    styleUrls: ['./register.component.sass']
                }]
            }], function () {
                return [{type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]}, {type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]}, {type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/services/database.service.ts":
    /*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
    /*! exports provided: DatabaseService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
            return DatabaseService;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
        /* harmony import */
        var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");


        var DatabaseService = /** @class */ (function () {
            function DatabaseService(db, fs) {
                var _this = this;
                this.db = db;
                this.fs = fs;
                fs.authState.subscribe(function (user) {
                    return _this.userId = user ? user.uid : null;
                });
            }

            DatabaseService.prototype.addParent = function (UID, body) {
                return this.db.object("/parents/" + UID).set(body);
            };
            DatabaseService.prototype.getParent = function () {
                if (!this.userId)
                    return;
                return this.db.object("/parents/" + this.userId);
            };
            DatabaseService.prototype.updateParent = function (data) {
                if (data === void 0) {
                    data = null;
                }
                if (!this.userId)
                    return;
                return this.db.object("/parents/" + this.userId).update(data);
            };
            DatabaseService.prototype.addChild = function (body) {
                return this.db.list("/parents/" + this.userId + "/children_info").push(body);
            };
            DatabaseService.prototype.getChildren = function (query) {
                if (query === void 0) {
                    query = null;
                }
                if (!this.userId)
                    return;
                return this.db.list("/parents/" + this.userId + "/children_info", query);
            };
            DatabaseService.prototype.getChild = function (childId) {
                if (!this.userId)
                    return;
                return this.db.object("/parents/" + this.userId + "/children_info/" + childId);
            };
            DatabaseService.prototype.updateChild = function (childId, data) {
                if (data === void 0) {
                    data = null;
                }
                if (!this.userId)
                    return;
                return this.db.object("/parents/" + this.userId + "/children_info/" + childId).update(data);
            };
            DatabaseService.prototype.deleteChild = function (childId) {
                if (!this.userId)
                    return;
                var child = this.db.object("/parents/" + this.userId + "/children_info/" + childId);
                return child.remove();
            };
            DatabaseService.prototype.getHistory = function (query) {
                if (query === void 0) {
                    query = null;
                }
                if (!this.userId)
                    return;
                console.log(this.db.list("/parents/" + this.userId + "/history", query));
                return this.db.list("/parents/" + this.userId + "/history", query);
            };
            DatabaseService.ɵfac = function DatabaseService_Factory(t) {
                return new (t || DatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]));
            };
            DatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
                token: DatabaseService,
                factory: DatabaseService.ɵfac,
                providedIn: 'root'
            });
            return DatabaseService;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatabaseService, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [{
                    providedIn: 'root'
                }]
            }], function () {
                return [{type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]}, {type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/app/services/firebase.service.ts":
    /*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
    /*! exports provided: FirebaseService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
            return FirebaseService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


        var FirebaseService = /** @class */ (function () {
            function FirebaseService(afAuth, router) {
                var _this = this;
                this.afAuth = afAuth;
                this.router = router;
                this.loggedIn = null;
                //console.log("Constructor - FS");
                afAuth.authState.subscribe(function (user) {
                    if (user != null)
                        _this.UID = user.uid;
                });
            }

            FirebaseService.prototype.register = function (email, password) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var _this = this;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        return [2 /*return*/, this.afAuth.createUserWithEmailAndPassword(email, password)
                            .then(function (authState) {
                                console.log("Signed up!");
                                _this.UID = authState.user.uid;
                                return authState;
                            })
                            .catch(function (err) {
                                throw err;
                            })];
                    });
                });
            };
            FirebaseService.prototype.login = function (email, password) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var _this = this;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        return [2 /*return*/, this.afAuth
                            .signInWithEmailAndPassword(email, password)
                            .then(function (authState) {
                                _this.UID = authState.user.uid;
                                _this.email = authState.user.email;
                                return authState;
                            })
                            .catch(function (err) {
                                throw err;
                            })];
                    });
                });
            };
            FirebaseService.prototype.logout = function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var _this = this;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        return [2 /*return*/, this.afAuth
                            .signOut()
                            .then(function () {
                                console.log("Logging out.");
                                _this.UID = null;
                            })
                            .catch(function (err) {
                                throw err;
                            })];
                    });
                });
            };
            FirebaseService.prototype.updateEmail = function (email, password, newEmail) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        return [2 /*return*/, this.afAuth.signInWithEmailAndPassword(email, password)
                            .then(function (auth) {
                                console.log("Logged in again...");
                                return auth.user.updateEmail(newEmail);
                            })
                            .catch(function (err) {
                                throw err;
                            })];
                    });
                });
            };
            FirebaseService.prototype.changePassword = function (pwd, newpwd) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var _a, _b;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = this.afAuth).signInWithEmailAndPassword;
                                return [4 /*yield*/, this.afAuth.currentUser];
                            case 1:
                                return [2 /*return*/, _b.apply(_a, [(_c.sent()).email, pwd])
                                    .then(function (auth) {
                                        console.log("Logged in again...");
                                        return auth.user.updatePassword(newpwd);
                                    })
                                    .catch(function (err) {
                                        throw err;
                                    })];
                        }
                    });
                });
            };
            FirebaseService.ɵfac = function FirebaseService_Factory(t) {
                return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
            };
            FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
                token: FirebaseService,
                factory: FirebaseService.ɵfac,
                providedIn: 'root'
            });
            return FirebaseService;
        }());

        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseService, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
                args: [{
                    providedIn: 'root'
                }]
            }], function () {
                return [{type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]}, {type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "./src/environments/environment.ts":
    /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
    /*! exports provided: environment */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "environment", function () {
            return environment;
        });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
        var environment = {
            production: false,
            firebase: {
                apiKey: "AIzaSyD29SsoqMAJlpezphsMnNd6-EVmXXRBS_U",
                authDomain: "ext-ng.firebaseapp.com",
                databaseURL: "https://ext-ng.firebaseio.com",
                projectId: "ext-ng",
                storageBucket: "ext-ng.appspot.com",
                messagingSenderId: "367815588601",
                appId: "1:367815588601:web:47b22df35fca571ad0c028",
                measurementId: "G-6N4H4VDGCS"
            }
        };
        /*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


        /***/
    }),

    /***/ "./src/main.ts":
    /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
        /* harmony import */
        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
        /* harmony import */
        var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");


        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
            .catch(function (err) {
                return console.error(err);
            });


        /***/
    }),

    /***/ 0:
    /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(/*! C:\Users\Abdessamed\Desktop\YoutubeExtension-morched23mj\src\main.ts */"./src/main.ts");


        /***/
    })

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main.js.map