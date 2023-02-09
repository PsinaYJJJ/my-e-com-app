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
      productType : "Bag",
      price : 2000,
      Stock : 5,
      productId : 1,
      ShopId : 123,
      createdDate : new Date("2022-03-25"),
    },
    {
      productName : "Ice-cream",
      description : "Ice-cream bucket, 1 Liter",
      productType : "Food",
      price : 150,
      Stock : 10,
      productId : 2,
      ShopId : 123,
      createdDate : new Date("2023-01-25"),
    },
    {
      productName : "shirt",
      description : "Red shirt size L",
      productType : "Shirt",
      price : 80,
      Stock : 1000,
      productId : 6,
      ShopId : 456,
      createdDate : new Date("2023-01-25"),
    },
  ]
  constructor() { }

  getProducts(){
    return this.products.slice()
  }
}
