import { BaseEntity } from './../../shared';

export class RFID implements BaseEntity {
        id?: number;
        reference?: string;
        securityAlert?: boolean = false
        wreckAlert?: boolean = false;
        rfidTimeStamp?: any;
        location?: BaseEntity;
        sensor?: BaseEntity;

        constructor(values: Object = {}) {
          Object.assign(this, values);
        }
}
