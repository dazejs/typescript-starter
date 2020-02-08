
import {
  http, Controller, route
} from '@dazejs/framework';

@route()
export default class Hello extends Controller {
  @http.get()
  index(@http.query('name') name = 'Daze.js') {
    return this.render('hello', {
      name,
    });
  }
}