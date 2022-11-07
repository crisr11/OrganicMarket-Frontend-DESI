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
    this.publicacionservice.buscar(e.target.value).subscribe(data=>{
      this.publicacionservice.setLista(data);
    });
  }
}