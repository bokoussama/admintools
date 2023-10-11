import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadingsComponent } from './readings.component';
import { ReadingsSearchComponent } from './search/readings-search.component';

const routes: Routes = [
            { path: '', component: ReadingsComponent, },
            { path: 'edit', component: ReadingsComponent },
            { path: 'search', component: ReadingsSearchComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReadingsRoutingModule { }
