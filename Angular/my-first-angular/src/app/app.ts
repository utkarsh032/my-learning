import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Module1 } from './components/module/module1/module1';

@Component({
  imports: [RouterOutlet, Module1],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  //   template: `
  //    <h1>Welcome to My First Angular App</h1>

  // <div class="content">
  //   <h2>{{title()}}</h2>
  //   <p>{{intro}}</p>
  //   <h3>{{getName()}}</h3>

  //   <p>{{addTwoNumber(5, 10)}}</p>
  // </div>
  // `
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
