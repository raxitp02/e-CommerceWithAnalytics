import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Subscription } from 'rxjs';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Order } from '../../../shared/models/order';
import { Router } from '@angular/router';

@Component({
    selector: 'check-out',
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
    shipping = {
      name: '',
      addressLine1: '',
      addressLine2: '',
      city: '',

    };
    cart: ShoppingCart;
    cartSubscription: Subscription;
    userId: string;
    userSubscription: Subscription;

    constructor(
        private shoppingCartService: ShoppingCartService,
        private orderService: OrderService,
        private authService: AuthService,
        private router: Router) {}

    async ngOnInit() {
        const cart$ = await this.shoppingCartService.getCart();
        this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
        this.userSubscription = this.authService.user$
            .subscribe(user => this.userId = user.uid);
    }

    placeOrder() {
        const order = new Order(this.userId, this.shipping, this.cart);
        const result = this.orderService.placeOrder(order);
        this.router.navigate(['/order-success', result.key]);
    }

    ngOnDestroy() {
        this.cartSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    }
}
