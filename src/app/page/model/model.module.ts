import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertsModule } from './alerts/alerts.module';
import { AssetModule } from './asset/asset.module';
import { ReadingsModule } from './readings/readings.module';
import { WorkOrderModule } from './workorder/workorder.module';
import { ServiceOrderModule } from './serviceorder/serviceorder.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AlertsModule,
    AssetModule,
    ReadingsModule,
    WorkOrderModule,
    ServiceOrderModule
  ],
  declarations: []
})
export class ModelModule {}
