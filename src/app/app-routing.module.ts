import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MainLayoutComponent } from './shared/layouts/index';
import { MyThirdComponent } from './shared/components/index';

const appRoutes: Routes = [
    { path: '', component: MainLayoutComponent},
    { path: 'third', component: MyThirdComponent}
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
