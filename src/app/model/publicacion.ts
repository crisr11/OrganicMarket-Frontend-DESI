import { agricultor } from "./agricultor"
import { Producto } from "./producto"
export class Publicacion{
    id: number=0;
    contenido: string="";
    agricultor: agricultor = new agricultor()
    mayorista: Producto = new Producto()
}