import { TemplateBindingParseResult } from "@angular/compiler";
import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre:string='IronMan';
    edad:number=45;
    concatenar(): string{
        return (this.nombre + ' ' + this.edad);
    }
    get capitalizado():string{
        return this.nombre.toUpperCase();
    }
    cambiarnombre():void{
        this.nombre='spiderman';
    }
    cambiaredad():void{
        this.edad=22;
    }
}