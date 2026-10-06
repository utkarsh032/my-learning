import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  route = inject(ActivatedRoute);

  name = '';
  age = '';

  constructor() {
    // Read the data passed with query params (?name=...&age=...)
    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
      this.age = params['age'];
    });
  }
}
