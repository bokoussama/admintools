import { GmapsLocation } from './gmaps-location';

export class GmapsMarker {
      geometry: GmapsLocation;
      id: string;
      place_id: string;
      reference: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

};
