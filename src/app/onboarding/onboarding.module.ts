import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingPageRoutingModule } from './onboarding-routing.module';

import { OnboardingPage } from './onboarding.page';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OnboardingPage, LoginComponent, RegisterComponent]
})
export class OnboardingPageModule {}
