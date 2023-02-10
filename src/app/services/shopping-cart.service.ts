import { Injectable } from '@angular/core';
import { Product, ProductInCart } from '../models/product.model';
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private productsInCart:ProductInCart[] = []
  productsInCartChanged = new Subject<Product[]>()
  constructor() { }

  getProductInCart(){
    return this.productsInCart.slice()
  }
  addProductToCart(product:Product){
    const index = this.productsInCart.findIndex(productInCart => productInCart.productId === product.productId)
    if(index > -1){
      this.productsInCart[index].amount = this.productsInCart[index].amount + 1
      this.productsInCart[index].totalPrice = this.productsInCart[index].price * this.productsInCart[index].amount
    } else {
      const obj = { 
        amount : 1,
        totalPrice : product.price
      }
      const productInCart:ProductInCart = {...product, ...obj}
      this.productsInCart.push( productInCart)
    }
  }
}
