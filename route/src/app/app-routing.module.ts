import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
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

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'test', component: TestComponent, children: [
    {path: 'selllist', component: SelllistComponent},
    {path: 'buylist', component: BuylistComponent},
  ],
    // canActivate: [PermissionGuard],
    // canDeactivate: [FocusGuard],
    resolve: {
      // 提供的对象名
      stock: ResolveGuard,
      // promise: ResolveGuard
    }
  },
  {path: 'cyh', component: CyhComponent, outlet: 'cyh'},
  {path: 'cyh2', component: Cyh2Component, outlet: 'cyh'},
  // 放在上面这个路由后面 ，不然会把test/sellist当成是这个路由从而造成404
  {path: 'test/:id', component: TestComponent, data: [{isProduct: true}]},

  {path: '**', component: Code404Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
