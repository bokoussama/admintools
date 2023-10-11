import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceOrderComponent } from './serviceorder.component';
import { ServiceOrderSearchComponent } from './search/serviceorder-search.component';

const routes: Routes = [
            { path: '', component: ServiceOrderComponent, },
            { path: 'edit', component: ServiceOrderComponent },
            { path: 'search', component: ServiceOrderSearchComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceOrderRoutingModule { }
