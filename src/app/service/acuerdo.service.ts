import { Injectable } from '@angular/core';
import { Acuerdo } from '../model/acuerdo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcuerdoService {
  url: string = "http://localhost:4200/acuerdos"
  constructor(private http:HttpClient) {}

  listar(){
    return this.http.get<Acuerdo[]>(this.url)
  }
}
