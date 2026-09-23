import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Module1 } from './components/module/module1/module1';
import { Module2 } from './components/module/module2/module2';
import { Module3 } from './components/module/module3/module3';
import { Module4 } from './components/module/module4/module4';
import { Module5 } from './components/module/module5/module5';
import { Module6 } from './components/module/module6/module6';
import { Module7 } from './components/module/module7/module7';
import { Module8 } from './components/module/module8/module8';
import { Module9 } from './components/module/module9/module9';
import { Module10 } from './components/module/module10/module10';
import { Module11 } from './components/module/module11/module11';
import { Module12 } from './components/module/module12/module12';
import { Module13 } from './components/module/module13/module13';
import { Module14 } from './components/module/module14/module14';
import { Module15 } from './components/module/module15/module15';
import { Module16 } from './components/module/module16/module16';
import { Module17 } from './components/module/module17/module17';
import { Module18 } from './components/module/module18/module18';
import { Module19 } from './components/module/module19/module19';

@Component({
  imports: [
    RouterOutlet,
    Module1,
    Module2,
    Module3,
    Module4,
    Module5,
    Module6,
    Module7,
    Module8,
    Module9,
    Module10,
    Module11,
    Module12,
    Module13,
    Module14,
    Module15,
    Module16,
    Module17,
    Module18,
    Module19,
  ],
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
