import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Station } from '../../../model/station/station';
import { ResponseWrapper } from '../../../shared/model/response-wrapper.model';
import { createRequestOption } from '../../../shared/model/request-util';

@Injectable()
export class StationService {

  resourceQueryUrl: string = '/api/station';
  resourceCommandUrl: string = '/api/station';
  resourceSearchUrl: string = '/api/station/_search';

  constructor(private http: Http) {}

    create(station: Station): Observable<Station> {
        const copy = this.convert(station);
        console.log('calling post :' + this.resourceCommandUrl);
        console.log(station);
        return this.http.post(this.resourceCommandUrl, copy)
        .map((res: Response) => {
          console.log(res.json());
          return res.json();
        });

    }

    update(station: Station): Observable<Station> {
        const copy = this.convert(station);
        return this.http.put(this.resourceCommandUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Station> {
        return this.http.get(`${this.resourceQueryUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
      console.log('inside the query() method.');
        const options = createRequestOption(req);
        return this.http.get(this.resourceQueryUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceCommandUrl}/${id}`);
    }

    search(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(station: Station): Station {
        const copy: Station = Object.assign({}, station);
        return copy;
    }

}
