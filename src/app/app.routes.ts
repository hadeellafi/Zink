import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// TASK:01: add routes for bits and pieces. Each route refers to a list component that lists dummy data
// lazy load the routes
// TASK:02 add title using title strategy
// TASK:03: add a homepage component and a route for it

const routes: Routes = [
    {

        path: '',
        loadChildren: ()=>import('./routes/pages.route').then(
            (m)=> m.PagesRoutes
        ),
        title: 'home'

    },
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

// TASK:03: make the title append " - Dome" to every title
export const AppRoutingProvider = [provideRouter(routes,
    // pass option to bind input to the route param
    withComponentInputBinding()
)];
