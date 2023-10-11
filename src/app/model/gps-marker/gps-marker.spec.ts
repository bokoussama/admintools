import {GPSMarker} from './gps-marker';

describe('GPSMarker', () => {
  it('should create an instance', () => {
    expect(new GPSMarker()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let marker = new GPSMarker({
      name: 'Tunis',
      latitude: 36.806495,
      longitude: 10.181532,
      isDraggable: true
    });
    expect(marker.name).toEqual('Tunis');
    expect(marker.isDraggable).toEqual(true);
  });
});
