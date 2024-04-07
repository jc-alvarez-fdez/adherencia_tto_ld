import { Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './_components/account/login/login.component';
import { RegisterComponent } from './_components/account/register/register.component';
import { MedicamentosComponent } from './_pages/medicamentos/medicamentos.component';
import { HomeComponent } from './_pages/home/home.component';
import { MisMedicamentosComponent } from './_pages/mis-medicamentos/mis-medicamentos.component';

export const routes: Routes = [

  { path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  { path: 'home',
  component: HomeComponent
  },
  { path: 'auth/login',
    component: LoginComponent
  },
  { path: 'auth/register',
    component: RegisterComponent
  },
  { path: 'dashboard',
  component: RegisterComponent
},
  { path: 'medicamentos',
  component: MedicamentosComponent
  },
  { path: 'mis_medicamentos',
  component: MisMedicamentosComponent
  },
  { path: '**',
  redirectTo: 'account/login',
  pathMatch: 'full'
  }
];
