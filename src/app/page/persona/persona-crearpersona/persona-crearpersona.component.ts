import { persona } from 'src/app/model/persona';
import { PersonaService } from './../../../service/persona.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-persona-crearpersona',
  templateUrl: './persona-crearpersona.component.html',
  styleUrls: ['./persona-crearpersona.component.css']
})
export class PersonaCrearpersonaComponent implements OnInit {
  persona:persona=new persona();
  mensaje:string ="";
  edicion:boolean=false;
  id:number=0;
  constructor(private personaService:PersonaService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    })
  }

  aceptar():void{
    if(this.persona.nombrePersona.length>0 && this.persona.dniPersona>0){
      if(this.edicion){
      this.personaService.modificar(this.persona).subscribe(data=>{
        this.personaService.listar().subscribe(data=>{
          this.personaService.setLista(data);
        })
      })
    }else{
      this.personaService.insertar(this.persona).subscribe(data=>{
        this.personaService.listar().subscribe(data=>{
          this.personaService.setLista(data);
        })
      })
    }
    this.router.navigate(['persona']);

    }else{
      this.mensaje="Complete los valores requeridos";
    }
  }
  init(){
    if(this.edicion){
      this.personaService.listarId(this.id).subscribe(data=>{
        this.persona=data;
      })
    }
  }
}
