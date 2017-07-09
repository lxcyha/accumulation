import {Component, OnInit} from '@angular/core';
import {Stock, TestService} from '../shared/test-service.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stock: Stock;

  constructor(public stockService: TestService) {
    this.stock = stockService.getStock();
  }

  ngOnInit() {
  }

}
