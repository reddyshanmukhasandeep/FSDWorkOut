import { Component, OnInit } from '@angular/core';
import { WorkoutTxnAddService } from '../workoutTxnAdd.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { User } from '../models/user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './workoutTxnAdd.component.html',
  styleUrls: ['./workoutTxnAdd.component.css'],
  providers:[WorkoutTxnAddService]
})
export class WorkoutTxnAddComponent implements OnInit {

  workoutTxn: any = {};
  loading = false;
  workoutTxnList: any=[];
  constructor(
    private router: Router,
    private workoutTxnAddService: WorkoutTxnAddService,
    private alertService: AlertService,
    private dataService: DataService
  ) { 
    
  }

  ngOnInit() {
  }
  createWorkoutTxn() {
    console.log("Inside workOutTxnAdd");
    this.loading = true;
    this.workoutTxn.workout=this.dataService;
    console.log("workoutTxn startTime: "+ this.workoutTxn.startTime);
    console.log("workoutTxn endTime: "+ this.workoutTxn.endTime);

    console.log("workoutTxn: "+ this.dataService.calBurntPerUnitTime);
    console.log("workoutTxn: "+ this.workoutTxn);
    this.workoutTxnAddService.createWorkoutTxn(this.workoutTxn)
        .subscribe(
            data => {
                this.alertService.success('Transaction Successfully Added', true);
                this.router.navigate(['/workoutTxn']);
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }
  redirect() {
    this.router.navigate(['./workoutTxn']);
  }
}