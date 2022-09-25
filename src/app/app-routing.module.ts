import { DetalleordenComponent } from './page/detalleorden/detalleorden.component';
import { AgricultorComponent } from './page/agricultor/agricultor.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenComponent } from './page/orden/orden.component';
import { ProductoComponent } from './page/producto/producto.component';
import { PersonaComponent } from './page/persona/persona.component';
import { AdministradorComponent } from './page/administrador/administrador.component';
import { TipoComponent } from './page/tipo/tipo.component';
import { MayoristaComponent } from './page/mayorista/mayorista.component';
import { AcuerdoComponent } from './page/acuerdo/acuerdo.component';
import { PromocionComponent } from './page/promocion/promocion.component';
import { PublicacionComponent } from './page/publicacion/publicacion.component';
import { TipoCreaeditaComponent } from './page/tipo/tipo-creaedita/tipo-creaedita.component';
import { PersonaCrearpersonaComponent } from './page/persona/persona-crearpersona/persona-crearpersona.component';
import { PublicacionCreaeditaComponent } from './page/publicacion/publicacion-creaedita/publicacion-creaedita.component';


const routes: Routes = [{
  path: 'agricultor', component: AgricultorComponent, children:[

  ]
},{
  path:'orden',component:OrdenComponent,children:[

  ]
},{
  path:'productos',component:ProductoComponent,children:[

  ]
},{
  path:'tipos',component:TipoComponent,children:[
    {path:'nuevo',component:TipoCreaeditaComponent}

    

  ]
},{
  path:'persona',component:PersonaComponent,children:[

  ]
},{
  path:'administrador',component:AdministradorComponent,children:[

  ]
},{
  path: 'mayoristas', component: MayoristaComponent, children:[

  ]
},{
  path: 'acuerdos', component: AcuerdoComponent, children:[

  ]
},
{
  path: 'promociones', component: PromocionComponent, children:[

  ]
},
{
  path: 'publicaciones', component: PublicacionComponent, children:[
    {path:'nuevo',component:PublicacionCreaeditaComponent}

  ]
 },
{
  path:'detalleorden',component:DetalleordenComponent,children:[

  ]

},
{
  path:'persona-crearpersona',component:PersonaCrearpersonaComponent,children:[

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
