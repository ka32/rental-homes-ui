import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { ConstHelperService } from './const-helper.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router,
    private constHelper: ConstHelperService ,
    private authService: AuthService) {
  }

  canActivate() {
    if (!this.authService.isTokenExpired()) {
      return true;
    }

    this.router.navigate([this.constHelper.SignInPageUrl]);
    return false;
  }
}
