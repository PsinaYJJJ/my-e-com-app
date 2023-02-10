import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCartComponent } from './shopping-cart.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule { }
