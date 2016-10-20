import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ProductDetailComponent } from './product-detail.component';
import { AppComponent }  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ProductDetailComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }