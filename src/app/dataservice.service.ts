import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  
  private name: string = '';

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
return this.name;
  }

private studentDataSubject = new BehaviorSubject<any>(null);
studentData$ = this.studentDataSubject.asObservable();

updateStudentData(data: any) {
  this.studentDataSubject.next(data);
}

}
