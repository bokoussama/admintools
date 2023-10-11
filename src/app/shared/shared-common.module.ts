import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WindowRef } from './tracker/window.service';
import { TransportSharedLibsModule } from './shared-libs.module';

@NgModule({
  imports: [
    NgbModule,
    TransportSharedLibsModule
  ],
  declarations: [],
  providers: [
    WindowRef,
    Title
  ],
  exports: [
    TransportSharedLibsModule
  ]
})
export class TransportSharedCommonModule { }
