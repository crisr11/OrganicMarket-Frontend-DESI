import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgricultorComponent } from './page/agricultor/agricultor.component';

import { MayoristaComponent } from './page/mayorista/mayorista.component';
import { AcuerdoComponent } from './page/acuerdo/acuerdo.component';
import { MayoristaListarComponent } from './page/mayorista/mayorista-listar/mayorista-listar.component';
import { AcuerdoListarComponent } from './page/acuerdo/acuerdo-listar/acuerdo-listar.component';

import { AgricultorListarComponent } from './page/agricultor/agricultor-listar/agricultor-listar.component';
import { OrdenListarComponent } from './page/orden/orden-listar/orden-listar.component';
import { OrdenComponent } from './page/orden/orden.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MatTableModule} from '@angular/material/table';
import { ProductoListarComponent } from './page/producto/producto-listar/producto-listar.component';
import { TipoListarComponent } from './page/tipo/tipo-listar/tipo-listar.component';
import { ProductoComponent } from './page/producto/producto.component';
import { TipoComponent } from './page/tipo/tipo.component';
import { PersonaComponent } from './page/persona/persona.component';
import { PersonaListarComponent } from './page/persona/persona-listar/persona-listar.component';
import { AdministradorComponent } from './page/administrador/administrador.component';
import { AdministradorListarComponent } from './page/administrador/administrador-listar/administrador-listar.component';
import { PromocionComponent } from './page/promocion/promocion.component';
import { PublicacionComponent } from './page/publicacion/publicacion.component';
import { PromocionListarComponent } from './page/promocion/promocion-listar/promocion-listar.component';
import { PublicacionListarComponent } from './page/publicacion/publicacion-listar/publicacion-listar.component';
import { DetalleordenComponent } from './page/detalleorden/detalleorden.component';
import { DetalleordenListarComponent } from './page/detalleorden/detalleorden-listar/detalleorden-listar.component';





@NgModule({
  declarations: [
    AppComponent,
    AgricultorComponent,
    AgricultorListarComponent,
    OrdenListarComponent,
    OrdenComponent,
    ProductoComponent,
    TipoComponent,
    ProductoListarComponent,
    TipoListarComponent,
    PersonaComponent,
    PersonaListarComponent,
    AdministradorComponent,
    AdministradorListarComponent,

    AcuerdoComponent,
    AcuerdoListarComponent,
    MayoristaComponent,
    MayoristaListarComponent,
    PromocionComponent,
    PublicacionComponent,
    PromocionListarComponent,
    PublicacionListarComponent,
    DetalleordenComponent,
    DetalleordenListarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
