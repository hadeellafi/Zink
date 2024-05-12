import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class OurErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    _debug(error, `error`, 'e');
  }
}

