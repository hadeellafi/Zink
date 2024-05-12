import { ErrorHandler, Injectable } from '@angular/core';
import { _debug } from './debug';

@Injectable()
export class OurErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    _debug(error, `error status: ${error.statusText}`, 'e');
  }
}
