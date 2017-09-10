import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  inputValid = false;
  @Input() myAwesomeValue;
  @Output() myOutputValue = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  buttonClickOutput() {
    this.myOutputValue.emit('Hello from child component');
  }

  buttonClickInput() {
    this.inputValid = true;
  }

}
