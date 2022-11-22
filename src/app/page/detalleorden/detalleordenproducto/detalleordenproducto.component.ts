import { DetalleordenService } from 'src/app/service/detalleorden.service';
import { detalleorden } from 'src/app/model/detalleorden';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalleordenproducto',
  templateUrl: './detalleordenproducto.component.html',
  styleUrls: ['./detalleordenproducto.component.css']
})
export class DetalleordenproductoComponent implements OnInit {

  dataSource: MatTableDataSource<detalleorden> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'producto'];

  constructor(private dO: DetalleordenService) { }

  ngOnInit(): void {

    this.dO.buscarpapa().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
