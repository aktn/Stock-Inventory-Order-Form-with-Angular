import { Component, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'stock-products',
    styleUrls: ['stock-products.component.scss'],
    template: `
        <div [formGroup]="parent">
            <div formArrayName="stocks">
                <div *ngFor="let item of stocks; let i = index;">
                    <div [formGroupName]="i" class="stock-product__content">
                        <div class="stock-product__name">
                            {{ item.value.product_id }}
                        </div>
                        <input 
                            type="number"
                            step="5"
                            min="5"
                            max="1000"
                            formControlName="quantity">
                        <button type="button">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class StockProductsComponent{
    @Input()
    parent: FormGroup;

    get stocks(){
        return (this.parent.get('stocks') as FormArray).controls;
    }
}