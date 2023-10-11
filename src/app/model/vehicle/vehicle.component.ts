import { Component, OnInit } from '@angular/core';
import { Sensor } from '../sensor/sensor';
import { Vehicle } from './vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  manifacturer: string;
  model: string;
  lastCheck: any;
  time = {hour: 13, minute: 30};
  capacity: number;
  sensor: Sensor;

  public constructorList: string[] = ['Renault', 'Volvo', 'Mercedes'];
  public modelList: string[] = ['BUS-Standard-R', 'BUS-XC-V90', 'BUS-RL1200'];
  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  saveVehicle() {
      console.log('saving vehicle...');

  }
  updateSelected(event) {
    console.log(event);
    this.model = event;
  }

  updateManifacturer(event) {
    console.log(event);
    this.manifacturer = event;
  }

}
