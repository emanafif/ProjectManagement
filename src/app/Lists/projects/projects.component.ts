import { Component } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  Allprojects:any=[];


  constructor(private dataservice:DataServiceService){ 
   this. getprojects();

  }

  getprojects(){
    this.dataservice.GetAllProjects().subscribe(
      res=>{
        this.Allprojects=res.data;
        console.log(res.data);
      },
      
      ()=> console.log("done")
        
      ) 
    }

    
 deleteData(id:any){
  
  this.dataservice.Deleteproject(id).subscribe(
    res=>{console.log(res) ,
      this.getprojects();
  },
    err=>console.log(err),
  )

}

  
changestatus(id:any){
  
  this.dataservice.changeprojectStatus(id).subscribe(
    res=>{console.log(res) ,
      this.getprojects();
  },
    err=>console.log(err),
  )

}

}
