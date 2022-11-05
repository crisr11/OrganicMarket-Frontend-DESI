import { agricultor } from "./agricultor"
import { Producto } from "./producto"

export class Promocion{
    idPromocion: number=0;
    fechaInicio: string="";
    fechaFin: string="";
    agricultor: agricultor = new agricultor();
    producto: Producto = new Producto();
}