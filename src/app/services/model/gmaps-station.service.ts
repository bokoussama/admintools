import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { GmapsMarker } from './gmaps-marker';
import { ResponseWrapper } from '../../shared/model/response-wrapper.model';
import { createRequestOption } from '../../shared/model/request-util';

@Injectable()
export class GmapsStationService {

  private markerTypeQueryUrl = 'https://maps.googleapis.com/maps/api/place/radarsearch/json?key=AIzaSyBlvXHp6oSePhpjV2WgM4Rda6mizJu9X7Y&radius=5000&type=bus_station&location=';
  private addressSearchUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyBlvXHp6oSePhpjV2WgM4Rda6mizJu9X7Y';
  private apiUrl = 'https://maps.googleapis.com/maps/api/place/';

  constructor(private http: Http) {}

    queryAddress(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.addressSearchUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    searchAddress(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.addressSearchUrl, options)
            .map((res: any) => this.convertResponse(res));
    }

    find(id: number): Observable<GmapsMarker> {
        return this.http.get(`${this.apiUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    queryPlace(location: string, req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(`${this.markerTypeQueryUrl}${location}`, options)
            .map((res: Response) => this.convertResponse(res));
    }

    searchPlace(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.markerTypeQueryUrl, options)
            .map((res: any) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(GmapsMarker: GmapsMarker): GmapsMarker {
        const copy: GmapsMarker = Object.assign({}, GmapsMarker);
        return copy;
    }

}
