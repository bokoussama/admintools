import { GmapsLocation } from './gmaps-location';

export class GmapsMarker {
      id: string;
      place_id: string;
      reference: string;
      geometry: GmapsLocation;
      draggable = false;

      constructor(values: Object = {}) {
        Object.assign(this, values);
      }

}
