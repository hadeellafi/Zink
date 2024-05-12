import { HttpEventType, HttpRequest } from '@angular/common/http';
import { MonoTypeOperatorFunction, pipe, tap } from 'rxjs';

export const successOperator = (req: HttpRequest<any>): MonoTypeOperatorFunction<any> => {
  return pipe(
    tap({
      // don't log errors, just success
      next: (res) => {
        // notice the different types of "HttpEvent"
        if (res.type !== HttpEventType.Sent) {
       
          _debug(res.body, `${req.method} ${req.url}`, 'p');
        }
      },
    })
  );
};


/////////////////////////////////////
