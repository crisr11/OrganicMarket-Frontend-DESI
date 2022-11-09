import { Component, OnInit } from '@angular/core';
import { detalleorden } from 'src/app/model/detalleorden';
import { DetalleordenService } from 'src/app/service/detalleorden.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';

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

  listaProductos: Producto[] = [];
  idProductoSeleccionado: number = 0;

  constructor(private detalleordenService: DetalleordenService,
    private router: Router,
    private route: ActivatedRoute,
    private productoService: ProductoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((d: Params) => {
      this.id = d['id'];
      this.edicion = d['id'] != null;
      this.init();
    });
    this.productoService.listar().subscribe(data => { this.listaProductos = data });
  }

  aceptar(): void {
    if (this.idProductoSeleccionado > 0) {
      let p = new Producto();
      p.idProducto = this.idProductoSeleccionado;
      this.detalleorden.producto = p;

      if (this.edicion) {
        this.detalleordenService.modificar(this.detalleorden).subscribe(() => {
          this.detalleordenService.listar().subscribe(d => {
            this.detalleordenService.setLista(d);
          });
        });
      } else {
        this.detalleordenService.insertar(this.detalleorden).subscribe(() => {
          this.detalleordenService.listar().subscribe(d => {
            this.detalleordenService.setLista(d);
          });
        }, err => {
          console.log(err);
        });
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
        console.log(d);
        this.idProductoSeleccionado = d.producto.idProducto;
      })
    }

  }
}