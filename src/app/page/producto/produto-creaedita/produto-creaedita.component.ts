import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { Tipo } from 'src/app/model/tipo';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-produto-creaedita',
  templateUrl: './produto-creaedita.component.html',
  styleUrls: ['./produto-creaedita.component.css']
})
export class ProdutoCreaeditaComponent implements OnInit {
  producto: Producto = new Producto();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  idTipoSeleccionado: number = 0;
  nameTipoSeleccionado: string = ""

  constructor(private productoService: ProductoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) =>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.producto.nameProducto.length > 0) {
      let tipo = new Tipo()
      tipo.idTipo= this.idTipoSeleccionado
      this.producto.tipo=tipo

      this.producto.tipo = tipo
      if (this.edicion) {
        this.productoService.modificar(this.producto).subscribe(data => {
          this.productoService.listar().subscribe(data => {
            this.productoService.setLista(data);
          })
        })
      }else{
      this.productoService.insertar(this.producto).subscribe(data => {
        this.productoService.listar().subscribe(data => {
          this.productoService.setLista(data);
        })
      })
      }
      this.router.navigate(['productos']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.productoService.listarId(this.id).subscribe(data => {
        this.producto = data;
        this.idTipoSeleccionado=data.tipo.idTipo
      })
    }
  }

}
