import { TestBed, inject } from '@angular/core/testing';

import { WorkoutListService } from './workoutList.service';

describe('WorkoutListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutListService]
    });
  });

  it('should be created', inject([WorkoutListService], (service: WorkoutListService) => {
    expect(service).toBeTruthy();
  }));
});
