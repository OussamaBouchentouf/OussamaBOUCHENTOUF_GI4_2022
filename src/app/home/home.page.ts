import { Component, OnInit } from '@angular/core';
import { db } from './../../environments/environment';
import { Router } from '@angular/router';
import { collection, getDocs } from 'firebase/firestore';

import { Training } from './../Models/training.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  title = 'TechTraining';

  trainingsList: Array<Training>;

  constructor(private router: Router) {
    getDocs(collection(db, 'trainings'))
    .then((snapshot)=>{
      const allTrainings = [];
      snapshot.docs.forEach((doc)=>{
        allTrainings.push(doc.data());
      });
      this.trainingsList = allTrainings;
    });
  }

  ngOnInit(): void {
  }

  showInfo(training: any): void {
    this.router.navigate(['/details', training]);
  }
}
