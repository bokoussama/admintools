import { BaseEntity } from './../../shared';

export class Driver implements BaseEntity{
  id?: number;
  reference?: string;
  licence?: string;
  firstName?: string;
  lastName?: string;
  birthdate?: any;
  phoneNumber?: string;
  email?: string;
  hireDate?: any;
  iconBase: string = '/assets/images/';
  icon: any = {
    'url':this.iconBase + 'driver.png',
    'scaledSize':{
      'height': 40,
      'width': 40
    }
  };
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
