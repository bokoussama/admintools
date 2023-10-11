import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    declarations: []
})
export class UserModule {}
