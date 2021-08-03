import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpisComponent } from "./componets/spis/spis.component";
import { AddbookComponent } from "./componets/books/addbook/addbook.component";
import { BookComponent } from "./componets/books/book/book.component";
import { LoginComponent } from "./componets/user/login/login.component";
import { RegisterComponent } from "./componets/user/register/register.component";
import { DashboardComponent } from "./componets/user/dashboard/dashboard.component";
import { RecoveryPassComponent } from "./componets/user/recovery-pass/recovery-pass.component";
import { VerifyEmailComponent } from "./componets/user/verify-email/verify-email.component";

import { AuthGuard } from "./services/guard/auth.guard";
import {ConfirmEmailComponent} from "./componets/user/confirm-email/confirm-email.component";

const routes:Routes = [
  { path:'', component: SpisComponent },
  { path:'addbook', component: AddbookComponent },
  { path:'book-detail/:id', component: BookComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path:'recovery-pass', component: RecoveryPassComponent },
  { path:'verify-email', component: VerifyEmailComponent },
  { path:'confirm-email', component: ConfirmEmailComponent },


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
