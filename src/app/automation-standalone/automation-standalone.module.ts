import { NgModule }       from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AutomationStandaloneRoutingModule } from './automation-standalone-routing.module';

import { AutomationStandaloneListComponent, AutomationStandaloneListFilterComponent } from './list/index';

@NgModule({
    imports: [
        AutomationStandaloneRoutingModule,
        SharedModule
    ],
    declarations: [
        AutomationStandaloneListComponent,
        AutomationStandaloneListFilterComponent
    ]
})
export class AutomationStandaloneModule {}
