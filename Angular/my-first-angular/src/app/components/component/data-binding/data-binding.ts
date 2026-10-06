import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  // Two way binding - component value goes to the input and input value comes back to the component
  name = '';
  city = 'Delhi';

  clearName() {
    this.name = '';
  }
}
