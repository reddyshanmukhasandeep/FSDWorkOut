import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutListComponent } from './workoutList/workoutList.component';
import { WorkoutTxnComponent } from './workoutTxn/workoutTxn.component';
import { WorkoutTxnAddComponent } from './workoutTxnAdd/workoutTxnAdd.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'workout', component: WorkoutComponent},
  { path: 'workoutList', component: WorkoutListComponent},
  { path: 'workoutTxn', component: WorkoutTxnComponent},
  { path: 'workoutTxnAdd', component: WorkoutTxnAddComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}