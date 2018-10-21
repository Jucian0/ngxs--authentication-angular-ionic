import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthStateModel } from '../auth/auth.state';
import { AuthModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credential): Observable<AuthModel>{
    return this.http.post<AuthModel>(`http://localhost:3000/`, credential);
  }

  logout(credential): Observable<Response>{
    return;
  }
}
