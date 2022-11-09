import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OrdenService } from 'src/app/service/orden.service';

@Component({
  selector: 'app-orden-dialogo',
  templateUrl: './orden-dialogo.component.html',
  styleUrls: ['./orden-dialogo.component.css']
})
export class OrdenDialogoComponent implements OnInit {

  constructor(private ordenservice: OrdenService,
    private dialogRef: MatDialogRef<OrdenDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.ordenservice.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
