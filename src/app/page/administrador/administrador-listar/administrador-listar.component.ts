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
  displayedColumns:string[]=["id_administrador","persona_id_persona"]
  constructor(private As:AdministradorService) { }

  ngOnInit(): void {

this.As.listar().subscribe(d=>{this.dataSource=new MatTableDataSource(d);})  }

}
