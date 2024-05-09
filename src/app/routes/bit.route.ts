import { Routes } from '@angular/router';
import { BitListComponent } from '../components/bit/list.component';
import { BitDetailsComponent } from '../components/bit/details.component';
// **gulpimport**

export const BitRoutes: Routes = [
  // TASK:02: add a route for bit details. The route refers to a details component that shows dummy data
  {
    path: '',
    component: BitListComponent,
  },
  {
    path: ':id',
    component: BitDetailsComponent,
  },
];
