import { AgricultorService } from 'src/app/service/agricultor.service';
import { agricultor } from 'src/app/model/agricultor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agricultor-buscar',
  templateUrl: './agricultor-buscar.component.html',
  styleUrls: ['./agricultor-buscar.component.css']
})
export class AgricultorBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private agricultorservice:AgricultorService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: agricultor[] = [];
    this.agricultorservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.direccionAgricultor.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.agricultorservice.setLista(array);
    })
  }
}
