import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-contact',
  templateUrl: './message-contact.component.html',
  styleUrl: './message-contact.component.css'
})
export class MessageContactComponent {


  @Input() message:string="";
  @Output() displayDateTime = new EventEmitter();
  
  displayData(contactform:any){
    console.log(contactform)

    alert(contactform.nom+" "+contactform.prenom+" "+contactform.email+" "+contactform.message)
  }


  sendEvent() {
    this.displayDateTime.emit( new Date().toLocaleDateString());
  }
  

}
