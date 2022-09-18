import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { MatTableDataSource } from '@angular/material/table';
import { Publicacion } from 'src/app/model/publicacion';


@Component({
  selector: 'app-publicacion-listar',
  templateUrl: './publicacion-listar.component.html',
  styleUrls: ['./publicacion-listar.component.css']
})
export class PublicacionListarComponent implements OnInit {
  dataSource:MatTableDataSource <Publicacion> =new MatTableDataSource();
  displayedColumns:string[]=['ID PUBLICACION','CONTENIDO','AGRICULTOR ID','PRODUCTO ID'];
  constructor(private pU:PublicacionService) { }

  ngOnInit(): void {
    this.pU.listar().subscribe(data=>{this.dataSource=new MatTableDataSource(data);})
  }

}
