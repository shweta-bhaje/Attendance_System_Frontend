import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import { response } from 'express';
import { routes } from '../app.routes';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private service:StudentServiceService,private router:Router){}
dataObj:any={
  name:'',
  password:''
}
name: string = '';         // For storing the entered name
password: string = '';     // For storing the entered password
message: string = ''; 
login()
{
  this.service.login(this.dataObj).subscribe((response:any)=>
  {

    this.message=response.message;
    
    if (response.message === 'Login Successful') {
      console.log('Login Successful!');
      alert("Login Successful");
    } else {
      console.log('Login Failed');
      alert("Login Failed")
    }
    console.log(response);
  },

  (error) => {
    // Handle error response
    console.error('Error during login:', error);
    this.message = 'Login Failed';
  }
);
}
}
