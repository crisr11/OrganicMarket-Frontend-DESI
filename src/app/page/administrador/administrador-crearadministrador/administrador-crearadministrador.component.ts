import { PersonaService } from './../../../service/persona.service';
import { persona } from './../../../model/persona';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdministradorService } from './../../../service/administrador.service';
import { administrador } from './../../../model/administrador';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-crearadministrador',
  templateUrl: './administrador-crearadministrador.component.html',
  styleUrls: ['./administrador-crearadministrador.component.css']
})
export class AdministradorCrearadministradorComponent implements OnInit {
  admin:administrador=new administrador();
  mensaje:string="";
  edicion:boolean=false;
  id:number=0;
  listaPersonas:persona[]=[];
  idPersonaSelecionada:number=0;
  mensaje1:String="";
  constructor(private aS:AdministradorService,
    private router:Router,
    private route:ActivatedRoute,
    private personaService: PersonaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
    this.personaService.listar().subscribe(data=>{this.listaPersonas=data});
  }
  aceptar(){
    if(this.idPersonaSelecionada>0){
      let p=new persona();
      p.idPersona=this.idPersonaSelecionada;
      this.admin.persona=p;
      if(this.edicion){
        this.aS.modificar(this.admin).subscribe(()=>{
          this.aS.listar().subscribe(data=>{
            this.aS.setLista(data);
          });
        });
      }else{
        this.aS.insertar(this.admin).subscribe(data=>{
          this.aS.listar().subscribe(data=>{
            this.aS.setLista(data);
          });
        })
        
      }
      this.router.navigate(['administrador']);
    }else{
      this.mensaje1="Complete los valores requeridos";
    }
  }
  init(){
    if(this.edicion){
      this.aS.listarId(this.id).subscribe(data=>{
        this.admin=data;
        console.log(data);
        this.idPersonaSelecionada=data.persona.idPersona;
      })
    }
  }

}
