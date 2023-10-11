import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrderComponent } from './workorder.component';
import { WorkOrderSearchComponent } from './search/workorder-search.component';

const routes: Routes = [
            { path: '', component: WorkOrderComponent, },
            { path: 'edit', component: WorkOrderComponent },
            { path: 'search', component: WorkOrderSearchComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkOrderRoutingModule { }
