import { Component, OnInit } from '@angular/core';
import { Receta } from '../interface/receta';
import { RecetaService } from '../service/receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  public recetas: Receta[] = [];
  public recetaService: RecetaService

  constructor(recetaService: RecetaService) { 
    this.recetaService = recetaService;
  }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

}
