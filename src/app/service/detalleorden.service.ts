import { detalleorden } from '../model/detalleorden';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class DetalleordenService{
    url:string="http://localhost:5000/detalleorden"
    constructor(private http:HttpClient) { }

    listar(){
        return this.http.get<detalleorden[]>(this.url);
    }
}