import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/service/promocion.service';
import { MatTableDataSource } from '@angular/material/table';
import { Promocion } from 'src/app/model/promocion';
import { MatDialog } from '@angular/material/dialog';
import { PromocionDialogoComponent } from './promocion-dialogo/promocion-dialogo.component';
@Component({
  selector: 'app-promocion-listar',
  templateUrl: './promocion-listar.component.html',
  styleUrls: ['./promocion-listar.component.css']
})
export class PromocionListarComponent implements OnInit {
  lista: Promocion[] = [];
  dataSource: MatTableDataSource<Promocion> = new MatTableDataSource();
  displayedColumns: string[] = ['Id Promocion', 'Agricultor', 'Producto','Descuento','Fecha Inicio','Fecha Fin', 'Editar', 'Eliminar'];
  private idMayor: number = 0;
  constructor(private pU: PromocionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pU.listar().subscribe(data => {
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
    })
    this.pU.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.pU.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PromocionDialogoComponent);
  }

  eliminar(id: number) {
    this.pU.eliminar(id).subscribe(() => {
      this.pU.listar().subscribe(data => {
        this.pU.setLista(data);
      });
    });
  }
}
