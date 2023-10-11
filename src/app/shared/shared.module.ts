import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { LoginModalService } from './login/login-modal.service';
import { LoginService } from './login/login.service';
import { TrackerService } from './tracker/tracker.service';
import { AccountService } from './auth/account.service';
import { AuthServerProvider } from './auth/auth-jwt.service';
import { CSRFService } from './auth/csrf.service';
import { Principal } from './auth/principal.service';
import { StateStorageService } from './auth/state-storage.service';
import { UserRouteAccessService } from './auth/user-route-access-service';
import { UserService } from './user/user.service';

import { AccountComponent } from './login/account/account.component';
import { PasswordStrengthBarComponent } from './login/password/password.component';
import { LoginModalComponent } from './login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransportSharedLibsModule } from './shared-libs.module';
import { TransportSharedCommonModule } from './shared-common.module';

@NgModule({
    imports: [
        NgbModule,
        TransportSharedLibsModule,
        TransportSharedCommonModule
    ],
    declarations: [
        LoginModalComponent,
        HasAnyAuthorityDirective,
        AccountComponent,
        PasswordStrengthBarComponent
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        TrackerService,
        AuthServerProvider,
        UserRouteAccessService,
        UserService,
        DatePipe
    ],
    entryComponents: [ LoginModalComponent ],
    exports: [
        TransportSharedCommonModule,
        LoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class TransportSharedModule {}
