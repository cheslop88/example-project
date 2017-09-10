import { Component, OnInit } from '@angular/core';
import { SimpleService } from './../../services/simple/simple.service';

@Component({
  selector: 'app-simple-service',
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.css']
})
export class SimpleServiceComponent implements OnInit {
  users: string[];
  // inject service as a dependency
  constructor( public simpleService: SimpleService ) {
    console.log(this.simpleService.getUsers());
    this.users = this.simpleService.getUsers();
  }

  ngOnInit() {
  }

}
