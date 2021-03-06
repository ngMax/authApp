import { provideRouter } from '@angular/router';
import { SignupComponent } from './unprotected/signup.component';
import { SigninComponent } from './unprotected/signin.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGaurd } from './shared/auth.gaurd';
export const APP_ROUTES = [
    provideRouter([
        {path:'', redirectTo:'/signup', pathMatch: 'full'},
        {path:'signup', component:SignupComponent},
        {path:'signin', component:SigninComponent},
        {path:'protected', component:ProtectedComponent, canActivate:[AuthGaurd]}
    ])
];