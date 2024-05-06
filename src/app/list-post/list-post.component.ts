import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent implements OnInit {
  listPosts:any
  constructor(private postService:PostService){}
  ngOnInit(): void {
    this.displayALlPosts()
    
  }
  displayALlPosts(){
    return this.postService.getPosts().subscribe(data => {
      this.listPosts = data;
      console.log(data)
      
  },error =>console.log(error))
  }

}
