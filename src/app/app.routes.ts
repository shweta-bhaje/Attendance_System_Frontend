import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { GetRecordComponent } from './get-record/get-record.component';
import { LoginComponent } from './login/login.component';
import { PunchInComponent } from './punch-in/punch-in.component';
import { PunchOutComponent } from './punch-out/punch-out.component';
import { GetAllComponent } from './get-all/get-all.component';
import { LogComponent } from './log/log.component';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
    {
        path:'registration',
        component:RegistrationComponent
    },
    {
        path:'getrecord',
        component:GetRecordComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'punchin',
        component:PunchInComponent
    },
    {
        path:'punchout',
        component:PunchOutComponent
    },
    {
        path:'getall',
        component:GetAllComponent
    },
    {
        path:'log',
        component:LogComponent
    },
    {
        path:'demo',
        component:DemoComponent
    }
];
