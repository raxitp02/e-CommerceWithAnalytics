import { UserService } from './shared/services/user.service';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';

declare var gtag;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  guest: string;
    constructor(
        private auth: AuthService,
        private router: Router,
        private userService: UserService) {

          // const navEndEvents$ = this.router.events
          // .pipe(
          //   filter(event => event instanceof NavigationEnd)
          // );
          // navEndEvents$.subscribe((event: NavigationEnd) => {
          //   gtag('config', 'UA-140449082-1' ,{
          //     'page_path': event.urlAfterRedirects
          //   });
          // });


          const navEndEvent$ = router.events.pipe(
            filter(e => e instanceof NavigationEnd)
          );
          navEndEvent$.subscribe((e: NavigationEnd) => {
            gtag('config', 'UA-140449082-1', {'page_path': e.urlAfterRedirects});
          });
          auth.user$.subscribe(user => {
            if (user) {
                userService.save(user);
                const returnUrl = localStorage.getItem('returnUrl');
                if (returnUrl) {
                    localStorage.removeItem('returnUrl');
                    router.navigateByUrl(returnUrl);
                }
            }
            // gtag('config', 'UA-140449082-1', {
            //   'page_path': this.guest
            // });
        });
    }
}
