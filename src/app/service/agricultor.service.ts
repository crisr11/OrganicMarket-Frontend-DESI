import { agricultor } from '../model/agricultor';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgricultorService {
  url: string = "http://localhost:8080/agricultores"
  private listaCambio = new Subject<agricultor[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<agricultor[]>(this.url);
  }
  insertar(agricultor: agricultor) {
    return this.http.post(this.url, agricultor);
  }
  setLista(listaNueva: agricultor[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(agricultor: agricultor) {
    return this.http.post(this.url, agricultor);
  }
  listarId(id: number) {
    return this.http.get<agricultor>(`${this.url}/${id}`);
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
      return this.http.post<agricultor[]>(`${this.url}/buscardirecciones`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
