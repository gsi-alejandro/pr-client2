import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent }    from './hero-list.component';
import { HeroCenterComponent }    from './hero-center.component';
import { HeroCenterHomeComponent }    from './hero-center-home.component';
import { HeroDetailsComponent }    from './hero-details.component';
import { HeroFunnyComponent }    from './hero-funny.component';
import { MainLayoutComponent } from '../shared/layouts/index';

const heroesRoutes: Routes = [
    {
        path: 'heroes',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: HeroListComponent,
                children: [
                    {
                        path: 'details',
                        component: HeroDetailsComponent
                    },
                    {
                        path: '',
                        component: HeroCenterHomeComponent
                    }
                ]
            },
            {
                path: 'funny',
                component: HeroFunnyComponent
            }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HeroRoutingModule { }
