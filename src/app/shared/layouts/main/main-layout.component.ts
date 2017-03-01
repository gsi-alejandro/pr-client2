import { Component } from '@angular/core';
import * as _ from 'lodash';
import { DragulaService } from 'ng2-dragula';

@Component({
    selector: 'main-layout',
    styleUrls: ['main-layout.component.scss'],
    templateUrl: 'main-layout.component.html'
})
export class MainLayoutComponent {
    constructor(private dragulaService: DragulaService) {
        dragulaService.setOptions('first-bag', {
            moves(el: any, container: any, handle: any) {
                return _.includes(handle.className, 'handle');
            }
        });

        dragulaService.drag.subscribe((value: any) => {
            this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe((value: any) => {
            this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe((value: any) => {
            this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe((value: any) => {
            this.onOut(value.slice(1));
        });
    }

    private onDrag(args: any) {
        let [e, el] = args;
        // do something
    }

    private onDrop(args: any) {
        let [e, el] = args;
        // do something
    }

    private onOver(args: any) {
        let [e, el, container] = args;
        // do something
    }

    private onOut(args: any) {
        let [e, el, container] = args;
        // do something
    }
}
