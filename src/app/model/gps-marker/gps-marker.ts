import { BaseEntity } from './../../shared';

export class GPSMarker implements BaseEntity {
  id?: number;
  name?: string = '';
  reference?: string;
  latitude?: number;
  longitude?: number;
  isDraggable?: boolean = true;
  iconBase?: string = '/assets/images/';
  icon?: any = {
    'url':this.iconBase + 'marker.png',
    'scaledSize':{
      'height': 50,
      'width': 50
    }
  };
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
