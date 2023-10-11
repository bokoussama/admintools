import { BaseEntity } from './../../shared';

export class Itinerary implements BaseEntity {
    id?: number;
    reference?: string;
    label?: string;
    stations?: BaseEntity[];

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }

}
