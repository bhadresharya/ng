import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apple', 10),
    new Ingredients('Banana', 5),
  ];

  constructor() {}

  ngOnInit(): void {}
}
