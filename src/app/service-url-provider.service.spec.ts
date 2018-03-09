import { TestBed, inject } from '@angular/core/testing';

import { ServiceUrlProviderService } from './service-url-provider.service';

describe('ServiceUrlProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceUrlProviderService]
    });
  });

  it('should be created', inject([ServiceUrlProviderService], (service: ServiceUrlProviderService) => {
    expect(service).toBeTruthy();
  }));
});
