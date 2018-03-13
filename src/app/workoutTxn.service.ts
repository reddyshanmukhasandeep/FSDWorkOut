import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceUrlProviderService } from './service-url-provider.service';

@Injectable()
export class WorkoutTxnService {

  private getWorkoutLisTxntUrl : string;
  constructor(
    private http: HttpClient,
    private urlProv: ServiceUrlProviderService
  ) { 
      this.getWorkoutLisTxntUrl = urlProv.getCompleteServiceUrl("workoutTxn");
  }

  getWorkoutTxnList(workoutId: Number): Observable<any>{
    console.log("Url: "+this.getWorkoutLisTxntUrl+"/"+workoutId);
    return this.http.get<any>(this.getWorkoutLisTxntUrl+"/"+workoutId);
  }

}
