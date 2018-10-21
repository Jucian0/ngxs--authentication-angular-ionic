import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { Login } from '../auth.actions';
import { AuthState } from '../auth.state';
import { Observable } from 'rxjs';
import { AuthModel } from '../../models/auth.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private store : Store) { }

  public formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit() {
  }

  login(){
    this.store.dispatch(new Login(this.formLogin.value));
  }

  @Select(AuthState.getUser) auth$: Observable<AuthModel>;
  @Select(AuthState.getErr) err$: Observable<HttpErrorResponse>

}
