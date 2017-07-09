import {Component, Injector, OnInit} from '@angular/core';
import {AnotherService} from '../shared/another.service';
import {Stock, TestService} from '../shared/test-service.service';

@Component({
  selector: 'app-stock2',
  templateUrl: './stock2.component.html',
  styleUrls: ['./stock2.component.css'],
  providers: [{provide: TestService, useClass: AnotherService}]
})
export class Stock2Component implements OnInit {


  private stock: Stock

  public testService: TestService
  constructor(public injector: Injector) {
    this.testService = injector.get(TestService);
    this.stock = new Stock(1)
  }

  ngOnInit() {
  }

}
