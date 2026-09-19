import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Module1 } from './components/module/module1/module1';
import { Module2 } from './components/module/module2/module2';
import { Module3 } from './components/module/module3/module3';
import { Module4 } from './components/module/module4/module4';
import { Module5 } from './components/module/module5/module5';
import { Module6 } from './components/module/module6/module6';
import { Module7 } from './components/module/module7/module7';

@Component({
  imports: [RouterOutlet, Module1, Module2, Module3, Module4, Module5, Module6, Module7],
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
