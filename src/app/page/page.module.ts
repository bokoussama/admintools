import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { PageRoutingModule } from './page-routing.module';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { PageComponent } from './page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CookieModule } from 'ngx-cookie';
import { HistoryComponent } from './history/history.component';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        NgbModule,
        NgbDropdownModule.forRoot(),
        PageRoutingModule,
        Ng2Charts,
        AgmCoreModule,
        CookieModule.forRoot()
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        SidebarComponent,
        HeaderComponent,
        PageComponent,
        HistoryComponent,
        UploadComponent,
        DownloadComponent
    ]
})
export class PageModule {}
