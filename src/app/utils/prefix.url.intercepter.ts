import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { map } from "rxjs";
import { environment } from "../../environments/environment";


export const PrefixInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    const url = environment.apiUrl + req.url;
    const adjustedReq = req.clone({ url: url });

    // TASK:04: the api returns data in "data" node, map result here.
    return next(adjustedReq).pipe(
        map((event: HttpResponse<any>) => {
            if (event instanceof HttpResponse) {
                const responseData = event.body.data;

                const mappedResponse = event.clone({ body: responseData });
                return mappedResponse;

            }
            else
                return event;
        })
    );
}




