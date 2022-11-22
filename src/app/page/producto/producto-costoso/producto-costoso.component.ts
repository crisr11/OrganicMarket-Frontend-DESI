import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/producto';
import { ResultadoAgricultor } from 'src/app/model/resultadoagricultor';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-costoso',
  templateUrl: './producto-costoso.component.html',
  styleUrls: ['./producto-costoso.component.css']
})
export class ProductoCostosoComponent implements OnInit {
  lista: ResultadoAgricultor[]=[]
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre', 'precio'];
  constructor(private proService:ProductoService) { }

  ngOnInit(): void {
    this.proService.productocaro().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }

}
