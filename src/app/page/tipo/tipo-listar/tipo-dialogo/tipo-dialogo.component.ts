import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TipoService } from 'src/app/service/tipo.service';

@Component({
  selector: 'app-tipo-dialogo',
  templateUrl: './tipo-dialogo.component.html',
  styleUrls: ['./tipo-dialogo.component.css']
})
export class TipoDialogoComponent implements OnInit {

  constructor(private tipoService:TipoService,
    private dialogRef:MatDialogRef<TipoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:Boolean){

    this.tipoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
