import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Product } from '../../models/products.interface';

@Component({
    selector: 'stock-products',
    styleUrls: ['stock-products.component.scss'],
    template: `
        <div [formGroup]="parent">
            <div formArrayName="stocks">
                <div *ngFor="let item of stocks; let i = index;">
                    <div [formGroupName]="i" class="stock-product__content">
                        <div class="stock-product__name">
                            {{ getProduct(item.value.product_id).name }}
                        </div>
                        <div class="stock-product__price">
                            {{ getProduct(item.value.product_id).price | currency:'GBP': true }}
                        </div>
                        <input 
                            type="number"
                            step="5"
                            min="5"
                            max="1000"
                            formControlName="quantity">
                        <button type="button"
                                (click)="onRemove(item, i)">
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

    @Output()
    removed = new EventEmitter<any>();

    @Input()
    map: Map<number, Product>;

    onRemove(group, index){
        this.removed.emit({ group, index });
    }

    get stocks(){
        return (this.parent.get('stocks') as FormArray).controls;
    }

    getProduct(id){
        return this.map.get(id);
    }
}