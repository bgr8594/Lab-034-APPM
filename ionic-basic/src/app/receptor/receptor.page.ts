import { Component, OnDestroy, OnInit } from '@angular/core';
import { Personaje } from '../interface/personaje';
import { EnvioReceptorService } from '../service/envio-receptor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.page.html'
})
export class ReceptorPage implements OnInit, OnDestroy {

  user: Personaje = {};
  list: Personaje[]= [];
  personajes: Personaje[]= [];
  subcriptionObj: Subscription = new Subscription;
  subcriptionList: Subscription = new Subscription;

  constructor(private envioReceptorService: EnvioReceptorService) { }
  ngOnDestroy(): void {
    if(this.subcriptionList!=undefined || this.subcriptionList != null){
      this.subcriptionList.unsubscribe();
    }

    if(this.subcriptionObj!=undefined || this.subcriptionObj != null){
      this.subcriptionObj.unsubscribe();
    }
  }

  ngOnInit() {
    this.subcriptionObj =
    this.envioReceptorService.$getObjectSource.subscribe(data=>{
      console.log(data);
      this.user = data;
    });

    this.subcriptionList =
    this.envioReceptorService.$getListSource.subscribe(data=>{
      console.log(data);
      this.list = data;
    });

    this.envioReceptorService.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;

    });
  }

}
