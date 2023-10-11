import { Threshold } from './threshold';

export class Measure {
  unit?: string;
  noReadingTimeout?: string;
  name?: string;
  measureLabel?: string;
  isPrimaryMeasurement?: string;
  thresholds?: Threshold[];
}
