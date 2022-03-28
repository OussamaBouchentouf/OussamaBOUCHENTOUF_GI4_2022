import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { setDoc, doc } from 'firebase/firestore';

import { db } from 'src/environments/environment';
import { UserSignup } from './../Models/user.interface';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = new UserSignup();
  data: any;
  password: string;
  confirmPassword: string;
  checked: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.data = this.route.snapshot.params;
  }

  signUp(): void {
    if (this.password === this.confirmPassword) {
      createUserWithEmailAndPassword(auth, this.user.email, this.password)
      .then((usr) => {
        setDoc(doc(db, 'users', usr.user.uid), {
          FullName: this.user.fullname,
          Email: this.user.email,
          Phone: this.user.phoneNumber
        }).then(() => {
          this.data = {...this.data, fullName: this.user.fullname};
          this.router.navigate(['/recap',this.data]);})
        .catch(() => console.log('Failed to create doc'));
      })
      .catch(() => console.log('Signup failed')
      );
    } else {
      alert('Password dont match confirm password');
    }
  }
}
