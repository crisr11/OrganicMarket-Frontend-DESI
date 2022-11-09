import { administrador } from '../model/administrador';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Subject,EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private url: string = `${environment.host}/administradores`;
  private listaCambio = new Subject<administrador[]>()
  private confirmarEliminacion=new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<administrador[]>(this.url);
  }
  insertar(admin: administrador ){
    return this.http.post(this.url,admin);
  }
  modificar(admin: administrador){
    return this.http.put(this.url,admin);
  }
  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto:String){
    if(texto.length!=0){
      return this.http.post<administrador[]>(`${this.url}/buscar`,texto);
    } return EMPTY;
  }
  listarId(id: number) {
    return this.http.get<administrador>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva:administrador[]){
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }
}
