import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../admin/components/product-form/product.service';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../shared/services/category.service';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    // initialize arrays to avoid getting undefined in the first place
    products = [];
    filteredProducts = [];
    categories$;
    category: string;
    cart$: Observable<ShoppingCart>;
    dataSource = new MatTableDataSource<any>();
    constructor(
        private productService: ProductService,
        private categoryService: CategoryService,
        private activatedRoute: ActivatedRoute,
        private cartService: ShoppingCartService) { }

    async ngOnInit() {
        this.productService.getProducts().subscribe(products =>  {
            // get all the products when first loading the page
            this.filteredProducts = this.products = products;
            this.dataSource.data = products;

            this.products.forEach(res => console.log(res.title))
        });
        this.categories$ = this.categoryService.getCategories();

        // extract the selected category
        this.activatedRoute.queryParamMap.subscribe(params => {
            this.category = params.get('category');

            this.filteredProducts = (this.category) ?
                this.products.filter(p => p.category === this.category) : this.products;
        });

        this.cart$ = await this.cartService.getCart();
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.filteredProducts = this.products.filter(product => product.title.toLowerCase().includes(filterValue));

    }
}

