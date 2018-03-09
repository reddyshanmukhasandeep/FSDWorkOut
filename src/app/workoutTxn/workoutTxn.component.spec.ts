import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTxnComponent } from './workoutTxn.component';

describe('WorkoutTxnComponent', () => {
  let component: WorkoutTxnComponent;
  let fixture: ComponentFixture<WorkoutTxnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTxnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
