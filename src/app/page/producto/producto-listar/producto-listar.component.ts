import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {

  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns:string[]=['ID_Producto','Nombre','Precio','Tipo']
  constructor(private Ps: ProductoService) { }

  ngOnInit(): void {
    this.Ps.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
