import { Component, OnInit } from '@angular/core';

interface sms_details {
  rollno: number;
  name: string;
  reason:string;
  content:string;
  delivery:string;
  selected:boolean;

}


@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.css']
})
export class SendSMSComponent implements OnInit {

  selectedAll:any;
  sms: sms_details[] = [
    {rollno:1234, name: 'Sam1',reason:'AB',content:'Function1',delivery:'sent',selected: false},
    {rollno:1223, name: 'Sam2',reason:'AB',content:'Function2',delivery:'sent',selected: false},
    {rollno:1243, name: 'Sam3',reason:'AB',content:'Function3',delivery:'sent',selected: false},
    {rollno:1523, name: 'Sam4',reason:'AB',content:'Function4',delivery:'sent',selected: false}
    
  ];

  selectAll() {
    this.selectedAll = !this.selectedAll;

    for (var i = 0; i < this.sms.length; i++) {
        this.sms[i].selected = this.selectedAll;
    } 
}
checkIfAllSelected() {
  var totalSelected =  0;
  for (var i = 0; i < this.sms.length; i++) {
        if(this.sms[i].selected) totalSelected++;
    } 
this.selectedAll = totalSelected === this.sms.length;

return true;
}

onclick()
{
  alert("SMS sent");
}
  constructor() { }

  ngOnInit(): void {
  }

}
