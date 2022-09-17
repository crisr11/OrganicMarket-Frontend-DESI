import { PersonaService } from './../../../service/persona.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';

@Component({
  selector: 'app-persona-listar',
  templateUrl: './persona-listar.component.html',
  styleUrls: ['./persona-listar.component.css']
})
export class PersonaListarComponent implements OnInit {
  dataSource:MatTableDataSource<persona>=new MatTableDataSource();
  displayedColumns:string[]=["id_persona","nombre","dni","telefono","correo"]
  constructor(private pS:PersonaService) { }

  ngOnInit(): void {
    this.pS.listar().subscribe(d=>{
      this.dataSource=new MatTableDataSource(d);
    })
  }

}
