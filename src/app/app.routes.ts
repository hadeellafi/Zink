import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { BitListComponent } from './components/bit/list.component';

// TASK:01: add routes for bits and pieces. Each route refers to a list component that lists dummy data
// lazy load the routes
const routes: Routes = [
    // { path: '/', component: AppComponent },
    { path: 'bits', component: BitListComponent },
    { path: 'pieces', component: AppComponent },

];

export const AppRoutingProvider = [provideRouter(routes)];
