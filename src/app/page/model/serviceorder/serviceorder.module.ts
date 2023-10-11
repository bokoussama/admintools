import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { ServiceOrderRoutingModule } from './serviceorder-routing.module';
import { ServiceOrderComponent } from './serviceorder.component';
import { ServiceOrderSearchComponent } from './search/serviceorder-search.component';

@NgModule({
    imports: [
        CommonModule,
        ServiceOrderRoutingModule,
        TranslateModule
    ],
    declarations: [
        ServiceOrderComponent,
        ServiceOrderSearchComponent
    ],
    exports: [
        ServiceOrderComponent,
        ServiceOrderSearchComponent
    ]
})
export class ServiceOrderModule { }
