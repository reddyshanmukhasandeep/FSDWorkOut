import { Component, OnInit } from '@angular/core';
import { WorkoutListService } from '../workoutList.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './workoutList.component.html',
  styleUrls: ['./workoutList.component.css']
})
export class WorkoutListComponent implements OnInit {

  workout: any = {};
  user: any={};
  loading = false;
  workoutList: any=[];

  constructor(
    private router: Router,
    private workoutListService: WorkoutListService,
    private alertService: AlertService
  ) { 
    this.workoutListService.getWorkoutList();
  }

  ngOnInit() {
    this.workoutListService.getWorkoutList()
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
 
}