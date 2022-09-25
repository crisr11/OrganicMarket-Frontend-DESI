import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Publicacion } from '../model/publicacion';
import {Subject, EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  url:string="http://localhost:5000/publicaciones";
  private listaCambio = new Subject<Publicacion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  
  listar(){
    return this.http.get<Publicacion[]>(this.url);
  }
  insertar(publicacion: Publicacion) {
    return this.http.post(this.url, publicacion);
  }
  setLista(listaNueva: Publicacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(publicacion: Publicacion) {
    return this.http.put(this.url + "/" + publicacion.id, publicacion);
  }
  listarId(id: number) {
    return this.http.get<Publicacion>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Publicacion[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
