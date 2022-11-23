import { agricultor } from "./agricultor";
import { Mayorista } from "./mayorista";

export class Orden{
  idOrden:number=0;
  fechaCompra:string=""
  fechaEnvio:string=""
  fechaEntrega: string=""
  agricultor:agricultor=new agricultor()
  mayorista:Mayorista=new Mayorista()
}