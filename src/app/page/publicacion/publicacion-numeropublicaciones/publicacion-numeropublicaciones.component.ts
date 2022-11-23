import { PublicacionService } from 'src/app/service/publicacion.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultadoPublicacion } from './../../../model/resultadopublicacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacion-numeropublicaciones',
  templateUrl: './publicacion-numeropublicaciones.component.html',
  styleUrls: ['./publicacion-numeropublicaciones.component.css']
})
export class PublicacionNumeropublicacionesComponent implements OnInit {
  lista: ResultadoPublicacion[] = [];
  dataSource: MatTableDataSource<ResultadoPublicacion> = new MatTableDataSource();
  displayedColumns: string[] = ['agricultor', 'correo','telefono','npublicaciones'];
  constructor( private pService:PublicacionService) { }

  ngOnInit(): void {
    this.pService.buscarpublicacionesporagricultor().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
})
  }

}
