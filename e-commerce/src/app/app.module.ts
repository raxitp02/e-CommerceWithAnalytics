import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';

import { environment } from './../environments/environment';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './orders/components/check-out/check-out.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { MyOrdersComponent } from './orders/components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './orders/components/order-success/order-success.component';
import { ProductsComponent } from './orders/components/products/products.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingCartSummaryComponent } from './orders/components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './orders/components/shopping-cart/shopping-cart.component';

@NgModule({
    declarations: [
        AppComponent,
        BsNavbarComponent,
        HomeComponent,
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent,
        ProductFormComponent,
        ShoppingCartSummaryComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CustomFormsModule,
        SharedModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            { path: 'login' , component: LoginComponent },
            { path: '', component: ProductsComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'shopping-cart', component: ShoppingCartComponent },
            { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
            { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
            { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
            {
                path: 'admin/products/new',
                component: ProductFormComponent,
                canActivate: [AuthGuardService, AdminAuthGuardService]
            },
            {
                path: 'admin/products/:id',
                component: ProductFormComponent,
                canActivate: [AuthGuardService, AdminAuthGuardService]
            },
            {
                path: 'admin/products',
                component: AdminProductsComponent,
                canActivate: [AuthGuardService, AdminAuthGuardService]
            },
            {
                path: 'admin/orders',
                component: AdminOrdersComponent,
                canActivate: [AuthGuardService, AdminAuthGuardService]
            }
        ])
    ],
    providers: [
        AdminAuthGuardService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
