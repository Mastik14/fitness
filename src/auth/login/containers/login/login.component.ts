import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/auth/shared/interfaces/interfaces';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'login',
  template: `
    <div>
      <auth-form (submitted)="loginUser($event)">
        <h1>Login</h1>
        <a routerLink="/auth/register">Not registered?</a>
        <button type="submit">Login</button>
        <div class="error" *ngIf="error">
          {{ error }}
        </div>
      </auth-form>
    </div>
  `,
})
export class LoginComponent {
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  loginUser(event: FormGroup) {
    const { email, password } = event.value;
    const user: User = {
      email,
      password
    };

    this.authService.loginUser(user).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
