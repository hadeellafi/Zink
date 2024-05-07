import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dmcapitalize', standalone: true })
export class CapitalizePipe implements PipeTransform {


  transform(value: string): string {
    // capitalize first letter

    return value ? value.charAt(0).toUpperCase() + value.slice(1) : null;

    // TASK:05: move function to common functions file (/utils/common.ts)

  }
}

