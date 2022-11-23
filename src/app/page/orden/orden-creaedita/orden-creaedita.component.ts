import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrdenService } from 'src/app/service/orden.service';
import { Orden } from 'src/app/model/orden';
import { agricultor } from 'src/app/model/agricultor';
import { Mayorista } from 'src/app/model/mayorista';
import { AgricultorService } from 'src/app/service/agricultor.service';
import { MayoristaService } from 'src/app/service/mayorista.service';
import * as moment from 'moment';

@Component({
  selector: 'app-orden-creaedita',
  templateUrl: './orden-creaedita.component.html',
  styleUrls: ['./orden-creaedita.component.css']
})
export class OrdenCreaeditaComponent implements OnInit {
  orden: Orden = new Orden();
  id: number = 0;
  mensaje: string = "";
  edicion: boolean = false;
  listaAgricultores:agricultor[]=[];
  listaMayoristas:Mayorista[]=[];
  idAgricultorSeleccionado: number=0;
  idMayoristaSeleccionado:number=0;
  fechaSeleccionada1: Date = moment().add(+1, 'days').toDate();
  fechaSeleccionada2: Date = moment().add(+2, 'days').toDate();
  fechaSeleccionada3: Date = moment().add(+3, 'days').toDate();
  fechaDefault: Date = moment().add(0, 'days').toDate();

  constructor(private ordenservice: OrdenService, 
    private router: Router,
    private route: ActivatedRoute,
    private agricultorService:AgricultorService,
    private mayoristaService:MayoristaService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.agricultorService.listar().subscribe(data=>{this.listaAgricultores=data});
    this.mayoristaService.listar().subscribe(data=>{this.listaMayoristas=data});
  }
  aceptar(): void {
    if (2 > 1) {
      let a=new agricultor();
      let m=new Mayorista();

      a.idAgricultor=this.idAgricultorSeleccionado;
      m.idMayorista=this.idMayoristaSeleccionado;
        this.orden.agricultor=a;
        this.orden.mayorista=m;
        this.orden.fechaCompra = moment(this.fechaSeleccionada1).format('YYYY-MM-DDTHH:mm:ss');
        this.orden.fechaEnvio = moment(this.fechaSeleccionada2).format('YYYY-MM-DDTHH:mm:ss');
        this.orden.fechaEntrega = moment(this.fechaSeleccionada3).format('YYYY-MM-DDTHH:mm:ss');



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
        },
        err=>{
          console.log(err);
        });
      }
      this.router.navigate(['orden']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.ordenservice.listarId(this.id).subscribe(data => {
        this.orden = data;
        console.log(data);
        this.idAgricultorSeleccionado=data.agricultor.idAgricultor;
        this.idMayoristaSeleccionado=data.mayorista.idMayorista;
      })
    }
  }

}
