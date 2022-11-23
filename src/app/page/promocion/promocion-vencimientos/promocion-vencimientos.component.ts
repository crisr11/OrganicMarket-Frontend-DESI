import { PromocionService } from 'src/app/service/promocion.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Promocion } from 'src/app/model/promocion';

@Component({
  selector: 'app-promocion-vencimientos',
  templateUrl: './promocion-vencimientos.component.html',
  styleUrls: ['./promocion-vencimientos.component.css']
})
export class PromocionVencimientosComponent implements OnInit {
  dataSource:MatTableDataSource<Promocion>=new MatTableDataSource();
  displayedColumns: string[] = ['Id Promocion', 'Agricultor', 'Producto','Descuento','Fecha Inicio','Fecha Fin'];
  constructor(private pService:PromocionService) { }

  ngOnInit(): void {
    this.pService.reportedevencimientos().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }

}
