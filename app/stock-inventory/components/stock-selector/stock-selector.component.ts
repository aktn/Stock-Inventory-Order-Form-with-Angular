import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/products.interface';

@Component({
    selector: 'stock-selector',
    styleUrls: ['stock-selector.component.scss'],
    template: `
    <div [formGroup]="parent" class="stock-selector">
        <div formGroupName="selector">
            <select formControlName="product_id">
                <option value="">Select Product</option>
                <option 
                    *ngFor="let product of products"
                    [value]="product.id">
                    {{ product.name }}
                </option>
            </select>
            <input 
                type="number"
                step="5"
                min="5"
                max="1000"
                formControlName="quantity">
            <button type="button">
                Add Stock
            </button>
        </div>
    </div>
    `
})

export class StockSelectorComponent{
    @Input()
    parent: FormGroup;

    @Input()
    products: Product[];
}