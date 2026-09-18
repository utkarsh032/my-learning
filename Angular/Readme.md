# Angular

Learning Angular from scratch, one topic at a time. Short notes for each topic are in [notes/](notes/).

**Branch:** `angular21`

## How I work

One practice app: [my-first-angular/](my-first-angular/).

For every lesson I make a component in `src/app/components/module/` (`module1`, `module2`, ...), put the lesson inside it, import it in `app.ts` and add its tag to `app.html`. The home page shows all lessons one below another.

- `components/module/` → one per lesson
- `components/component/` → small reusable pieces used by the lessons
- `components/pages/` → full pages, for routing later

These "modules" are plain components named `moduleN`, not Angular `NgModule`s.

## Topics

| #  | Topic                                                               | Code                                |
| -- | ------------------------------------------------------------------- | ----------------------------------- |
| 01 | [Installation](notes/01-installation.md)                            | notes only                          |
| 02 | [Hello World](notes/02-hello-world.md)                              | `app.html`                          |
| 03 | [Files & File Structure](notes/03-file-structure.md)                | notes only                          |
| 04 | [Interpolation](notes/04-interpolation.md)                          | `app.ts`, `app.html`                |
| 05 | [Angular CLI](notes/05-angular-cli.md)                              | `pages/login`, `pipe/`, `services/` |
| 06 | [Component](notes/06-component.md)                                  | `module1`                           |
| 07 | [Custom Component](notes/07-custom-component.md)                    | `profile`, `module2`                |

## Run it

```bash
cd Angular/my-first-angular
npm install
npm start          # ng serve → http://localhost:4200
```
