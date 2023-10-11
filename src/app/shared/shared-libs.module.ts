import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CookieModule } from 'ngx-cookie';

@NgModule({
    imports: [
        NgbModule,
        InfiniteScrollModule,
        CookieModule.forRoot()
    ],
    exports: [
        FormsModule,
        HttpModule,
        CommonModule,
        InfiniteScrollModule
    ]
})
export class TransportSharedLibsModule {}
