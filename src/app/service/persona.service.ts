import { persona } from '../model/persona';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url: string = "http://localhost:5000/persona"
  private listaCambio=new Subject<persona[]>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<persona[]>(this.url);
  }
  insertar(persona:persona){
    return this.http.post(this.url,persona);
  }
  setLista(listaNueva:persona[]) {
      this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
}
