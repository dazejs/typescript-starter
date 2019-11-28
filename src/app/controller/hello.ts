
import {
  Http, Controller, Route
} from '@dazejs/framework';

@Route()
export default class Hello extends Controller {
  @Http.Get()
  index(@Http.Query('name') name = 'Daze.js') {
    return this.render('hello', {
      name,
    });
  }
}