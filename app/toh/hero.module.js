"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var hero_list_component_1 = require("./hero-list.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var http_service_1 = require("./http.service");
var HeroModule = (function () {
    function HeroModule() {
    }
    return HeroModule;
}());
HeroModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [hero_list_component_1.HeroListComponent],
        providers: [
            {
                provide: http_service_1.HttpService,
                useFactory: function (backend, options) {
                    return new http_service_1.HttpService(backend, options);
                },
                deps: [http_1.XHRBackend, http_1.RequestOptions]
            },
        ],
    }),
    __metadata("design:paramtypes", [])
], HeroModule);
exports.HeroModule = HeroModule;
//# sourceMappingURL=hero.module.js.map