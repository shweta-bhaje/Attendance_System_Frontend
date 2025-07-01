import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import { response } from 'express';
import { error } from 'console';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-punch-out',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './punch-out.component.html',
  styleUrl: './punch-out.component.css'
})
export class PunchOutComponent {
dataObj:any={
  name:'',
  punchOutTime:'',
  // punchInTime:'',
  date:''
}

constructor(private service:StudentServiceService,private route:ActivatedRoute,private router:Router){}
message: string = '';
id:any=0;
punchOut()
{
  const name = this.dataObj.name.trim();
 if(name)    // Check if the user has entered a valid name

 {
  this.service.punchOut(name).subscribe((response:any)=>    // Check if the user has entered a valid name
  {
if(response){
  this.message = 'Punch-out successful for student'+ name;

}
else {
  this.message = ' No punch-in record found OR You have already punched out today.' ;  // Handle cases where no record exists
}

  }

);
 }
 else {
  this.message = 'Student not found ';
}
}

}

// ngOnInit()
// {
//    this.id= this.route.snapshot.params['id'];
// this.service.getId(this.id).subscribe((response:any)=>
// {
//   if(response!=null)
//   {
//     console.log(response);
//         this.dataObj=response;
//   }
//   else{
// this.message="Record not Found" 
//   }
// });
// }
// view(id:any)
// {

//   if(id!=null)
//   {
//     this.router.navigate([`/demo`,id]);

//   }
//   else{
//     this.message="NO Rrcord Found";
//     // alert("no found");
//   }

// }
