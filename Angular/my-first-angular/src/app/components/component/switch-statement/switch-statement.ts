import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-switch-statement',
  styleUrl: './switch-statement.css',
  templateUrl: './switch-statement.html',
})
export class SwitchStatement {
  day = 'monday';
  color = '';
  role = '';

  changeColor(value: string) {
    this.color = value;
  }

  getRole(event: Event) {
    this.role = (event.target as HTMLInputElement).value;
  }
}
