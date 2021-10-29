import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '@environments/environment';
import { GatewayService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private gatewayService: GatewayService,        
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const currentUser = this.gatewayService.currentUserValue;

        if (currentUser) {// logged in so return true
            return true;
        }

        var url = "/login";
        var routingOverride = environment.routingOverride;
        if (routingOverride) {
            var routingPage = routingOverride[window.location.hostname]
            if (routingPage) {
                var newUrl = routingPage["login"];
                if (newUrl) {
                    url = newUrl;
                }            
            }
        }        

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/' + url], { queryParams: { returnUrl: state.url } });
        return false;
    }
}