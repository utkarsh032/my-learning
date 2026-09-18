import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-project1-cunter-app',
  styleUrl: './project1-cunter-app.css',
  templateUrl: './project1-cunter-app.html',
})
export class Project1CunterApp {
  value: number = 0;

  decreaseValue() {
    this.value--;
  }
  increaseValue() {
    this.value++;
  }

  resetValue() {
    this.value = 0;
  }

  counterControll(action: string) {
    if (action === 'decrease') {
      this.value > 0 && this.decreaseValue();
    } else if (action === 'reset') {
      this.resetValue();
    } else if (action === 'increase') {
      this.increaseValue();
    }
  }
}
