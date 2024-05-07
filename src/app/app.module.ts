import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrpipePipe } from './drpipe.pipe';
import { MedecinComponent } from './medecin/medecin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ContactComponent } from './contact/contact.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    DrpipePipe,
    MedecinComponent,
    ListUsersComponent,
    ListPostComponent,
    ListProvidersComponent,
    NavbarComponent,
    AddProviderComponent,
    UpdateProviderComponent,
    ContactComponent,
    ListArticlesComponent,
    AddArticleComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
