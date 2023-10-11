import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './app-combobox.component.html',
  styleUrls: ['./app-combobox.component.css']
})
export class AppComboboxComponent implements OnInit {

  selected: any = 'select';
  @Input('label') label: string;
  @Input('choices') choices: string[];
  @Output('selected') selectedItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateSelected(item) {
    console.log(item);
    this.selected = item;
    this.selectedItem.emit(this.selected);
  }

}
