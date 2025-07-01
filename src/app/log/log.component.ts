import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  dataObj:any={
    name:'',
    password:''
  }
  data: any[] = []

  loginMessage: string = '';
  studentData: any = null;
  constructor(private service:StudentServiceService,private dataService:DataserviceService,private router:Router){}

  
log(){
this.service.log(this.dataObj).subscribe((response:any)=>
{
  if(response)
  {
    console.log(response);
    this.studentData=response;
    console.log(this.studentData);
    this.dataService.updateStudentData(response); // Share data using the service
    alert("Login Successfull");
    // this.dataService.setName(response.name);
    this.loginMessage = 'Login successful!';
    this.router.navigateByUrl('/punchin');

  }
  else{
    alert("Login Failed");

    this.loginMessage = 'Login Failed. Please check your credentials.';

  }
});
}
passwordType: string = 'password';
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  
  }
}
