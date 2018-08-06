import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiInputComponent } from './emi-input.component';

describe('EmiInputComponent', () => {
  let component: EmiInputComponent;
  let fixture: ComponentFixture<EmiInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
