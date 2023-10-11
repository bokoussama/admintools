import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCO8xfqO2mnfH99nJf8RNudC9U5bJuAVeI'
        }),
        HomeRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    declarations: [HomeComponent]
})
export class HomeModule {}
