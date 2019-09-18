
import {
  Controller, Http, Route
} from '@dazejs/framework'

@Route()
export class Hello extends Controller {
  @Http.Get()
  index() {
    return this.render('hello', {
      name: 'Daze.js',
    });
  }
}