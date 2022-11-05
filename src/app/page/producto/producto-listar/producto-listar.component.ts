import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductoDialogoComponent } from './producto-dialogo/producto-dialogo.component';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {

  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns:string[]=['id','Nombre','Precio','Tipo ID','accion1','accion2'];
  private idMayor: number = 0;
  constructor(private Ps: ProductoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Ps.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
    this.Ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Ps.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
    });
    }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ProductoDialogoComponent);
  }


  eliminar(id: number) {
    this.Ps.eliminar(id).subscribe(() => {
      this.Ps.listar().subscribe(data => {
        this.Ps.setLista(data);
      });
    });

  }

}
