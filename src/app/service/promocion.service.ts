import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Promocion } from '../model/promocion';
import {Subject, EMPTY} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {
  private url: string = `${environment.host}/promociones`
  private listaCambio = new Subject<Promocion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  
  listar(){
    return this.http.get<Promocion[]>(this.url);
  }
  insertar(promocion: Promocion) {
    return this.http.post(this.url, promocion);
  }
  modificar(promocion: Promocion) {

    return this.http.put(this.url, promocion);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto: string) {

    return this.http.post<Promocion[]>(`${this.url}/buscar`, texto);
  }
  listarId(id: number) {

    return this.http.get<Promocion>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Promocion[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}