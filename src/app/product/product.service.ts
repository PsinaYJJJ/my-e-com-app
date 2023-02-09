import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products:Product[]=[
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
  getProductbyProductId(productId:Number): Product | undefined{
    return this.products.find(product => product.productId === productId)
  }
}
