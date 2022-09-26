import { agricultor } from 'src/app/model/agricultor';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AgricultorService } from 'src/app/service/agricultor.service';
@Component({
  selector: 'app-agricultor-creaedita',
  templateUrl: './agricultor-creaedita.component.html',
  styleUrls: ['./agricultor-creaedita.component.css']
})
export class AgricultorCreaeditaComponent implements OnInit {
  agricultor: agricultor = new agricultor();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private agricultorservice: AgricultorService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.agricultor.direccion.length > 0 ) {
      if (this.edicion) {
        this.agricultorservice.modificar(this.agricultor).subscribe(data => {
          this.agricultorservice.listar().subscribe(data => {
            this.agricultorservice.setLista(data);
          })
        })
      } else {

        this.agricultorservice.insertar(this.agricultor).subscribe(data => {
          this.agricultorservice.listar().subscribe(data => {
            this.agricultorservice.setLista(data);
          })
        })
      }
      this.router.navigate(['agricultor']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.agricultorservice.listarId(this.id).subscribe(data => {
        this.agricultor = data;
      })
    }
  }
}
