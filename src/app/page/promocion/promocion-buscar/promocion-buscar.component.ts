import { Component, OnInit } from '@angular/core';
import { Promocion } from 'src/app/model/promocion';
import { PromocionService } from 'src/app/service/promocion.service';
@Component({
  selector: 'app-promocion-buscar',
  templateUrl: './promocion-buscar.component.html',
  styleUrls: ['./promocion-buscar.component.css']
})
export class PromocionBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private promocionservice: PromocionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    this.promocionservice.buscar(e.target.value).subscribe(data=>{
      this.promocionservice.setLista(data);
    });
  }
}