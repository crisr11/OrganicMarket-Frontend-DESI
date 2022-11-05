import { ProductoService } from 'src/app/service/producto.service';
import { AgricultorService } from 'src/app/service/agricultor.service';
import { Producto } from 'src/app/model/producto';
import { agricultor } from './../../../model/agricultor';
import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { Publicacion } from 'src/app/model/publicacion';
//import * as moment from 'moment';


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

  //maxFecha: Date = moment().add(-1, 'days').toDate();

  listaAgricultores: agricultor[]=[];
  listaProductos: Producto[]=[];
  idAgricultorSeleccionado:number=0;
  idProductoSeleccionado:number=0;


  constructor(
    private publicacionservice: PublicacionService,
    private router: Router,
    private route: ActivatedRoute,
    private agricultorService: AgricultorService,
    private productoService:ProductoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.agricultorService.listar().subscribe(data=>{this.listaAgricultores=data});
    this.productoService.listar().subscribe(data=>{this.listaProductos=data});
  }

  aceptar(): void {
    if (this.publicacion.contenido.length > 0 && this.idAgricultorSeleccionado>0 &&
      this.idProductoSeleccionado>0 ) {
        let a=new agricultor();
        let p=new Producto();
        a.idAgricultor=this.idAgricultorSeleccionado;
        p.idProducto=this.idProductoSeleccionado;
        this.publicacion.agricultor=a;
        this.publicacion.producto=p;
    
        if (this.edicion) {
        this.publicacionservice.modificar(this.publicacion).subscribe(() => {
          this.publicacionservice.listar().subscribe(data => {
            this.publicacionservice.setLista(data);
          });
        });
      } else {

        this.publicacionservice.insertar(this.publicacion).subscribe(() => {
          this.publicacionservice.listar().subscribe(data => {
            this.publicacionservice.setLista(data);
          });
        },err=>{
          console.log(err);
        });
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
        console.log(data);
        this.idAgricultorSeleccionado=data.agricultor.idAgricultor;
        this.idProductoSeleccionado=data.producto.idProducto;
      });
    }
  }

}
