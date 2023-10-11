import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { ReadingsRoutingModule } from './readings-routing.module';
import { ReadingsComponent } from './readings.component';
import { ReadingsSearchComponent } from './search/readings-search.component';

@NgModule({
    imports: [
        CommonModule,
        ReadingsRoutingModule,
        TranslateModule
    ],
    declarations: [
        ReadingsComponent,
        ReadingsSearchComponent
    ],
    exports: [
        ReadingsComponent,
        ReadingsSearchComponent
    ]
})
export class ReadingsModule { }
