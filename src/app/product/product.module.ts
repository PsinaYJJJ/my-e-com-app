import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProductService } from './product.service';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListsComponent,
    ProductDetailComponent
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
  providers: [UserService, ProductService],
})
export class ProductModule { }
