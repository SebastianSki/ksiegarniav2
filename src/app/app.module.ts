import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './componets/books/addbook/addbook.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { RouterModule, Routes } from "@angular/router";
import { SpisComponent } from './componets/spis/spis.component';
import { BookComponent } from './componets/books/book/book.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from "./services/auth.service";
import { LoginComponent } from './componets/user/login/login.component';
import { RegisterComponent } from './componets/user/register/register.component';
import { RecoveryPassComponent } from './componets/user/recovery-pass/recovery-pass.component';
import { VerifyEmailComponent } from './componets/user/verify-email/verify-email.component';
import { DashboardComponent } from './componets/user/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    NavbarComponent,
    SpisComponent,
    BookComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryPassComponent,
    VerifyEmailComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
