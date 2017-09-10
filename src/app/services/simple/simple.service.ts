import { Injectable } from '@angular/core';

@Injectable()
export class SimpleService {
  users: string[];
  constructor() {
    this.users = ['John', 'Paul', 'George', 'Ringo'];
  }

  getUsers() {
    return this.users;
  }
}

