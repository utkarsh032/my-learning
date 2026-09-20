import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-for-loop',
  styleUrl: './for-loop.css',
  templateUrl: './for-loop.html',
})
export class ForLoop {
  names = ['Utkarsh', 'Manish', 'Raj'];

  users = [
    { id: 1, name: 'Utkarsh', city: 'Delhi' },
    { id: 2, name: 'Manish', city: 'Noida' },
    { id: 3, name: 'Raj', city: 'Patna' },
  ];

  addUser() {
    const id = Date.now();
    this.users.push({ id: id, name: 'New User', city: 'Unknown' });
  }

  removeUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  showUser(name: string) {
    alert(name);
  }
}
