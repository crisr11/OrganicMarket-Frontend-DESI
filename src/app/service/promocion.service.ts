import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Promocion } from '../model/promocion';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {
  url:string="http://localhost:5000/promociones";
  
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Promocion[]>(this.url);
  }

}