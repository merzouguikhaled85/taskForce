import { Component } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  displayData(contactform:any){
    console.log(contactform)

    alert(contactform.nom+" "+contactform.prenom+" "+contactform.email+" "+contactform.message)
  }

}
