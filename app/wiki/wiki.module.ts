
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, RequestOptions, XHRBackend} from '@angular/http';

import { WikiSmartComponent } from './wiki-smart.component';
import { WikiComponent } from './wiki.component';
import { WikipediaService } from './wikipedia.service';

@NgModule({
    imports: [CommonModule,FormsModule,HttpModule, JsonpModule],
    declarations: [WikiComponent, WikiSmartComponent],
    exports: [CommonModule, FormsModule,HttpModule, JsonpModule],
    providers: [ WikipediaService ]
})
export class WikiModule {}