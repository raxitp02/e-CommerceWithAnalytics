import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IShopRoutingModule } from './app-routing.module';


import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './ishop-Components/home/home.component';
import { ProductsComponent } from './ishop-Components/products/products.component';
import { ShoppingCartComponent } from './ishop-Components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './ishop-Components/check-out/check-out.component';
import { OrderSuccessComponent } from './ishop-Components/order-success/order-success.component';
import { MyOrdersComponent } from './ishop-Components/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
// import { AuthGuardService as AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IShopRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
  ],
  providers: [
   AuthService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
