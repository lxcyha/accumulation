// 是angular能跑在老版本浏览器中
import './polyfills'

// 关闭开发者模式
import { enableProdMode } from '@angular/core';
// 使用哪个模块启动项目
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 导入主模块
import { AppModule } from './app/app.module';
// 环境模块
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// 启动模块
platformBrowserDynamic().bootstrapModule(AppModule);
