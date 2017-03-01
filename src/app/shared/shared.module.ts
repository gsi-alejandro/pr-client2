import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { MyThirdComponent } from './components/index';
import { MainHeaderComponent, MainLayoutComponent } from './layouts/index';

@NgModule({
    declarations: [
        MainLayoutComponent,
        MainHeaderComponent,
        MyThirdComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        MainLayoutComponent,
        MyThirdComponent
    ],
    imports: [CommonModule, FormsModule, DragulaModule, RouterModule]
})
export class SharedModule { }
