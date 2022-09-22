import { persona } from 'src/app/model/persona';
import { PersonaService } from './../../../service/persona.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-persona-crearpersona',
  templateUrl: './persona-crearpersona.component.html',
  styleUrls: ['./persona-crearpersona.component.css']
})
export class PersonaCrearpersonaComponent implements OnInit {
  persona:persona=new persona();
  mensaje:string ="";
  constructor(private personaService:PersonaService,private router:Router) { }

  ngOnInit(): void {
  }
  aceptar():void{
    if(this.persona.nombre.length>0 && this.persona.dni>0){
      this.personaService.insertar(this.persona).subscribe(data=>{
        this.personaService.listar().subscribe(data=>{
          this.personaService.setLista(data);
        })
      })
      this.router.navigate(['persona']);

    }else{
      this.mensaje="Complete los valores requeridos";
    }
  }

}
