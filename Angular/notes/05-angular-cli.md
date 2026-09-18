# 05 · Angular CLI (Command Line Interface)

`ng` does everything: create, run, generate, build, test.

| Command                       | What it does                          |
| ----------------------------- | ------------------------------------- |
| `ng new app-name`             | new project                           |
| `ng serve`                    | dev server on http://localhost:4200   |
| `ng generate component name`  | new component (short: `ng g c name`)  |
| `ng g s name`                 | new service                           |
| `ng g p name`                 | new pipe                              |
| `ng build`                    | production build into `dist/`         |
| `ng test`                     | unit tests (Vitest)                   |
| `ng version`                  | Angular, CLI and Node versions        |
| `ng g --help`                 | everything `generate` can make        |

## What I generated for practice

```bash
ng g c components/pages/login
ng g p pipe/auth/login-pipe          # CLI adds "Pipe" → class LoginPipePipe
ng g s services/auth/login-service
```

- The path goes under `src/app/`, folders are created for me
- A component = 4 files: `.ts`, `.html`, `.css`, `.spec.ts`
- `--skip-tests` → no `.spec.ts`
- `--dry-run` → only shows what it would create
