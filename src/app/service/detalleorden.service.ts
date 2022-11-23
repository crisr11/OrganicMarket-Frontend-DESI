import { ResultadoDetalleOrden } from './../model/resultadodetalleorden';
import { Subject, EMPTY } from 'rxjs';
import { detalleorden } from '../model/detalleorden';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class DetalleordenService {
    //private url: string = `${environment.host}/detalleorden`
    url: string = "https://organicmarket-back.herokuapp.com/detalleorden"
    private listaCambio = new Subject<detalleorden[]>()
    private confirmaEliminacion = new Subject<Boolean>()
    constructor(private http: HttpClient) { }

    listar() {
        return this.http.get<detalleorden[]>(this.url);
    }
    buscarpapa() {
        return this.http.get<detalleorden[]>(`${this.url}/buscarpapas`);
    }
    buscarcantidad() {
        return this.http.get<ResultadoDetalleOrden[]>(`${this.url}/productoscantidad`);
    }
    insertar(detalleorden: detalleorden) {
        return this.http.post(this.url, detalleorden);
    }
    setLista(listaNueva: detalleorden[]) {
        this.listaCambio.next(listaNueva);
    }
    getLista() {
        return this.listaCambio.asObservable();
    }
    modificar(detalleorden: detalleorden) {
        return this.http.put(this.url, detalleorden);
    }
    listarId(id: number) {
        return this.http.get<detalleorden>(`${this.url}/${id}`);
    }
    eliminar(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
    getConfirmaEliminacion() {
        return this.confirmaEliminacion.asObservable();
    }
    setConfirmaEliminacion(estado: Boolean) {
        this.confirmaEliminacion.next(estado);
    }
    buscar(texto: string) {
        if (texto.length != 0) {
            return this.http.post<detalleorden[]>(`${this.url}/buscar`, texto.toLowerCase(), {

            });
        }
        return EMPTY;
    }
}