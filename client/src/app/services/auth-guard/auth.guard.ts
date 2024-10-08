import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user.services/user.service';
import { CookieServices } from '../cookie.services/cookie.service'; // Make sure to import CookieServices

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService, private cookieService: CookieServices, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // Check if there is a user_token in the cookies
        const isLoggedIn = this.cookieService.getCookie('user_token');

        if (next.routeConfig?.path === 'home' && isLoggedIn) {
            this.router.navigate(['/complaint-manager']);
            return false;
        } else if ((!isLoggedIn && next.routeConfig?.path === 'complaint-manager') || (!isLoggedIn && next.routeConfig?.path === 'rateings') || (!isLoggedIn && next.routeConfig?.path === 'complaints')) {
            this.router.navigate(['/home']);
            return false;
        }

        // Allow access if none of the conditions above are met
        return true;
    }
}