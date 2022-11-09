import { Component, OnInit } from '@angular/core';
import { AgricultorService } from 'src/app/service/agricultor.service';
import { MatTableDataSource } from '@angular/material/table'
import { agricultor } from 'src/app/model/agricultor';
import { MatDialog } from '@angular/material/dialog';
import { AgricultorDialogoComponent } from './agricultor-dialogo/agricultor-dialogo.component';
@Component({
  selector: 'app-agricultor-listar',
  templateUrl: './agricultor-listar.component.html',
  styleUrls: ['./agricultor-listar.component.css']
})
export class AgricultorListarComponent implements OnInit {
  dataSource: MatTableDataSource<agricultor>= new MatTableDataSource();
  displayedColumns:string[]=["idAgricultor","direccionAgricultor","persona", 'ACCIÓN 1', 'ACCIÓN 2'];
  private idMayor = 0;
  constructor(private ps: AgricultorService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data=>
      {
        this.dataSource=new MatTableDataSource(data);
      });
      this.ps.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(AgricultorDialogoComponent);
  }

  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });

  }
}
