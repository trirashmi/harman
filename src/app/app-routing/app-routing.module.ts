import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {PatientdashboardComponent} from '../patientdashboard/patientdashboard.component';
import {LoginComponent} from '../login/login.component';

const routes=[
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'dashboard',component:PatientdashboardComponent},
  {path:'login',component:LoginComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
