import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agricultor',
  templateUrl: './agricultor.component.html',
  styleUrls: ['./agricultor.component.css']
})
export class AgricultorComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
