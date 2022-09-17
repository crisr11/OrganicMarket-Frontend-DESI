import { Producto } from './producto';
import { orden } from './orden';

export class detalleorden{

    orden:orden=new orden()
    fechacompra:string=""
    Producto:Producto=new Producto()
    Nombre:string=""
}