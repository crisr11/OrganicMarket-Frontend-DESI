import { AgricultorComponent } from './page/agricultor/agricultor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenComponent } from './page/orden/orden.component';

const routes: Routes = [{
  path: 'propietarios', component: AgricultorComponent, children:[

  ]
},{
  path:'vehiculos',component:OrdenComponent,children:[

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
