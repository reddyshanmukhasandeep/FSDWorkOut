import { TestBed, inject } from '@angular/core/testing';

import { NgInitService } from './ngInit.service';

describe('NgInitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgInitService]
    });
  });

  it('should be created', inject([NgInitService], (service: NgInitService) => {
    expect(service).toBeTruthy();
  }));
});
