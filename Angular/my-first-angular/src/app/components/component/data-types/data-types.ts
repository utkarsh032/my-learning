import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [JsonPipe],
  selector: 'app-data-types',
  styleUrl: './data-types.css',
  templateUrl: './data-types.html',
})
export class DataTypes {
  name: string = 'Utkarsh';
  age: number = 25;
  isActive: boolean = true;
  skills: string[] = ['Angular', 'TS'];

  updateData() {
    this.name = 'Utkarsh Kumar';
    this.age = 26;
    this.isActive = false;
    this.skills.push('JavaScript');
  }
}
