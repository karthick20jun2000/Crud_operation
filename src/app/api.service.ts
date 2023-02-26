import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { datamodel } from './detials/detials.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
APICall:any=environment.baseURL
  constructor(
    private http:HttpClient,
   
  ) { }
  
//createEmployeeDetials
  createdEmployeeDetials(data:datamodel){
    return this.http.post<datamodel>(this.APICall, data) .toPromise()
  }
  //getEployeeDetials()
  getEployeeDetials(){
    return this.http.get<datamodel[]>(`${this.APICall}`) .toPromise()
  }
//deleteEployeeDetials
  deleteEployeeDetials(id:number){
  
    return this.http.delete<datamodel>(`${this.APICall}/${id}`) .toPromise()
  }
//fetchData()
  fetchData(id:number){
    return this.http.get<datamodel>(`${this.APICall}/${id}`)
  }
// updateEmployeeDetials()
  updateEmployeeDetials( data:datamodel,id:number){
    return this.http.put<datamodel>(`${this.APICall}/${id}`,data) .toPromise()
  }
}
