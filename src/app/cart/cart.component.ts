import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild('exampleModal', { static: true }) modalEl;
  modal: any;
  pizza;
  emptyCart;
  total: number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.pizza = this.cartService.getProducts();
    this.emptyCart = this.pizza.length === 0;
    this.calculateCart();
  }

  calculateCart() {
    this.total = this.pizza.reduce((n, { price, qty }) => n + (price * qty), 0)
  }

  changeQty(product, mode) {
    if (mode === 'decrease' && product.qty > 1) {
      product.qty--;
    } else if (mode === 'increase') {
      product.qty++;
    }
    this.calculateCart();
  }

  onCheckout(event) {
    alert("Your order placed successfully")
  }

}
