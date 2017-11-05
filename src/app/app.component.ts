import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";

import {Food} from "../models/food";
import {FoodService} from "../services/food.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public foods: Food[];

  constructor(private foodService: FoodService) {
    foodService.getAllFood(20)
      .subscribe(
        foods => this.foods = foods,
        err => {
          console.log(err);
        });
  }
}
