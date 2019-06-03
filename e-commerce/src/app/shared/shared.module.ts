import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductService } from '../admin/components/product-form/product.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
      ProductCardComponent,
      ProductQuantityComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductCardComponent, ProductQuantityComponent],
  providers: [
        AuthService,
        AuthGuardService,
        UserService,
        CategoryService,
        ProductService,
        ShoppingCartService,
        OrderService
  ]
})
export class SharedModule { }
