const interfaceBuilder = require('../index');
const defineGetterOnce = require('../../define_var');

module.exports = interfaceBuilder.createUi('jspec/global', {
  onDefineVariable(suite, varName, context) {
    defineGetterOnce(context, varName, { getterPrefix: '$' });
  }
});
