
const { Decorators, Controller } = require('@dazejs/framework')

@Decorators.Controller()
class Hello extends Controller {
  @Decorators.Get()
  index() {
    return this.render('hello')
  }
}

module.exports = Hello
