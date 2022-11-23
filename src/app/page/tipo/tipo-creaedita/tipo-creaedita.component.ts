import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipoService } from 'src/app/service/tipo.service';
import { Tipo } from 'src/app/model/tipo';
@Component({
  selector: 'app-tipo-creaedita',
  templateUrl: './tipo-creaedita.component.html',
  styleUrls: ['./tipo-creaedita.component.css']
})
export class TipoCreaeditaComponent implements OnInit {
  tipo:Tipo=new Tipo();
  mensaje:string ="";
  edicion:boolean=false;
  id:number=0;
  constructor(private tipoService:TipoService,
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
    if(this.tipo.nameTipo.length>0){
      if(this.edicion){
      this.tipoService.modificar(this.tipo).subscribe(data=>{
        this.tipoService.listar().subscribe(data=>{
          this.tipoService.setLista(data);
        })
      })
    }else{
      this.tipoService.insertar(this.tipo).subscribe(data=>{
        this.tipoService.listar().subscribe(data=>{
          this.tipoService.setLista(data);
        })
      })
    }
    this.router.navigate(['tipos']);

    }else{
      this.mensaje="Complete los valores requeridos";
    }
  }
  init(){
    if(this.edicion){
      this.tipoService.listarId(this.id).subscribe(data=>{
        this.tipo=data;
      })
    }
  }
}
