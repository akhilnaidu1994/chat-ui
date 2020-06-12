import { Injectable } from '@angular/core';
import { ILogin } from '../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public login(loginDetails: ILogin) {
    return this.http.post(environment.loginUrl, loginDetails, { observe: 'response' });
  }
}
