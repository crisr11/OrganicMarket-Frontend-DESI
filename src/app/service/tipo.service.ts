import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Tipo } from '../model/tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  url: string = "https://organicmarket-back.herokuapp.com/tipos"
  private listaCambio = new Subject<Tipo[]>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Tipo[]>(this.url);
  }
  insertar(propietario: Tipo) {
    return this.http.post(this.url, propietario);
  }
  setLista(listaNueva: Tipo[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
