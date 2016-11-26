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
// Observable version
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
// import { LocalStorageService } from 'angular-2-local-storage';
var HeroListComponent = (function () {
    function HeroListComponent(heroService) {
        this.heroService = heroService;
        this.mode = 'Observable';
    }
    HeroListComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroListComponent.prototype.settingToken = function (k, v) {
        localStorage.setItem(k, v.id_token);
        console.log(k + ' ' + v.id_token);
    };
    HeroListComponent.prototype.Logout = function () {
        // localStorage.removeItem('jwt');
        this.getHeroes();
    };
    HeroListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    HeroListComponent.prototype.addHero = function (hero) {
        var _this = this;
        if (!hero) {
            return;
        }
        this.heroService.addHero(hero)
            .subscribe(function (k) { return _this.settingToken('jwt', k); }, function (error) { return _this.errorMessage = error; });
        // console.log(hero);
    };
    HeroListComponent.prototype.LogHero = function (user) {
        var _this = this;
        if (!user) {
            return;
        }
        this.heroService.LogHero(user)
            .subscribe(function (x) { return _this.settingToken('jwt', x); }, function (error) { return _this.errorMessage = error; });
    };
    return HeroListComponent;
}());
HeroListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hero-list',
        templateUrl: 'hero-list.component.html',
        providers: [hero_service_1.HeroService],
        styleUrls: ['hero-list.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroListComponent);
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map