import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { datamodel } from './detials/detials.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }

  addEmployeeDetials(data:datamodel){
    return this.http.post<datamodel>('http://localhost:3000/posts', data) 
  }
  getEployeeDetials(){
    return this.http.get<datamodel[]>('http://localhost:3000/posts')
  }

  deleteEployeeDetials(id:number){
    return this.http.delete<datamodel>('http://localhost:3000/posts/'+id)
  }

  fetchData(id:number){
    return this.http.get<datamodel>("http://localhost:3000/posts/"+id)
  }

  updateEmployeeDetials( data:datamodel,id:number){
    return this.http.put<datamodel>("http://localhost:3000/posts/"+id,data)
  }
}
