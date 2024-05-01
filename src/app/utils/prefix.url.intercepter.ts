import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { environment } from "../../environments/environment";


export const PrefixInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    const url = environment.apiUrl + req.url;
    const adjustedReq = req.clone({ url: url });

    // TASK:04: the api returns data in "data" node, map result here.

    return next(adjustedReq);
};