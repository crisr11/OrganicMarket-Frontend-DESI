import { Component, OnInit } from '@angular/core';
import { detalleorden } from 'src/app/model/detalleorden';
import { DetalleordenService } from 'src/app/service/detalleorden.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle-creaedita',
  templateUrl: './detalle-creaedita.component.html',
  styleUrls: ['./detalle-creaedita.component.css']
})
export class DetalleCreaeditaComponent implements OnInit {
  detalleorden: detalleorden = new detalleorden();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private detalleordenService: DetalleordenService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((d: Params) => {
      this.id = d['id'];
      this.edicion = d['id'] != null;
      this.init();
    })
  }

  aceptar(): void {
    if (this.detalleorden.nombre.length > 0) {
      if (this.edicion) {
        this.detalleordenService.modificar(this.detalleorden).subscribe(d => {
          this.detalleordenService.listar().subscribe(d => {
            this.detalleordenService.setLista(d);
          })
        })
      } else {
        this.detalleordenService.insertar(this.detalleorden).subscribe(d => {
          this.detalleordenService.listar().subscribe(d => {
            this.detalleordenService.setLista(d);
          })
        })
      }
      this.router.navigate(['detalleorden']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.detalleordenService.listarId(this.id).subscribe(d => {
        this.detalleorden = d;
      })
    }

  }
}