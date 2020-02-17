import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headercomp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onBtnClick() {
    const x = document.getElementById('myTopnav');
    const y = document.getElementById('myTopContent');
    console.log(x.className);
    if (x.className === 'header header-inverse') {
    x.className += ' responsive';
    y.className += ' responsive';
  } else {
    x.className = 'header header-inverse';
    y.className = ' header-right';
  }
}

}
