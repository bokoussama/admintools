import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GPSMarker } from '../../model/gps-marker/gps-marker';
import { GPSMarkerService } from '../../services/model/gps-marker/gps-marker.service';
import { ResponseWrapper } from '../../shared/model/response-wrapper.model';

@Component({
  selector: 'app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
  // styles: [
  //   {'featureType':"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
  //   {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
  //   {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
  //   {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
  //   {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
  //   {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
  //   {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
  //   {"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}
  // ]
})
export class AppMapComponent implements OnInit {
  //start position
  latitude: number = 36.806495;
  longitude: number = 10.181532;
  zoom: number = 14;

  // attributes
  @Input() selectedIn : GPSMarker;
  @Output() selectedOut: EventEmitter<GPSMarker> = new EventEmitter();
  @Input() markers : GPSMarker[];

  constructor(private gpsMarkerService: GPSMarkerService) {
    console.log('map component conostructor');
  }
  ngOnInit() {
    console.log('map component init');
    this.gpsMarkerService.query().subscribe(
      (res: ResponseWrapper) => {
          this.markers = res.json;
          console.log(this.markers);
      },
      (res: ResponseWrapper) => console.log(res.json)
    );
  }

  mapClicked($event:any) {
    console.log('Map clicked.');

  //    this.selectedIn = new GPSMarker({
  //      id: null,
  //      name: 'Untitled',
  //      latitude: $event.coords.lat,
  //      longitude: $event.coords.lng,
  //      isDraggable: true
  //    });
  //  this.markers.push(this.selectedIn);
  //  this.selectedOut.emit(this.selectedIn);
  }

  markerClicked(marker: GPSMarker, index:number){
    console.log('Marker clicked marker name :' + marker.name + ', index : ' + index);
    // get the marker data
    // this.selectedIn = marker;
    // this.selectedOut.emit(this.selectedIn);
  }

  markerDragEnd(marker: GPSMarker, $event:any) {
    console.log('Marker Dragged.');
    // put to update marker's info
    // this.selectedIn = marker;
    // this.selectedIn.id = null;
    // this.selectedIn.latitude = $event.coords.lat;
    // this.selectedIn.longitude = $event.coords.lng;
    // this.selectedIn.isDraggable = true;
    // this.selectedOut.emit(this.selectedIn);
  }

}
