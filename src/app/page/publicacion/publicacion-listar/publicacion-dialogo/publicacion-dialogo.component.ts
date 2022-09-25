import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-publicacion-dialogo',
  templateUrl: './publicacion-dialogo.component.html',
  styleUrls: ['./publicacion-dialogo.component.css']
})
export class PublicacionDialogoComponent implements OnInit {

  constructor(private publicacionservice: PublicacionService,
    private dialogRef: MatDialogRef<PublicacionDialogoComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.publicacionservice.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
