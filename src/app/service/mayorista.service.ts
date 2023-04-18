import { Injectable } from '@angular/core';
import { Mayorista } from '../model/mayorista';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MayoristaService {
  private listaCambio = new Subject<Mayorista[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  //url: string = "https://organicmarket-back.herokuapp.com/mayoristas"
  url: string = "http://localhost:8080/mayoristas"

  constructor(private http:HttpClient) {}

  listar(){
    return this.http.get<Mayorista[]>(this.url)
  }
  insertar(mayorista: Mayorista) {
    return this.http.post(this.url, mayorista);
  }
  setLista(listaNueva: Mayorista[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(mayorista: Mayorista) {
    return this.http.post(this.url, mayorista);
  }
  listarId(id: number) {
    return this.http.get<Mayorista>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Mayorista[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
