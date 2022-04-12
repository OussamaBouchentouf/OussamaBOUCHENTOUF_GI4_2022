import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { auth, db } from '../../environments/environment';
import { collection, getDocs } from 'firebase/firestore';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.page.html',
  styleUrls: ['./recap.page.scss'],
})
export class RecapPage implements OnInit {

  recapData: any;
  userData: any;
  display: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.recapData = this.route.snapshot.params;
    const querySnapshot = await getDocs(collection(db, this.recapData.userId));
    const data = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push(doc.data());
    });
    this.userData = data;
  }

  homePage(): void {
    this.router.navigate(['/home']);
  }

  changeState(): void{
    this.display = true;
  }

}
