import { BaseEntity } from './base-entity';
import { GmapsMarker } from './gmaps-marker';
import { AlertsMeasure } from './alerts-measure';

export class Alerts implements BaseEntity {
  // model properties
  exteventid?: string;
  tenantid?: string;
  modelid?: string;
  startts?: string;
  lastupdatedts?: string;
  subject?: string;
  category?: string;
  eventype?: string;
  eventsubtype?: string;
  costs?: string;
  consequences?: string;
  creationtype?: string;
  network?: string;
  domain?: string;
  status?: string;
  endts?: string;
  extworkequipmentid?: string;
  extworkequipmenttype?: string;
  location?: string;
  description?: string;
  address?: string;
  owner?: string;
  createdby?: string;
  urgency?: string;
  certainty?: string;
  zone?: string;
  severity?: string;
  ack?: string;
  type?: string;
  measure?: AlertsMeasure;
  // visual properties
  id?: any;
  label?: string;
  parsedLocation: GmapsMarker;
  iconBase = '/assets/images/';
  icon: any = {
    'url': this.iconBase + 'alerts.png',
    'scaledSize': {
      'height': 40,
      'width': 40
    }
  };

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
