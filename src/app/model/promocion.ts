import { agricultor } from "./agricultor"
import { Producto } from "./producto"
export class Promocion{
    id: number=0;
    fechaInicio: string="";
    fechaFin: string="";
    agricultor: agricultor = new agricultor()
    mayorista: Producto = new Producto()
}