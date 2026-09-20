import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-control-flow-statement',
  styleUrl: './control-flow-statement.css',
  templateUrl: './control-flow-statement.html',
})
export class ControlFlowStatement {
  isLogin = true;
  showText = true;
  isToggle = true;
  marks = 0;

  changeLogin() {
    this.isLogin = !this.isLogin;
  }

  show() {
    this.showText = true;
  }

  hide() {
    this.showText = false;
  }

  toggle() {
    this.isToggle = !this.isToggle;
  }

  getMarks(event: Event) {
    this.marks = Number((event.target as HTMLInputElement).value);
  }
}
