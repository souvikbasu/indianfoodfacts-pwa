import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatCardModule} from '@angular/material';

import {AppComponent} from './app.component';
import {FoodService} from '../services/food.service';
import { FoodItemComponent } from '../components/food-item/food-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatCardModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
