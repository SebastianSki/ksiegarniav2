import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public changeName:boolean = false;
  constructor(public authService:AuthService) {

  }

  ngOnInit(): void {

  }
  showChangeName(){
    if(!this.changeName){
      this.changeName = true;
    }else if (this.changeName)
      this.changeName = false;
  }
  updateName(id:any, email:any, displayName:any, emailVerified:any){
    this.authService.updateUserData(id, email, displayName, emailVerified);
  }

}
