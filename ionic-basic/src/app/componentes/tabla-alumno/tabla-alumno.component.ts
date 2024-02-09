import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/interface/alumno';

@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html'
})
export class TablaAlumnoComponent  implements OnInit {

  @Input() alumnosList:Alumno[] =[];
  @Output() eliminar: any = new EventEmitter<Alumno>();
  @Output() editar:  any = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {}

}
