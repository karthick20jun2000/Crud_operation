import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../detials/detials.module';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  public dataid!:number
  public employee!: datamodel
  constructor(
   private  activeroute:ActivatedRoute,
   private router:Router,
   private apiServe:ApiService
  ) { }

  ngOnInit(): void {
  this.fetchdata()
    
  }
  fetchdata(){
    this.activeroute.paramMap.subscribe((param:Params)=>{
      this.dataid=param['get']("id")
      console.log('date id is',this.dataid)
    })
    //fetch employee data
    this.apiServe.fetchData(this.dataid).subscribe((data:datamodel)=>{
this.employee=data
    })
  }
 //update employee detials
  async updateEmployeeDetials(){
    // this.apiServe.updateEmployeeDetials(this.employee,this.dataid).subscribe((res:datamodel)=>{
    //   this.router.navigate(["/"])
    // })
    try {
      const result:any=await this.apiServe.updateEmployeeDetials(this.employee,this.dataid)
      this.router.navigate(["/"])
    } catch (error) {
      
    }

  }
}
