import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dmclock', standalone: true })
export class ClockPipe implements PipeTransform {


    transform(clock: string): string {
        // take 24 hour clock and convert to 12 hour clock, 12:00 PM
        // TASK:05 take care of null valuas
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

