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
    this.ordenservice.buscar(e.target.value).subscribe(data=>{
      this.ordenservice.setLista(data);
    })
  }
}
