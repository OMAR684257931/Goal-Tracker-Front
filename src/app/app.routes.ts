import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuard } from './shared/guards/auth.guard';
import {RegisterComponent} from './auth/register/register.component';
import {guestGuard} from './shared/guards/guest.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate: [guestGuard]  },
  { path: 'register', component: RegisterComponent,canActivate: [guestGuard]  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: 'login' },
];
