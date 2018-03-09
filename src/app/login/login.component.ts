import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { AlertService } from '../alert.service';
import { Input } from '@angular/core';
// import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  // @Input() user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.loginService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
               this.router.navigate(['workoutList']);
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }

}
