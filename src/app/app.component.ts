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
  public searchText: string;

  private pageSize: number;

  constructor(private foodService: FoodService) {
    this.searchText = '';
    this.pageSize = 20;

    foodService.getAllFood(this.pageSize)
      .subscribe(
        foods => this.foods = foods,
        err => {
          console.log(err);
        });
  }

  search() {
    this.foodService.searchFood(this.searchText, this.pageSize)
      .subscribe(
        foods => this.foods = foods,
        err => {
          console.log(err);
        });

  }
}
