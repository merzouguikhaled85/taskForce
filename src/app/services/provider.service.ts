import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provider } from '../models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http:HttpClient) { }

     token:any=sessionStorage.getItem('jwtToken');



  getProviders(){
    const headers= new HttpHeaders({Authorization:'Bearer '+this.token});
    return this.http.get<provider[]>(environment.baseUrl+"/providers", {headers});
  }

  getProviderById(id:number){
    const headers= new HttpHeaders({Authorization:'Bearer '+this.token});
    return this.http.get<provider>(environment.baseUrl+"/providers/"+id, {headers});
  }


  addProvider(provider:provider){
    const headers= new HttpHeaders({Authorization:'Bearer '+this.token});
    return this.http.post<provider>(environment.baseUrl+"/providers",provider, {headers});
  }


  deleteProvider(provider:provider){
    const headers= new HttpHeaders({Authorization:'Bearer '+this.token});
    return this.http.delete(environment.baseUrl+"/providers/"+provider.id, {headers});

  }
  
  updateProvider(provider:provider){
    const headers= new HttpHeaders({Authorization:'Bearer '+this.token});
    return this.http.put<provider>(environment.baseUrl+"/providers/"+provider.id,provider, {headers});
  }

}
