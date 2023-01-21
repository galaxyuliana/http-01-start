import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, pipe } from "rxjs";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // req: request object
        // next: function which will forward the request
        // const modifiedRequest = req.clone({url: 'new URL'});
        const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
        return next.handle(modifiedRequest);
    }
}