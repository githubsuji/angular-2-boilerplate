import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEnvCheckComponent } from './app-env-check.component';

describe('AppEnvCheckComponent', () => {
  let component: AppEnvCheckComponent;
  let fixture: ComponentFixture<AppEnvCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEnvCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEnvCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
