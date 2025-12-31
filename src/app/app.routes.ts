import { Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login';
import { DashboardComponent } from '../app/pages/dashboard/dashboard';
import { ListComponent } from '../app/pages/list/list';
import { HeaderComponent } from './header/header';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'list', component: ListComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent }
];
