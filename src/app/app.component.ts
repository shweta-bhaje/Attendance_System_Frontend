import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { GetRecordComponent } from './get-record/get-record.component';
import { LoginComponent } from './login/login.component';
import { PunchInComponent } from './punch-in/punch-in.component';
import { PunchOutComponent } from './punch-out/punch-out.component';
import { GetAllComponent } from './get-all/get-all.component';
import { DataserviceService } from './dataservice.service';
import { LogComponent } from './log/log.component';
import { DemoComponent } from './demo/demo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,LogComponent,DemoComponent, RouterLink,LoginComponent,PunchInComponent,PunchOutComponent,GetAllComponent, FormsModule,RegistrationComponent,GetRecordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'attendence';
 
}
