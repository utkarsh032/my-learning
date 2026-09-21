import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-for-loop-contextual-variables',
  styleUrl: './for-loop-contextual-variables.css',
  templateUrl: './for-loop-contextual-variables.html',
})
export class ForLoopContextualVariables {
  users = [
    { id: 1, name: 'Utkarsh', city: 'Delhi' },
    { id: 2, name: 'Manish', city: 'Noida' },
    { id: 3, name: 'Raj', city: 'Patna' },
  ];

  fruits = ['Apple', 'Mango', 'Banana'];

  addFruits() {
    this.fruits = ['Apple', 'Mango', 'Banana'];
  }

  clearFruits() {
    this.fruits = [];
  }
}
