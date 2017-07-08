import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  users: Array<User>;
  stars: Array<string>;
  className: string;
  constructor() {
  }

  ngOnInit() {
    this.users = [
      new User('name', 1),
      new User('name2', 2)
    ];
    this.stars = [];
    // 3.4颗星
    let rating = 3.4;
    rating = Math.floor(rating * 2) / 2;
    for (let i = rating; i > 0; i--) {

      if (i === 0.5) {
        this.stars.push('half');
      } else if (i === 0) {
        this.stars.push('null');
      } else {
        this.stars.push('full');
      }
    }
  }

}

export class User {
  constructor(public name: string, public age: number) {
  }
}
