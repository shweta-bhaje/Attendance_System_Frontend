import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import { response } from 'express';
import { DataserviceService } from '../dataservice.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-punch-in',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './punch-in.component.html',
  styleUrl: './punch-in.component.css'
})
export class PunchInComponent {
constructor(private service:StudentServiceService,private dataService:DataserviceService,private router:Router){}
name:string='';
dataName:string='';
dataObj:any={
  name:'',
  punchInTime:'',
  punchOutTime:'',
  date:''
}
id:any=0;
obj:any={
  name:'',
  punchOutTime:'',
  date:''
}
message: string = '';
studentData: any
successMessage: string = '';
  errorMessage: string = '';

ngOnInit()
{


  this.dataService.studentData$.subscribe((data: any) => {
    this.studentData = data; // Access shared data
    console.log('Received data in other component:', this.studentData);
  });
}



punchIn()
{
  if (this.dataObj.name) {

  this.service.punchIn(this.dataObj.name).subscribe({
  next:  (response:any)=>
      {

       
    if(response)
    {
      
      this.successMessage=`Attendance punched in for ${this.dataObj.name}`;
      console.log(response);
      this.dataObj=response;
alert("Attendance punched in successfully");

    }else{
      this.errorMessage = `No record found for the student or you've already punched in today.`;

    }
  }
  });
 
  }
  else {
    this.errorMessage = 'Please enter a student name/NO Record found ';
  }
  }

  



  punchOut()
{
  const name = this.dataObj.name.trim();
 if(name)    // Check if the user has entered a valid name

 {
  this.service.punchOut(name).subscribe((response:any)=>    // Check if the user has entered a valid name
  {

if(response){
  this.message = 'Punch-out successful for student'+ name;
  console.log(response);

}
else {
  this.message = 'No punch-in record found for the student today with name : ' + name;  // Handle cases where no record exists
}

  }

);
 }
 else {
  this.message = 'Student not found with name:  '+name;
}
}




}
