import { agricultor } from "./agricultor";
import { Mayorista } from "./mayorista";

export class Orden{
  idOrden:number=0;
  fechaCompra:string=""
  fechaEnvio:string=""
  fechaEntrega: string=""
  cantidad: number=0
  idAgricultor:agricultor=new agricultor()
  idMayorista:Mayorista=new Mayorista()
}