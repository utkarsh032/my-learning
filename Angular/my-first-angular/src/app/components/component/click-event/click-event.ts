import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-click-event',
  styleUrl: './click-event.css',
  templateUrl: './click-event.html',
})
export class ClickEvent {
  count = 0;
  counter(operation: string) {
    if (operation === 'increase') {
      this.count++;
    } else if (operation === 'decrease') {
      if (this.count > 0) {
        this.count--;
      } else {
        this.showAlert();
      }
    }
  }

  showAlert() {
    alert('Value can not be negative');
  }
}
