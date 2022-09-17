import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tipo } from '../model/tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  url: string = "http://localhost:5000/tipos"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Tipo[]>(this.url);
  }
}
