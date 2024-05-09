import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dmclock', standalone: true })
export class ClockPipe implements PipeTransform {
  transform(clock: string): string {
    // TASK:05 take care of null valuas
    if (!clock) {
      return '';
    }
    const [hour, minute] = clock.split(':');
    let _h = parseInt(hour, 10);
    let period = 'AM';
    if (_h > 11) {
      _h -= 12;
      period = 'PM';
    }
    if (_h === 0) {
      _h = 12;
    }

    return `${_h}:${minute} ${period}`;
  }
}
