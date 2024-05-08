import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent implements OnInit {
  

@Input() campany:string="";

@Output() eventToSend = new EventEmitter();


email:string="Email : info@smart-it-partner.com";
phone:string="98 787521";
 adresse:string="Technopole Elghazela Ariana"
 constructor(){}
 
 ngOnInit(): void {
   
 }


 sendEvent() { 
  this.eventToSend.emit("Message du fils vers le pere");
}

 ngOnChanges(){

  console.log("valeur modifée est :" + this.campany);
 }

}
