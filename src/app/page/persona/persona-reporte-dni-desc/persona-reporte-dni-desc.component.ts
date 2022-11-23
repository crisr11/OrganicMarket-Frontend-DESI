import { PersonaService } from 'src/app/service/persona.service';
import { Component, OnInit } from '@angular/core';
import { ReporteP1 } from './../../../model/reporteP1';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-persona-reporte-dni-desc',
  templateUrl: './persona-reporte-dni-desc.component.html',
  styleUrls: ['./persona-reporte-dni-desc.component.css']
})
export class PersonaReporteDniDESCComponent implements OnInit {
  dataSource: MatTableDataSource<ReporteP1> = new MatTableDataSource();
  displayedColumns:string[]=['dni','nombre','correo'];
  opcionSelecionada:string="";
  constructor(private pS:PersonaService) { }

  ngOnInit(): void {
    this.pS.buscarDniDesc().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
