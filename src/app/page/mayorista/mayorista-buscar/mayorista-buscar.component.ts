import { Component, OnInit } from '@angular/core';
import { Mayorista } from 'src/app/model/mayorista';
import { MayoristaService } from 'src/app/service/mayorista.service';

@Component({
  selector: 'app-mayorista-buscar',
  templateUrl: './mayorista-buscar.component.html',
  styleUrls: ['./mayorista-buscar.component.css']
})
export class MayoristaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private mayoristaService: MayoristaService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Mayorista[] = [];
    this.mayoristaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        //e.target.value = e.target.value.toLocaleUpperCase()
        if (element.nameMayorista.toLocaleUpperCase().includes(e.target.value.toLocaleUpperCase())) {
          array.push(data[index]);
        }
      });
      this.mayoristaService.setLista(array);
    })
  }

}