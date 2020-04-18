import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  depts=['Computer Science Engineering', 'Mechanical Engineering','Electrical Engineering','Civil Engineering','Electronics and Communication Engineering ','Information Technology '];
 // batch=['2016-2017','2017-2018','2018-2019','2019-2020']
 // department = new FormControl('', Validators.required);
  batches = new FormControl('', Validators.required);
  formSubmit=false;
  batch='2016-2020';
  department='cse';
  constructor() { }

  ngOnInit() {
  }


  onclick()
  {
        this.formSubmit=true;
        
        window.open("sendsms", "_blank");
      
  }

  
}
