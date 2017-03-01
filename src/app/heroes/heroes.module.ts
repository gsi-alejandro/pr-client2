import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroListComponent }    from './hero-list.component';
import { HeroCenterComponent }    from './hero-center.component';
import { HeroCenterHomeComponent }    from './hero-center-home.component';
import { HeroDetailsComponent }    from './hero-details.component';
import { HeroFunnyComponent }    from './hero-funny.component';

import { HeroRoutingModule } from './heroes-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroListComponent,
        HeroCenterComponent,
        HeroDetailsComponent,
        HeroCenterHomeComponent,
        HeroFunnyComponent
    ]
})
export class HeroesModule {}
