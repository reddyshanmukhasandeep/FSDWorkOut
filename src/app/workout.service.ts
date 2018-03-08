import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from './models/workout';

@Injectable()
export class WorkoutService {

  private workoutUrl = "http://localhost:8082/workout";
  constructor(
    private http: HttpClient
  ) { }
  
  defineWorkout(workout: any): Observable<any>{
    return this.http.post<any>(this.workoutUrl, workout);
  }
}
