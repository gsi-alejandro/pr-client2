import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { DragulaModule } from 'ng2-dragula';

import { LayoutHeaderComponent, LayoutSidebarComponent, MainLayoutComponent } from './layouts/index';
import { MrXDirective } from './directives/mr-x.directive';
import { MrYPipe } from './pipes/mr-y.pipe';
import { MrZComponent } from './components/mr-z/mr-z.component';

@NgModule({
    declarations: [
        MainLayoutComponent,
        LayoutHeaderComponent,
        LayoutSidebarComponent,
        MrXDirective,
        MrYPipe,
        MrZComponent
    ],
    exports: [
        MrZComponent,
        MrXDirective,
        MrYPipe,
        CommonModule,
        FormsModule
    ],
    imports: [CommonModule, RouterModule, DragulaModule]
})
export class SharedModule { }
