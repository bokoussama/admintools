import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): Promise<boolean> {
        if (localStorage.getItem('isLoggedin')) {
            return new Promise((resolve) => {
                resolve(true);
           });
        }

        this.router.navigate(['/login']);
        return new Promise((resolve) => {
            resolve(false);
        });
    }
}
