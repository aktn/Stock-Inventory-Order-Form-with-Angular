import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Product, Item } from '../../models/products.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { StockInventoryService } from '../../services/stock-inventory.service';

@Component({
    selector: 'stock-inventory',
    styleUrls: ['stock-inventory.component.scss'],
    template: `
        <div>
            <form [formGroup]="form" (ngSubmit)="onSubmit()">

                <stock-branch
                    [parent]="form">
                </stock-branch>

                <stock-selector
                    [parent]="form"
                    [products]="products"
                    (added)="addStock($event)">
                </stock-selector>

                <stock-products
                    [parent]="form"
                    (removed)="removeStock($event)"
                    [map]="productMap">
                </stock-products>

                <div class="stock-inventory__total">
                    Total: {{ total | currency: 'GDP': true }}
                </div>

                <div class="stock-inventory__button">
                    <button type="submit"
                            [disabled]="form.invalid">
                        Order
                    </button>
                </div>
                <pre>{{ form.value | json }}</pre>
            </form>
        </div>
    `
})

export class StockInventoryComponent implements OnInit{

    products: Product[];
    productMap: Map<number, Product>;
    total: number;

    form = this.fb.group({
        store: this.fb.group({
            branch: '',
            code: ''
        }),
        selector: this.createStock({}),
        stocks: this.fb.array([])
    })

    constructor(
        private fb: FormBuilder,
        private stockService: StockInventoryService){}

    ngOnInit(){
        const cart = this.stockService.getCartItems();
        const products = this.stockService.getProducts();

        Observable 
            .forkJoin(cart, products)
            .subscribe(([cart, products]: [Item[], Product[]])=>{

                const myMap = products 
                    .map<[number, Product]>(product =>[product.id, product]);
                
                this.productMap = new Map<number, Product>(myMap);
                this.products = products;
                
                cart.forEach(item => this.addStock(item));

                this.calculateTotal(this.form.get('stocks').value);
                this.form.get('stocks').valueChanges.subscribe(value=> this.calculateTotal(value));
            });
    }

    createStock(stock){
        return this.fb.group({
            product_id: parseInt(stock.product_id) || '',
            quantity: stock.quantity || 10
        });
    }

    addStock(stock){
        const control = this.form.get('stocks') as FormArray;
        control.push(this.createStock(stock));
    }

    removeStock({group, index}: { group: FormGroup, index: number}){
        const control = this.form.get('stocks') as FormArray;
        control.removeAt(index);
    }

    calculateTotal(value: Item[]){
        const total = value.reduce((prev, next)=>{
            return prev + (next.quantity * this.productMap.get(next.product_id).price);
        },0);
        this.total = total;
    }

    onSubmit(){

    }
}