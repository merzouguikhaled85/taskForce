import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { article } from '../models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }


  
  getArticles(){
    return this.http.get<article[]>(environment.baseUrl+"/articles");
  }

  
  addArticle(article:article,providerid:number){
    return this.http.post<article>(environment.baseUrl+"/articles/"+providerid,article);
  }

}
