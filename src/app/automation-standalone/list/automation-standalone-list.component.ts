import { Component, OnInit } from '@angular/core';
import { MrSService } from '../../core/mr-s.service';

@Component({
    selector: 'automation-standalone-list',
    templateUrl: './automation-standalone-list.component.html'
})
export class AutomationStandaloneListComponent implements OnInit {
    public testFilter: string;

    constructor(private mrS: MrSService) {
        this.testFilter = 'Clotilde';
    }

    public ngOnInit(): void {
        $('[data-toggle="popover"]').popover();
    }
}
