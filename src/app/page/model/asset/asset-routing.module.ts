import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetComponent } from './asset.component';
import { AssetSearchComponent } from './search/asset-search.component';

const routes: Routes = [
            { path: '', component: AssetComponent },
            { path: 'edit', component: AssetComponent },
            { path: 'search', component: AssetSearchComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AssetRoutingModule { }
