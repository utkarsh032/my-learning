# 06 · Component

A component is one piece of the page: a TypeScript class + its HTML + its CSS.

```bash
ng g c components/module/module1
```

```ts
@Component({
  imports: [],                    // other components used in my HTML
  selector: 'app-module1',        // my tag → <app-module1></app-module1>
  styleUrl: './module1.css',      // CSS only for this component
  templateUrl: './module1.html',  // HTML in its own file
})
export class Module1 {}
```

- `templateUrl` → HTML in a separate file
- `template` → HTML written right there in backticks (tried it in `app.ts`, left it commented)
- CSS from `styleUrl` stays inside the component, it doesn't leak to others

## Using it

Import the class, then write the selector as a tag:

```ts
// app.ts
import { Module1 } from './components/module/module1/module1';

@Component({
  imports: [RouterOutlet, Module1],
  ...
})
```

```html
<!-- app.html -->
<app-module1></app-module1>
```

Forget the import → build error *'app-module1' is not a known element*.
