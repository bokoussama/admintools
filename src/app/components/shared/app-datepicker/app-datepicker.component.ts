import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './app-datepicker.component.html',
  styleUrls: ['./app-datepicker.component.css']
})
export class AppDatepickerComponent implements OnInit {
  selectedDate: string;

  @Input('label') dateLabel: string = 'Label';
  @Output('timedate') dateValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateDate(dateInput) {
    console.log(dateInput);
    // console.log(this.selectedDate);
    // this.selectedDate = dateInput;
    // this.dateValue.emit(this.selectedDate);
  }

}
