import { BaseEntity } from './base-entity';
import { GmapsMarker } from './gmaps-marker';
import { Asset } from './asset';
import { ReadingValue } from './reading-value';

export class Readings implements BaseEntity {

    extReadingSetid?: string;
    timestamp?: string;
    extRelatedEvtId?: string;
    extRelatedEvtType?: string;
    workEquipment?: Asset;
    readingValues?: ReadingValue[];

    id?: any;
    label?: string;
    parsedLocation: GmapsMarker;
    iconBase = '/assets/images/';
    icon?: any = {
      'url': this.iconBase + 'readings.png',
      'scaledSize': {
        'height': 40,
        'width': 40
      }
    };

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }

}
