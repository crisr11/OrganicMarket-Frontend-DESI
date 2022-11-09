import { administrador } from './../../../model/administrador';
import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-administrador-buscar',
  templateUrl: './administrador-buscar.component.html',
  styleUrls: ['./administrador-buscar.component.css']
})
export class AdministradorBuscarComponent implements OnInit {
  textoBuscar:string="";
  constructor(private adminS:AdministradorService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    let array:administrador[]=[];
    this.adminS.listar().subscribe(data=>{
      data.forEach((element,index)=>{
        if(element.persona.nombrePersona.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.adminS.setLista(array);
    })
  }

}
