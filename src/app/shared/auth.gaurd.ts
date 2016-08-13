import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { authService } from '../auth.service';
@Injectable()
export class AuthGaurd implements CanActivate{
    constructor(private authservice: authService){}
    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
       return this.authservice.isAuthenticated(); 
    }
}