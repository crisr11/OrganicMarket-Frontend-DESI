import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ResultadoAgricultor } from 'src/app/model/resultadoagricultor';
import { PromocionService } from 'src/app/service/promocion.service';

@Component({
  selector: 'app-promocion-navidad',
  templateUrl: './promocion-navidad.component.html',
  styleUrls: ['./promocion-navidad.component.css']
})
export class PromocionNavidadComponent implements OnInit {
  dataSource: MatTableDataSource<ResultadoAgricultor> = new MatTableDataSource();
  displayedColumns: string[] = ['producto', 'fechaInicio','fechaFin'];
  constructor(private promService:PromocionService) { }

  ngOnInit(): void {
    this.promService.promonavidad().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
