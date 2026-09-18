# 07 · Custom Component

Make my own component once and use it in many places.

```bash
ng g c components/component/profile
```

Used the same `<app-profile>` inside two parents, `module1` and `module2`. Each parent imports it:

```ts
// module2.ts
import { Profile } from '../../component/profile/profile';

@Component({
  imports: [Profile],
  selector: 'app-module2',
  ...
})
export class Module2 {}
```

```html
<!-- module2.html -->
<div class="content">
  <h1>Module 2</h1>
  <app-profile></app-profile>
</div>
```

Each `<app-profile>` tag is a separate copy with its own data.

## My folders

- `components/component/` → small reusable pieces (profile, click-event)
- `components/module/` → one per lesson, uses the pieces, shown in `app.html`
- `components/pages/` → full pages (login), for routing later
