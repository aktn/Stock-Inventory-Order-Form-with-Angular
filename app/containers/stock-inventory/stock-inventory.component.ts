import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
    selector: 'stock-inventory',
    styleUrls: ['stock-inventory.component.scss'],
    template: `
        <div>
            <form [formGroup]="form" (ngSumbit)="onSubmit()">
                <div formGroupName="store">
                    <input type="text"
                           placeholder="Branch ID"
                           formControlName="branch">
                    <input type="text"
                           placeholder="Manager Code"
                           formControlName="code">
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

export class StockInventoryComponent{
    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl(),
            code: new FormControl()
        })
    })

    onSubmit(){

    }
}