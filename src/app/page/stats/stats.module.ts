import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { StatsComponent } from './stats.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    declarations: [StatsComponent]
})
export class StatsModule {}
