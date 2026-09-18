import { Component } from '@angular/core';

@Component({
  selector: 'app-other-events',
  imports: [],
  templateUrl: './other-events.html',
  styleUrl: './other-events.css',
})
export class OtherEvents {
  inputValue = '';

  event = {
    type: '',
    value: '',
  };

  // Input Event
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    this.inputValue = input.value;

    this.event = {
      type: event.type,
      value: input.value,
    };
  }

  // Click Event
  onClick() {
    this.event = {
      type: 'click',
      value: 'Button clicked',
    };
  }

  // Mouse Enter Event
  onMouseEnter() {
    this.event = {
      type: 'mouseenter',
      value: 'Mouse entered',
    };
  }

  // Keyup Event
  onKeyUp(event: KeyboardEvent) {
    this.event = {
      type: event.type,
      value: event.key,
    };
  }
}
