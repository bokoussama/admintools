import { BaseEntity } from './../../shared';
import { GPSMarker } from '../gps-marker/gps-marker';

export class Station implements BaseEntity {
  id?: number;
  reference?: string;
  label?: string;
  isFinalStation?: boolean;
  location?: GPSMarker;
  itineraries?: BaseEntity[];
  iconBase: string = '/assets/images/';
  icon: any = {
    'url':this.iconBase + 'station.png',
    'scaledSize':{
      'height': 40,
      'width': 40
    }
  };
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
