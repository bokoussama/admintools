import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { HistoryComponent } from './history/history.component';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'history', component: HistoryComponent },
            { path: 'upload', component: UploadComponent },
            { path: 'download', component: DownloadComponent },
            { path: 'alerts', loadChildren: './model/alerts/alerts.module#AlertsModule' },
            { path: 'asset', loadChildren: './model/asset/asset.module#AssetModule' },
            { path: 'readings', loadChildren: './model/readings/readings.module#ReadingsModule' },
            { path: 'serviceorder', loadChildren: './model/serviceorder/serviceorder.module#ServiceOrderModule' },
            { path: 'workorder', loadChildren: './model/workorder/workorder.module#WorkOrderModule' },
            { path: 'config', loadChildren: './config/config.module#ConfigModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'stats', loadChildren: './stats/stats.module#StatsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}
