import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoService } from 'src/app/service/tipo.service';
import { Tipo } from 'src/app/model/tipo';
@Component({
  selector: 'app-tipo-creaedita',
  templateUrl: './tipo-creaedita.component.html',
  styleUrls: ['./tipo-creaedita.component.css']
})
export class TipoCreaeditaComponent implements OnInit {
  tipo: Tipo = new Tipo();
  mensaje: string = "";
  constructor(private tiposervice: TipoService,private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.tipo.Nombre.length > 0) {

      this.tiposervice.insertar(this.tipo).subscribe(data => {
        this.tiposervice.listar().subscribe(data => {
          this.tiposervice.setLista(data);
        })
      })
      this.router.navigate(['tipos']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
}
