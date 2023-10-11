import { Component, Output, OnInit, Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { GPSMarker } from '../../model/gps-marker/gps-marker';
// import { GPSMarkerDataService } from '../../services/GPSMarker-data.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ResponseWrapper } from '../../shared/model/response-wrapper.model';
import { LoginModalService } from '../../shared/login/login-modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedMarker: GPSMarker;
  isAuthenticated: boolean = false;
  errorMessage: string;
  // predicate: any;
  // reverse: any;

  // markers
  markers: GPSMarker[];
  private searchTermStream = new Subject<string>();
  search(term: string) { this.searchTermStream.next(term); }

  constructor(private loginModal: LoginModalService) { }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  //   if(!this.isAuthenticated) {
  //     this.loginModal.open();
  //   }
  // }

  ngOnInit(): void {
    console.log('OnInit method.');
    this.getMarkers();
  }

  getMarkers() {
    // this._GPSMarkerDataService.search({
    //     query: '',
    //     size: -1,
    //     sort: this.sort()}
    //   ).subscribe(
    //         (res: ResponseWrapper) => console.log(res), //this.onSuccess(res.json, res.headers)
    //         (res: ResponseWrapper) => console.log(res) //this.onError(res.json)
    //   );
    this.markers = [
      new GPSMarker(
        {
          id: 1,
          name: 'Les Jasmins',
          latitude: 36.806467,
          longitude: 10.181532,
          isDraggable: true
        }
      ),
      new GPSMarker(
        {
          id: 2,
          name: 'Ibn Khaldoun',
          latitude: 36.806035,
          longitude: 10.181532,
          isDraggable: true
        }
      ),
      new GPSMarker(
        {
          id: 3,
          name: 'Le Passage',
          latitude: 36.801893,
          longitude: 10.181532,
          isDraggable: true
        }
      )
    ];
    console.log('calling get Markers method : ' + this.markers);
    return this.markers;
  }

  submitedMarkerChange($event) {
    console.log('On marker Form Submit !');
    // this.selectedMarker = $event;
    // var markerId = this.selectedMarker.id;
    // if(!markerId){
    //   this._GPSMarkerDataService.create(this.selectedMarker);
    // } else {
    //   this._GPSMarkerDataService.update(this.selectedMarker);
    // }
  }

  addedMarkerChange($event) {
    console.log('On marker Added or Updated from Map !');
    // this.selectedMarker = $event;
    // this._GPSMarkerDataService.create(this.selectedMarker);
  }

  // sort() {
  //     const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
  //     if (this.predicate !== 'id') {
  //         result.push('id');
  //     }
  //     return result;
  // }

}
