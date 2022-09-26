import { Component, OnInit } from '@angular/core';
import { AgricultorService } from 'src/app/service/agricultor.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agricultor-dialogo',
  templateUrl: './agricultor-dialogo.component.html',
  styleUrls: ['./agricultor-dialogo.component.css']
})
export class AgricultorDialogoComponent implements OnInit {

  constructor(private agricultorservice: AgricultorService,
    private dialogRef: MatDialogRef<AgricultorDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.agricultorservice.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
