import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { FruitsStoreComponent } from './fruits-store/fruits-store.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    FruitsStoreComponent,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
  ],
  imports: [ComponentsModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FruitsStoreComponent,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
  ],
})
export class ContainersModule {}
