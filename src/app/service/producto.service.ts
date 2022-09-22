import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url: string = "http://localhost:5000/productos"
  constructor(private http: HttpClient) { }
  
  listar() {
    return this.http.get<Producto[]>(this.url);
  }
}
