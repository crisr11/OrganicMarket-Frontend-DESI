import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Publicacion } from '../model/publicacion';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  url:string="http://localhost:5000/publicaciones";
  private listaCambio = new Subject<Publicacion[]>()

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
}
