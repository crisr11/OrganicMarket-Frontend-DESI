import { persona } from './../../../model/persona';
import { PersonaService } from './../../../service/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona-buscar',
  templateUrl: './persona-buscar.component.html',
  styleUrls: ['./persona-buscar.component.css']
})
export class PersonaBuscarComponent implements OnInit {
  textoBuscar:string="";
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    let array:persona[]=[];
    this.personaService.listar().subscribe(data=>{
      data.forEach((element,index)=>{
        if(element.nombrePersona.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.personaService.setLista(array);
    })
  }
}


