import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Tipo } from '../model/tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  //url: string = "https://organicmarket-back.herokuapp.com/tipos"
  url: string = "http://localhost:8080/tipos"
  //url: string = `${environment.host}/tipos`
  private confirmaEliminacion=new Subject<Boolean>();
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
  modificar(tipo:Tipo){
    return this.http.put(this.url,tipo);
  }
  listarId(id:Number){
    return this.http.get<Tipo>(`${this.url}/${id}`);
  }
  //Function delete
  eliminar(id:number){
    return this.http.delete(this.url+"/"+id);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado:Boolean){
    this.confirmaEliminacion.next(estado);
  }
}
