import { administrador } from '../model/administrador';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  url: string = "http://localhost:8080/administrador"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<administrador[]>(this.url);
  }
}
