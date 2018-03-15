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
import { WorkoutTxnComponent } from './workoutTxn/workoutTxn.component';
import { WorkoutTxnAddComponent } from './workoutTxnAdd/workoutTxnAdd.component';
import { AlertService } from './alert.service';
import { AlertComponent } from './alert/alert.component';
import { ServiceUrlProviderService } from './service-url-provider.service';
import { DataService } from './data.service';
import { UserDataService } from './userData.service';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WorkoutComponent,
    WorkoutListComponent,
    WorkoutTxnComponent,
    WorkoutTxnAddComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DlDateTimePickerDateModule,
  ],
  providers: [
    AlertService,
    ServiceUrlProviderService,
    DataService,
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
