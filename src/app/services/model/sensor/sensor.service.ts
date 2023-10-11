import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Sensor } from '../../../model/sensor/sensor';
import { ResponseWrapper } from '../../../shared/model/response-wrapper.model';
import { createRequestOption } from '../../../shared/model/request-util';

@Injectable()
export class SensorService {

  resourceQueryUrl: string = '/api/sensor';
  resourceCommandUrl: string = '/api/sensor';
  resourceSearchUrl: string = '/api/sensor/_search';

  constructor(private http: Http) {}

    create(sensor: Sensor): Observable<Sensor> {
        const copy = this.convert(sensor);
        console.log('calling post :' + this.resourceCommandUrl);
        console.log(sensor);
        return this.http.post(this.resourceCommandUrl, copy)
        .map((res: Response) => {
          console.log(res.json());
          return res.json();
        });

    }

    update(sensor: Sensor): Observable<Sensor> {
        const copy = this.convert(sensor);
        return this.http.put(this.resourceCommandUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Sensor> {
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

    private convert(sensor: Sensor): Sensor {
        const copy: Sensor = Object.assign({}, sensor);
        return copy;
    }

}
