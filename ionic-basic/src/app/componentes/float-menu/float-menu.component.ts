import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interface/menu';
import { Subscription } from 'rxjs';
import { onAuthStateChanged } from 'firebase/auth';
import { MenuService } from 'src/app/service/menu.service';
import { AuthFirebaseService } from 'src/app/service/auth-firebase.service';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent  implements OnInit {
  titleMenu: string='home';

  public isLoged : any = false;

  private router: Router;

  private menuService: MenuService;

  private autService: AuthFirebaseService;

  public subscription : Subscription = new Subscription();

  datosMenu: Menu[] =[
    {nombre: 'login',enlace:'/login',
    icono:'log-in-outline'},
  ];

  constructor(private routeador: Router,
    private firebaseService: AuthFirebaseService,
    private servicioMenu: MenuService) {
    this.router = routeador;
    this.autService = firebaseService;
    this.menuService = servicioMenu;
    onAuthStateChanged(this.autService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.isLoged = true;
      }
    });

    this.subscription = this.menuService.$getTitleMenu.subscribe(data=>{
      console.log(data);
      this.titleMenu =data;
    });

   }

  ngOnInit() {}

  navegar(link: string, titleMenu: string){
    this.titleMenu =titleMenu;
    this.router.navigate([link]);
  }
/** 
  ngOnDestroy(): void {
    if(this.subscription != null || this.subscription!= undefined){
      this.subscription.unsubscribe();
    }
  }
  */

  onMenuOpen(){
    onAuthStateChanged(this.autService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.datosMenu =[
          {nombre: 'Alumnos',enlace:'/alumnos',
    icono:'school-outline'},
      {nombre: 'Receteas',enlace:'/receta',
      icono:'restaurant-outline'},
      {nombre: 'inicio',enlace:'/inicio',
      icono:'navigate-outline'},
      {nombre: 'Tabs',enlace:'/tabs',
      icono:'folder-outline'},
      {nombre: 'Presupuesto',enlace:'/presupuesto',
    icono:'cash-outline'},
          {nombre: 'logout',enlace:'/logout',
          icono:'log-out-outline'}
        ];

      }       
     else{
        this.datosMenu =[
          {nombre: 'login',enlace:'/login',
          icono:'log-in-outline'}
          
        ];
      }
    });
  }  
}
