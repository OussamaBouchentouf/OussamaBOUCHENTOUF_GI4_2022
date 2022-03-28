import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'src/environments/environment';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  email: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  forgetPassword(): void{
    sendPasswordResetEmail(auth,this.email);
    this.route.navigate(['/home']);
  }

}
