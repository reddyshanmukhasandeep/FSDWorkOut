import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WorkoutListService {

  private getWorkoutListUrl = "http://localhost:8082/workout";
  constructor(
    private http: HttpClient
  ) { }

  getWorkoutList(): Observable<any>{
    return this.http.get<any>(this.getWorkoutListUrl);
  }

}
