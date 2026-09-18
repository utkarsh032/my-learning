# 08 · Function Call on Button Click

Event binding: `(event)="method()"`. Round brackets = listen to an event and call a method from the class.

```html
<!-- click-event.html -->
<button (click)="counter('decrease')">-</button>
<span> {{ count }} </span>
<button (click)="counter('increase')">+</button>
```

```ts
// click-event.ts
export class ClickEvent {
  count = 0;
  counter(operation: string) {
    if (operation === 'increase') {
      this.count++;
    } else if (operation === 'decrease') {
      if (this.count > 0) {
        this.count--;
      } else {
        this.showAlert();
      }
    }
  }

  showAlert() {
    alert('Value can not be negative');
  }
}
```

- Arguments can be passed: `counter('increase')`
- One method calls another with `this.showAlert()`
- `count` changes → `{{ count }}` on screen updates by itself
- `(click)="counter"` without `()` does nothing, the method has to be called

Shown on the page through `module3`.
