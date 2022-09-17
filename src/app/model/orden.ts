import { agricultor } from "./agricultor";

export class orden{
  id_orden:number=0;
  fechacompra:string="";
  fechaenvio:string="";
  fechaentrega: string="";
  cantidad: number=0;
  agricultor_id_agricultor:agricultor=new agricultor();
  mayorista_id_mayorista: number=0; 
}