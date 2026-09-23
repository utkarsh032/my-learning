import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-user-details',
  styleUrl: './user-details.css',
  templateUrl: './user-details.html',
})
export class UserDetails {
  route = inject(ActivatedRoute);

  id = '';
  name = '';

  constructor() {
    // Read the dynamic values from the url (user/:id/:name)
    // subscribe so the values update when only the param changes
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.name = params['name'];
    });
  }
}
