import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent implements OnInit {
  

@Input() campany:string="";
email:string="Email : info@smart-it-partner.com";
phone:string="98 787521";
 adresse:string="Technopole Elghazela Ariana"
 ngOnInit(): void {
   
 }
 ngOnChanges(){

  console.log("valeur modifée est :" + this.campany);
 }

}
