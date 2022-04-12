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
      .then((docc) => {
        const userData = docc.data();

        setDoc(doc(db, usr.user.uid, usr.user.uid+data.course), {
          course : data.course,
          price : data.price
        }).then(() => {})
        .catch(() => console.log('Failed to create doc'));

        data = {...data, fullName: userData.FullName,userId : userData.Id};
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
          Phone: user.phoneNumber,
          Id : usr.user.uid,
        }).then(() => {
          setDoc(doc(db, usr.user.uid, usr.user.uid+data.course), {
          course : data.course,
          price : data.price
        }).then(() => {})
        .catch(() => console.log('Failed to create doc'));
          data = {...data, fullName: user.fullname,userId : usr.user.uid  };
          this.router.navigate(['/recap',data]);})
        .catch(() => console.log('Failed to create doc'));
      })
      .catch(() => alert('Signup failed')
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
