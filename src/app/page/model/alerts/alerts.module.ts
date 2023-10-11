import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertsComponent } from './alerts.component';
import { AlertsSearchComponent } from './search/alerts-search.component';

@NgModule({
    imports: [
        CommonModule,
        AlertsRoutingModule,
        TranslateModule
    ],
    declarations: [
        AlertsComponent,
        AlertsSearchComponent
    ],
    exports: [
        AlertsComponent,
        AlertsSearchComponent
    ]
})
export class AlertsModule { }
