import { Component, OnInit } from '@angular/core';
import { WorkoutListService } from '../workoutList.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { DataService } from '../data.service';
import { UserDataService } from '../userData.service';
import {LoginService} from '../login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './workoutList.component.html',
  styleUrls: ['./workoutList.component.css'],
  providers:[
    WorkoutListService,
    LoginService
    ]
})
export class WorkoutListComponent implements OnInit {

  workout: any = {};
  user: any={};
  loading = false;
  workoutList: any=[];

  constructor(
    private router: Router,
    private workoutListService: WorkoutListService,
    private alertService: AlertService,
    private dataService: DataService,
    private userDataService: UserDataService
  ) { 
    this.workoutListService.getWorkoutList(this.userDataService.userId);
  }

  ngOnInit() {
    this.workoutListService.getWorkoutList(this.userDataService.userId)
        .subscribe(
            data => {
               this.workoutList=data;
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }
  redirect() {
    this.router.navigate(['./workout']);
  }
  WorkoutTxnredirect(index: number) {
    this.dataService.calBurntPerUnitTime = this.workoutList[index][1];
    this.dataService.unitTime = this.workoutList[index][3 ];
   // this.dataService.workoutId = this.workoutList[index].workoutId;
    this.dataService.setWorkoutId (this.workoutList[index][0]);
    this.router.navigate(['./workoutTxn']);
  }
 
}