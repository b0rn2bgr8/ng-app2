import{Component} from '@angular/core';

@Component({
    selector: 'custom-me',
    template: `<h1>Welcome Home Finally</h1>
                <h2>{{pageTitle}}</h2>`
})

export class AppComponent{
    pageTitle: string = 'Muyiwa Bamise';
}