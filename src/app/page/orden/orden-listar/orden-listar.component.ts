import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { orden } from 'src/app/model/orden';
import { OrdenService } from 'src/app/service/orden.service';

@Component({
  selector: 'app-orden-listar',
  templateUrl: './orden-listar.component.html',
  styleUrls: ['./orden-listar.component.css']
})
export class OrdenListarComponent implements OnInit {
  dataSource: MatTableDataSource<orden> = new MatTableDataSource();
  displayedColumns:string[]=['id_orden','fechacompra','fechaenvio','fechaentrega,cantidad','agricultor_id_agricultor','mayorista_id_mayorista']
  constructor(private Os: OrdenService) { }
  ngOnInit(): void {
    this.Os.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })  }
   
}
