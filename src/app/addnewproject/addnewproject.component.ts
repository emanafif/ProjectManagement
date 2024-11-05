import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewproject',
  templateUrl: './addnewproject.component.html',
  styleUrl: './addnewproject.component.css'
})
export class AddnewprojectComponent {
  constructor(private dataservice:DataServiceService, private _router:Router){ 


  }

  msg:string='';
  PostProject(newproject:any){

    if(newproject.valid){
      this.dataservice.Postproject(newproject.value).subscribe(
        res=>{console.log(res) 
           ,this.msg = 'Added successfully '
      },
        err=>console.log(err),
        ()=> {

          this._router.navigateByUrl("/ProjectsComponent")
        }

      )
      console.log(newproject.value);
     
    }

  }

}
