import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  // ActivatedRoute gives the information of the current route
  route = inject(ActivatedRoute);

  heading = '';
  description = '';

  constructor() {
    // Pass data with router - static data is set in the route file with 'data' property
    this.route.data.subscribe((data) => {
      this.heading = data['heading'];
      this.description = data['description'];
    });
  }
}
