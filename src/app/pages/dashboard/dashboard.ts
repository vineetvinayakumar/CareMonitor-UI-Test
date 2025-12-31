import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  email!: string;

  constructor(private auth: AuthService, private router: Router) {
    this.email = this.auth.getEmail();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
