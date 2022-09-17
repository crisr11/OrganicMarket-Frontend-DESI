import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/service/promocion.service';
import { MatTableDataSource } from '@angular/material/table';
import { Promocion } from 'src/app/model/promocion';

@Component({
  selector: 'app-promocion-listar',
  templateUrl: './promocion-listar.component.html',
  styleUrls: ['./promocion-listar.component.css']
})
export class PromocionListarComponent implements OnInit {
  dataSource:MatTableDataSource <Promocion> =new MatTableDataSource();
  displayedColumns:string[]=['id','idAgricultor','idProducto','fechaInicio','fechaFin'];
  constructor(private pS:PromocionService) { }

  ngOnInit(): void {
    this.pS.listar().subscribe(data=>{this.dataSource=new MatTableDataSource(data);})
  }

}
