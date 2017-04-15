import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Product } from '../../models/products.interface';

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
                    (removed)="removeStock($event)">
                </stock-products>

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

export class StockInventoryComponent{

    products: Product[] = [
        { "id": 1, "name": "Sun Glasses", "price": 10},
        { "id": 1, "name": "Shorts", "price": 15},
        { "id": 3, "name": "T-Shirt", "price": 22},
        { "id": 4, "name": "Jeans", "price": 40},
    ];

    form = this.fb.group({
        store: this.fb.group({
            branch: '',
            code: ''
        }),
        selector: this.createStock({}),
        stocks: this.fb.array([
            this.createStock({ product_id: 1, quantity: 10}),
            this.createStock({ product_id: 2, quantity: 20}),
            this.createStock({ product_id: 3, quantity: 15}),
        ])
    })

    constructor(private fb: FormBuilder){}

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

    onSubmit(){

    }
}