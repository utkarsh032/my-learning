import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signals',
  styleUrl: './signals.css',
  templateUrl: './signals.html',
})
export class Signals {
  // Signal holds a value and tells the template when that value changes
  // Types: writable signal (signal) and read only signal (computed)
  count = signal(0);
  x = 0;

  changeSignal() {
    this.count.set(this.count() + 1);
    console.log(this.count());
  }

  changeNormalValue() {
    console.log(this.x++);
  }

  // Counter with Signal
  // set - give the new value, update - make new value from the old one
  counter = signal(0);

  increase() {
    this.counter.update((value) => value + 1);
  }

  decrease() {
    this.counter.update((value) => value - 1);
  }

  reset() {
    this.counter.set(0);
  }

  // Data Type with Signals
  // data = signal(0);
  // data = signal<number | string>(0);
  data: WritableSignal<number | string> = signal(0);

  changeData() {
    // this.data.set(this.data() + 1);
    this.data.set('Ramans');
  }

  // Computed Signal
  a = 10;
  b = 20;
  c = this.a + this.b;

  updateA_B() {
    this.a = 5;
    this.b = 50;
  }

  m = signal(1);
  n = signal(2);
  sum = computed(() => this.m() + this.n());

  updateM_N() {
    this.m.set(this.m() + 1);
    this.n.set(this.n() + 1);
  }
}
