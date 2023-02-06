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
    this.clickHere()
    this.getEmployeeDetials()
  }


  clickHere(){
    if (this.forms.invalid) {
      return
    }
    console.log(this.forms.value)
  }
addEmployeeDetials(data:datamodel){
  

  this.apiServe.addEmployeeDetials(data)
  
  .subscribe((res=>{
   
    alert('add succes fully')
    
    this.forms.reset()
  }),error=>{alert('wents some worng')})
  this.getEmployeeDetials()
 
}

getEmployeeDetials(){
  this.apiServe.getEployeeDetials().subscribe(res=>{
    this.data=res;
  })
}

deleteEmployeeDetials(id:number){
  this.apiServe.deleteEployeeDetials(id).subscribe(res=>{
    console.log(res)
    this.getEmployeeDetials()
  })

  console.log('delete')
}

}
