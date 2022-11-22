import { Component, OnInit } from '@angular/core';
import { AgricultorService } from 'src/app/service/agricultor.service';
import { MatTableDataSource } from '@angular/material/table'
import { agricultor } from 'src/app/model/agricultor';
import { ResultadoAgricultor } from 'src/app/model/resultadoagricultor';

@Component({
  selector: 'app-agricultor-datos',
  templateUrl: './agricultor-datos.component.html',
  styleUrls: ['./agricultor-datos.component.css']
})
export class AgricultorDatosComponent implements OnInit {
  dataSource: MatTableDataSource<ResultadoAgricultor>= new MatTableDataSource();
  displayedColumns:string[]=["persona","direccion","telefono"];
  constructor(private ps: AgricultorService) { }

  ngOnInit(): void {
  this.ps.listardatos().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
  })
   }
}
