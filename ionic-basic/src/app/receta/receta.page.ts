import { Component, OnInit } from '@angular/core';
import { Receta } from '../interface/receta';
import { RecetaService } from '../service/receta.service';
import { MenuService } from '../service/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  public recetas: Receta[] = [];
  public recetaService: RecetaService

  constructor(recetaService: RecetaService,
    private menuService: MenuService,
    private router: Router
    ) { 
    this.recetaService = recetaService;
  }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

  irDetalleReceta(id: number){
    this.menuService.setTitle("detalle-receta");
    this.router.navigate(['/detalle-receta'], 
    { queryParams: { id: id } });
    
  }

}
