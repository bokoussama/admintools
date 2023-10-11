import { BaseEntity } from './base-entity';
import { CustomAttribute } from './custom-attribute';
import { GmapsMarker } from './gmaps-marker';
import { Measure } from './measure';
import { Relation } from './relation';

export class Asset implements BaseEntity {
// model properties
  extWorkEquipmentId?: string;
  extWorkEquipmentType?: string;
  assetLabel?: string;
  assetDescription?: string;
  tenantId?: string;
  internalLocation?: string;
  relations?: Relation[];
  attributes?: CustomAttribute[];
  measures?: Measure[];
// visual properties
  id?: any;
  label?: string;
  parsedLocation: GmapsMarker;
  iconBase = '/assets/images/';
  icon: any = {
    'url': this.iconBase + 'asset.png',
    'scaledSize': {
      'height': 40,
      'width': 40
    }
  };
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
