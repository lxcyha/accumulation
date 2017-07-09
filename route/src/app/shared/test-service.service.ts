import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class TestService {

  constructor(public logger: LoggerService) {
  }

  getStock(): Stock {
    return new Stock(4321)
  }

}


export class Stock {
  constructor(public id: number) {
  }
}
