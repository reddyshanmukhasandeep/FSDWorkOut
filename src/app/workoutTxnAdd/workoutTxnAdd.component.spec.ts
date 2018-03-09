import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTxnAddComponent } from './workoutTxnAdd.component';

describe('WorkoutTxnAddComponent', () => {
  let component: WorkoutTxnAddComponent;
  let fixture: ComponentFixture<WorkoutTxnAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTxnAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTxnAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
