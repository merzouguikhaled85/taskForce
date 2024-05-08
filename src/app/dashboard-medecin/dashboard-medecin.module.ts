import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardMedecinRoutingModule } from './dashboard-medecin-routing.module';
import { RDVComponent } from './rdv/rdv.component';
import { AddRDVComponent } from './add-rdv/add-rdv.component';
import { ListRDVComponent } from './list-rdv/list-rdv.component';


@NgModule({
  declarations: [
    RDVComponent,
    AddRDVComponent,
    ListRDVComponent
  ],
  imports: [
    CommonModule,
    DashboardMedecinRoutingModule
  ]
})
export class DashboardMedecinModule { }
