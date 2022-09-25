import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MayoristaService } from 'src/app/service/mayorista.service';

@Component({
  selector: 'app-mayorista-dialogo',
  templateUrl: './mayorista-dialogo.component.html',
  styleUrls: ['./mayorista-dialogo.component.css']
})
export class MayoristaDialogoComponent implements OnInit {

  constructor(private mayoristaService: MayoristaService,
    private dialogRef: MatDialogRef<MayoristaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.mayoristaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
