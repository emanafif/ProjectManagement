import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-newproject',
  templateUrl: './add-newproject.component.html',
  styleUrl: './add-newproject.component.css'
})
export class AddNewprojectComponent {

  project!:any;
  projectId!:any;
  isloading:boolean=false;
  data:any;
msg :any;
msg2:any;
  constructor(private dataservice:DataServiceService, private route:ActivatedRoute, private _router:Router){ 
    this.projectId= this.route.snapshot.paramMap.get('id');

    this.isloading=true; 
    this.dataservice.GetProjectbyId(this.projectId).subscribe(
      res=>{
        console.log(res);
        this.project=(res);
         this.isloading=false; 
      }
    )

  }

UPDateProject(){
  this.data={
    id : this.project.id,
    name : this. project.name,
    description : this. project.description,
    startDate : this. project.startDate,
    endDate : this. project.endDate,
    budget : this. project.budget,
    owner : this. project.owner

  }
  this.isloading=true;

  this.dataservice.updateproject(this.data).subscribe(
    (res)=>{console.log(res),this.msg = 'Updated Successfully ',
    
    this.isloading=false
  
    },

    error=>{console.log(error),this.msg2 = error.errors,
      console.log(this.data),
    this.isloading=false},

    ()=> {console.log("done"),
     
      this._router.navigateByUrl("/ProjectsComponent")
    } 
  )
}
Allprojects:any=[];

getprojects(){
  this.dataservice.GetAllProjects().subscribe(
    res=>{
      this.Allprojects=res.data;
      console.log(res.data);
    },
    
    ()=> console.log("done")
      
    ) 
  }

}
