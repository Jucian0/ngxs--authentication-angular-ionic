import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './auth.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([AuthState]),
    HttpClientModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
