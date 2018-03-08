import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workout: any = {};
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
    this.workoutService.defineWorkout(this.workout)
        .subscribe(
            data => {
                this.alertService.success('Workout Created successfully', true);
                this.router.navigate(['/workout']);
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }

}
