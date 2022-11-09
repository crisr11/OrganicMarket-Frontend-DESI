import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrdenService } from 'src/app/service/orden.service';
import { Orden } from 'src/app/model/orden';

@Component({
  selector: 'app-orden-creaedita',
  templateUrl: './orden-creaedita.component.html',
  styleUrls: ['./orden-creaedita.component.css']
})
export class OrdenCreaeditaComponent implements OnInit {
  orden: Orden = new Orden();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private ordenservice: OrdenService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.orden.fechaCompra.length > 0 ) {
      if (this.edicion) {
        this.ordenservice.modificar(this.orden).subscribe(data => {
          this.ordenservice.listar().subscribe(data => {
            this.ordenservice.setLista(data);
          })
        })
      } else {

        this.ordenservice.insertar(this.orden).subscribe(data => {
          this.ordenservice.listar().subscribe(data => {
            this.ordenservice.setLista(data);
          })
        })
      }
      this.router.navigate(['ordenes']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.ordenservice.listarId(this.id).subscribe(data => {
        this.orden = data;
      })
    }
  }

}
