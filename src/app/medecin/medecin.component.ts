import { Component, OnInit } from '@angular/core';
import { medecin } from '../models';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrl: './medecin.component.css'
})
export class MedecinComponent implements OnInit {
  medecins:string []=["Sofien","Khaled","ahmed"]
  formation:string="angular"
  medecinsDetails:medecin[]=[
    {"nom":"Amine","prenom":"Mezghich","age":38,"grade":"Généraliste","photo":"https://c8.alamy.com/compfr/2rapd9r/profil-d-avatar-par-defaut-icone-de-profil-utilisateur-photo-de-profil-symbole-portrait-membre-utilisateur-icone-de-personnes-dans-un-style-plat-2rapd9r.jpg"},
    {"nom":"Sofien","prenom":"Khal","age":42,"grade":"Généraliste","photo":"https://c8.alamy.com/compfr/2rapd9r/profil-d-avatar-par-defaut-icone-de-profil-utilisateur-photo-de-profil-symbole-portrait-membre-utilisateur-icone-de-personnes-dans-un-style-plat-2rapd9r.jpg"},
    {"nom":"Romdhane","prenom":"Selmi","age":40,"grade":"Généraliste","photo":"https://c8.alamy.com/compfr/2rapd9r/profil-d-avatar-par-defaut-icone-de-profil-utilisateur-photo-de-profil-symbole-portrait-membre-utilisateur-icone-de-personnes-dans-un-style-plat-2rapd9r.jpg"},
    {"nom":"Haythem","prenom":"Jedidi","age":37,"grade":"Cardiologue","photo":"https://c8.alamy.com/compfr/2rapd9r/profil-d-avatar-par-defaut-icone-de-profil-utilisateur-photo-de-profil-symbole-portrait-membre-utilisateur-icone-de-personnes-dans-un-style-plat-2rapd9r.jpg"},
    {"nom":"Ali","prenom":"Tahri","age":30,"grade":"Radiologue","photo":"https://c8.alamy.com/compfr/2rapd9r/profil-d-avatar-par-defaut-icone-de-profil-utilisateur-photo-de-profil-symbole-portrait-membre-utilisateur-icone-de-personnes-dans-un-style-plat-2rapd9r.jpg"},

  ]

  ngOnInit():void{

  }
}
