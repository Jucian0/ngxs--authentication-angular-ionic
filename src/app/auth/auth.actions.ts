import { AuthModel } from "../models/auth.model";
import { HttpErrorResponse } from "@angular/common/http";


export class CheckSession {
    static readonly type = '[Auth] CheckSession';
}

export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: AuthModel) { }
}

export class Logout {
    static readonly type = '[Auth] Logout';
}

export class LogoutSuccess {
    static readonly type = '[Auth] LogoutSuccess';
    constructor(public payload: AuthModel) { }

}

export class LoginSuccess {
    static readonly type = '[Auth] LoginSuccess';
    constructor(public payload: AuthModel) { }
}

export class LoginFailed {
    static readonly type = '[Auth] LoginFailed';
    constructor(public payload: HttpErrorResponse) { }
}