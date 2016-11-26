
import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
// import { LocalStorageService } from 'angular-2-local-storage';
// import { AuthHttp } from 'angular2-jwt';t

import { HttpService } from './http.service';


import { Hero, UserLogin }        from './hero';
import { HeroListComponent } from './hero-list.component';

/** Importing Rxjs operators */
import 'app/rxjs-operators';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {
    private heroesUrl = 'http://localhost:7800/api/user';
    private authUrl = 'http://localhost:7800/api/users/authenticate';
    hero: Hero;
    userLog: UserLogin;

    constructor(private http: Http){ }

    getHeroes(): Observable<Hero[]> {
      let headers = new Headers();
      var jwt = localStorage.getItem('jwt');
      if (jwt) {
          headers.set('Authorization', `Bearer ${jwt}`);
          headers.append('Content-Type','application/json');
      }
    let options = new RequestOptions({ body: {scope: "admin"}});
    //   let params: URLSearchParams = new URLSearchParams();
    //   params.set('scope','admin');y
        return this.http.request(new Request({
                method: RequestMethod.Get,
                url: this.heroesUrl,
                headers: headers,
                body: { "scope": "admin"}

        }))
                        .map((response: Response) =>  response.json())
                        .catch(this.handleError);
    }
    private extractData(res: Response) {
       let body = res.json();
       return body || {};
    }
    addHero (hero: Hero): Observable<Hero> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.heroesUrl, hero, options)
                         .map(this.extractData)
                         .catch(this.handleError);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }
    LogHero(userLog: UserLogin): Observable<UserLogin> {
        let headers = new Headers({'Content-Type': 'application/json'});
        // headers.append('Access-Control-Allow-Origin','http://localhost:3000');
        
        let options = new RequestOptions({headers: headers});
     
       return this.http.post(this.authUrl, userLog, options)
                       .map(this.extractData)
                       .catch(this.handleError);
    }

    private handleError (error: Response | any){
        // In a real world app, we might use a remote logging  infrastructure
        let errMsg: string;
        if (error instanceof Response){
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}