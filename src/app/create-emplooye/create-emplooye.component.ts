import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../detials/detials.module';

@Component({
  selector: 'app-create-emplooye',
  templateUrl: './create-emplooye.component.html',
  styleUrls: ['./create-emplooye.component.css']
})
export class CreateEmplooyeComponent implements OnInit {
forms!:FormGroup
data:undefined|datamodel[]
  constructor(
private fg:FormBuilder,
private APIServe:ApiService,
private routes:Router
  ) { }

  ngOnInit(): void {
    this.createData()
  }
  createData(){
    this.forms=this.fg.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      companyName:['',[Validators.required]],
      number:['',[Validators.required]],
      email:['',[Validators.required]]
    })
  }

  async createEmplooye(data:datamodel){
    try {
      const result:any=await this.APIServe.createdEmployeeDetials(data)
      if (this.forms.invalid) {
        return
      }
      alert("add succesfully")
      this.forms.reset()
    } catch (error) {
      alert("wents some worng")
    }
    this.routes.navigate(['/'])
  }
// createEmplooye(data:datamodel){
  // if (this.forms.invalid) {
  //   return
  // }
// console.log(this.forms.value)
// this.APIServe.createdEmployeeDetials(data)
  
//   .subscribe((res=>{
   
//     alert('add succes fully')
    
//     this.forms.reset()
//   }),error=>{alert('wents some worng')
// })
// this.routes.navigate(['/'])
// }
// addEmployeeDetials(data:datamodel){
  

  
// }
}
