import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';

  cc;

  ev(conf) {
    console.log(conf.conf)
    this.cc = conf.conf
    setTimeout(() => {
      conf.conf.name = 2;
    }, 1000)
    console.log(conf.conf)
  }
}
