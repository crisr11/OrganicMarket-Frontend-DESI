import { Component, OnInit } from '@angular/core';
import { Mayorista } from 'src/app/model/mayorista';
import { MatTableDataSource } from '@angular/material/table'
import { MayoristaService } from 'src/app/service/mayorista.service';

@Component({
  selector: 'app-mayorista-listar',
  templateUrl: './mayorista-listar.component.html',
  styleUrls: ['./mayorista-listar.component.css']
})
export class MayoristaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Mayorista> = new MatTableDataSource()
  displayedColumns: string[] = ["ID","DNI","Telefono","Nombre","Correo","RUC"]
  constructor(private ms:MayoristaService) { }

  ngOnInit(): void {
    this.ms.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

}
