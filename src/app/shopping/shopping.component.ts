import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/shopping.model"

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent  {
  Ingredients: Ingredient[] = [
    new Ingredient("Apple" , 54),
    new Ingredient("Mango" , 94),
  ];
  constructor(){}

}
