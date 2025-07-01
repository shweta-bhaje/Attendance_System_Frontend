import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-get-all',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent {
constructor(private service:StudentServiceService,private route :Router,private dataService:DataserviceService){}
dataObj:any[]=[];
ngOnInit()
{
  this.getAll();
  
 
}


getAll()
{
   return this.service.getAllAttendance().subscribe((response:any)=>
  {
    console.log(response);
    this.dataObj=response;
    console.log(this.dataObj);
  })
}

add()
{
  this.route.navigate(['/registration']);
}
out(){
  this.route.navigate(['/log']);

}
}
