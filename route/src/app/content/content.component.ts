import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title = ''

  constructor(public router: Router) {
    router.events
      .filter(event => {
        return event instanceof NavigationEnd
      }).subscribe((event: NavigationEnd) => {
        if (event.url === '/') {
          console.log('home')
          this.title = 'home'
        } else if (event.url.startsWith('/test')) {
          console.log('test')
          this.title = 'test'
        }
      })
  }

  ngOnInit() {
  }

}
