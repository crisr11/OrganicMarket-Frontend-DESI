import { agricultor } from '../model/agricultor';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AgricultorService {
  url: string = "http://localhost:5000/agricultor"
  private listaCambio = new Subject<agricultor[]>()
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
}
