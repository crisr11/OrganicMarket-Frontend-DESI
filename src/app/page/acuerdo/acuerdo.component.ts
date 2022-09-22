import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acuerdo',
  templateUrl: './acuerdo.component.html',
  styleUrls: ['./acuerdo.component.css']
})
export class AcuerdoComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
