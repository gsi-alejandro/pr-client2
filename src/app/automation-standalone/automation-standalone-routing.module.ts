import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from '../shared/layouts/index';
import { AutomationStandaloneListComponent } from './list/automation-standalone-list.component';

const automationStandaloneRoutes: Routes = [
    {
        path: 'automation-standalone',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: AutomationStandaloneListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(automationStandaloneRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AutomationStandaloneRoutingModule { }
