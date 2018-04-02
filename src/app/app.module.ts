import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SingleStockComponent } from './single-stock/single-stock.component';
import { ModelDirective } from './model.directive';
import {AngularMatModule} from '../modules/angular-mat/angular-mat-module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    SingleStockComponent,
    ModelDirective
  ],
  imports: [
    BrowserModule,
    AngularMatModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
