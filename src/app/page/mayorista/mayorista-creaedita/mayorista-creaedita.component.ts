import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Mayorista } from 'src/app/model/mayorista';
import { persona } from 'src/app/model/persona';
import { MayoristaService } from 'src/app/service/mayorista.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-mayorista-creaedita',
  templateUrl: './mayorista-creaedita.component.html',
  styleUrls: ['./mayorista-creaedita.component.css']
})
export class MayoristaCreaeditaComponent implements OnInit {
  mayorista: Mayorista = new Mayorista();
  listaPersonas: persona[] = [];
  mensaje: string = "";
  idPersonaseleccionada: number=0;
  edicion: boolean = false;
  id: number = 0;

  constructor(private mayoristaService: MayoristaService,private router: Router,  private route: ActivatedRoute, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.personaService.listar().subscribe(data =>{
      this.listaPersonas=data
    })
  }
  aceptar(): void {
    if (this.mayorista.RUCMayorista.length > 0 && this.mayorista.rubroMayorista.length > 0) {
 
      let p = new persona()
      p.idPersona=this.idPersonaseleccionada
      this.mayorista.persona=p

      if (this.edicion) {
        this.mayoristaService.modificar(this.mayorista).subscribe(data => {
          this.mayoristaService.listar().subscribe(data => {
            this.mayoristaService.setLista(data);
          })
        })
      } else {

        this.mayoristaService.insertar(this.mayorista).subscribe(data => {
          this.mayoristaService.listar().subscribe(data => {
            this.mayoristaService.setLista(data);
          })
        }, err => {
          console.log(err);
        })
      }
      this.router.navigate(['mayoristas']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.mayoristaService.listarId(this.id).subscribe(data => {
        this.mayorista = data;
        console.log(data);
        this.idPersonaseleccionada = data.persona.idPersona;
      })
    }

  }
}
