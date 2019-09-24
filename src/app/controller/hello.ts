
import {
  Http, Controller
} from '@dazejs/framework'

@Controller()
export default class Hello {
  @Http.Get()
  index() {
    return this.render('hello', {
      name: 'Daze.js',
    });
  }
}