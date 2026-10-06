import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Header } from '../header/header';

@Component({
  imports: [Header, RouterLink, RouterOutlet],
  selector: 'app-routing',
  styleUrl: './routing.css',
  templateUrl: './routing.html',
})
export class Routing {
  // Routing - open different pages (components) with different urls
  // without reloading the whole app, this is how a Single Page Application works

  // Router service is used to open a page from the ts file
  router = inject(Router);

  // Pass data with button click
  goToProfile() {
    this.router.navigate(['/profile'], { queryParams: { name: 'Rahul', age: 25 } });
  }

  // Dynamic route with button click
  openUser(id: number, name: string) {
    this.router.navigate(['/user', id, name]);
  }
}
