import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Containers
import { StockInventoryComponent } from '../stock-inventory/containers/stock-inventory/stock-inventory.component';

//Components
import { StockBranchComponent } from '../stock-inventory/components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from '../stock-inventory/components/stock-selector/stock-selector.component';
import { StockProductsComponent } from '../stock-inventory/components/stock-products/stock-products.component';

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