import {Station} from './station';

describe('Station', () => {
  it('should create an instance', () => {
    expect(new Station()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let station = new Station({
      label: 'Ibn Khaldoun',
      isFinalStation: true,
      location: {},
      itineraries: {}
    });
    expect(station.label).toEqual('Ibn Khaldoun');
    expect(station.isFinalStation).toEqual(true);
  });
});
