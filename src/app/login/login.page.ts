import { AuthServiceService } from './../service/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSignin, UserSignup } from '../Models/user.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = new UserSignin();
  userForSignUp = new UserSignup();
  data: any;
  dataForSignUp: any;
  password: string;
  confirmPassword: string;
  checked: boolean;
  service: AuthServiceService;


  constructor(private route: ActivatedRoute, private router: Router) {
    this.service = new AuthServiceService(router);
}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.data = params;
    });

    this.route.queryParams.subscribe((params: any) => {
      this.dataForSignUp = params;
    });
  }

  loginUser(): void {
    this.service.loginService(this.user,this.data);
  }

  signUp(): void {
    this.service.signUpService(this.password,this.confirmPassword,this.userForSignUp,this.dataForSignUp);
  }


}
