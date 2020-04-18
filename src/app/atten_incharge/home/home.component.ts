import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  circulars = ['4th Graduation Day on 13th July 2019',
    'Indian Council of Medical Research(ICMR) funded four Days National Level Workshop on Engineering in Diabetology from 12th and 15thJune 2019',
    'Two days National workshop on Manufacturing Application of Micromachining for Automobile Components on 12th and 13thJune 2019',
    'Book Bank Circular',
    'Culturals Date will be announced soon'];
     
  events= ['15 Jun Ramzan Celebration',
      '18 Aug Onam Festival Celebration',
      '18 Oct Ayudha Pooja Celebration',
      '18 Sep Vinayagar Chathurthi Celebration',
      '12 Dec Karthigai Deepam Celebration',
      ];


}
