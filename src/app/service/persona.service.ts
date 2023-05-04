import { ReporteP2 } from './../model/reporteP2';
import { ReporteP1 } from './../model/reporteP1';
import { persona } from '../model/persona';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject,EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url: string = `${environment.host}/personas`;
  //url:string="https://organicmarket-back.herokuapp.com/personas";
  //url: string = "http://localhost:8080/personas"

  private listaCambio=new Subject<persona[]>()
  private confirmaEliminacion=new Subject<Boolean>();
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
  modificar(persona:persona){
    return this.http.put(this.url,persona);


  }
  listarId(id:Number){
    return this.http.get<persona>(`${this.url}/${id}`);
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
  buscar(texto:string){
    if(texto.length!=0){
      return this.http.post<persona[]>(`${this.url}/buscar`,texto.toLowerCase(),{});
    }
    return EMPTY;
  }
  buscarDniAsc(){
    return this.http.get<ReporteP1[]>(`${this.url}/filtrarDniASC`);
  }
  buscarDniDesc(){
    return this.http.get<ReporteP1[]>(`${this.url}/filtrarDniDESC`);
  }
  buscarComprasAño(){
    return this.http.get<ReporteP2[]>(`${this.url}/buscarCompras`);
  }

}
