export class GmapsLocation {
   lat: number;
   lng: number;

   constructor(values: Object = {}) {
     Object.assign(this, values);
   }
}
