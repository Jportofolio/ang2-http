
 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';

import { HeroListComponent }   from './hero-list.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, RequestOptions, XHRBackend} from '@angular/http';

import { HeroService } from './hero.service';
import { HttpService } from './http.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule],
    declarations: [HeroListComponent],
    providers: [
        {
            provide: HttpService,
            useFactory: (backend: XHRBackend, options: RequestOptions) =>{
                return new HttpService(backend, options);
            },
            deps: [XHRBackend, RequestOptions]
        },

    ],
})
export class HeroModule { }
 