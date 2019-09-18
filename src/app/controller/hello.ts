
import {
  Controller, Http,
} from '@dazejs/framework'

@Controller()
export class Hello {
  @Http.Get()
  index() {
    return this.render('hello', {
      name: 'Daze.js',
    });
  }
}
