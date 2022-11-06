import { agricultor } from 'src/app/model/agricultor';
import { persona } from 'src/app/model/persona';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AgricultorService } from 'src/app/service/agricultor.service';
import { PersonaService } from 'src/app/service/persona.service';
@Component({
  selector: 'app-agricultor-creaedita',
  templateUrl: './agricultor-creaedita.component.html',
  styleUrls: ['./agricultor-creaedita.component.css']
})
export class AgricultorCreaeditaComponent implements OnInit {
  agricultor: agricultor = new agricultor();
  mensaje: string = "";
  listaPersonas: persona[] = [];
  idPersonaseleccionada: number=0;
  edicion: boolean = false;
  id: number = 0;
  constructor(private agricultorservice: AgricultorService,private router: Router,
    private route: ActivatedRoute, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.personaService.listar().subscribe(data => { this.listaPersonas = data });
  
  }
  aceptar(): void {
    if (this.agricultor.direccionAgricultor.length > 0 && this.idPersonaseleccionada>0) {
        let p = new persona();
        //Despues cambiar por idPersona
        p.idPersona = this.idPersonaseleccionada;
        this.agricultor.persona = p;

      if (this.edicion) {
        this.agricultorservice.modificar(this.agricultor).subscribe(data => {
          this.agricultorservice.listar().subscribe(data => {
            this.agricultorservice.setLista(data);
          })
        })
      }  else {
        this.agricultorservice.insertar(this.agricultor).subscribe(() => {
          this.agricultorservice.listar().subscribe(data => {
            this.agricultorservice.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['agricultor']);

    }
    else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.agricultorservice.listarId(this.id).subscribe(data => {
        this.agricultor = data;
        console.log(data);
        this.idPersonaseleccionada = data.persona.idPersona;
      })
    }
  }
}

