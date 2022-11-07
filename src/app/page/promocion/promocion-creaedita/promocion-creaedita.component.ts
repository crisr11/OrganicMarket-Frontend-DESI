import { ProductoService } from 'src/app/service/producto.service';
import { AgricultorService } from 'src/app/service/agricultor.service';
import { Producto } from 'src/app/model/producto';
import { agricultor } from './../../../model/agricultor';
import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PromocionService } from 'src/app/service/promocion.service';
import { Promocion } from 'src/app/model/promocion';
import * as moment from 'moment';
//ejecutar el siguiente comando en el terminal "npm i moment"

@Component({
  selector: 'app-promocion-creaedita',
  templateUrl: './promocion-creaedita.component.html',
  styleUrls: ['./promocion-creaedita.component.css']
})
export class PromocionCreaeditaComponent implements OnInit {
  promocion: Promocion = new Promocion();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  fechaSeleccionada1: Date = moment().add(+1, 'days').toDate();
  fechaSeleccionada2: Date = moment().add(+2, 'days').toDate();

  fechaDefault: Date = moment().add(0, 'days').toDate();
  listaAgricultores: agricultor[]=[];
  listaProductos: Producto[]=[];
  idAgricultorSeleccionado:number=0;
  idProductoSeleccionado:number=0;


  constructor(
    private promocionservice: PromocionService,
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
    if (this.promocion.descuento > 0 && this.idAgricultorSeleccionado>0 &&
      this.idProductoSeleccionado>0 ) {
        let a=new agricultor();
        let p=new Producto();
        a.idAgricultor=this.idAgricultorSeleccionado;
        p.idProducto=this.idProductoSeleccionado;
        this.promocion.agricultor=a;
        this.promocion.producto=p;
        this.promocion.fechaInicio = moment(this.fechaSeleccionada1).format('YYYY-MM-DDTHH:mm:ss');
        this.promocion.fechaFin = moment(this.fechaSeleccionada2).format('YYYY-MM-DDTHH:mm:ss');

        if (this.edicion) {
        this.promocionservice.modificar(this.promocion).subscribe(() => {
          this.promocionservice.listar().subscribe(data => {
            this.promocionservice.setLista(data);
          });
        });
      } else {

        this.promocionservice.insertar(this.promocion).subscribe(() => {
          this.promocionservice.listar().subscribe(data => {
            this.promocionservice.setLista(data);
          });
        },err=>{
          console.log(err);
        });
      }
      this.router.navigate(['promociones']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.promocionservice.listarId(this.id).subscribe(data => {
        this.promocion = data;
        console.log(data);
        this.idAgricultorSeleccionado=data.agricultor.idAgricultor;
        this.idProductoSeleccionado=data.producto.idProducto;
      });
    }
  }

}
