import { Component, OnInit } from '@angular/core';
import { ProductInCart } from '../models/product.model';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public productsInCart: ProductInCart[]
  public headerList = ['#', 'check-out', 'name', 'amount', 'total']
  public isSelectedAll:boolean = false
  public totalCost:number = 0
  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productsInCart = this.shoppingService.getProductInCart()
    this.isSelectedAll = this.shoppingService.isAllCheckOut()
    this.totalCost = this.shoppingService.getTotalCost()
  }

  onChecked(product:ProductInCart, event:Event){
    console.log('product', product)
    this.shoppingService.editProductinCart(product)
    this.isSelectedAll = this.shoppingService.isAllCheckOut()
    this.totalCost = this.shoppingService.getTotalCost()
  }

  onChangeAmount(product:ProductInCart, event:Event){
    product.totalPrice = product.amount*product.price
    console.log('product', product)
    this.shoppingService.editProductinCart(product)
    this.totalCost = this.shoppingService.getTotalCost()
  }

  onCheckedSelectAll(){
    this.shoppingService.setIsCheckOutAll(this.isSelectedAll)
    this.totalCost = this.shoppingService.getTotalCost()
  }

  onCheckOut(){
    console.log(this.productsInCart)
  }
}
