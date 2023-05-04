import { Injectable } from '@angular/core';
import { Acuerdo } from '../model/acuerdo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcuerdoService {
  private url: string = `${environment.host}/acuerdos`
  //url: string = "https://organicmarket-back.herokuapp.com/acuerdos"
  //url: string = "http://localhost:8080/acuerdos"

  constructor(private http:HttpClient) {}

  listar(){
    return this.http.get<Acuerdo[]>(this.url)
  }
}
