import { Component, OnInit } from '@angular/core';
import { AgricultorService } from 'src/app/service/agricultor.service';
import { MatTableDataSource } from '@angular/material/table'
import { agricultor } from 'src/app/model/agricultor';
@Component({
  selector: 'app-agricultor-listar',
  templateUrl: './agricultor-listar.component.html',
  styleUrls: ['./agricultor-listar.component.css']
})
export class AgricultorListarComponent implements OnInit {
  dataSource: MatTableDataSource<agricultor>= new MatTableDataSource();
  displayedColumns:string[]=["id","direccion","persona_id_persona"];
  constructor(private ps: AgricultorService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data=>
      {
        this.dataSource=new MatTableDataSource(data);
      });
  }
}
