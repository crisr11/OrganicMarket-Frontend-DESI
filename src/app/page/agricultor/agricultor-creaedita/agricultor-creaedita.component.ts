import { agricultor } from 'src/app/model/agricultor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgricultorService } from 'src/app/service/agricultor.service';
@Component({
  selector: 'app-agricultor-creaedita',
  templateUrl: './agricultor-creaedita.component.html',
  styleUrls: ['./agricultor-creaedita.component.css']
})
export class AgricultorCreaeditaComponent implements OnInit {
  agricultor: agricultor = new agricultor();
  mensaje: string = "";
  constructor(private agricultorservice: AgricultorService,private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.agricultor.direccion.length > 0) {

      this.agricultorservice.insertar(this.agricultor).subscribe(data => {
        this.agricultorservice.listar().subscribe(data => {
          this.agricultorservice.setLista(data);
        })
      })
      this.router.navigate(['agricultor']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
}
