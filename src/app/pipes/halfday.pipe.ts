import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'halfDayFormat',
    standalone:true,
   
})
export class halfDayFormat implements PipeTransform{
    transform(clock: any, ...args: any[]) {
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