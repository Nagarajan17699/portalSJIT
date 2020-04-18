import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialFeeComponent } from './special-fee.component';

describe('SpecialFeeComponent', () => {
  let component: SpecialFeeComponent;
  let fixture: ComponentFixture<SpecialFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
