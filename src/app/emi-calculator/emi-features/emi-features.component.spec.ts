import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiFeaturesComponent } from './emi-features.component';

describe('EmiFeaturesComponent', () => {
  let component: EmiFeaturesComponent;
  let fixture: ComponentFixture<EmiFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
