import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceUrlProviderService } from './service-url-provider.service';

@Injectable()
export class LoginService {

  private loginUrl : string;
  constructor(
    private http: HttpClient,
    private urlProv: ServiceUrlProviderService
  ) { 
    this.loginUrl = urlProv.getCompleteServiceUrl("user/login");
  }

  login(username: string, password: string): Observable<any>{
    let headers = new HttpHeaders()
            .set('userName', username)
            .set('password', password);

    return this.http.get<any>(this.loginUrl, {headers});
  }

}
