import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // req: request object
        // next: function which will forward the request
        console.log('Request is on its way');
        // const modifiedRequest = req.clone({url: 'new URL'});
        const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
        return next.handle(modifiedRequest);
    }
}