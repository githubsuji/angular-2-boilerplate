import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsToasterComponent } from './alerts-toaster.component';

describe('AlertsToasterComponent', () => {
  let component: AlertsToasterComponent;
  let fixture: ComponentFixture<AlertsToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsToasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
