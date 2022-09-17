import { Tipo } from "./tipo";

export class Producto{
  ID_Producto:number=0;
  Nombre:string="";
  Precio:number=0;
  Tipo:Tipo=new Tipo();
}
