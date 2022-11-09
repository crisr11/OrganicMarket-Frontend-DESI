import { MatDialogRef } from '@angular/material/dialog';
import { AdministradorService } from './../../../../service/administrador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-dialogo',
  templateUrl: './administrador-dialogo.component.html',
  styleUrls: ['./administrador-dialogo.component.css']
})
export class AdministradorDialogoComponent implements OnInit {

  constructor(private aS:AdministradorService,
    private dialogRef:MatDialogRef<AdministradorDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.aS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
