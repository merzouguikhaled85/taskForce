import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo:"app-navbar" },
  {path:"listeProviders",component:ListProvidersComponent,canActivate:[AuthGaurdService]},
  {path:"addProvider",component:AddProviderComponent,canActivate:[AuthGaurdService]},
  {path:"contact",component:ContactComponent},
  {path:"updateProvider/:id",component:UpdateProviderComponent,canActivate:[AuthGaurdService]},
  {path:"listeArticles",component:ListArticlesComponent,canActivate:[AuthGaurdService]},
  {path:"addArticle/:id",component:AddArticleComponent,canActivate:[AuthGaurdService]},
  {path: 'login', component:LoginComponent },
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
