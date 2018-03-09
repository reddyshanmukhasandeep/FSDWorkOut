import { Component, OnInit } from '@angular/core';
import { WorkoutTxnService } from '../workoutTxn.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './workoutTxn.component.html',
  styleUrls: ['./workoutTxn.component.css'],
  providers:[WorkoutTxnService]
})
export class WorkoutTxnComponent implements OnInit {

  workout: any = {};
  loading = false;
  workoutTxnList: any=[];
  @Input() user: User;
  constructor(
    private router: Router,
    private workoutTxnService: WorkoutTxnService,
    private alertService: AlertService
  ) { 
    this.workoutTxnService.getWorkoutTxnList(this.user);
  }

  ngOnInit() {
    this.workoutTxnService.getWorkoutTxnList(this.user)
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
 
}