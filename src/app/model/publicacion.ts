import { agricultor } from "./agricultor"
import { Producto } from "./producto"

export class Publicacion{
    id_publicacion: number=0;
    contenido: string="";
    agricultor: agricultor = new agricultor()
    producto: Producto = new Producto()
}