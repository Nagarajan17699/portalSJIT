import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFeeComponent } from './basic-fee.component';

describe('BasicFeeComponent', () => {
  let component: BasicFeeComponent;
  let fixture: ComponentFixture<BasicFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
