# 01 · Installation

Three things before writing any Angular.

**1. Node.js (LTS)** from https://nodejs.org. npm comes with it.

```bash
node -v
npm -v
```

**2. Angular CLI**, installed globally so the `ng` command works everywhere.

```bash
npm install -g @angular/cli
ng version
```

**3. VS Code** + the *Angular Language Service* extension (autocomplete and errors inside the HTML templates).

## Windows gotcha

PowerShell may refuse to run `ng` with *"running scripts is disabled on this system"*. Fix it once:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

My setup: Node 24.17 · npm 12 · Angular CLI 22.1.8
