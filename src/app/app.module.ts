import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';

import {AppComponent} from './app.component';
import {FoodService} from "../services/food.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
