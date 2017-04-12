import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

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
                    [products]="products">
                </stock-selector>

                <stock-products
                    [parent]="form">
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

    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl(),
            code: new FormControl()
        }),
        selector: new FormGroup({
            product_id: new FormControl(),
            quantity: new FormControl()
        }),
        stocks: new FormArray([])
    })

    onSubmit(){

    }
}