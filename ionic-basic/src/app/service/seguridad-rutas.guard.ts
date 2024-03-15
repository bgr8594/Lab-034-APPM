import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFirebaseService } from './auth-firebase.service';
import { MenuService } from './menu.service';
@Injectable({
  providedIn: 'root'
})
export class SeguridadRutasGuard implements CanActivate {

  constructor(
    private authService: AuthFirebaseService,
    private menuService: MenuService,
    private router: Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLoged){
        return true;
      }
      else{
        console.log("Acceso denegado!");
        this.menuService.setTitle("login");
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
