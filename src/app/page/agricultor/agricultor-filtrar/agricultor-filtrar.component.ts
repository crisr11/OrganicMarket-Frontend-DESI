import { Component, OnInit } from '@angular/core';
import { AgricultorService } from 'src/app/service/agricultor.service';
import { MatTableDataSource } from '@angular/material/table'
import { agricultor } from 'src/app/model/agricultor';


@Component({
  selector: 'app-agricultor-filtrar',
  templateUrl: './agricultor-filtrar.component.html',
  styleUrls: ['./agricultor-filtrar.component.css']
})
export class AgricultorFiltrarComponent implements OnInit {
  dataSource: MatTableDataSource<agricultor>= new MatTableDataSource();
  displayedColumns:string[]=["idAgricultor","direccionAgricultor","persona"];
  constructor(private ps: AgricultorService) { }

  ngOnInit(): void {

    this.ps.filtrardistrito().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

  }

}
