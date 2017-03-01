import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MainLayoutComponent } from './shared/layouts/index';
import { MyThirdComponent } from './shared/components/index';
// import { HomePageComponent } from './home/home-page/index';

const appRoutes: Routes = [
    { path: '', component: MainLayoutComponent},
    { path: 'third', component: MyThirdComponent}
    // { path: 'home', component: HomePageComponent}
    ];
@NgModule({
    exports : [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutingModule {}
