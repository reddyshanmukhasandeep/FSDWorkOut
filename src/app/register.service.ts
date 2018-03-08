import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';

@Injectable()
export class RegisterService {

  private registerUrl = "http://localhost:8082/user/register";
  constructor(
    private http: HttpClient
  ) { }
  
  register(user: any): Observable<any>{
    return this.http.post<any>(this.registerUrl, user);
  }
}
