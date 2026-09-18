import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-first-angular');
  intro = `This is my first Angular app. I am learning Angular and TypeScript.`;
  name = 'Utkarsh';

  getName() {
    return this.name;
  }

  addTwoNumber(a: number, b: number) {
    return a + b;
  }
}
