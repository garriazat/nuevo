import { Component, OnInit } from '@angular/core';
import { TablainformacionComponent } from '../tablainformacion/tablainformacion.component';

@Component({
  selector: 'app-modaleliminar',
  templateUrl: './modaleliminar.component.html',
  styleUrls: ['./modaleliminar.component.css']
})
export class ModaleliminarComponent implements OnInit {
  ngOnInit(): void {
    
  }
constructor(private tabla: TablainformacionComponent) {

}

eliminar(){

  this.tabla.eliminar();
}
}
