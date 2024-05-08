import { Component } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  ourCampany:string="smart IT Partner"
  messageParent:string="Tous les champs sont obligatoires"

  

}
