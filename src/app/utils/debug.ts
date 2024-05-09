import { environment } from '../../environments/environment';

export function _debug(o, message, type) {
  if (!environment.production) {
    switch (type) {
      case 'e': // error
        console.log('%c ' + message, 'background: red; color: #fff', o);
        break;
      case 't': // trace error
        console.trace('%c ' + message, 'background: red; color: #fff', o);
        break;
      case 'p': // http response
        console.info('%c ' + message, 'background: #222; color: #bada55', o);
        break;
      case 'w': // warning
        console.warn('%c ' + message, 'background: #4f560f; color: #e6ff07', o);
        break;
      case 'gtm': // gtm events, special
        console.info(
          '%cGTM: ' + message,
          'background: #03dbfc; color: #000',
          o
        );
        break;
      default:
        console.info(
          '%c ' + message,
          'background: #d9d9d9; color: #a82868; font-weight: bold;',
          o
        );
    }
  }
  // set _indebug to true in your environment file, could be anywhere
}
export function _attn(o, message) {
  if (window && (window['_indebug'] = environment.production)) {
    // use debug to filter in console window
    console.debug(
      '%c ' + message,
      'background: orange; font-weight: bold; color: black;',
      o
    );
  }
}
