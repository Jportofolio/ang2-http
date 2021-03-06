"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, options) {
        var _this;
        var token = localStorage.getItem('jwt'); // your token
        options.headers.set('Authorization', "Bearer " + token);
        _this = _super.call(this, backend, options) || this;
        return _this;
    }
    HttpService.prototype.request = function (url, obj, options) {
        var token = localStorage.getItem('jwt');
        var body = JSON.stringify(obj);
        if (typeof url === 'string') {
            if (!options) {
                options = { headers: new http_1.Headers() };
            }
        }
        else {
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchAuthError(this));
    };
    HttpService.prototype.get = function (url, obj, options) {
        if (obj) {
            options.body = obj;
        }
        else {
            return _super.prototype.get.call(this, url, options);
        }
        return _super.prototype.get.call(this, url, options);
    };
    HttpService.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, url, body, options)
            .catch(this.catchAuthError(this));
    };
    HttpService.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, url, body, options)
            .catch(this.catchAuthError(this));
    };
    HttpService.prototype.catchAuthError = function (self) {
        return function (res) {
            console.log(res);
            if (res.status === 401 || res.status === 403) {
                console.log(res);
            }
            return Observable_1.Observable.throw(res);
        };
    };
    return HttpService;
}(http_1.Http));
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend, http_1.RequestOptions])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map