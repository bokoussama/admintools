import { Component, NgModule, NgZone, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormControl } from '@angular/forms';
import {} from '@types/googlemaps';
// import { GmapsMarker } from "../../services/model/gmaps-marker";
import { GmapsStationService } from "../../services/model/gmaps-station.service";
import { ResponseWrapper } from "../../shared/model/response-wrapper.model";

declare var google: any;

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.css']
})
export class ViewMapComponent implements OnInit, AfterViewInit {

    public zoom: number;
    // public stations: GmapsMarker[];
    public addressSelected: string;
    public icon: any;
    public lat: number;
    public lng: number;
    public latlng: string;

    @Input('lat') latitude: number;
    @Input('lng') longitude: number;
    @Input('icon') iconName: string;
    @Output('address') address: EventEmitter<string> = new EventEmitter();
    @Output('location') location: EventEmitter<string> = new EventEmitter();

    constructor(
      private mapsAPILoader: MapsAPILoader,
      private gmapsStationService: GmapsStationService,
      private ngZone: NgZone
    ) {}

    ngOnInit() {
      //load
      //   var locationParam = this.latitude + ',' + this.longitude;
      //   console.log('querying for places next to :' + locationParam);
      //   // this.gmapsStationService.queryPlace('', locationParam).subscribe(
      //   //   (res: ResponseWrapper) => {
      //   //       this.stations = res.json;
      //   //       console.log(this.stations);
      //   //   },
      //   //   (res: ResponseWrapper) => console.log(res.json)
      //   // );
      // this.iconName = 'marker-olive';
      this.mapsAPILoader.load().then(() => {
        console.log('Google api loaded.');
        if(typeof this.latitude === "undefined" || typeof this.longitude === "undefined") {
          // this.lat = parseFloat('36.806495');
          // this.lng = parseFloat('10.181532');
          console.log('view map component initializing the location to : ' + this.latitude + ',' + this.longitude);
        }
        this.evaluateAddress(this.latitude, this.longitude, this);
        // this.location.emit(this.lat + ',' + this.lng);
      });
      let iconBase = '/assets/images/';
      this.icon = {
        'url': iconBase + this.iconName + '.png',
        'scaledSize': {
        'height': 40,
        'width': 40
        }
      };
      console.log('view map component loaded with location : ' + this.latitude + ',' + this.longitude);
    }

    ngAfterViewInit() {

    }

    private setCurrentPosition() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.zoom = 14;
          this.evaluateAddress(this.latitude, this.longitude, this);
        });
      }
    }

    evaluateAddress(lat, lng, self) {
      // set address
      var geocoder = new google.maps.Geocoder();
      self.lat = parseFloat(lat);
      self.lng = parseFloat(lng);
      var latlng = new google.maps.LatLng(self.lat, self.lng);
      geocoder.geocode({'location': latlng}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            self.zoom = 14;
            self.addressSelected = results[1].formatted_address;
            console.log('emitting location: ' + self.lat + ',' + self.lng);
            self.latlng = self.lat + ',' + self.lng;
            self.location.emit(self.lat + ',' + self.lng);
            self.address.emit(self.addressSelected);
          } else {
            alert('No results found');
            self.address.emit('N/A');
            self.latlng = self.lat + ',' + self.lng;
            self.location.emit(self.lat + ',' + self.lng);
          }
        } else {
          alert('Geocoder failed due to: ' + status);
          self.address.emit('N/A');
          self.latlng = self.lat + ',' + self.lng;
          self.location.emit(self.lat + ',' + self.lng);
        }
        console.log(self.addressSelected);
        console.log(self.lat + ',' + self.lng);
      });
    }

    public markerDragEnd($event:any) {
      console.log('Marker Dragged.');
      // put to update marker's info
      console.log('element location changed to :' + $event.coords.lat + ',' + $event.coords.lng);
      this.evaluateAddress($event.coords.lat, $event.coords.lng, this);
    }

    public alertCenterChange() {
      console.log('center changed :' + this.lat + ',' + this.lng);
    }

}
