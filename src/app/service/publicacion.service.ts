import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  url:string="http://localhost5000/publicaciones";

  constructor(private http:HttpClient) { }
  
  listar(){
    return this.http.get<any>(this.url);
  }
}
