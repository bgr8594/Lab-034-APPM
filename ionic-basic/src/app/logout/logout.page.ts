import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Router } from '@angular/router';
import { AuthFirebaseService } from '../service/auth-firebase.service';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  isLoged : any = false;

  constructor(
    private router: Router,
    private authService: AuthFirebaseService,
    private menuService: MenuService
  ) { 
    onAuthStateChanged(this.authService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.isLoged = true;
      }
    });
  }

  ngOnInit() {
  }

  onLogout(){
    signOut(this.authService.getStateAuth()).then(response=>{
      console.log("Logout!");
      this.menuService.setTitle("login");
      this.router.navigateByUrl('/login');
    }).catch(error=>{

    });
  }
}
