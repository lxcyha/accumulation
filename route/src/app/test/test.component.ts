import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private testId: number
  private testId2: number
  private testId3: number
  private isProduct: true
  private focus: boolean = false;
  private stock: Stock;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // 查询参数中a标签属性[queryParams]={id:2}
    // this.testId = this.routeInfo.snapshot.queryParams['id']
    // 路径中
    this.routeInfo.params.subscribe((params: Params) => {
      this.testId = params['id']
    })
    // 仅在初始化的时候产生。节约资源，但是初始化组建后快照就不变了。要确保本身不能路由到本身。
    // this.testId = this.routeInfo.snapshot.params['id']
    this.isProduct = this.routeInfo.snapshot.data[0] ? this.routeInfo.snapshot.data[0]['isProduct'] : 'asd'
    // 路径中的查询参数
    // this.testId3 = this.routeInfo.snapshot.queryParams['id']

    // 页面上输出stock id 会报错 因为数据还没进来
    // setTimeout(() => {
    //   this.stock.id = 100
    // }, 1000);

    this.routeInfo.data.subscribe((data: { stock: Stock }) => {
      this.stock = data.stock;
      // 直接传值。
      // this.stock = data.stock;
    })
  }

  isFocus() {
    return this.focus;
  }


}


export class Stock {
  constructor(public id: number) {
  }
}
