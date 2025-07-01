import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
constructor(private service:StudentServiceService){}
dataObj:any={
  name:'',
  course:'',
  email:'',
  password:'',
  contact:''
}

saveRecord()
{
  if (!this.dataObj.name || !this.dataObj.email || !this.dataObj.password || !this.dataObj.rollNo) {
    alert('Please fill out all required fields.');
    return;
  }
  this.service.saveRecord(this.dataObj).subscribe((response:any)=>
  {
    
    console.log(response);
    this.dataObj=response;
    console.log(this.dataObj);
    alert("Registration Succesfull");
  })
}
}
