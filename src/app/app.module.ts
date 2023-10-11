// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { Ng2Webstorage } from 'ng2-webstorage';
import { CommonModule } from '@angular/common';
import { CookieModule } from 'ngx-cookie';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { TransportSharedModule } from './shared/';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { DatePickerModule } from 'ng2-datepicker-bootstrap';
import { APP_BASE_HREF } from '@angular/common';
// import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

// services
import { Register } from './services/register.service';
// functional services
import { GPSMarkerService } from './services/model/gps-marker/gps-marker.service';
import { GmapsStationService } from './services/model/gmaps-station.service';
import { StationService } from './services/model/station/station.service';
import { DriverService } from './services/model/driver/driver.service';

// components
import { AppMapComponent } from './components/app-map/app-map.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './forms/home/home.component';
import { AppHeaderComponent } from './struct/header.component';
import { MainContentComponent } from './struct/content.component';
import { AppFooterComponent } from './struct/footer.component';
import { VehicleComponent } from './model/vehicle/vehicle.component';
import { TripComponent } from './model/trip/trip.component';
import { StationComponent } from './model/station/station.component';
import { GpsMarkerComponent } from './model/gps-marker/gps-marker.component';
import { ItineraryComponent } from './model/itinerary/itinerary.component';
import { DriverComponent } from './model/driver/driver.component';
import { SensorComponent } from './model/sensor/sensor.component';
import { RfidComponent } from './model/rfid/rfid.component';
import { SearchMapComponent } from './components/search-map/search-map.component';
import { ViewMapComponent } from './components/view-map/view-map.component';
import { AppComboboxComponent } from './components/shared/app-combobox/app-combobox.component';
import { AppDatepickerComponent } from './components/shared/app-datepicker/app-datepicker.component';
import { CollectionSelectComponent } from './components/shared/collection-select/collection-select.component';


// routes
const appRoutes: Routes = [
  { path:'', component: MainContentComponent },
  { path:'login', component: AppComponent },
  { path:'station', component: StationComponent },
  { path:'itinerary', component: ItineraryComponent },
  { path:'vehicle', component: VehicleComponent },
  { path:'driver', component: DriverComponent },
  { path:'sensor', component: SensorComponent },
  { path:'marker', component: GpsMarkerComponent },
  { path:'trip', component: TripComponent },
  { path:'search', component: SearchMapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppMapComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MainContentComponent,
    GpsMarkerComponent,
    VehicleComponent,
    TripComponent,
    StationComponent,
    GpsMarkerComponent,
    ItineraryComponent,
    DriverComponent,
    SensorComponent,
    RfidComponent,
    SearchMapComponent,
    ViewMapComponent,
    AppComboboxComponent,
    AppDatepickerComponent,
    CollectionSelectComponent
  ],
  entryComponents: [],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    CookieModule.forRoot(),
    Ng2Webstorage,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlvXHp6oSePhpjV2WgM4Rda6mizJu9X7Y',
      libraries: ["places"]
    }),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    TransportSharedModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/transport'},
    GPSMarkerService,
    GmapsStationService,
    StationService,
    DriverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
