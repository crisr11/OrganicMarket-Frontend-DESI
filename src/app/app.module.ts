import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgricultorComponent } from './page/agricultor/agricultor.component';
import { AgricultorListarComponent } from './page/agricultor/agricultor-listar/agricultor-listar.component';
import { OrdenListarComponent } from './page/orden/orden-listar/orden-listar.component';
import { OrdenComponent } from './page/orden/orden.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    AgricultorComponent,
    AgricultorListarComponent,
    OrdenListarComponent,
    OrdenComponent,



  
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
