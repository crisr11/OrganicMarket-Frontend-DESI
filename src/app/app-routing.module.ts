import { AgricultorComponent } from './page/agricultor/agricultor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenComponent } from './page/orden/orden.component';
import { ProductoComponent } from './page/producto/producto.component';
import { TipoComponent } from './page/tipo/tipo.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
