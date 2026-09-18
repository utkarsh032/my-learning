# 02 · Hello World

Create the app and run it:

```bash
ng new my-first-angular     # asks: stylesheet → CSS, SSR → No
cd my-first-angular
ng serve                    # same as: npm start
```

Open http://localhost:4200. Save any file and the page reloads by itself.

- `ng serve -o` → also opens the browser
- `Ctrl + C` → stops the server

The starter page is a big placeholder. I cleared `src/app/app.html` and wrote my own:

```html
<h1>Welcome to My First Angular App</h1>
```

That's Hello World.
