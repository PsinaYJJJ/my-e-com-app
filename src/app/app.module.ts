import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // ProductComponent,
    // ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    ShoppingCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
