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
| 08 | [Function Call on Button Click](notes/08-function-call-on-click.md) | `click-event`, `module3`            |
| 09 | Other Events                                                        | `other-events`, `module4`           |
| 10 | Data Types                                                          | `data-types`, `module5`             |
| 11 | Project 1 - Counter App                                             | `project1-cunter-app`, `module6`    |
| 12 | Get & Set Input Value                                               | `get-set-value`, `module7`          |
| 13 | Style Options                                                       | `style-options`, `module8`          |
| 14 | Control Flow - if / else                                            | `control-flow-statement`, `module9` |
| 15 | Switch Statement                                                    | `switch-statement`, `module10`      |
| 16 | For Loop                                                            | `for-loop`, `module11`              |
| 17 | Signals                                                             | `signals`, `module12`               |
| 18 | Effect                                                              | `effect`, `module13`                |
| 19 | For Loop Contextual Variables                                       | `for-loop-contextual-variables`, `module14` |
| 20 | Two Way Data Binding                                                | `data-binding`, `module15`          |
| 21 | Project 2 - Todo App                                                | `project2-todo-app`, `module16`     |
| 22 | Dynamic Styling                                                     | `dynamic-styling`, `module17`       |
| 23 | Directives                                                          | `directive`, `module18`             |
| 24 | Routing                                                             | `routing`, `module19`               |
| 25 | Forms - Reactive & Template Driven                                  | `forms`, `module20`                 |
| 26 | Services (in progress)                                              | `services`, `module21`              |

## Run it

```bash
cd Angular/my-first-angular
npm install
npm start          # ng serve → http://localhost:4200
```

## Angular Learning Path

✅ learned · 🔄 learning now · ⬜ next

**Basics**
- ✅ Installation
- ✅ Hello World
- ✅ Files & File Structure
- ✅ Angular CLI
- ✅ Component & Custom Component
- ✅ Interpolation
- ✅ Data Types

**Events & Input**
- ✅ Button Click Event
- ✅ Other Events
- ✅ Get & Set Input Value (`$event`, template reference variable)

**Styling**
- ✅ Style Options (component, global, inline)
- ✅ Dynamic Styling (style binding, class binding)

**Control Flow**
- ✅ `@if` / `@else`
- ✅ `@switch`
- ✅ `@for` with contextual variables (`$index`, `$first`, `$last`, ...)

**Signals**
- ✅ Signals (`set`, `update`, `computed`)
- ✅ Effect

**Data Binding & Directives**
- ✅ Two Way Data Binding (`ngModel`)
- ✅ Directives (`*ngIf`, `*ngFor`, `*ngSwitch`)

**Routing**
- ✅ Routes, active links, 404 page
- ✅ Route data & dynamic routes

**Forms**
- ✅ Reactive Forms (`FormControl`, `FormGroup`)
- ✅ Reactive Form Validation (required, min/max length, getters, error messages)
- ✅ Template Driven Forms (input, select, range)
- ✅ Template Driven Form Validation

**Projects**
- ✅ Project 1 - Counter App
- ✅ Project 2 - Todo App

**Up Next**
- 🔄 Services
- ⬜ Dependency Injection
- ⬜ Pass Data Parent → Child (`input`)
- ⬜ Pass Data Child → Parent (`output`)
- ⬜ Pipes & Custom Pipes
- ⬜ Custom Directives
- ⬜ Lifecycle Hooks
- ⬜ HTTP Client (API calls)
- ⬜ RxJS & Observables
- ⬜ Route Guards
- ⬜ Lazy Loading
- ⬜ Build & Deploy
