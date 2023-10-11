import { BaseEntity } from './../../shared';

export class Trip implements BaseEntity {
    id?: number;
    reference?: string;
    startDate?: any;
    endDate?: any;
    details?: BaseEntity;
    vehicle?: BaseEntity;
    driver?: BaseEntity;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
