import { Component, OnInit } from '@angular/core';
import { article } from '../models';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.css'
})
export class ListArticlesComponent implements OnInit {
 

 listArticles:article[]=[]
 constructor( private articleService :ArticleService){}

 ngOnInit(): void {
  this.refresh()
}



// Afficher la liste des articles
refresh(){
  return this.articleService.getArticles().subscribe(
    (data : article[]) => {
          this.listArticles = data;
          console.log(data)
    
   },error =>console.log(error))
}
}
