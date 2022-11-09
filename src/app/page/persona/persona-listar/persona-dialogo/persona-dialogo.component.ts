import { PersonaService } from 'src/app/service/persona.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-persona-dialogo',
  templateUrl: './persona-dialogo.component.html',
  styleUrls: ['./persona-dialogo.component.css']
})
export class PersonaDialogoComponent implements OnInit {

  constructor(private personaService:PersonaService,
    private dialogRef:MatDialogRef<PersonaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:Boolean){

    this.personaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
