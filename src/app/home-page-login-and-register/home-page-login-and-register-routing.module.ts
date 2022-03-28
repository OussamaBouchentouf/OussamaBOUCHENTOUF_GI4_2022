import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageLoginAndRegisterPage } from './home-page-login-and-register.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageLoginAndRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageLoginAndRegisterPageRoutingModule {}
