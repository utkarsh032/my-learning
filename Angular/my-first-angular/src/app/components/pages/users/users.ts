import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users {
  users = [
    { id: 1, name: 'Utkarsh' },
    { id: 2, name: 'Rahul' },
    { id: 3, name: 'Priya' },
    { id: 4, name: 'Aman' },
  ];
}
