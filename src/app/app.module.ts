import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';
import { UserService } from './services/user.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ShortenTextPipe } from './pipe/shorten-text.pipe';
import { SmallPopUpDirective } from './directive/small-pop-up.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SmallPopUpDirective,
    // ShortenTextPipe,
    // ProductComponent,
    // ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    ShoppingCartModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
