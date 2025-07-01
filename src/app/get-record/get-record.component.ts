import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-record',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-record.component.html',
  styleUrl: './get-record.component.css'
})
export class GetRecordComponent {
  dataObj:any[]=[];
 constructor(private service:StudentServiceService){}
 ngOnInit()
 {
  this.getAll();
 }
 getAll()
 {
   return this.service.getAll().subscribe((response:any)=>
   {
    console.log(response);
this.dataObj=response;
console.log(this.dataObj);
   }
   );
 }
}
