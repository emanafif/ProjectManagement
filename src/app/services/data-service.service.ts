import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  baseUrl : string ="http://localhost:5270/api/"

  constructor(private _HTTP:HttpClient ) { }

  GetAllProjects():Observable<any>{
    return this._HTTP.get(`${this.baseUrl}Project/AllProjects?page=1&pageSize=10`)
  
  }

  
  Postproject(newproject:any):Observable<any>{
    return this._HTTP.post(`${this.baseUrl}Project/NewProject`,newproject)
  }

  
Deleteproject(id:any):Observable<any>{
  return this._HTTP.get(`${this.baseUrl}Project/Delete/${id}`)
}

  
changeprojectStatus(id:any):Observable<any>{
  return this._HTTP.get(`${this.baseUrl}Project/ChangeStatus/${id}`)
}

GetProjectbyId(Id:string):Observable<any>{
  return this._HTTP.get(`${this.baseUrl}Project/GetById/${Id}`)

}


updateproject(newdevice:any):Observable<any>{
  return this._HTTP.post(`${this.baseUrl}Project/Edit`,newdevice)

}
}
