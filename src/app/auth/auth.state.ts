
import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';

import {
  CheckSession,
  Login,
  LoginSuccess,
  LoginFailed,
  LogoutSuccess,
} from './auth.actions';
import { AuthModel } from '../models/auth.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Navigate } from '@ngxs/router-plugin';


export class AuthStateModel {
  auth: AuthModel;
  initialized: boolean;
  err: object;
}


@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    initialized: null,
    auth: null,
    err: null
  }
})
export class AuthState implements NgxsOnInit {

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) { }

  @Selector()
  static getInitialized(state: AuthStateModel): boolean {
    return state.initialized;
  }

  @Selector()
  static getUser(state: AuthStateModel) {
    return state.auth;
  }

  @Selector()
  static getErr(state: AuthStateModel) {
    return state.err;
  }

  ngxsOnInit(ctx: StateContext<AuthStateModel>) {
    ctx.dispatch(new CheckSession());
  }

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    this.authService.login(action.payload)
      .subscribe(resp => ctx.dispatch( new LoginSuccess(resp)), err => ctx.dispatch(new LoginFailed(err)));
  }

  @Action(LoginSuccess)
  loginSuccess(ctx: StateContext<AuthStateModel>, action: LoginSuccess) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      auth: action.payload,
      err: null
    });
    ctx.dispatch(new Navigate(['/tabs/home']));
  }

  @Action(LoginFailed)
  loginFailed(ctx: StateContext<AuthStateModel>, action: LoginFailed) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      auth: null,
      err: action.payload
    });
  }

}