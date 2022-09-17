import { DetalleordenService } from './../../../service/detalleorden.service';
import { detalleorden } from './../../../model/detalleorden';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detalleorden-listar',
  templateUrl: './detalleorden-listar.component.html',
  styleUrls: ['./detalleorden-listar.component.css']
})
export class DetalleordenListarComponent implements OnInit {
  dataSource:MatTableDataSource<detalleorden> = new MatTableDataSource();
  displayedColumns:string[]=["dorden", "producto"]
  constructor(private Ds:DetalleordenService) { }

  ngOnInit(): void {
    this.Ds.listar().subscribe(d => {this.dataSource = new MatTableDataSource(d);
    })  }

}


