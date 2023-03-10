import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmplooyeComponent } from './create-emplooye/create-emplooye.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {
    path:'',
    component:ViewEmployeeComponent
  },
  {
    path:'update/:id',
    component:UpdateEmployeeComponent
  },
  {
    path:'createemplooye',
    component:CreateEmplooyeComponent
  }
];
//json-server --watch db.json

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
