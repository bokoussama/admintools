import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComboboxComponent } from './app-combobox.component';

describe('AppComboboxComponent', () => {
  let component: AppComboboxComponent;
  let fixture: ComponentFixture<AppComboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
