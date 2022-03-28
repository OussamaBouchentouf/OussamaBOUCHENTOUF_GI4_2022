import { doc } from 'firebase/firestore';
import { db } from './../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSignin } from '../Models/user.interface';
import { Component, OnInit } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'src/environments/environment';
import { getDoc } from 'firebase/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = new UserSignin();
  data: any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.data = params;
    });
  }

  loginUser(): void {
    signInWithEmailAndPassword(auth,this.user.email,this.user.password)
    .then((usr)=>{
      getDoc(doc(db, 'users', usr.user.uid))
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .then((doc) => {
        const userData = doc.data();
        this.data = {...this.data, fullName: userData.FullName};
        this.router.navigate(['/recap',this.data]);
      });
    }).catch(()=>{alert('Email or password is incorrect');});
  }

  signUp(): void {
    this.router.navigate(['/register', this.data]);
  }

  forgetPassword(): void {
    this.router.navigate(['/forget-password']);
  }

}
