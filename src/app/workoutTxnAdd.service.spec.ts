import { TestBed, inject } from '@angular/core/testing';

import { WorkoutTxnAddService } from './workoutTxnAdd.service';

describe('WorkoutTxnAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutTxnAddService]
    });
  });

  it('should be created', inject([WorkoutTxnAddService], (service: WorkoutTxnAddService) => {
    expect(service).toBeTruthy();
  }));
});
