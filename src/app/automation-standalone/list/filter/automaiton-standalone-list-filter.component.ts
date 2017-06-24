import { Component } from '@angular/core';

@Component({
    selector: 'automaiton-standalone-list-filter',
    templateUrl: './automaiton-standalone-list-filter.component.html'
})
export class AutomationStandaloneListFilterComponent {
    public sequenceName: string;
    public automationName: string;
    public automationNameOperator: string;

    constructor() {
        this.reset();
    }

    public filter(): void {
        // no empty
    }

    public reset(): void {
        this.sequenceName = '';
        this.automationNameOperator = 'contain';
        this.automationName = '';
    }
}
