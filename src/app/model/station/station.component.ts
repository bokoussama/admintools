import { Component, OnInit } from '@angular/core';
import { Station } from './station';
import { GPSMarker } from '../gps-marker/gps-marker';
import { StationService } from '../../services/model/station/station.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  station: Station;
  latlng: string;
  address: string;

  constructor(
    private stationService: StationService
  ) {
    this.station = new Station(
      {iconBase: '/assets/images/',
      icon: {
        'url': '/assets/images/station.png',
        'scaledSize':{
          'height': 40,
          'width': 40
        }
      }
      }
    );
    this.station.location = new GPSMarker({
      name: 'New station',
      latitude: 36.806495,
      longitude: 10.181532,
      isDraggable: true
    });
  }

  ngOnInit() {
  }

  updateLocation(event) {
    console.log(event);
    this.latlng = event;
    var coordinates = this.latlng.split(',');
    this.station.location.latitude = parseFloat(coordinates[0]);
    this.station.location.longitude = parseFloat(coordinates[1]);
  }

  updateAddress(event) {
    console.log(event);
    this.address = event;
  }

  saveStation() {
    console.log('saving station...');
    console.log(this.latlng);
    var coordinates = this.latlng.split(',');
    this.station.reference = UUID.UUID();
    this.station.location = new GPSMarker({
      name: this.station.label,
      latitude: parseFloat(coordinates[0]),
      longitude: parseFloat(coordinates[1]),
      isDraggable: false
    });
    console.log(this.station);
    this.stationService.create(this.station)
    .subscribe((data) => {
        console.log(data);
      });
  }

}
