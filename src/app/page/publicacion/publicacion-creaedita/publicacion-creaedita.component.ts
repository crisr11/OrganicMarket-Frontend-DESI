import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { Publicacion } from 'src/app/model/publicacion';

@Component({
  selector: 'app-publicacion-creaedita',
  templateUrl: './publicacion-creaedita.component.html',
  styleUrls: ['./publicacion-creaedita.component.css']
})
export class PublicacionCreaeditaComponent implements OnInit {
  publicacion: Publicacion = new Publicacion();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private publicacionservice: PublicacionService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.publicacion.contenido.length > 0 ) {
      if (this.edicion) {
        this.publicacionservice.modificar(this.publicacion).subscribe(data => {
          this.publicacionservice.listar().subscribe(data => {
            this.publicacionservice.setLista(data);
          })
        })
      } else {

        this.publicacionservice.insertar(this.publicacion).subscribe(data => {
          this.publicacionservice.listar().subscribe(data => {
            this.publicacionservice.setLista(data);
          })
        })
      }
      this.router.navigate(['publicaciones']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.publicacionservice.listarId(this.id).subscribe(data => {
        this.publicacion = data;
      })
    }
  }

}
