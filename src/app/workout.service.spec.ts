import { TestBed, inject } from '@angular/core/testing';

import { WorkoutService } from './register.service';

describe('WorkoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutService]
    });
  });

  it('should be created', inject([WorkoutService], (service: WorkoutService) => {
    expect(service).toBeTruthy();
  }));
});
