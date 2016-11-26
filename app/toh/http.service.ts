
import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService extends Http {

    constructor(backend: XHRBackend, options: RequestOptions){
        let token = localStorage.getItem('jwt'); // your token
        options.headers.set('Authorization', `Bearer ${token}`);
        super(backend, options)
    }

    request (url: string|Request, obj?: any, options? : RequestOptionsArgs): Observable<Response>{
     let token = localStorage.getItem('jwt');
     var body = JSON.stringify(obj);
     if (typeof url === 'string'){
         if (!options){
            options = {headers: new Headers() };
         }
        //  options.headers.set('Authorization', `Bearer ${token}`);
        
     } else {
        
        //  url.headers.set('Authorization', `Bearer ${token}`);
     }
        return super.request(url, options).catch(this.catchAuthError(this));

    }

    get(url: string, obj?: RequestOptions, options? : RequestOptionsArgs): Observable<Response> {
        if (obj){
             options.body = obj;
        } else {
            return super.get(url, options);
        }
        return super.get(url,options); 
     }
    post(url: string, body: string | Object, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, options)
            .catch(this.catchAuthError(this));
     }

     put(url: string, body: string | Object, options?: RequestOptionsArgs): Observable<Response> {
         return super.put(url, body, options)
            .catch(this.catchAuthError(this));
     }

    private catchAuthError(self: HttpService){
        return (res: Response) => {
            console.log(res);
            if (res.status === 401 || res.status === 403){
                console.log(res);
            }
            return Observable.throw(res);
        }
    }
}
