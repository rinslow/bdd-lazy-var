const interfaceBuilder = require('../index');
const defineGetterOnce = require('../../define_var');

module.exports = interfaceBuilder.createUi('jspec/getter', {
  onDefineVariable(suite, varName, context) {
    defineGetterOnce(context, varName, { defineOn: context.get });
  }
});
