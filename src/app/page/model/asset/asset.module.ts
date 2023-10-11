import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetComponent } from './asset.component';
import { AssetSearchComponent } from './search/asset-search.component';

@NgModule({
    imports: [
        CommonModule,
        AssetRoutingModule,
        TranslateModule
    ],
    declarations: [
        AssetComponent,
        AssetSearchComponent
    ],
    exports: [
        AssetComponent,
        AssetSearchComponent
    ]
})
export class AssetModule { }
