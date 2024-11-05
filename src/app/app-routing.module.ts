import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './Lists/projects/projects.component'; 
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddnewprojectComponent } from './addnewproject/addnewproject.component'; 
import { AddNewprojectComponent } from './add-newproject/add-newproject.component'; 

const routes: Routes = [

  {path:"ProjectsComponent", component:ProjectsComponent},
  {path:"", component:NavbarComponent},
  {path:"AddnewprojectComponent", component:AddnewprojectComponent},
  {path:"AddNewprojectComponent/:id", component:AddNewprojectComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
