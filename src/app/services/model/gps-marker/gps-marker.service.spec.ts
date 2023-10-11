import { TestBed, async, inject } from '@angular/core/testing';
import { GPSMarker } from "../../../model/gps-marker/gps-marker";
import { GPSMarkerService } from './gps-marker.service';

describe('GPSMarkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GPSMarkerService]
    });
  });

  it('should be created', inject([GPSMarkerService], (service: GPSMarkerService) => {
    expect(service).toBeTruthy();
  }));

describe('#create(marker)', () => {

  it('should create a marker Object', inject([GPSMarkerService], (service: GPSMarkerService) => {
    let marker1 = new GPSMarker({
      id: 1,
      name: 'Hello 1',
      reference: 'dfckugdsuvge',
      latitude: 10.8364539456,
      longitude: 40.8346539650,
      isDraggable: false
    });
    expect(service.create(marker1)).toNotEqual(null);
  }));

  it('should update the marker in', inject([GPSMarkerService], (service: GPSMarkerService) => {
    let marker1 = new GPSMarker({
      id: 1,
      name: 'Hello 1',
      reference: 'dfckugdsuvge',
      latitude: 10.8364539456,
      longitude: 40.8346539650,
      isDraggable: false
    });
    let marker2 = new GPSMarker({
      id: 2,
      name: 'Hello 2',
      reference: 'edewfgiugeor',
      latitude: 10.8364539456,
      longitude: 40.8346539650,
      isDraggable: false
    });
    service.create(marker1);
    service.create(marker2);
    expect(service.search()).toEqual([marker1, marker2]);
  }));

});

describe('#save(marker)', () => {

  it('should automatically assign an incrementing id', inject([GPSMarkerService], (service: GPSMarkerService) => {
    let marker1 = new GPSMarker({
      id: 1,
      name: 'Hello 1',
      reference: 'dfckugdsuvge',
      latitude: 10.8364539456,
      longitude: 40.8346539650,
      isDraggable: false
    });
    let marker2 = new GPSMarker({
      id: 2,
      name: 'Hello 2',
      reference: 'edewfgiugeor',
      latitude: 10.8364539456,
      longitude: 40.8346539650,
      isDraggable: false
    });
    service.create(marker1);
    service.create(marker2);
    expect(service.find(1)).toEqual(marker1);
    expect(service.find(2)).toEqual(marker2);
  }));

});

describe('#delete(id)', () => {

  it('should remove marker with the corresponding id', inject([GPSMarkerService], (service: GPSMarkerService) => {
    let marker1 = new GPSMarker({
      id: 1,
      name: 'Hello 1',
      reference: 'dfckugdsuvge',
      latitude: 10.8364539456,
      longitude: 40.8346539650,
      isDraggable: false
    });
    let marker2 = new GPSMarker({
      id: 2,
      name: 'Hello 2',
      reference: 'edewfgiugeor',
      latitude: 10.8364539456,
      longitude: 40.8346539650,
      isDraggable: false
    });
    service.create(marker1);
    service.create(marker2);
    expect(service.search()).toEqual([marker1, marker2]);
    service.delete(1);
    expect(service.search()).toEqual([marker2]);
    service.delete(2);
    expect(service.search()).toEqual([]);
  }));

  it('should not removing anything if marker with corresponding id is not found', inject([GPSMarkerService], (service: GPSMarkerService) => {
    let marker1 = new GPSMarker({
      id: 1,
      name: 'Hello 1',
      reference: 'dfckugdsuvge',
      latitude: 10.8364539456,
      longitude: 40.8346539650,
      isDraggable: false
    });
    let marker2 = new GPSMarker({
      id: 2,
      name: 'Hello 2',
      reference: 'edewfgiugeor',
      latitude: 10.8364539456,
      longitude: 40.8346539650,
      isDraggable: false
    });
    service.create(marker1);
    service.create(marker2);
    expect(service.search()).toEqual([marker1, marker2]);
    service.delete(3);
    expect(service.search()).toEqual([marker1, marker2]);
  }));

});

describe('#updateMarkerById(id, values)', () => {

  it('should return marker with the corresponding id and updated data', inject([GPSMarkerService], (service: GPSMarkerService) => {
    let marker1 = new GPSMarker({
      id: 1,
      name: 'Hello 1',
      reference: 'dfckugdsuvge',
      latitude: 10.8364539456,
      longitude: 40.8346539650,
      isDraggable: false
    });
    service.create(marker1);
    let updatedMarker = service.update(1, {
      name: 'new title'
    });
    expect(updatedMarker.name).toEqual('new title');
  }));

  it('should return null if marker is not found', inject([GPSMarkerService], (service: GPSMarkerService) => {
    let marker1 = new GPSMarker({
      id: 1,
      name: 'Hello 1',
      reference: 'dfckugdsuvge',
      latitude: 10.8364539456,
      longitude: 40.8346539650,
      isDraggable: false
    });
    service.create(marker1);
    let updatedMarker = service.update({
      id: 1,
      name: 'Hello 2',
      reference: 'dkfjbewkrfv',
      latitude: 10.8364234356,
      longitude: 40.8346539650,
      isDraggable: false
    });
    expect(updatedMarker).toEqual(null);
  }));

});

});
