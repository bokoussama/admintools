import { Component, OnInit, ViewChild } from '@angular/core';
import { AgmMap } from '@agm/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  // @ViewChild(AgmMap) map: AgmMap;

  constructor() { }

  ngOnInit() {
    // this.map.triggerResize();
  }

}
