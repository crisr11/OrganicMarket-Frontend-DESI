import { Component, OnInit } from '@angular/core';
import { TipoService } from 'src/app/service/tipo.service';
import { MatTableDataSource } from '@angular/material/table'
import { Tipo } from 'src/app/model/tipo';
import { MatDialog } from '@angular/material/dialog';
import { TipoDialogoComponent } from './tipo-dialogo/tipo-dialogo.component';

@Component({
  selector: 'app-tipo-listar',
  templateUrl: './tipo-listar.component.html',
  styleUrls: ['./tipo-listar.component.css']
})
export class TipoListarComponent implements OnInit {
  lista: Tipo[]=[];
  dataSource:MatTableDataSource<Tipo>=new MatTableDataSource();
  displayedColumns:string[]=["ID_Tipo","Nombre","accion1","accion2"]
  private idMayor:number=0;
  constructor(private tS:TipoService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.tS.listar().subscribe(d=>{
      this.lista=d;
      this.dataSource=new MatTableDataSource(d);
    })
    this.tS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.tS.getConfirmaEliminacion().subscribe(data=>{
      data==true? this.eliminar(this.idMayor):false;
    });

  }
  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(TipoDialogoComponent);
  }
  eliminar(id:number){
    this.tS.eliminar(id).subscribe(()=>{
      this.tS.listar().subscribe(data=>{
        this.tS.setLista(data);
      })
    })
  }
}
