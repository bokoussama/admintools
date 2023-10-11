import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { WorkOrderRoutingModule } from './workorder-routing.module';
import { WorkOrderComponent } from './workorder.component';
import { WorkOrderSearchComponent } from './search/workorder-search.component';

@NgModule({
    imports: [
        CommonModule,
        WorkOrderRoutingModule,
        TranslateModule
    ],
    declarations: [
        WorkOrderComponent,
        WorkOrderSearchComponent
    ],
    exports: [
        WorkOrderComponent,
        WorkOrderSearchComponent
    ]
})
export class WorkOrderModule { }
