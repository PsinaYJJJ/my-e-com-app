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
  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productsInCart = this.shoppingService.getProductInCart()
  }

}
