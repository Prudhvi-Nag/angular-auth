import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  // private apiUrl ="http://localhost:3003/accounts"

  constructor(private _http:HttpClient) { }
  login(data : any):Observable<any>{
    // return this._http.post(`${this.apiUrl}/login`, data);
    return this._http.post("http://localhost:3003/accounts/login", data);
   
  }
  signup(data : any ):Observable<any>{
    // return this._http.post(`${this.apiUrl}/signup`, data);
   
    return this._http.post('http://localhost:3003/accounts/signup', data);
  }

}
