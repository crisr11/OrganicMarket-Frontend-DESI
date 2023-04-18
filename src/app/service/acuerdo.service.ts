import { Injectable } from '@angular/core';
import { Acuerdo } from '../model/acuerdo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcuerdoService {
  //url: string = "https://organicmarket-back.herokuapp.com/acuerdos"
  url: string = "http://localhost:8080/acuerdos"

  constructor(private http:HttpClient) {}

  listar(){
    return this.http.get<Acuerdo[]>(this.url)
  }
}
