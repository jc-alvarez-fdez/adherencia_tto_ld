import { Routes } from '@angular/router';
import { LoginComponent } from './_components/account/login/login.component';
import { RegisterComponent } from './_components/account/register/register.component';

export const routes: Routes = [

  { path: 'account/login',
    component: LoginComponent
  },
  { path: 'account/register',
    component: RegisterComponent
  },
];
