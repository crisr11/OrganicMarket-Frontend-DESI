import { AgricultorComponent } from './page/agricultor/agricultor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenComponent } from './page/orden/orden.component';

const routes: Routes = [{
  path: 'agricultor', component: AgricultorComponent, children:[

  ]
},{
  path:'orden',component:OrdenComponent,children:[

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
