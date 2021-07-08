import { Injectable } from '@angular/core';
import { Products } from './products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Products[] = [];

  constructor() { }

  addToCart(product: Products) {
    const exists = this.products.find(x => {
      return x.id === product.id
    });
    if (!exists) {
      this.products.push(product);
    } else {
      alert('Item already added to cart');
    }
    console.log(this.products);
    
  }

  getProducts() {
    return this.products;
  }

}
