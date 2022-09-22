import { Injectable } from '@angular/core';
import { Mayorista } from '../model/mayorista';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MayoristaService {
  url: string = "http://localhost:5000/mayoristas"
  constructor(private http:HttpClient) {}

  listar(){
    return this.http.get<Mayorista[]>(this.url)
  }
}
