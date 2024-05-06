import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskforce';
  nom:string="HMPIT"
  names1:string []=["amine","khaled","KHALI"]
  names!:string []



  display(){
    alert("Hello angular")

  
  }
}
