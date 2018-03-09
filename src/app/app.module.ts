import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutListComponent } from './workoutList/workoutList.component';
import { WorkoutListService } from './workoutList.service';
import { WorkoutService } from './workout.service';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { AlertService } from './alert.service';
import { AlertComponent } from './alert/alert.component';
import {ServiceUrlProviderService } from './service-url-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WorkoutComponent,
    WorkoutListComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    WorkoutService,
    WorkoutListService,
    AlertService,
    ServiceUrlProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
