import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Products, products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pizza = products;
  btnDisabled;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addToCart(product: Products) {
    this.cartService.addToCart(product);
  }

}
