import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  registrationNumber?: string;
  isAlive?: boolean = false;
  activationDate?: any;

  constructor() { }

  ngOnInit() {
  }

}
