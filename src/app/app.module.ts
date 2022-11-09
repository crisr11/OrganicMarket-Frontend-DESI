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
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

import { ProductoListarComponent } from './page/producto/producto-listar/producto-listar.component';
import { MayoristaCreaeditaComponent } from './page/mayorista/mayorista-creaedita/mayorista-creaedita.component';
import { MayoristaBuscarComponent } from './page/mayorista/mayorista-buscar/mayorista-buscar.component';
import { MayoristaDialogoComponent } from './page/mayorista/mayorista-listar/mayorista-dialogo/mayorista-dialogo.component';
import { TipoListarComponent } from './page/tipo/tipo-listar/tipo-listar.component';
import { ProductoComponent } from './page/producto/producto.component';
import { TipoComponent } from './page/tipo/tipo.component';

//Persona
import { PersonaComponent } from './page/persona/persona.component';
import { PersonaListarComponent } from './page/persona/persona-listar/persona-listar.component';
import { PersonaBuscarComponent } from './page/persona/persona-buscar/persona-buscar.component';
import { PersonaCrearpersonaComponent } from 'src/app/page/persona/persona-crearpersona/persona-crearpersona.component';

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
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AgricultorCreaeditaComponent } from './page/agricultor/agricultor-creaedita/agricultor-creaedita.component';

import { PublicacionCreaeditaComponent } from './page/publicacion/publicacion-creaedita/publicacion-creaedita.component';
import { PublicacionBuscarComponent } from './page/publicacion/publicacion-buscar/publicacion-buscar.component';
import { PublicacionDialogoComponent } from './page/publicacion/publicacion-listar/publicacion-dialogo/publicacion-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AgricultorBuscarComponent } from './page/agricultor/agricultor-buscar/agricultor-buscar.component';
import { AgricultorDialogoComponent } from './page/agricultor/agricultor-listar/agricultor-dialogo/agricultor-dialogo.component';
import { PersonaDialogoComponent } from './page/persona/persona-listar/persona-dialogo/persona-dialogo.component';
import { ProductoBuscarComponent } from './page/producto/producto-buscar/producto-buscar.component';
import { ProductoDialogoComponent } from './page/producto/producto-listar/producto-dialogo/producto-dialogo.component';
import { ProdutoCreaeditaComponent } from './page/producto/produto-creaedita/produto-creaedita.component';
import { DetalleordenDialogoComponent } from './page/detalleorden/detalleorden-listar/detalleorden-dialogo/detalleorden-dialogo.component';
import { DetalleordenBuscarComponent } from './page/detalleorden/detalleorden-buscar/detalleorden-buscar.component';
import { DetalleCreaeditaComponent } from './page/detalleorden/detalle-creaedita/detalle-creaedita.component';
import { PromocionCreaeditaComponent } from './page/promocion/promocion-creaedita/promocion-creaedita.component';
import { PromocionBuscarComponent } from './page/promocion/promocion-buscar/promocion-buscar.component';
import { PromocionDialogoComponent } from './page/promocion/promocion-listar/promocion-dialogo/promocion-dialogo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './custom-adapter';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrdenBuscarComponent } from './page/orden/orden-buscar/orden-buscar.component';
import { OrdenCreaeditaComponent } from './page/orden/orden-creaedita/orden-creaedita.component';
import { OrdenDialogoComponent } from './page/orden/orden-listar/orden-dialogo/orden-dialogo.component';




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
    AgricultorCreaeditaComponent,
    PublicacionCreaeditaComponent,
    PublicacionBuscarComponent,
    PublicacionDialogoComponent,
    MayoristaBuscarComponent,
    MayoristaCreaeditaComponent,
    MayoristaDialogoComponent,
    AgricultorBuscarComponent,
    AgricultorDialogoComponent,
    PersonaComponent,
    PersonaListarComponent,
    PersonaCrearpersonaComponent,
    PersonaBuscarComponent,
    PersonaDialogoComponent,
    ProductoBuscarComponent,
    ProductoDialogoComponent,
    ProdutoCreaeditaComponent,
    DetalleordenDialogoComponent,
    DetalleordenBuscarComponent,
    DetalleCreaeditaComponent,
    PromocionCreaeditaComponent,
    PromocionBuscarComponent,
    PromocionDialogoComponent,
    OrdenBuscarComponent,
    OrdenCreaeditaComponent,
    OrdenDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  { provide: DateAdapter, useClass: CustomDateAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

