import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// TASK:01: add routes for bits and pieces. Each route refers to a list component that lists dummy data
// lazy load the routes
// TASK:02 add title using title strategy
//
const routes: Routes = [
    // {

    //     path: '/',
    //     component: HomeComponent,
    //     pathMatch: 'full',
    //     title: 'home'

    // },
    {
        title: 'Bits',
        path: 'bits',
        loadChildren: () => import('./routes/bit.route').then(
            (m) => m.BitRoutes
        )
    },
    {
        title: 'Pieces',
        path: 'pieces',
        loadChildren: () => import('./routes/piece.route').then
            ((m) => m.PieceRoutes)
    },

];

export const AppRoutingProvider = [provideRouter(routes)];
