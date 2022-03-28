import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageLoginAndRegisterPageRoutingModule } from './home-page-login-and-register-routing.module';

import { HomePageLoginAndRegisterPage } from './home-page-login-and-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageLoginAndRegisterPageRoutingModule
  ],
  declarations: [HomePageLoginAndRegisterPage]
})
export class HomePageLoginAndRegisterPageModule {}
