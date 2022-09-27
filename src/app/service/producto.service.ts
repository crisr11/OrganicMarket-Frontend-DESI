import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../model/producto';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url: string = "http://localhost:5000/productos"
  private listaCambio = new Subject<Producto[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  
  listar() {
    return this.http.get<Producto[]>(this.url);
  }
  insertar(producto: Producto) {
    return this.http.post(this.url, producto);
  }
  setLista(listaNueva: Producto[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(Producto: Producto) {
    return this.http.put(this.url + "/" + Producto.id, Producto);
  }
  listarId(id: number) {
    return this.http.get<Producto>(`${this.url}/${id}`);
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
      return this.http.post<Producto[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}
