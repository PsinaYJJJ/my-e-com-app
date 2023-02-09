import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProductService } from './product.service';
import { ShortenTextPipe } from '../pipe/shorten-text.pipe';
import { ShoppingCartService } from '../services/shopping-cart.service';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListsComponent,
    ProductDetailComponent,
    ShortenTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProductComponent,
    ProductListsComponent,
    ProductDetailComponent
  ],
  providers: [UserService, ProductService, ShoppingCartService],
})
export class ProductModule { }
