import { GmapsMarker } from './gmaps-marker';

export interface BaseEntity {
    // using type any to avoid methods complaining of invalid type
    id?: any;
    label?: string;
    parsedLocation: GmapsMarker;
    iconBase: string;
}
