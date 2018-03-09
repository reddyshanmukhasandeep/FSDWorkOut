import { TestBed, inject } from '@angular/core/testing';

import { WorkoutTxnService } from './workoutTxn.service';

describe('WorkoutTxnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutTxnService]
    });
  });

  it('should be created', inject([WorkoutTxnService], (service: WorkoutTxnService) => {
    expect(service).toBeTruthy();
  }));
});
