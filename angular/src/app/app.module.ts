import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StarComponent } from './test/star/star.component';
import { PugComponent } from './pug/pug.component';

@NgModule({
  // 只能声明组件, 指令, 管道
  declarations: [
    AppComponent,
    TestComponent,
    StarComponent,
    PugComponent
  ],
  // 申明依赖的其他模块
  imports: [
    // 浏览器模块(必选依赖)
    BrowserModule,
    // 表单处理模块
    FormsModule,
    // Http服务模块
    HttpModule
  ],
  // 申明模块中提供了什么服务(只能申明服务)
  providers: [],
  // 申明模块主组件
  bootstrap: [AppComponent]
})
export class AppModule { }
