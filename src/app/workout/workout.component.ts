import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
  providers:[WorkoutService]
})
export class WorkoutComponent implements OnInit {

  workout: any = {};
  user: any={};
  loading = false;

  constructor(
    private router: Router,
    private workoutService: WorkoutService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  defineWorkout() {
    this.loading = true;
    this.workout.user=this.user;
    this.workoutService.defineWorkout(this.workout)
        .subscribe(
            data => {
                this.alertService.success('Workout Created successfully', true);
                this.router.navigate(['workoutList']);
            },
            error => {
                this.alertService.error(error.error.message);
                this.router.navigate(['workoutList']);
                this.loading = false;
            });
  }
  redirect() {
    this.router.navigate(['./workoutList']);
  }

}
