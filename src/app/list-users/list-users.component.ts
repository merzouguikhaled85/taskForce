import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{
  listUsers:any


  constructor( private userService:UserService){ }

  ngOnInit(): void {
    
    this.displayALlUsers()
   
  }

displayALlUsers(){
  return this.userService.getUsers().subscribe(data => {
    this.listUsers = data;
    console.log(data)
    
},error =>console.log(error))
}

}
