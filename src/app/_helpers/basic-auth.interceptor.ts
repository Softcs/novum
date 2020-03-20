import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GatewayService } from '@app/_services';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private gatewayService: GatewayService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const lastAuthBasic = this.gatewayService.lastAuthBasic;
        if (lastAuthBasic) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${lastAuthBasic}`
                }
            });
        }

        return next.handle(request);
    }
}