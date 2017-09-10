import { Component, OnInit } from '@angular/core';
import { ObservableService } from './../../services/observable/observable.service';

@Component({
  selector: 'app-observable-service',
  templateUrl: './observable-service.component.html',
  styleUrls: ['./observable-service.component.css']
})
export class ObservableServiceComponent implements OnInit {
  data: any[] = [];
  constructor( public observableService: ObservableService ) {
    this.observableService.getData().subscribe(data => {
      console.log(data);
      this.data.push(data);
    });
  }

  ngOnInit() {
  }

}
