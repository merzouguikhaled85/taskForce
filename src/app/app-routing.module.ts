import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';

const routes: Routes = [

  {path:"listeProviders",component:ListProvidersComponent},
  {path:"addProvider",component:AddProviderComponent},
  {path:"contact",component:ContactComponent},
  {path:"updateProvider/:id",component:UpdateProviderComponent},
  {path:"listeArticles",component:ListArticlesComponent},
  {path:"addArticle/:id",component:AddArticleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
