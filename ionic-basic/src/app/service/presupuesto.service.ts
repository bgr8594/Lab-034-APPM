import { Injectable } from '@angular/core';
import { Gasto } from '../interface/gasto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  gastos: Gasto[]=[];
  
  constructor() { }
  
  public agregarGasto(monto: number, gasto: string){
    this.gastos.push({monto, gasto});
  }

  public mostrarGastos() {
    return this.gastos;
  }
}
