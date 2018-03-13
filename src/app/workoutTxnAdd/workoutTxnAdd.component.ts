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
  datemod : string;
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
    this.loading = true;
    this.workoutTxn.workout=this.dataService;
    var startDate = new Date(this.workoutTxn.startTime).toISOString();
    this.workoutTxn.startTime=startDate.replace('Z','');
    var endDate = new Date(this.workoutTxn.stopTime).toISOString();
    this.workoutTxn.stopTime=endDate.replace('Z','');
    console.log("***********"+this.workoutTxn.stopTime);
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