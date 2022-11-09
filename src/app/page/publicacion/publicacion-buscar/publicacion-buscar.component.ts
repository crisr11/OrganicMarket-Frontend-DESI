import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/model/publicacion';
import { PublicacionService } from 'src/app/service/publicacion.service';
@Component({
  selector: 'app-publicacion-buscar',
  templateUrl: './publicacion-buscar.component.html',
  styleUrls: ['./publicacion-buscar.component.css']
})
export class PublicacionBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private publicacionservice: PublicacionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Publicacion[] = [];
    this.publicacionservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.contenido.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.publicacionservice.setLista(array);
    })
  }
}