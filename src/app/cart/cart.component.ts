import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  pizza = this.cartService.getProducts();
  total: number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.calculateCart();
  }

  calculateCart() {

    this.total = this.pizza.reduce((n, { price, qty }) => n + (price * qty), 0)
  }

  changeQty(product, mode) {
    if (mode === 'decrease' && product.qty > 1) {
      product.qty--;
    } else if(mode === 'increase') {
      product.qty++;
    }
    this.calculateCart();
  }

}
