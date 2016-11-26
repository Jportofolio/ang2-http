
import { Component, OnInit } from '@angular/core';

// Add the RxJs Observable operators.
import './rxjs-operators';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <hero-list></hero-list>
    <my-wiki></my-wiki>
    <my-wiki-smart></my-wiki-smart>
    `
})
export class AppComponent { }

 // <hero-list-promise></hero-list-promise>
    // <my-wiki></my-wiki>
    // <my-wiki-smart></my-wiki-smart>