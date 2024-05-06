import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';
import { provider } from '../models';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrl: './update-provider.component.css'
})
export class UpdateProviderComponent implements OnInit {
  idProvider!:number;
  name!:string;
  address!:string;
  email!:string;
  constructor(private activatedRoute:ActivatedRoute, private providerService:ProviderService, private router: Router)
  {}
  ngOnInit(): void {
// Getting route parameters
    this.activatedRoute.params.subscribe(params => {
      this.idProvider = params['id']; //
      //alert("ID = "+this.idProvider);
      this.providerService.getProviderById(this.idProvider).subscribe(
        data => {
          this.name = data.name;
          this.address = data.address;
          this.email = data.email
        }
      );
    });
  }

// fonction de button 
  saveUpdatedProvider(){
    let provider:provider = {
      id:this.idProvider,
      name:this.name,
      email:this.email,
      address:this.address
    }
    this.providerService.updateProvider(provider).subscribe(
      data =>{
        alert("Provider updated")
        this.router.navigate(["listeProviders"])

      } 
    )
  }

}
