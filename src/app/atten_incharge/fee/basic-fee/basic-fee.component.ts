import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-fee',
  templateUrl: './basic-fee.component.html',
  styleUrls: ['./basic-fee.component.css']
})
export class BasicFeeComponent implements OnInit {


  department='Computer Science Engineering';
  typ='Government';
  constructor() { }

  ngOnInit(): void {
  }

}
