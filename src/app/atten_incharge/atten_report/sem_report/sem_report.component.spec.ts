import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sem_reportComponent } from './sem_report.component';

describe('OvattComponent', () => {
  let component: sem_reportComponent;
  let fixture: ComponentFixture<sem_reportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sem_reportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sem_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
