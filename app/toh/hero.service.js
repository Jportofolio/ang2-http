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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
/** Importing Rxjs operators */
require("app/rxjs-operators");
var Observable_1 = require("rxjs/Observable");
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:7800/api/user';
        this.authUrl = 'http://localhost:7800/api/users/authenticate';
    }
    HeroService.prototype.getHeroes = function () {
        var headers = new http_2.Headers();
        var jwt = localStorage.getItem('jwt');
        if (jwt) {
            headers.set('Authorization', "Bearer " + jwt);
            headers.append('Content-Type', 'application/json');
        }
        var options = new http_2.RequestOptions({ body: { scope: "admin" } });
        //   let params: URLSearchParams = new URLSearchParams();
        //   params.set('scope','admin');y
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Get,
            url: this.heroesUrl,
            headers: headers,
            body: { "scope": "admin" }
        }))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HeroService.prototype.addHero = function (hero) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.heroesUrl, hero, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService.prototype.LogHero = function (userLog) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        // headers.append('Access-Control-Allow-Origin','http://localhost:3000');
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.authUrl, userLog, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging  infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map