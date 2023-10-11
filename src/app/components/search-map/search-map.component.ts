import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormControl } from '@angular/forms';
import {} from '@types/googlemaps';
import { GmapsMarker } from "../../services/model/gmaps-marker";
import { GmapsStationService } from "../../services/model/gmaps-station.service";
import { ResponseWrapper } from "../../shared/model/response-wrapper.model";

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.css']
})
export class SearchMapComponent implements OnInit {

    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
    public stations: GmapsMarker[];

    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(
      private mapsAPILoader: MapsAPILoader,
      private gmapsStationService: GmapsStationService,
      private ngZone: NgZone
    ) {}

    ngOnInit() {
      //set google maps defaults
      this.zoom = 15;
      this.latitude = 36.806495;
      this.longitude = 10.181532;

      //create search FormControl
      this.searchControl = new FormControl();

      //set current position
      this.setCurrentPosition();

      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 16;
          });
        });
      });
      var locationParam = this.latitude + ',' + this.longitude;
      console.log(this.searchElementRef.nativeElement);
      this.gmapsStationService.queryPlace('', locationParam).subscribe(
        (res: ResponseWrapper) => {
            this.stations = res.json;
            console.log(this.stations);
        },
        (res: ResponseWrapper) => console.log(res.json)
      );

    }

    private setCurrentPosition() {
      navigator.geolocation.watchPosition(function(position) {
        console.log("i'm tracking you!");
      },
      function (error) {
        if (error.code == error.PERMISSION_DENIED)
            console.log("you denied me :-(");
      });

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 15;
        });
      }
    }

}
