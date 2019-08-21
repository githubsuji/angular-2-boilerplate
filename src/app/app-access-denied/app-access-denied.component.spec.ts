import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccessDeniedComponent } from './app-access-denied.component';

describe('AppAccessDeniedComponent', () => {
  let component: AppAccessDeniedComponent;
  let fixture: ComponentFixture<AppAccessDeniedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAccessDeniedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAccessDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
