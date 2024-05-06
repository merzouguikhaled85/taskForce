import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { provider } from '../models';


@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css'
})
export class AddProviderComponent implements OnInit {

  constructor( private providerService:ProviderService,private router:Router){}
  ngOnInit(): void {
    
  }

 // Add a new provider
  addProvider(providerform:any ){
    let provider={
      name:providerform.name,
      address:providerform.address,
      email:providerform.email
    }
    console.log(providerform.value)
    this.providerService.addProvider(provider).subscribe(data=>
      {
        console.log("insertion avec succés")
        this.router.navigate(["listeProviders"])
      },error =>console.log(error))
    
  }


}
