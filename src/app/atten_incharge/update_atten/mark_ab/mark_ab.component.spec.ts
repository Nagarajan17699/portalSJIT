import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mark_abComponent } from './mark_ab.component';

describe('MarkComponent', () => {
  let component: Mark_abComponent;
  let fixture: ComponentFixture<Mark_abComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mark_abComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mark_abComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
