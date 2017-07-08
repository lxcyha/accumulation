import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pug',
  templateUrl: './pug.component.pug',
  styleUrls: ['./pug.component.css']
})
export class PugComponent implements OnInit {

  @Output()
  ev: EventEmitter<any>;
  conf;

  constructor() {
    this.ev = new EventEmitter<any>();
  }

  ngOnInit() {
    this.conf = {};
    this.conf.name = 0;
    this.ev.emit({
      conf: this.conf
    })

    setTimeout(() => {
      this.conf.name = 3;
    }, 3000)
  }

}
