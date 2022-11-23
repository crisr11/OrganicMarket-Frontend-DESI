import { ReporteP2 } from './../../../model/reporteP2';
import { PersonaService } from 'src/app/service/persona.service';

import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona-reportecompras',
  templateUrl: './persona-reportecompras.component.html',
  styleUrls: ['./persona-reportecompras.component.css']
})
export class PersonaReportecomprasComponent implements OnInit {
  dataSource: MatTableDataSource<ReporteP2> = new MatTableDataSource();
  displayedColumns:string[]=['nombre','direccion','compra'];
  constructor(private pS:PersonaService) { }

  ngOnInit(): void {
    this.pS.buscarComprasAño().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    }

}
