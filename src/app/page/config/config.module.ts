import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config.component';
import { NodeConfigComponent } from './node-config/node-config.component';

@NgModule({
    imports: [
        CommonModule,
        ConfigRoutingModule
    ],
    declarations: [
        ConfigComponent,
        NodeConfigComponent
    ]
})
export class ConfigModule { }
