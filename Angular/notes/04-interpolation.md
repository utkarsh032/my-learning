# 04 · Interpolation

`{{ }}` prints a value from the component class into the HTML.

```ts
// app.ts
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
```

```html
<!-- app.html -->
<h2>{{ title() }}</h2>             <!-- signal → call it with () -->
<p>{{ intro }}</p>                 <!-- property -->
<h3>{{ getName() }}</h3>           <!-- method -->
<p>{{ addTwoNumber(5, 10) }}</p>   <!-- 15 -->
```

- Works with properties, methods and small expressions: `{{ 2 + 3 }}`, `{{ name.toUpperCase() }}`
- No `this.` in the template
- Not allowed inside: `=` (assignment), `new`, `++`, `;`
- A method in `{{ }}` runs again on every change check, so keep it small
