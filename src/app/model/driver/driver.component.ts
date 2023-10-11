import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/model/driver/driver.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private driverService: DriverService) { }

  ngOnInit() {
  }

}
