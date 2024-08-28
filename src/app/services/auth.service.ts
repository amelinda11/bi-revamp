import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }
    sendToken(token: string) {
        sessionStorage.setItem('userSession', token);
    }
  // getToken() {
  //   if(sessionStorage.getItem('userSession')){
  //     return sessionStorage.getItem('userSession');
  //   }else{
  //     return null;
  //   }
  // }
  // isLoggednIn() {
  //   return this.getToken();
  // }

  // getDataLocalstorage(params: string) {
  //   let data = localStorage.getItem(params);
  //   if(data){
  //     return JSON.parse(data);
  //   }else{
  //     return null;
  //   }
  // }

    logout() {
        sessionStorage.clear();
        localStorage.clear();
        this.myRoute.navigate(['login']);
    }
}
