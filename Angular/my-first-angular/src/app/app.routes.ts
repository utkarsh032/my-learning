import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { About } from './components/pages/about/about';
import { Contact } from './components/pages/contact/contact';
import { Login } from './components/pages/login/login';
import { Profile } from './components/pages/profile/profile';
import { Users } from './components/pages/users/users';
import { UserDetails } from './components/pages/user-details/user-details';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

// Register every page component with a path
// Angular checks the routes from top to bottom and opens the first match
export const routes: Routes = [
  // Home page for the root path
  { path: '', component: Home },

  // Pass data with router - static data with the 'data' property
  {
    path: 'about',
    component: About,
    data: { heading: 'About Us', description: 'This data is passed from the route file' },
  },
  { path: 'contact', component: Contact },
  { path: 'login', component: Login },

  // Receives the data sent with query params (router link and button click)
  { path: 'profile', component: Profile },

  // Dynamic routing - ':id' and ':name' can be any value
  { path: 'users', component: Users },
  { path: 'user/:id/:name', component: UserDetails },

  // Wild card route - matches any path that is not in the list above
  // It must be the last route, otherwise it will match every page
  { path: '**', component: PageNotFound },
];
