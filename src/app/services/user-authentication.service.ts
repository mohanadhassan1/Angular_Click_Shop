import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  user: BehaviorSubject<boolean>

  constructor() { 
    this.user = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  login(userEmail:string, userPassword:string) {
    let token = "123123"
    localStorage.setItem("userToken",token)
    this.user.next(true)
  }

  logout() {
    localStorage.removeItem("userToken");
    this.user.next(false)
  }

  get isUserLogged() {
    return localStorage.getItem("userToken")?true:false;
  }

  getUserStatus():Observable<boolean>{
    return this.user.asObservable();
  }
}
