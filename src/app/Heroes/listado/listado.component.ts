import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes:string[]=['Ironman','SpiderMan','Hulk','Thor'];
  borrado:string='';
  borrarheroe():void{
    console.log('borrando...'),
    this.borrado=this.heroes.shift()||''
    console.log(this.borrado)
    }

}
