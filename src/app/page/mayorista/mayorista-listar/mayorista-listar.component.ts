import { Component, OnInit } from '@angular/core';
import { Mayorista } from 'src/app/model/mayorista';
import { MatTableDataSource } from '@angular/material/table'
import { MayoristaService } from 'src/app/service/mayorista.service';
import { MayoristaDialogoComponent } from './mayorista-dialogo/mayorista-dialogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mayorista-listar',
  templateUrl: './mayorista-listar.component.html',
  styleUrls: ['./mayorista-listar.component.css']
})
export class MayoristaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Mayorista> = new MatTableDataSource()
  displayedColumns: string[] = ["idMayorista","Rubro","RUC","Persona","Accion1","Accion2"]
  private idMayor: number = 0;
  constructor(private ms:MayoristaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ms.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
    this.ms.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
    this.ms.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
    
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(MayoristaDialogoComponent);
  }


  eliminar(id: number) {
    this.ms.eliminar(id).subscribe(() => {
      this.ms.listar().subscribe(data => {
        this.ms.setLista(data);
      });
    });
}}
