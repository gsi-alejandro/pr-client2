import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MainLayoutComponent } from './shared/layouts/index';

const appRoutes: Routes = [
    { path: '', component: MainLayoutComponent}
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
