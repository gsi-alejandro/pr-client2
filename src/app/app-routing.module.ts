import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MrZComponent } from './shared/components/mr-z/mr-z.component';

const appRoutes: Routes = [
    { path: '', component: MrZComponent}
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
