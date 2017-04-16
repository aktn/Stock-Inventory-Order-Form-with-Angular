import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Containers
import { StockInventoryComponent } from '../stock-inventory/containers/stock-inventory/stock-inventory.component';

//Components
import { StockBranchComponent } from '../stock-inventory/components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from '../stock-inventory/components/stock-selector/stock-selector.component';
import { StockProductsComponent } from '../stock-inventory/components/stock-products/stock-products.component';

//Services
import { StockInventoryService } from './services/stock-inventory.service';

@NgModule({
    declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockSelectorComponent,
        StockProductsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule
    ],
    exports:[
        StockInventoryComponent
    ],
    providers:[
        StockInventoryService
    ]
})

export class StockInventoryModule{

}