import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  text: string;
  constructor() { }

  ngOnInit() {
  }

  myOutputValue() {
    this.text = 'hello';
    console.log('this is an output emitted value from the child');
  }

}
