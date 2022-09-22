import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Publicacion } from '../model/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  url:string="http://localhost:5000/publicaciones";

  constructor(private http:HttpClient) { }
  
  listar(){
    return this.http.get<Publicacion[]>(this.url);
  }
}
