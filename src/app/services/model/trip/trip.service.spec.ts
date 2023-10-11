import { TestBed, async, inject } from '@angular/core/testing';
import { Trip } from "../../../model/trip/trip";
import { TripService } from './trip.service';

describe('TripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripService]
    });
  });

  it('should be created', inject([TripService], (service: TripService) => {
    expect(service).toBeTruthy();
  }));

  describe('#create(station)', () => {

    it('should create a station Object', inject([TripService], (service: TripService) => {
      let station1 = new Station({
        id: 1;
        reference: 'dfckugdsuvge';
        label: 'test station';
        isFinalStation: true;
        location: {
          id: 1,
          name: 'Hello 1',
          reference: 'dfckugdsuvge',
          latitude: 10.8364539456,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });
      expect(service.create(station1)).toNotEqual(null);
    }));
  });

  describe('#create(station)', () => {
    it('should update the station in', inject([TripService], (service: TripService) => {
      let station1 = new Station({
        id: 1;
        reference: 'dfckugdsuvge';
        label: 'test station';
        isFinalStation: true;
        location: {
          id: 1,
          name: 'Hello 1',
          reference: 'dfckugdsuvge',
          latitude: 10.8364539456,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });

      let station2 = new Station({
        id: 1;
        reference: 'dfckugdsuvge';
        label: 'test station';
        isFinalStation: true;
        location: {
          id: 2,
          name: 'Hello 2',
          reference: 'edewfgiugeor',
          latitude: 10.8364539456,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });
      service.create(station1);
      service.create(station2);
      expect(service.search()).toEqual([station1, station2]);
    }));

  });

  describe('#update(station)', () => {

    it('should automatically assign an incrementing id', inject([TripService], (service: TripService) => {
      let station1 = new Station({
        id: 1;
        reference: 'dfckugdsuvge';
        label: 'test station';
        isFinalStation: true;
        location: {
          id: 1,
          name: 'Hello 1',
          reference: 'dfckugdsuvge',
          latitude: 10.8364539456,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });

      let station2 = new Station({
        id: 1;
        reference: 'dfckugdsuvge';
        label: 'test station';
        isFinalStation: true;
        location: {
          id: 2,
          name: 'Hello 2',
          reference: 'edewfgiugeor',
          latitude: 10.8364539456,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });
      service.create(station1);
      service.create(station2);
      expect(service.find(1)).toEqual(station1);
      expect(service.find(2)).toEqual(station2);
    }));

  });

  describe('#delete(id)', () => {

    it('should remove marker with the corresponding id', inject([TripService], (service: TripService) => {
      let station1 = new Station({
        id: 1;
        reference: 'dfckugdsuvge';
        label: 'test station';
        isFinalStation: true;
        location: {
          id: 1,
          name: 'Hello 1',
          reference: 'dfckugdsuvge',
          latitude: 10.8364539456,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });

      let station2 = new Station({
        id: 1;
        reference: 'dfckugdsuvge';
        label: 'test station';
        isFinalStation: true;
        location: {
          id: 2,
          name: 'Hello 2',
          reference: 'edewfgiugeor',
          latitude: 10.8364539456,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });
      service.create(station1);
      service.create(station2);
      expect(service.search()).toEqual([station1, station2]);
      service.delete(1);
      expect(service.search()).toEqual([station2]);
      service.delete(2);
      expect(service.search()).toEqual([]);
    }));

    it('should not removing anything if marker with corresponding id is not found', inject([TripService], (service: TripService) => {
      let station1 = new Station({
        id: 1;
        reference: 'dfckugdsuvge';
        label: 'test station';
        isFinalStation: true;
        location: {
          id: 1,
          name: 'Hello 1',
          reference: 'dfckugdsuvge',
          latitude: 10.8364539456,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });

      let station2 = new Station({
        id: 1;
        reference: 'dfckugdsuvge';
        label: 'test station';
        isFinalStation: true;
        location: {
          id: 2,
          name: 'Hello 2',
          reference: 'edewfgiugeor',
          latitude: 10.8364539456,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });
      service.create(station1);
      service.create(station2);
      expect(service.search()).toEqual([station1, station2]);
      service.delete(3);
      expect(service.search()).toEqual([station1, station2]);
    }));

  });

  describe('#updateMarkerById(id, values)', () => {

    it('should return marker with the corresponding id and updated data', inject([TripService], (service: TripService) => {
      let station1 = new Station({
        id: 1;
        reference: 'dfckugdsuvge';
        label: 'test station';
        isFinalStation: true;
        location: {
          id: 1,
          name: 'Hello 1',
          reference: 'dfckugdsuvge',
          latitude: 10.8364539456,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });

      service.create(station1);
      let updatedStation = service.update(1, {
        label: 'new title'
      });
      expect(updatedStation.label).toEqual('new title');
    }));

    it('should return null if station is not found', inject([TripService], (service: TripService) => {
      let station1 = new Station({
        id: 1;
        reference: 'dfckugdsuvge';
        label: 'test station';
        isFinalStation: true;
        location: {
          id: 1,
          name: 'Hello 1',
          reference: 'dfckugdsuvge',
          latitude: 10.8364539456,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });
      service.create(station1);
      let updatedMarker = service.update({
        id: 2,
        reference: 'dkfjbewkrfv',
        label: 'Hello 2',
        isFinalStation: true,
        location: {
          id: 1,
          name: 'Hello 1',
          reference: 'dfckugdsuvge',
          latitude: 10.8364234356,
          longitude: 40.8346539650,
          isDraggable: false
        }
      });
      expect(updatedMarker).toEqual(null);
    }));

  });

});
