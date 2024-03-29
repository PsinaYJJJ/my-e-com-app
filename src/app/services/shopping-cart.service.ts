import { Injectable } from '@angular/core';
import { Product, ProductInCart } from '../models/product.model';
import { Subject } from "rxjs";
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private productsInCart:ProductInCart[] = []
  public productsInCartChanged = new Subject<ProductInCart[]>()
  constructor(private productService : ProductService) { }

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
    this.productsInCartChanged.next(this.productsInCart)
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

  removeProductsinCart(){
    this.productsInCart = this.productsInCart.filter(productInCart => !productInCart.isCheckOut);
    this.productsInCartChanged.next(this.productsInCart)
  }

  removeProductinCart(productInCart:ProductInCart){
    const index = this.productsInCart.findIndex(product => product.productId === productInCart.productId)
    if(index > -1){
      this.productsInCart.splice(index,1);
    }
  }
  checkOut(){
    this.productService.reduceStock(this.productsInCart)
    this.removeProductsinCart()
  }

}
