import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> StockCounterComponent),
    multi: true
};

@Component({
    selector: 'stock-counter',
    providers: [COUNTER_CONTROL_ACCESSOR],
    styleUrls: ['stock-counter.component.scss'],
    template: `
    <div class="stock-counter">
        <div>
            <div>
                <p>
                    {{ value }}
                </p>
                <div>
                    <button 
                        type="button"
                        (click)="increment()"
                        [disabled]="value === max">
                        +
                    </button>
                    <button 
                        type="button"
                        (click)="decrement()"
                        [disabled]="value === min">
                        -
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
})

export class StockCounterComponent implements ControlValueAccessor{

    writeValue(value){
        this.value = value;
    }

    private onTouch: Function;
    private onModelChange: Function;

    registerOnChange(fn){
        this.onModelChange = fn;
    }

    registerOnTouched(fn){
        this.onTouch = fn;
    }
    

    @Input() step: number=5;
    @Input() min: number=5;
    @Input() max: number=10;
    
    value: number = 5;

    increment(){
        if(this.value < this.max){
            this.value = this.value + this.step;
            this.onModelChange(this.value);
        }
        this.onTouch();
    }

    decrement(){
        if(this.value > this.min){
            this.value = this.value - this.step;
            this.onModelChange(this.value);
        }
        this.onTouch();
    }
}

