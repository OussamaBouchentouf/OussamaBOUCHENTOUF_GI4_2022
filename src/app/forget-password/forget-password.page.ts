import { AuthServiceService } from './../service/auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})

export class ForgetPasswordPage implements OnInit {

  email: string;
  service: AuthServiceService;

  constructor(private router: Router) {
    this.service = new AuthServiceService(router);
  }

  ngOnInit() {
  }

  forgetPassword(): void{
    this.service.forgetPasswordService(this.email);
    // sendPasswordResetEmail(auth,this.email);
    // this.route.navigate(['/home']);
  }

}
