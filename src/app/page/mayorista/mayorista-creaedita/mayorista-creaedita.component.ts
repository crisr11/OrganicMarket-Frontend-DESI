import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Mayorista } from 'src/app/model/mayorista';
import { MayoristaService } from 'src/app/service/mayorista.service';

@Component({
  selector: 'app-mayorista-creaedita',
  templateUrl: './mayorista-creaedita.component.html',
  styleUrls: ['./mayorista-creaedita.component.css']
})
export class MayoristaCreaeditaComponent implements OnInit {
  mayorista: Mayorista = new Mayorista();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private mayoristaService: MayoristaService,private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.mayorista.nombre.length > 0) {

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
      })
    }

  }
}
