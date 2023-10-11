import { CustomAttribute } from './custom-attribute';
import { GmapsMarker } from './gmaps-marker';

export class ServiceOrder {
  // model attributes
  externalid?: string;
  tenantid?: string;
  eamid?: string;
  gisid?: string;
  siteid?: string;
  name?: string;
  description?: string;
  registrationno?: string;
  location?: string;
  registrationdate?: string;
  openingdate?: string;
  completiondate?: string;
  attachments?: string;
  completionstatus?: string;
  status?: string;
  category?: string;
  attributes?: CustomAttribute[];
  assetId?: string;
  workorders?: string[];
  // visual attributes
  id?: any;
  label?: string;
  parsedLocation: GmapsMarker;
  iconBase = '/assets/images/';
  icon: any = {
    'url': this.iconBase + 'serviceorder.png',
    'scaledSize': {
      'height': 40,
      'width': 40
    }
  };

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
