import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/service/promocion.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-promocion-dialogo',
  templateUrl: './promocion-dialogo.component.html',
  styleUrls: ['./promocion-dialogo.component.css']
})
export class PromocionDialogoComponent implements OnInit {

  constructor(private promocionservice: PromocionService,
    private dialogRef: MatDialogRef<PromocionDialogoComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.promocionservice.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
