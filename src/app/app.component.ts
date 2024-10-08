import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router, private zone: NgZone) {
    this.initializeApp();
  }

  initializeApp(){
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      this.zone.run(() => {
        const domain = 'ionic-deeplink-lab-1ccd0a.gitlab.io'
        const pathArray = event.url.split(domain)
        
        const appPath = pathArray.pop();

        if (appPath) {
          this.router.navigateByUrl(appPath)
        }
    })
    }
  )
  }
}
