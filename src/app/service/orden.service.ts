import { orden } from '../model/orden';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  url:string="http://localhost:5000/orden"
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<orden[]>(this.url);
  }}
