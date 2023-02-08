import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/product', pathMatch: 'full' },
    {
    path: 'product',
    component: ProductComponent,
    },
    {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}