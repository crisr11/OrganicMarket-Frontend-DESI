import { persona } from '../model/persona';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url: string = "http://localhost:5000/persona"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<persona[]>(this.url);
  }
}
