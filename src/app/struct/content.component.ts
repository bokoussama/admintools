import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class MainContentComponent {
    isAuthenticated : boolean = true;
    navigation : string;
}
