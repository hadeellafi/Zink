import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { successDebugOperator } from './debug';

export const mapData = (res: any) => {
  // check for res.body and res.body.data
  if (res instanceof HttpResponse) {
    // clone body and modify so that "data" is removed as a wrapper
    if (res.body && res.body.data) {
      res = res.clone({ body: res.body.data });
    }
  }

  return res;
};

// cant use Http in the name so use project name or prefix
export const DomeInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const url = environment.apiUrl + req.url;
  const adjustedReq = req.clone({ url: url });

  // TASK:04: the api returns data in "data" node, map result here.
  return next(adjustedReq).pipe(
    map((response) => mapData(response)),
    // TASK:06: refactor out of the interceptor. Create a custom Rxjs operator
    // TASK:06: create a console wrapper, move this into Javascript, and declare via typings

    successDebugOperator(req),
    catchError((err) => {
      // // when loggin an error via catchError, you need to rethrow, or return a new observable
      // //   console.error('Dome error:', err);
      // // this will log the error again.
      // // TASK:06 stop it from logging its own error using Angular ErrorHandler token
      return throwError(() => err);
    })
  );
};
