import { Injectable } from '@angular/core';
import { User } from './shared/user.interface';
import { Router } from '@angular/router';
declare var firebase:any;
@Injectable()
export class authService {
    constructor(private router:Router ){}
    signupUser(user: User){
        console.log(user.email + 'pwd: '+user.password);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
        // Handle Errors here.
       console.log(error);
    });
    }

    signinUser(user: User){

        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
        // Handle Errors here.
        console.log(error);
        });
    }

    isAuthenticated(){
        var user = firebase.auth().currentUser;
        if (user) {
            return true;
        } else {
            return false;
        }
    }

    logOut(){
        firebase.auth().signOut();
        this.router.navigate(['/signin']);
    }
}