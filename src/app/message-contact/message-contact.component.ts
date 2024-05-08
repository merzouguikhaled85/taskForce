import { Component } from '@angular/core';

@Component({
  selector: 'app-message-contact',
  templateUrl: './message-contact.component.html',
  styleUrl: './message-contact.component.css'
})
export class MessageContactComponent {
  displayData(contactform:any){
    console.log(contactform)

    alert(contactform.nom+" "+contactform.prenom+" "+contactform.email+" "+contactform.message)
  }

}
