import { BaseEntity } from './../../shared';

export class Vehicle implements BaseEntity {
        id?: number;
        reference?: string;
        manifacturer?: string;
        model?: string;
        lastCheck?: any;
        capacity?: number;
        sensor?: BaseEntity;

        iconBase?: string = '/assets/images/';
        icon?: any = {
          'url':this.iconBase + 'vehicle.png',
          'scaledSize':{
            'height': 40,
            'width': 40
          }
        };
        constructor(values: Object = {}) {
          Object.assign(this, values);
        }
}
