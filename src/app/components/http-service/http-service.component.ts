import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http/http.service';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {
  users: any[];
  user = {
    id: '',
    name: '',
    email: '',
    phone: ''
  };
  isEdit = false;

  constructor( public httpService: HttpService ) {
    this.httpService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

  onSubmit(isEdit) {
    if (isEdit) {
      this.httpService.updateUser(this.user).subscribe(user => {
        for (let i = 0 ; i < this.users.length; i++) {
          if (this.users[i].id === this.user.id) {
            this.users.splice(i, 1);
          }
        }
        this.users.unshift(this.user);
      });
    } else {
      this.httpService.addUser(this.user).subscribe(user => {
        this.users.unshift(user);
        console.log(user);
      });
    }
  }

  onDeleteClick(id) {
    this.httpService.deleteUser(id).subscribe(res => {
      console.log(res);
      for (let i = 0 ; i < this.users.length; i++) {
        if (this.users[i].id === id) {
          this.users.splice(i, 1);
        }
      }
    });
  }

  onEditClick(user) {
    this.isEdit = true;
    this.user = user;
  }

  ngOnInit() {
  }

}
