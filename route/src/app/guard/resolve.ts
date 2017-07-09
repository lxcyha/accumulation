import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Stock} from '../test/test.component';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class ResolveGuard implements Resolve<Stock> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Stock | Observable<Stock> | Promise<Stock> {
    // const stock = new Stock(123456)
    // const stock =  new Stock(123456);
    // setTimeout(() => {
    //   stock.id = 654321
    // }, 1000)

    const promise: Promise<Stock> = new Promise((resolve) => {
      setTimeout(resolve, 3000, {id: 3000})
    })

    return promise
  }

  constructor(private  router: Router) {

  }


}
