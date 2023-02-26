import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../detials/detials.module';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  forms!:FormGroup;
  data:undefined|datamodel[];
  constructor(
    private fg:FormBuilder, private apiServe:ApiService
    ,private router:Router
  ) { }
getData(){
  this.forms=this.fg.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    companyName:['',[Validators.required]],
    number:['',[Validators.required]],
    email:['',[Validators.required]]
  })
}
  ngOnInit(): void {
    this.getData()
    this.getEmployeeDetials()
  }
//get data to employee detials
 async getEmployeeDetials(){
  // this.apiServe.getEployeeDetials().subscribe(res=>{
  //   this.data=res;
  // })
  const result:any=await this.apiServe.getEployeeDetials()
  this.data=result
}
//delete employee detials
async deleteEmployeeDetials(id:number){
  // this.apiServe.deleteEployeeDetials(id).subscribe(res=>{
  //   console.log(res)
  //   this.getEmployeeDetials()
  // })
  try {
    const result:any =await this.apiServe.deleteEployeeDetials(id)
  // this.data=result
  this.getEmployeeDetials()
  console.log('delete')
  } catch (error) {
    
  }
}

}
