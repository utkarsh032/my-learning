# my-learning

Everything I am learning, in one place — notes, exercises and practice projects, one folder per topic.

Full projects live in their own repositories. This repo is the learning trail behind them.

## Topics

| Topic                            | What's inside                                          | Branch          | Status  |
| -------------------------------- | ------------------------------------------------------ | --------------- | ------- |
| [javascript](javascript/)        | Language fundamentals, course notes, small exercises   | `js`            | Ongoing |
| [dsa](dsa/)                      | Data structures, algorithms, solved problems           | `dsa`           | Ongoing |
| [react](react/)                  | Components, hooks, state management, testing           | `react`         | Planned |
| [sql](sql/)                      | SQL, data modelling, warehousing                       | `sql`           | Ongoing |
| [system-design](system-design/)  | Scaling, architecture patterns, case studies           | `sd`            | Planned |

## How this repo is organised

- One folder per topic, lowercase with dashes: `javascript/`, `system-design/`.
- Inside a topic, folders are numbered in the order I learn them: `01-basics/`, `02-async/`.
- Every folder has a `README.md` saying what it covers and where the material came from.

## How I work in it

Each topic has its own branch. I work on the branch, then merge into `main` when a piece is done.

```bash
git checkout js          # work on JavaScript
# ...commit as you go...
git checkout main
git merge js             # bring it into main
git push
```

Keep merging into `main`. GitHub only counts commits on the default branch towards the
contribution graph, so work that never reaches `main` does not show up there.

## Starting a new topic

```bash
cp -r _template go            # 1. copy the template, name it after the topic
git checkout -b go            # 2. branch with the same name
# 3. fill in go/README.md, add a row to the table above
```

## Resources I use

These are other people's collections, kept as links rather than copies:

- [sudheerj/javascript-interview-questions](https://github.com/sudheerj/javascript-interview-questions)
- [sudheerj/reactjs-interview-questions](https://github.com/sudheerj/reactjs-interview-questions)
- [ankushchimnani/DSA-Must-Do-Questions](https://github.com/ankushchimnani/DSA-Must-Do-Questions)
