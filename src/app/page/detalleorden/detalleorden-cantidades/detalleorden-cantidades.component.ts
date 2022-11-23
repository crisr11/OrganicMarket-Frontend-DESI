import { HttpClient } from '@angular/common/http';
import { DetalleordenService } from 'src/app/service/detalleorden.service';
import { ResultadoDetalleOrden } from './../../../model/resultadodetalleorden';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalleorden-cantidades',
  templateUrl: './detalleorden-cantidades.component.html',
  styleUrls: ['./detalleorden-cantidades.component.css']
})
export class DetalleordenCantidadesComponent implements OnInit {
  lista: ResultadoDetalleOrden[] = []
  dataSource: MatTableDataSource<ResultadoDetalleOrden> = new MatTableDataSource();
  displayedColumns: string[] = ['producto', 'cantidad'];

  constructor(private dO: DetalleordenService) { }

  ngOnInit(): void {
    this.dO.buscarcantidad().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
