import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dynamic-styling',
  styleUrl: './dynamic-styling.css',
  templateUrl: './dynamic-styling.html',
})
export class DynamicStyling {
  // Dynamic styling - style and class come from the component value, not fixed in the css file
  color = 'green';
  size = 20;
  marks = 80;
  isActive = false;

  changeColor(value: string) {
    this.color = value;
  }

  getMarks(event: Event) {
    this.marks = Number((event.target as HTMLInputElement).value);
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
