import { Component, OnInit } from '@angular/core';
import { TipoService } from 'src/app/service/tipo.service';
import { MatTableDataSource } from '@angular/material/table'
import { Tipo } from 'src/app/model/tipo';

@Component({
  selector: 'app-tipo-listar',
  templateUrl: './tipo-listar.component.html',
  styleUrls: ['./tipo-listar.component.css']
})
export class TipoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Tipo> = new MatTableDataSource();
  displayedColumns:string[]=['ID_Tipo','Nombre'];
  constructor(private ts:TipoService) { }

  ngOnInit(): void {
    this.ts.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
