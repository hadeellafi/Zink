import { Routes, provideRouter } from '@angular/router';

// TASK:01: add routes for bits and pieces. Each route refers to a list component that lists dummy data
// lazy load the routes
// TASK:02 add title using title strategy
 //
const routes: Routes = [

    {
        path: 'bits',
        loadComponent: () => import('./components/bit/list.component').then(
            (m) => m.BitListComponent
        )
    },

    {
        path: 'pieces',
        loadComponent: () => import('./components/piece/list.component').then
            ((m) => m.PieceListComponent)
    },

];

export const AppRoutingProvider = [provideRouter(routes)];