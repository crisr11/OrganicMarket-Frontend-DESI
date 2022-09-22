import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Acuerdo } from 'src/app/model/acuerdo';
import { AcuerdoService } from 'src/app/service/acuerdo.service';

@Component({
  selector: 'app-acuerdo-listar',
  templateUrl: './acuerdo-listar.component.html',
  styleUrls: ['./acuerdo-listar.component.css']
})
export class AcuerdoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Acuerdo> = new MatTableDataSource()
  displayedColumns: string[] = ["ID","Descuento","Fecha de inicio","Fecha final","Agricultor ID","Mayorista ID"]
  constructor(private acS:AcuerdoService) { }

  ngOnInit(): void {
    this.acS.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

}
