import { Component, inject, Inject, OnInit } from '@angular/core';
import { AuthService } from './login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showNavbar: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showNavbar = this.router.url !== '/login';
    });
  }
}
