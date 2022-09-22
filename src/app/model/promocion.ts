import { agricultor } from "./agricultor"
import { Producto } from "./producto"

export class Promocion{
    id_promocion: number=0;
    agricultor: agricultor = new agricultor()
    producto: Producto = new Producto()
    fechaInicio: Date = new Date()
    fechaFin: Date = new Date()
}