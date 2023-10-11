import { Component } from '@angular/core';
import { LoginModalService } from '../shared/login/login-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent {

  constructor(private loginModal: LoginModalService) {

  }

  openLoginModal() {
    console.log('opening app login form...');
    this.loginModal.open();
  }

}
