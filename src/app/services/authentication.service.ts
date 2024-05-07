import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  private isLocaleStorageAvailable=typeof sessionStorage!=='undefined'
 

  authenticate(username:string, password:string) {
    if (username === "amine" && password === "1234") {
      if (this.isLocaleStorageAvailable)
        {
          sessionStorage.setItem('username', username)
        }
      
      return true;
    } else {
      return false;
    }
  }


  isUserLoggedIn() {
    
    if (this.isLocaleStorageAvailable){
      let user =sessionStorage.getItem('username')
      // console.log(!(user === null))
      return !(user === null)

    }
   return false
    

    
   
  }


  logOut() {

    if (this.isLocaleStorageAvailable)
    sessionStorage.removeItem('username')
  }


  
}
