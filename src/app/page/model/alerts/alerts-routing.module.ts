import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts.component';
import { AlertsSearchComponent } from './search/alerts-search.component';

const routes: Routes = [
            { path: '', component: AlertsComponent, },
            { path: 'edit', component: AlertsComponent },
            { path: 'search', component: AlertsSearchComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlertsRoutingModule { }
