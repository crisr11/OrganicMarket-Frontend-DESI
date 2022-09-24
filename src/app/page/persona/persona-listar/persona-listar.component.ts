import { PersonaDialogoComponent } from './persona-dialogo/persona-dialogo.component';
import { PersonaService } from './../../../service/persona.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-persona-listar',
  templateUrl: './persona-listar.component.html',
  styleUrls: ['./persona-listar.component.css']
})
export class PersonaListarComponent implements OnInit {
  dataSource:MatTableDataSource<persona>=new MatTableDataSource();
  displayedColumns:string[]=["id","nombre","dni","telefono","correo","accion1","accion2"]
  private idMayor:number=0;
  constructor(private pS:PersonaService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.pS.listar().subscribe(d=>{
      this.dataSource=new MatTableDataSource(d);
    })
    this.pS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.pS.getConfirmaEliminacion().subscribe(data=>{
      data==true? this.eliminar(this.idMayor):false;
    });
  }
  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(PersonaDialogoComponent);
  }
  eliminar(id:number){
    this.pS.eliminar(id).subscribe(()=>{
      this.pS.listar().subscribe(data=>{
        this.pS.setLista(data);
      })
    })
  }
}
