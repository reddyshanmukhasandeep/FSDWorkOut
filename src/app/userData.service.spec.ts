import { TestBed, inject } from '@angular/core/testing';

import { UserDataService } from './UserData.service';

describe('UserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataService]
    });
  });

  it('should be created', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));
});
