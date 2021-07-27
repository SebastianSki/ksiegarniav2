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
import { LoginComponent } from './componets/user/login/login.component';
import { RegisterComponent } from './componets/user/register/register.component';


const routes:Routes = [
  {
    path:'',
    component:SpisComponent
  },
  {
    path:'addbook',
    component:AddbookComponent
  },
  {
    path:'book-detail/:id',
    component:BookComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    NavbarComponent,
    SpisComponent,
    BookComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
