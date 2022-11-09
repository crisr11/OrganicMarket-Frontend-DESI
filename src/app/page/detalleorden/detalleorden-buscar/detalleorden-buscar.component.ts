import { Component, OnInit } from '@angular/core';
import { detalleorden } from 'src/app/model/detalleorden';
import { DetalleordenService } from 'src/app/service/detalleorden.service';

@Component({
  selector: 'app-detalleorden-buscar',
  templateUrl: './detalleorden-buscar.component.html',
  styleUrls: ['./detalleorden-buscar.component.css']
})
export class DetalleordenBuscarComponent implements OnInit {

  textoBuscar: string = ""
  constructor(private detalleordenService: DetalleordenService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: detalleorden[] = [];
    this.detalleordenService.listar().subscribe(d => {
      d.forEach((element, index) => {
        if (element.producto.nameProducto.includes(e.target.value)) {
          array.push(d[index]);
        }
      });
      this.detalleordenService.setLista(array);
    })
  }

}