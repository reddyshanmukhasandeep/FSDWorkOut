import { Component, OnInit } from '@angular/core';
import { WorkoutTxnService } from '../workoutTxn.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { Input } from '@angular/core';
import { User } from '../models/user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './workoutTxn.component.html',
  styleUrls: ['./workoutTxn.component.css'],
  providers:[WorkoutTxnService]
})
export class WorkoutTxnComponent implements OnInit {

  user:any={};
  workout: any = {};
  loading = false;
  workoutTxnList: any=[];
  constructor(
    private router: Router,
    private workoutTxnService: WorkoutTxnService,
    private alertService: AlertService,
    private dataService: DataService
  ) { 
    this.workoutTxnService.getWorkoutTxnList(this.user);
  }

  ngOnInit() {
    this.workout=this.dataService;
    console.log("workoutTxnService workout: "+this.workout.workoutId+" **data: "+this.dataService.getWorkoutId());
    this.workoutTxnService.getWorkoutTxnList(this.dataService.workoutId)
        .subscribe(
            data => {
               
               this.workoutTxnList=data;
               console.log("Response: "+this.workoutTxnList);
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }
  redirect() {
    this.router.navigate(['./workoutTxnAdd']);
  }
  backRedirect() {
    this.router.navigate(['./workoutList']);
  }
}