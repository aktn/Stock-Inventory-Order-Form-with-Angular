import { Component, Input } from '@angular/core';

@Component({
    selector: 'stock-counter',
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

export class StockCounterComponent{
    @Input() step: number=5;
    @Input() min: number=5;
    @Input() max: number=10;
    
    value: number = 5;

    increment(){
        if(this.value < this.max){
            this.value = this.value + this.step;
        }
    }

    decrement(){
        if(this.value > this.min){
            this.value = this.value - this.step;
        }
    }
}

