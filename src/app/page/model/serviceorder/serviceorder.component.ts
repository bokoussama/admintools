import { Component, OnInit } from '@angular/core';
import { ServiceOrder } from '../shared/serviceorder';
import { GmapsLocation } from '../shared/gmaps-location';
import { GmapsMarker } from '../shared/gmaps-marker';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-serviceorder',
  templateUrl: './serviceorder.component.html',
  styleUrls: ['./serviceorder.component.css']
})
export class ServiceOrderComponent implements OnInit {

  // serviceorder: ServiceOrder;
  // latlng: string;
  // address: string;

  // constructor(
  //   private serviceorderService: ServiceOrderService
  // ) {
  //   this.serviceorder = new ServiceOrder(
  //     {iconBase: '/assets/images/',
  //     icon: {
  //       'url': '/assets/images/serviceorder.png',
  //       'scaledSize': {
  //         'height': 40,
  //         'width': 40
  //       }
  //     }
  //     }
  //   );
  //   const location = new GmapsLocation({'lat': 36.806495, 'lng': 10.181532});
  //   this.serviceorder.parsedLocation = new GmapsMarker(
  //     {
  //     'id': 'New station',
  //     'place_id': 'New station',
  //     'reference': '12345',
  //     'geometry': location
  //     }
  //   );
  // }

  ngOnInit() {
  }

  // updateLocation(event) {
  //   console.log(event);
  //   this.latlng = event;
  //   const coordinates = this.latlng.split(',');
  //   this.serviceorder.parsedLocation = new GmapsMarker(
  //     {
  //       id: '',
  //       place_id: this.serviceorder.label,
  //       reference: this.serviceorder.label,
  //       geometry: {lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1])}
  //     }
  //   );
  // }

  // updateAddress(event) {
  //   console.log(event);
  //   this.address = event;
  // }

  // saveSO() {
  //   console.log('saving service order...');
  //   console.log(this.latlng);
  //   const coordinates = this.latlng.split(',');
  //   this.serviceorder.id = UUID.UUID();
  //   this.serviceorder.parsedLocation = new GmapsMarker(
  //     {
  //       id: '',
  //       place_id: this.serviceorder.label,
  //       reference: this.serviceorder.label,
  //       geometry: {lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1])}
  //     }
  //   );
  //   console.log(this.serviceorder);
  //   this.serviceorderService.create(this.serviceorder)
  //   .subscribe((data) => {
  //       console.log(data);
  //     });
  // }

}
