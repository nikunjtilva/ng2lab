import {provideRouter, RouterConfig} from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { DashboardComponent } from './dashboard.component';
const routes: RouterConfig = [
    {
        path: 'heroes',
        component: HeroesComponent
    }, {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];