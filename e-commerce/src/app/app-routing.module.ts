import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ishop-Components/home/home.component';
import { ProductsComponent } from './ishop-Components/products/products.component';
import { ShoppingCartComponent } from './ishop-Components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './ishop-Components/check-out/check-out.component';
import { OrderSuccessComponent } from './ishop-Components/order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './ishop-Components/my-orders/my-orders.component';


const iShopRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'login', component: LoginComponent},

  { path: 'check-out', component: CheckOutComponent, },
  { path: 'order-success', component: OrderSuccessComponent, },
  { path: 'my/orders', component: MyOrdersComponent, },

  { path: 'admin/products', component: AdminProductsComponent, },
  { path: 'admin/orders', component: AdminOrdersComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(iShopRoutes)],
  exports: [RouterModule]})
export class IShopRoutingModule { }
