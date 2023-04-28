import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand.model';
import { Product } from 'src/app/models/product.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-tablainformacion',
  templateUrl: './tablainformacion.component.html',
  styleUrls: ['./tablainformacion.component.css']
})

export class TablainformacionComponent implements OnInit {
  productos: Product[] = [];
  marcas: Brand[] = [];
  array: any[] = [];
  id : any;

  constructor(private productsService: ProductosService, 
              private brandService: MarcasService) {}

  ngOnInit(): void {
    this.tabla();
    
    this.productsService.getAllProducts().subscribe({
      next: (productos) => {
        console.log(productos);
      },

      error: (response) => {
        console.log(response);
      }
    });

    this.brandService.obtenerListaMarcas().subscribe({
      next: (marcas) => {
        console.log(marcas);
      },

      error: (response) => {
        console.log(response);
      }
    });
  }

  tabla() {
    this.array = [
      {
        id: 1,
        Nombre: "Licuadora",
        cantidad: 3,
      },
      {
        id: 2,
        Nombre: "Tenis",
        cantidad: 4,
      },
      {
        id: 3,
        Nombre: "Cargador",
        cantidad: 5,
      },
      {
        id: 5,
        Nombre: "Clash",
        cantidad: 3,
      },
      {
        id: 6,
        Nombre: "Carros",
        cantidad: 3,
      },
      {
        id: 777,
        Nombre: "Andres",
        cantidad: 10,
      },
      {
        id: 10 ,
        Nombre: "Teclado",
        cantidad: 15,
      },
      {
        id: 11 ,
        Nombre: "Agua",
        cantidad: 15,
      },

    ]
  }

eliminar(){
  console.log("Hola")
  let indice=-1;
  for (let index=0;index < this.array.length;index++){
    if(this.array[index].id === this.id){
      indice=index
    }
  }

  if(indice != -1){
    this.array.splice(indice,indice);
    console.log("indice",indice)
    console.log("Eliminado", this.id)
  }else{
    console.log("No se encontro ", this.id)
  }
  

}

obtenerid(id:any){
console.log(id)
this.id = id;

}

cerrar_sesion(){;







}


}
