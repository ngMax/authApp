import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { authService } from '../auth.service';
@Component({
    selector: 'my-header',
    template: `
       
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        
                        <li><a [routerLink]="['signup']">Sign Up</a></li>
                        <li><a [routerLink]="['signin']">Sign In</a></li>
                        <li><a [routerLink]="['protected']">Protected</a></li>
        
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
        
                        <li><a (click)="onLogOut()" style="cursor: pointer">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
    `, 
    directives: [ROUTER_DIRECTIVES],
    providers: [authService]
})
export class HeaderComponent {
    constructor(private authservice: authService){}
    isAuth(){
        return this.authservice.isAuthenticated();
    }
    onLogOut(){
        this.authservice.logOut();
    }
}
