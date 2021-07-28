import {Injectable, NgZone} from '@angular/core';
import {User} from "./user";
import {auth} from 'firebase/app';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  // userData: any; // Save logged in user data
  actionCodeSettings = {
    url: 'http://localhost:4200/dashboard',
    handleCodeInApp: true
  }

  user$:Observable<User | null | undefined>;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ){
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', "");
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // })
  }
    async googleSigin()
    {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      return this.setUserData(credential.user);
    }

    async signIn(email:any, password:any) {
      await this.afAuth.signInWithEmailAndPassword(email, password)
        .then((value:any) => {
          this.setUserData(value.user);
          console.log(email, password);
          this.router.navigate(['/dashboard']);
        }).catch((error:any) => {
        window.alert(error + 'jebło coś w chuj');
      });
    }

    async signUp(email:any, password:any) {
      try{
        const value = await this.afAuth.createUserWithEmailAndPassword(email, password);
        await this.setUserData(value.user);
        await this.sendVerificationMail(email);
        return this.router.navigate(['/verify-email']);
      } catch(error){
        throw new Error(error);
      }
    }

    async sendVerificationMail(email:any) {
    console.log(this.actionCodeSettings);
      await this.afAuth.sendSignInLinkToEmail(email, this.actionCodeSettings)
        .then(() => {
          this.router.navigate(['/verify-email']);
        })
      }

  async forgotPassword(passwordResetEmail:any) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Wyslaliśmy wiadomość resetującą hasło');
      }).catch((error:any) => {
        window.alert(error + 'no jebło')
      })
  }
  confirmMail(isConfirmed:any){
    if(isConfirmed != false){
      console.log('potwierdzono mail');
    }
  }
  async signOut(){
    await this.afAuth.signOut();
    return this.router.navigate(['/login']);
    }

    isLoggedIn(user:any): boolean {
    return (user.emailVerified != false)  ? true : false;
  }

  // Auth logic to run auth providers
  // async AuthLogin(provider:any) {
  //   return await (await this.afAuth.auth).signInWithPopup(provider)
  //     .then((value:any) => {
  //       this.ngZone.run(() => {
  //         this.router.navigate(['dashboard']);
  //       })
  //       this.SetUserData(value.user);
  //     }).catch((error:any) => {
  //       window.alert(error)
  //     })
  // }
  async updateUserData(uid:any,email:any, displayName:any, emailVerified:any){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
    const value: User = {
      uid: uid,
      email: email,
      displayName: displayName,
      emailVerified: emailVerified
    };
    window.alert('Zmieniono nazwę użytkownika');
    return userRef.update(value);
  }
  setUserData(user:any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified
    };
    return userRef.set(data, {
      merge: true
    });
  }
}
