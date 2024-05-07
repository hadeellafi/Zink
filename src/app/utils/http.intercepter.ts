import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { map } from "rxjs";
import { environment } from "../../environments/environment";

const mapData = (res: any) => {
    // check for res.body and res.body.data
    if (res instanceof HttpResponse) {
        // clone body and modify so that "data" is removed as a wrapper
        if (res.body && res.body.data) {
            res = res.clone({ body: res.body.data });
        }
    }

    return res;
}

// cant use Http in the name so use project name or prefix
export const DomeInterceptorFn: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    const url = environment.apiUrl + req.url;
    const adjustedReq = req.clone({ url: url });

    // TASK:04: the api returns data in "data" node, map result here.
    return next(adjustedReq).pipe(
        map(response => mapData(response))
    );
};

