import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Containers
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';

//Components
import { StockBranchComponent } from '../components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from '../components/stock-selector/stock-selector.component';
import { StockProductsComponent } from '../components/stock-products/stock-products.component';

@NgModule({
    declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockSelectorComponent,
        StockProductsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports:[
        StockInventoryComponent
    ]
})

export class StockInventoryModule{

}