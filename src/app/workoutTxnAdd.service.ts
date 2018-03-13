import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceUrlProviderService } from './service-url-provider.service';

@Injectable()
export class WorkoutTxnAddService {

  private createWorkoutTxntUrl : string;
  constructor(
    private http: HttpClient,
    private urlProv: ServiceUrlProviderService
  ) { 
      this.createWorkoutTxntUrl = urlProv.getCompleteServiceUrl("workoutTxn");
  }

  createWorkoutTxn(workouTxn: any): Observable<any>{
     console.log("Inside WorkoutTxnAddService");
    return this.http.post<any>(this.createWorkoutTxntUrl,workouTxn);
  }

}
