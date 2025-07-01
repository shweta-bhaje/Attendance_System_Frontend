import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  constructor(private http:HttpClient) { }

  // constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get("http://localhost:8080/student");
  }

  saveRecord(data:any)
  {
   return this.http.post("http://localhost:8080/student",data);
  }

  login(data:any)
  {
   return this.http.post("http://localhost:8080/student/login",data);
  }

  punchIn(name:any)
  {
    return this.http.post("http://localhost:8080/attendance/"+`${name}`,null);//because we only need a parameter name
  }

  punchOut(name:any)
  {
   return this.http.post("http://localhost:8080/attendance/outtime/"+`${name}`,null);//because we only need a parameter name
  
  }

  getAllAttendance()
  {
   return this.http.get("http://localhost:8080/attendance");
  }
  log(data:any)
  {
   return this.http.post("http://localhost:8080/student/log",data);
  }
    
  getId(id :any)
  {
 return  this.http.get("http://localhost:8080/attendance/get/"+`${id}`);
  }
}
