import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { BitListComponent } from './components/bit/list.component';
import { PieceListComponent } from './components/piece/list.component';

// TASK:01: add routes for bits and pieces. Each route refers to a list component that lists dummy data
// lazy load the routes
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