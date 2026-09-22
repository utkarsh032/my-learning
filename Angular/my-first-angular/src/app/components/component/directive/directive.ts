import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  selector: 'app-directive',
  styleUrl: './directive.css',
  templateUrl: './directive.html',
})
export class Directive {
  // Structural directives add or remove elements from the DOM
  // *ngIf, *ngFor and *ngSwitch are the old syntax of @if, @for and @switch

  // *ngIf
  show = false;
  btnText = 'Show';
  login = true;
  heading = 0;

  // *ngFor
  fruits = ['Apple', 'Orange', 'Banana', 'Papaya'];

  fruitsData = [
    {
      name: 'Apple',
      price: 120,
      type: 'Sweet',
    },
    {
      name: 'Orange',
      price: 80,
      type: 'Citrus',
    },
    {
      name: 'Banana',
      price: 60,
      type: 'Tropical',
    },
    {
      name: 'Papaya',
      price: 70,
      type: 'Tropical',
    },
  ];

  // ngSwitch
  colors = ['red', 'green', 'orange', 'black', 'wheat'];
  color = 'orange';

  switchHeading() {
    this.show = !this.show;
    this.btnText = this.show ? 'Hide' : 'Show';
  }

  changeLogin() {
    this.login = !this.login;
  }

  changeHeading() {
    // go back to 0 after the last heading
    this.heading = (this.heading + 1) % 4;
  }

  changeColor(value: string) {
    this.color = value;
  }
}
