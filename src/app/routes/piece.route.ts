import { Routes } from '@angular/router';
import { PieceListComponent } from '../components/piece/list.component';
import { PieceDetailsComponent } from '../components/piece/details.component';
// **gulpimport**

export const PieceRoutes: Routes = [
  // TASK:02: add a route for piece details. The route refers to a details component that shows dummy data
  {
    path: '',
    component: PieceListComponent,
  },
  {
    path: ':id',
    component: PieceDetailsComponent,
  },
];
