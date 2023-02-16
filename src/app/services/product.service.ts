import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product, ProductInCart } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productsChanged = new Subject<Product[]>()
  public isProductsEmpty = new BehaviorSubject<boolean>(false)
  private products:Product[]=[
    {
      productName : "Pastel Bag",
      description : "The Pastel Bag with 20x20 cm in size,",
      productType : "bag",
      price : 2000,
      stock : 5,
      productId : 1231,
      shopId : 123,
      createdDate : new Date("2022-03-25"),
      pic: "assets/pexels-photo-1152077.jpeg",
    },
    {
      productName : "Ice-cream",
      description : "Ice-cream bucket, 1 Liter",
      productType : "food",
      price : 150,
      stock : 10,
      productId : 1232,
      shopId : 123,
      createdDate : new Date("2023-01-25"),
      pic: "assets/ice-cream.jpg",
    },
    {
      productName : "shirt",
      description : "Red shirt size L",
      productType : "shirt",
      price : 80,
      stock : 1000,
      productId : 4566,
      shopId : 456,
      createdDate : new Date("2023-01-25"),
    },
    {
      productName : "Test",
      description : "ajhdaskjdhkaskjeuiwrualjfaksfj;sdlfksdl;gmf.,xmvlksilwaurljlk;lv';l',./,z/.msdsa",
      productType : "shirt",
      price : 100,
      stock : 0,
      productId : 4569,
      shopId : 456,
      createdDate : new Date("2022-01-30"),
    },
  ]
  constructor() { }

  getProducts(){
    return this.products.slice()
  }
  getFirstProductId(){
    return this.products.slice()[0].productId
  }
  getProductbyProductId(productId:number): Product | undefined{
    const index = this.getProductIndexbyProductId(productId)
    return index> -1 ? this.products.slice()[index] : undefined
  }

  getProductbyIndex(index:number): Product{
    return  this.products.slice()[index]
  }

  getProductIndexbyProductId(productId:number): number{
    const index = this.products.findIndex(product => product.productId === productId)
    return index
  }
  addProduct(addedProduct: Product){
    this.products.push(addedProduct)
    this.productsChanged.next(this.getProducts())
  }
  editProduct(editedProduct: Product){
    const index = this.getProductIndexbyProductId(editedProduct.productId)
    this.products[index] = editedProduct
    this.productsChanged.next(this.getProducts())
  }
  deleteProduct(deletedProduct: Product){
    const index = this.getProductIndexbyProductId(deletedProduct.productId)
    if(index > -1){
      this.products.splice(index,1);
    }
    this.productsChanged.next(this.getProducts())
    if(this.products.length === 0){
      this.isProductsEmpty.next(true)
    }
  }


  reduceStock(productsInCart:ProductInCart[]){
    productsInCart.forEach(
      (productsInCart) => {
        if(productsInCart.isCheckOut){
          const index = this.getProductIndexbyProductId(productsInCart.productId)
          if(index > -1) {
            this.products[index].stock = this.products[index].stock - productsInCart.amount
          }
        }
      }
    )
    this.productsChanged.next(this.getProducts())
  }
}
