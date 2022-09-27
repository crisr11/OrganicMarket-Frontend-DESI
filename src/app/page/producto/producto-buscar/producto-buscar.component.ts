import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-buscar',
  templateUrl: './producto-buscar.component.html',
  styleUrls: ['./producto-buscar.component.css']
})
export class ProductoBuscarComponent implements OnInit {
  textoBuscar: string = ""

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Producto[] = [];
    this.productoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.Nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.productoService.setLista(array);
    })
  }

}
