import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-dynamic-routing-with-api',
  styleUrl: './dynamic-routing-with-api.css',
  templateUrl: './dynamic-routing-with-api.html',
})
export class DynamicRoutingWithApi {
  // Dynamic routing with API
  // products    -> fetch the product list from the api
  // product/:id -> read the id from the url and fetch only that product

  // The app has only one <router-outlet> and it is in Module 19 (Routing),
  // so scroll to it when a link is clicked to see the page
  showOutlet() {
    document.querySelector('.outlet')?.scrollIntoView({ behavior: 'smooth' });
  }
}
