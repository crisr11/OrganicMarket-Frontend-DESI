import { ResultadoPublicacion } from './../model/resultadopublicacion';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Publicacion } from '../model/publicacion';
import {Subject, EMPTY} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  //private url: string = `${environment.host}/publicaciones`
  url: string = "http://localhost:8080/publicaciones"
  private listaCambio = new Subject<Publicacion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  
  listar(){
    return this.http.get<Publicacion[]>(this.url);
  }
  insertar(publicacion: Publicacion) {
    return this.http.post(this.url, publicacion);
  }
  modificar(publicacion: Publicacion) {

    return this.http.put(this.url, publicacion);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto: string) {

    if(texto.length!=0){
      return this.http.post<Publicacion[]>(`${this.url}/buscar`,texto,{});
    }
    return EMPTY;
  }
  buscarpublicacionesporagricultor(){
    return this.http.get<ResultadoPublicacion[]>(`${this.url}/numero-de-publicaciones`);
  }
  listarId(id: number) {

    return this.http.get<Publicacion>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Publicacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}