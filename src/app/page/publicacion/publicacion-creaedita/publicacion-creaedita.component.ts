import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private publicacionservice: PublicacionService,private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.publicacion.contenido.length > 0) {

      this.publicacionservice.insertar(this.publicacion).subscribe(data => {
        this.publicacionservice.listar().subscribe(data => {
          this.publicacionservice.setLista(data);
        })
      })
      this.router.navigate(['publicaciones']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
}
