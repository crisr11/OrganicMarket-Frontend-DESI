import { PersonaCrearpersonaComponent } from 'src/app/page/persona/persona-crearpersona/persona-crearpersona.component';
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

;
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
import { TipoCreaeditaComponent } from './page/tipo/tipo-creaedita/tipo-creaedita.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AgricultorCreaeditaComponent } from './page/agricultor/agricultor-creaedita/agricultor-creaedita.component';

import { PublicacionCreaeditaComponent } from './page/publicacion/publicacion-creaedita/publicacion-creaedita.component';
import { PublicacionBuscarComponent } from './page/publicacion/publicacion-buscar/publicacion-buscar.component';
import { PublicacionDialogoComponent } from './page/publicacion/publicacion-listar/publicacion-dialogo/publicacion-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';




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
    DetalleordenListarComponent,
    TipoCreaeditaComponent,
    PersonaCrearpersonaComponent,
    AgricultorCreaeditaComponent,
    PublicacionCreaeditaComponent,
    PublicacionBuscarComponent,
    PublicacionDialogoComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
