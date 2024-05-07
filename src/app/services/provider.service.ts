import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provider } from '../models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http:HttpClient) { }

   



  getProviders(){
    
    return this.http.get<provider[]>(environment.baseUrl+"/providers");
  }

  getProviderById(id:number){
   
    return this.http.get<provider>(environment.baseUrl+"/providers/"+id);
  }


  addProvider(provider:provider){
    
    return this.http.post<provider>(environment.baseUrl+"/providers",provider);
  }


  deleteProvider(provider:provider){
    
    return this.http.delete(environment.baseUrl+"/providers/"+provider.id);

  }
  
  updateProvider(provider:provider){
    
    return this.http.put<provider>(environment.baseUrl+"/providers/"+provider.id,provider);
  }

}
