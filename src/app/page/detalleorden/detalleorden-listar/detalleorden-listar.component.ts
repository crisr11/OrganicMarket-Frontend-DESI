import { DetalleordenService } from './../../../service/detalleorden.service';
import { detalleorden } from './../../../model/detalleorden';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DetalleordenDialogoComponent } from './detalleorden-dialogo/detalleorden-dialogo.component';

@Component({
  selector: 'app-detalleorden-listar',
  templateUrl: './detalleorden-listar.component.html',
  styleUrls: ['./detalleorden-listar.component.css']
})
export class DetalleordenListarComponent implements OnInit {
  lista: detalleorden[] = [];
  dataSource: MatTableDataSource<detalleorden> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'accion1', 'accion2'];
  private idMayor: number = 0;
  constructor(private ds: DetalleordenService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ds.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    })
    this.ds.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.ds.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });


  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DetalleordenDialogoComponent);
  }


  eliminar(id: number) {
    this.ds.eliminar(id).subscribe(() => {
      this.ds.listar().subscribe(data => {
        this.ds.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }
}


