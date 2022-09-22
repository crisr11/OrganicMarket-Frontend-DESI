import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mayorista',
  templateUrl: './mayorista.component.html',
  styleUrls: ['./mayorista.component.css']
})
export class MayoristaComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
