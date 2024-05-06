import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent implements OnInit{
  idProvider!:number;
  label!:string;
  price!:string;
  picture!:string;
  constructor(private activatedRoute:ActivatedRoute,private articleService :ArticleService,private router:Router){}
  ngOnInit(): void {
    // Getting route parameters
    this.activatedRoute.params.subscribe(params => {
      this.idProvider = params['id']; //
     // alert("ID = "+this.idProvider);
      
    });
  }


  

  // Add a new provider
  addArticle(articleForm:any ){
    let article={
      label:articleForm.label,
      price:articleForm.price,
      picture:articleForm.picture
    }
    console.log(articleForm.value)
    this.articleService.addArticle(article,this.idProvider).subscribe(data=>
      {
        console.log("insertion avec succés")
        this.router.navigate(["listeArticles"])
      },error =>console.log(error))
    
  }
   
  

}
