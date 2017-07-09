import {ActivatedRouteSnapshot, CanDeactivate} from '@angular/router';
import {TestComponent} from '../test/test.component';
export class FocusGuard implements CanDeactivate<TestComponent> {
  canDeactivate(component: TestComponent) {
    if (component.isFocus()) {
      return true
    } else {
      alert('deactive....')
      return false;
    }
  }

}
