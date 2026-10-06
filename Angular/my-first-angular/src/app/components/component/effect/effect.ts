import { Component, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-effect',
  styleUrl: './effect.css',
  templateUrl: './effect.html',
})
export class Effect {
  count = signal(0);
  showHeading = true;
  title = 'Effect Component';

  constructor() {
    effect(() => {
      console.log(this.count());
      if (this.count() % 2 === 0) {
        this.showHeading = true;
      } else {
        this.showHeading = false;
      }
    });
  }

  increment() {
    this.count.set(this.count() + 1);
  }
}
