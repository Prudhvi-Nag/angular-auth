import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-eidt',
  templateUrl: './eidt.component.html',
  styleUrls: ['./eidt.component.scss']
})
export class EidtComponent {
  currentDate = new Date();
  text = 'Angular';
  decimalValue = 12345.6789;
  currencyValue = 1234.5678;
  percentageValue = 0.25;
  object = {
    name: 'prudhvi',
    age: 24,
    city: 'vijayawada'
  };
  Date ='12-05-2023'

}
