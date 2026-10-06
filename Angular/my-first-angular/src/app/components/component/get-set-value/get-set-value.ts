import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-get-set-value',
  styleUrl: './get-set-value.css',
  templateUrl: './get-set-value.html',
})
export class GetSetValue {
  name = '';
  setName = '';

  email = '';

  getValue(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  setValue() {
    this.setName = this.name;
  }

  getEmail(value: string) {
    this.email = value;
  }
  setEmail() {
    this.email = 'ex@gmail.com';
  }
}
