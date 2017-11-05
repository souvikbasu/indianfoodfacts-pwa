import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../../models/food";

@Component({
  selector: 'food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input()
  public food: Food

  constructor() { }

  ngOnInit() {
  }
}
