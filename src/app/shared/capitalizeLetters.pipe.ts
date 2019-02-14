import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizeFL' })
export class capitalizeFirstLetterPipe implements PipeTransform {
    transform(value: any): any {
        return value.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');

    }
}