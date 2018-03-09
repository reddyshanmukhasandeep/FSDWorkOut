import { Component, OnInit } from '@angular/core';
import { WorkoutTxnAddService } from '../workoutTxnAdd.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { Input } from '@angular/core';
import { User } from '../models/user';

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
  @Input() user: User;
  constructor(
    private router: Router,
    private workoutTxnAddService: WorkoutTxnAddService,
    private alertService: AlertService
  ) { 
    
  }

  ngOnInit() {
  }
  createWorkoutTxn() {
    console.log("Inside workOutTxnAdd");
    this.loading = true;
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