import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-project2-todo-app',
  styleUrl: './project2-todo-app.css',
  templateUrl: './project2-todo-app.html',
})
export class Project2TodoApp {
  todos: string[] = [];

  saveTodo(val: string) {
    if (val.trim() === '') {
      return;
    }
    this.todos.push(val);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
