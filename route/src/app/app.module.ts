import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TestComponent} from './test/test.component';
import {Code404Component} from './code404/code404.component';
import {SelllistComponent} from './selllist/selllist.component';
import {BuylistComponent} from './buylist/buylist.component';
import {CyhComponent} from './cyh/cyh.component';
import {Cyh2Component} from './cyh2/cyh2.component';
import {PermissionGuard} from './guard/permission';
import {FocusGuard} from './guard/focus';
import {ResolveGuard} from './guard/resolve';
import {ContentComponent} from './content/content.component';
import {StockComponent} from './stock/stock.component';
import {TestService} from './shared/test-service.service';
import {Stock2Component} from './stock2/stock2.component';
import {LoggerService} from './shared/logger.service';
import {AnotherService} from './shared/another.service';
import {logger} from 'codelyzer/util/logger';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    Code404Component,
    SelllistComponent,
    BuylistComponent,
    CyhComponent,
    Cyh2Component,
    ContentComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
   providers: [PermissionGuard, FocusGuard, ResolveGuard, LoggerService, TestService/*, {
    // 使用工厂
    provide: TestService, useFactory: (loggerService: LoggerService, isDev: boolean) => {
      // console.log(isDev)
      // const logger = new LoggerService();
      const dev = Math.random() > 0.5
      if (dev) {
        return new TestService(logger);
      } else {
        return new AnotherService(logger);
      }
    },
    deps: [LoggerService, 'IS_DEV_ENV']
  }*/,
    {provide: 'IS_DEV_ENV', useValue: false}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
