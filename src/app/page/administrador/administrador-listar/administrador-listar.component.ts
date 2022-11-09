import { AdministradorDialogoComponent } from './administrador-dialogo/administrador-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { AdministradorService } from './../../../service/administrador.service';
import { administrador } from './../../../model/administrador';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-listar',
  templateUrl: './administrador-listar.component.html',
  styleUrls: ['./administrador-listar.component.css']
})
export class AdministradorListarComponent implements OnInit {
  dataSource:MatTableDataSource<administrador>=new MatTableDataSource();
  displayedColumns:string[]=["id","idpersona","nombrePersona","accion1","accion2"];
  lista:administrador[]=[];
  private idMayor:number=0;
  constructor(private aS:AdministradorService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.aS.listar().subscribe(d=>{
      this.lista=d;
      this.dataSource=new MatTableDataSource(d);
    })
    this.aS.getLista().subscribe(d=>{
      this.dataSource=new MatTableDataSource(d);
      console.log(d);
    });
    this.aS.getConfirmaEliminacion().subscribe(d=>{
      d==true? this.eliminar(this.idMayor):false;
    }) 
  }
  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(AdministradorDialogoComponent);
  }
  eliminar(id:number){
    this.aS.eliminar(id).subscribe(()=>{
      this.aS.listar().subscribe(d=>{
        this.aS.setLista(d);
      });
    });
  }

}
