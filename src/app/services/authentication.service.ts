import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  private isLocaleStorageAvailable=typeof sessionStorage!=='undefined'
 

  // authenticate(username:string, password:string) {
  //   if (username === "amine" && password === "1234") {
  //     if (this.isLocaleStorageAvailable)
  //       {
  //         sessionStorage.setItem('username', username)
  //       }
      
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  authenticate(username: any, password: any) {

    let userData:any = this.httpClient.post(environment.baseUrl+"/api/auth/signin",
    {"username":username,"password":password}).pipe(
      map(
        (data:any) => {
          if (this.isLocaleStorageAvailable)
            {
              sessionStorage.setItem('jwtToken', data.accessToken);
              sessionStorage.setItem('username', data.username);
              userData = data;
              console.log(data);
            }


        }
      )
    );
    return userData;
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
      sessionStorage.removeItem('jwtToken')
    sessionStorage.removeItem('username')
  }


  
}
