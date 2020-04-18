import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit_atComponent } from './edit_at.component';

describe('Edit_atComponent', () => {
  let component: Edit_atComponent;
  let fixture: ComponentFixture<Edit_atComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit_atComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit_atComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
