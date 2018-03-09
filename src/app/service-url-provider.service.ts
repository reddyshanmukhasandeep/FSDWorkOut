import { Injectable } from '@angular/core';

@Injectable()
export class ServiceUrlProviderService {

  baseUrl : string;
  constructor() { 
    this.baseUrl="http://localhost:8082/";
  }

  getCompleteServiceUrl(urlStub : string) :string{
    return this.baseUrl + urlStub;
  }
}
