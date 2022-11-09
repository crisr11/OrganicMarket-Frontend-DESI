import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/model/orden';
import { OrdenService } from 'src/app/service/orden.service';
import { MatDialog } from '@angular/material/dialog';
import { OrdenDialogoComponent } from './orden-dialogo/orden-dialogo.component';

@Component({
  selector: 'app-orden-listar',
  templateUrl: './orden-listar.component.html',
  styleUrls: ['./orden-listar.component.css']
})
export class OrdenListarComponent implements OnInit {
  dataSource: MatTableDataSource<Orden> = new MatTableDataSource();
  displayedColumns:string[]=["idOrden","fechaCompra","fechaEnvio","fechaEntrega","cantidad","agricultor","mayorista","Accion1","Accion2"]
  private idMayor = 0;
  constructor(private Os: OrdenService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.Os.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.Os.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Os.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(OrdenDialogoComponent);
  }

  eliminar(id: number) {
    this.Os.eliminar(id).subscribe(() => {
      this.Os.listar().subscribe(data => {
        this.Os.setLista(data);
      });
    });

  }

}
