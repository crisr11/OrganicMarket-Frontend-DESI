import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/model/orden';
import { OrdenService } from 'src/app/service/orden.service';


@Component({
  selector: 'app-orden-buscar',
  templateUrl: './orden-buscar.component.html',
  styleUrls: ['./orden-buscar.component.css']
})
export class OrdenBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private ordenservice: OrdenService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Orden[] = [];
    this.ordenservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.fechaCompra.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.ordenservice.setLista(array);
    })
  }
}
