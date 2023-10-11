import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsMarkerComponent } from './gps-marker.component';

describe('GpsMarkerComponent', () => {
  let component: GpsMarkerComponent;
  let fixture: ComponentFixture<GpsMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
