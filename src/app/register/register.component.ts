import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  usernameCtrl!:FormControl
  passwordCtrl!:FormControl
  adresseCtrl! : FormControl;
  userForm!:FormGroup

  constructor(private fb:FormBuilder){
    this.usernameCtrl=fb.control('');
    this.passwordCtrl=fb.control('');
    this.adresseCtrl = fb.control("");
    
    this.userForm=fb.group({
      username:this.usernameCtrl,
      password:this.passwordCtrl,
      adresse : this.adresseCtrl
      
    });

  }
  reset():void{
    this.usernameCtrl.setValue("");
    this.passwordCtrl.setValue("");
    this.adresseCtrl.setValue("");



  }
  register(): void {
    console.log(this.userForm.value);
 }

}
