/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

  loginService(user: any,data: any): void {
    signInWithEmailAndPassword(auth,user.email,user.password)
    .then((usr)=>{
      getDoc(doc(db, 'users', usr.user.uid))
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .then((doc) => {
        const userData = doc.data();
        data = {...data, fullName: userData.FullName};
        this.router.navigate(['/recap',data]);
      });
    }).catch(()=>{alert('Email or password is incorrect');});
  }


  signUpService(password: string, confirmPassword: string, user: any, data: any): void {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, user.email, password)
      .then((usr) => {
        setDoc(doc(db, 'users', usr.user.uid), {
          FullName: user.fullname,
          Email: user.email,
          Phone: user.phoneNumber
        }).then(() => {
          data = {...data, fullName: user.fullname};
          this.router.navigate(['/recap',data]);})
        .catch(() => console.log('Failed to create doc'));
      })
      .catch(() => console.log('Signup failed')
      );
    } else {
      alert('Password dont match confirm password');
    }
  }

  forgetPasswordService(email: string): void{
    sendPasswordResetEmail(auth,email);
    this.router.navigate(['/home']);
  }

}
