import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCartComponent } from './shopping-cart.component';



@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule
  ],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule { }
