# 03 · Files & File Structure

What `ng new` gave me:

```
my-first-angular/
├── angular.json          # CLI config: how to build, serve, test
├── package.json          # dependencies + npm scripts (start, build, test)
├── tsconfig*.json        # TypeScript settings
├── public/               # static files copied as-is (favicon.ico)
├── node_modules/         # installed packages, never edit, never commit
└── src/
    ├── index.html        # the only HTML page, has <app-root></app-root>
    ├── main.ts           # entry point: bootstrapApplication(App, appConfig)
    ├── styles.css        # global styles
    └── app/
        ├── app.ts        # root component (class App)
        ├── app.html      # its template
        ├── app.css       # its styles, only for this component
        ├── app.spec.ts   # its unit test
        ├── app.config.ts # app-wide providers (router, error listener)
        └── app.routes.ts # routes, empty for now
```

## How the page shows up

`index.html` loads → `main.ts` starts `App` → Angular finds `<app-root>` (the `selector` of `App`) → renders `app.html` inside it.

Almost all my work happens in `src/app/`.

`node_modules/` is gone after a fresh clone. `npm install` brings it back.
