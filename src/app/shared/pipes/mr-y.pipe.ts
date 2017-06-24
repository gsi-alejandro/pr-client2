import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mrY'})
export class MrYPipe implements PipeTransform {
    public transform(data: string, greeting: string): string {
        return `${greeting || 'Hi'}, ${data}`;
    }
}
