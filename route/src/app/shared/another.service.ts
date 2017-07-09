import { Injectable } from '@angular/core';
import {Stock, TestService} from './test-service.service';
import {LoggerService} from './logger.service';

@Injectable()
export class AnotherService implements TestService {
  getStock(): Stock {
    return new Stock(987);
  }

  constructor(public logger: LoggerService) { }

}
