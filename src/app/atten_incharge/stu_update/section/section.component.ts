import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  department='cse';
  batch='2016-2020';
  constructor() { }

  ngOnInit(): void {
  }

}
