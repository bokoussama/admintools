import { BaseEntity } from './base-entity';
import { CustomAttribute } from './custom-attribute';
import { GmapsMarker } from './gmaps-marker';
import { EventList } from './event-list';

export class WorkOrder implements BaseEntity {
  // model properties
      datasourceid?: string;
      recordid?: string;
      woextid?: string;
      tenantid?: string;
      modelid?: string;
      subject?: string;
      description?: string;
      domain?: string;
      category?: string;
      workordertype?: string;
      worktype?: string;
      subtype?: string;
      failure?: string;
      priority?: string;
      status?: string;
      jobplan?: string;
      creationdate?: string;
      creationtype?: string;
      createdby?: string;
      targetstartdate?: string;
      targetenddate?: string;
      actstartdate?: string;
      actenddate?: string;
      lastupdatedts?: string;
      zone?: string;
      location?: string;
      url?: string;
      extworkequipmentid?: string;
      extworkequipmenttype?: string;
      updatedby?: string;
      lead?: string;
      network?: string;
      address?: string;
      performedby?: string;
      locownerid?: string;
      locownerdetails?: string;
      loccontactid?: string;
      issuercompany?: string;
      affected?: string;
      loccontactdetails?: string;
      report?: string;
      siteid?: string;
      maintenancetype?: string;
      assetlengthworkedon?: number;
      assetstate?: string;
      workercomment?: string;
      srceventlist?: EventList[];
      customWorkOrderAttributes?: CustomAttribute[];
      assets?: string[];
// visual properties
      id?: any;
      label?: string;
      parsedLocation: GmapsMarker;
      iconBase = '/assets/images/';
      icon?: any = {
        'url': this.iconBase + 'workorder.png',
        'scaledSize': {
          'height': 40,
          'width': 40
        }
      };

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
