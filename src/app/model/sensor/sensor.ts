import { BaseEntity } from './../../shared';

export class Sensor implements BaseEntity {
    id?: number;
    reference?: string;
    registrationNumber?: string;
    isAlive?: boolean = false;
    activationDate?: any;
    vehicle?: BaseEntity;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
