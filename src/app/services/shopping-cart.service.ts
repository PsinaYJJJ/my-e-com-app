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
        totalPrice : product.price,
        isCheckOut :false
      }
      const productInCart:ProductInCart = {...product, ...obj}
      this.productsInCart.push( productInCart)
    }
  }
  setIsCheckOutAll(isCheckOut : boolean){
    this.productsInCart.forEach(
      (productInCart) =>{
        productInCart.isCheckOut = isCheckOut
      }
    )
  }

  editProductinCart(product: ProductInCart){
    const index = this.productsInCart.findIndex(
      productInCart => productInCart.productId === product.productId
    )
    if (index >-1){
      this.productsInCart[index] = product
    }
  }

  isAllCheckOut():boolean{
    const index = this.productsInCart.findIndex(
      (product) => product.isCheckOut === false
    )
    if(index > -1) {
      return false
    } else {
      return true
    }
  }

  getTotalCost():number{
    let result:number = 0
    this.productsInCart.forEach(
      (productInCart) => {
        if(productInCart.isCheckOut){
          result = result + productInCart.totalPrice
        }
      }
    ) 
    return result
  }
}
