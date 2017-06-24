import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[mrX]'
})
export class MrXDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.color = 'indigo';
        // no empty
    }
}
