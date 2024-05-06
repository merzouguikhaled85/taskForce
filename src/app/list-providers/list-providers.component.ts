import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { provider } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrl: './list-providers.component.css'
})
export class ListProvidersComponent {
  listProviders:provider[]=[]


  constructor( private providerService:ProviderService,private router:Router){ }

  ngOnInit(): void {
    
    this.refresh()
   
  }

  // Afficher la liste des providers
  refresh(){
  return this.providerService.getProviders().subscribe(
    (data : provider[]) => {
          this.listProviders = data;
          console.log(data)
    
   },error =>console.log(error))
}


// delete provider

deleteProvider(provider:provider){
  this.providerService.deleteProvider(provider).subscribe(
    data=>{
      console.log("Provider deleted")
      this.refresh()
    }
  )
}


updateProvider(provider:provider){

  this.router.navigate(['updateProvider',provider.id])
}

addArticle(provider:provider){

  this.router.navigate(['addArticle',provider.id])
}


}
