
import {CanActivate} from '@angular/router';
export class PermissionGuard implements CanActivate {
  canActivate(): boolean {

    const hasPermission: boolean = Math.random() < 0.5;

    if (!hasPermission) {
      console.log('no permission')
    }
    return hasPermission;
  }
}
