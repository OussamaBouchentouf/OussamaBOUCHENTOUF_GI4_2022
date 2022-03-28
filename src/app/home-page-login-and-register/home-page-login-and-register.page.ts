import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page-login-and-register',
  templateUrl: './home-page-login-and-register.page.html',
  styleUrls: ['./home-page-login-and-register.page.scss'],
})
export class HomePageLoginAndRegisterPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.data = params;
    });
  }

  goToLogin(): void{
    this.router.navigate(['/login'],{queryParams: {course: this.data.course, price: this.data.price}});
  }

  goToSignup(): void{
    this.router.navigate(['/register', this.data]);
  }

}
