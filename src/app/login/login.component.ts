import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  private readonly onDestroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnInit(): void {
    this.getUser();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  getUser() {}

  onLogin() {
    const email = this.loginForm.get('email')?.getRawValue();
    const password = this.loginForm.get('password')?.getRawValue();
    this.authService
      .signin(email, password)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (res) => {
          console.log('logou: ' + res);
          this.router.navigate(['home']);
        },
        error: (err) => {
          console.log('erro ao logar: ' + err);
        },
      });
  }
}
