import { agricultor } from '../model/agricultor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AgricultorService {
  url: string = "http://localhost:5000/agricultor"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<agricultor[]>(this.url);
  }
}
