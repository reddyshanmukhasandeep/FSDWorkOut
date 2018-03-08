import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  private loginUrl = "http://localhost:8082/user/login";
  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<any>{
    let headers = new HttpHeaders()
            .set('userName', username)
            .set('password', password);

    return this.http.get<any>(this.loginUrl, {headers});
  }

}
