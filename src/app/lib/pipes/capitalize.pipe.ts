import { Pipe, PipeTransform } from '@angular/core';
import { capitalize } from '../../utils/common';

@Pipe({ name: 'dmcapitalize', standalone: true })
export class CapitalizePipe implements PipeTransform {


  transform(value: string): string {
    // capitalize first letter

    return capitalize(value);

    // TASK:05: move function to common functions file (/utils/common.ts)

  }
}

