import { AgricultorComponent } from './page/agricultor/agricultor.component';
import { NgModule } from '@angular/core';
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
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
